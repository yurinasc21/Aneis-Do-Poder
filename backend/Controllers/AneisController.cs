using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ForjandoAneis.Context;
using ForjandoAneis.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AneisController : ControllerBase
    {
        private readonly AneisPoderososContext _context;

        public AneisController(AneisPoderososContext context)
        {
            _context = context;
        }

        [HttpPost("Forjar")]
        public IActionResult CriarAnel(Anel anel)
        {
            if (!ValidarAnel(anel))
            {
                return BadRequest($"O portador {anel.Portador}, excedeu a quantidade de anéis estabelecida para ele.");
            }

            _context.Aneis.Add(anel);
            _context.SaveChanges();
            return CreatedAtAction(nameof(ObterTodos), new { id = anel.Id }, anel);
        }

        [HttpGet("Exibir")]
        public IActionResult ObterTodos()
        {
            var aneis = _context.Aneis.ToList();
            return Ok(aneis);
        }

        [HttpPut("Modificar/{id}")]
        public IActionResult Atualizar(int id, Anel anel)
        {
            var anelBanco = _context.Aneis.Find(id);

            if (anelBanco == null)
                return NotFound();

            if (!ValidarAnel(anel))
                return BadRequest("Limite de anéis para este portador foi excedido.");

            anelBanco.Nome = anel.Nome;
            anelBanco.Poder = anel.Poder;
            anelBanco.Portador = anel.Portador;
            anelBanco.ForjadoPor = anel.ForjadoPor;
            anelBanco.Imagem = anel.Imagem;

            _context.SaveChanges();

            return Ok(anelBanco);

        }

        [HttpDelete("Destruir/{id}")]
        public IActionResult Deletar(int id)
        {
            var anelBanco = _context.Aneis.Find(id);

            if (anelBanco == null)
                return NotFound();

            _context.Aneis.Remove(anelBanco);
            _context.SaveChanges();

            return NoContent();
        }

        private bool ValidarAnel(Anel anel)
        {
            var quantidadeAtual = _context.Aneis.Count(a => a.Portador.ToLower() == anel.Portador.ToLower());

            if (anel.Portador.Equals("Elfo", StringComparison.OrdinalIgnoreCase) && quantidadeAtual >= 3)
                return false;

            if (anel.Portador.Equals("Anão", StringComparison.OrdinalIgnoreCase) && quantidadeAtual >= 7)
                return false;

            if (anel.Portador.Equals("Homem", StringComparison.OrdinalIgnoreCase) && quantidadeAtual >= 9)
                return false;

            if (anel.Portador.Equals("Sauron", StringComparison.OrdinalIgnoreCase) && quantidadeAtual >= 1)
                return false;

            return true;
        }
    }
}