document.addEventListener('DOMContentLoaded', function () {
    const aneisContainer = document.getElementById("aneisContainer");

    function carregarAneis() {
        fetch('https://localhost:7147/Aneis/Exibir')
            .then(async response => {
                if (response.ok) {
                    return response.json();
                } else {
                    const errorMessage = await response.text();
                    throw new Error(errorMessage);
                }
            })
            .then(aneis => {
                aneisContainer.innerHTML = aneis.map((anel, index) => `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <div class="card mx-auto" style="width: 18rem;">
                            <div class="card-body">
                                <p class="card-text"><strong>Nome:</strong> ${anel.nome}</p>
                                <p class="card-text"><strong>Poder:</strong> ${anel.poder}</p>
                                <p class="card-text"><strong>Portador:</strong> ${anel.portador}</p>
                                <p class="card-text"><strong>Forjado Por:</strong> ${anel.forjadoPor}</p>
                                <p class="card-text"><strong>Imagem:</strong> ${anel.imagem}</p>
                                <button class="btn btn-warning btn-sm" onclick="atualizarAnel(${anel.id}, '${anel.nome}', '${anel.poder}', '${anel.portador}', '${anel.forjadoPor}')">Modificar</button>
                                <button class="btn btn-danger btn-sm" onclick="deletarAnel(${anel.id})">Destruir</button>
                            </div>
                        </div>
                    </div>
                `).join('');
            })
            .catch(error => {
                console.error('Erro ao carregar anéis:', error);
                alert(`Erro ao carregar anéis: ${error.message}`);
            });
    }

    window.atualizarAnel = function (id, nome, poder, portador, forjadoPor) {
        document.getElementById('id').value = id;
        document.getElementById('nome').value = nome;
        document.getElementById('poder').value = poder;
        document.getElementById('portador').value = portador;
        document.getElementById('forjadoPor').value = forjadoPor;
        new bootstrap.Modal(document.getElementById('modalAtualizar')).show();
    };

    window.deletarAnel = function (id) {
        if (confirm('Tem certeza que deseja deletar este anel?')) {
            fetch(`https://localhost:7147/Aneis/Destruir/${id}`, { method: 'DELETE' })
                .then(async response => {
                    if (response.ok) {
                        alert('Anel deletado com sucesso!');
                        carregarAneis();
                    } else {
                        const errorMessage = await response.text();
                        throw new Error(errorMessage);
                    }
                })
                .catch(error => {
                    console.error('Erro ao deletar anel:', error);
                    alert(`Erro ao deletar anel: ${error.message}`);
                });
        }
    };

    document.getElementById('formAtualizarAnel').addEventListener('submit', function (event) {
        event.preventDefault();

        const id = document.getElementById('id').value;
        const nome = document.getElementById('nome').value;
        const poder = document.getElementById('poder').value;
        const portador = document.getElementById('portador').value;
        const forjadoPor = document.getElementById('forjadoPor').value;

        const anelData = { id, nome, poder, portador, forjadoPor, imagem: 'default.jpg' };

        fetch(`https://localhost:7147/Aneis/Modificar/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(anelData)
        })
            .then(async response => {
                if (response.ok) {
                    alert('Anel atualizado com sucesso!');
                    window.location.reload();
                } else {
                    const errorMessage = await response.text();
                    throw new Error(errorMessage);
                }
            })
            .catch(error => {
                console.error('Erro ao atualizar anel:', error);
                alert(`Erro ao atualizar anel: ${error.message}`);
            });
    });

    carregarAneis();
});