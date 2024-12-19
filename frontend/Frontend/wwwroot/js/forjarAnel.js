document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("formCriarAnel");
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value;
            const poder = document.getElementById("poder").value;
            const portador = document.getElementById("portador").value;
            const forjadoPor = document.getElementById("forjadoPor").value;
            const imagem = document.getElementById("imagem").value || "default.jpg";

            const anelData = {
                nome: nome,
                poder: poder,
                portador: portador,
                forjadoPor: forjadoPor,
                imagem: imagem
            };

            fetch('https://localhost:7147/Aneis/Forjar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(anelData)
            })
            .then(async response => {
                if (response.ok) {
                    return response.json();
                } else {
                    const errorMessage = await response.text();
                    throw new Error(errorMessage);
                }
            })
            .then(data => {
                console.log('Resposta da API:', data);
                alert('Anel criado com sucesso!');
                window.location.href = '/ExibirAneis';
            })
            .catch(error => {
                console.error('Erro ao criar anel:', error);
                alert(`Erro ao criar anel: ${error.message}`);
            });
        });
});