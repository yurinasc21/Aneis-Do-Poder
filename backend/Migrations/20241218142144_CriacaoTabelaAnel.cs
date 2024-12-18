using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ForjandoAneis.Migrations
{
    /// <inheritdoc />
    public partial class CriacaoTabelaAnel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Aneis",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Poder = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Portador = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ForjadoPor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Imagem = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aneis", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Aneis");
        }
    }
}
