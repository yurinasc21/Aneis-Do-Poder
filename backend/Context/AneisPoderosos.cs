using Microsoft.EntityFrameworkCore;
using ForjandoAneis.Entities;

namespace ForjandoAneis.Context
{
    public class AneisPoderososContext : DbContext
    {
        public AneisPoderososContext(DbContextOptions<AneisPoderososContext> options) : base(options)
        {

        }

        public DbSet<Anel> Aneis { get; set; }
    }
}

