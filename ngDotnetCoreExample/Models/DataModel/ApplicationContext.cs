using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ngDotnetCoreExample.Domain;

namespace ngDotnetCoreExample.Models.DataModel {

    public class ApplicationDbContext : DbContext {

        private IConfiguration configuration;

        public ApplicationDbContext(IConfiguration iConfigService) {

            configuration = iConfigService;
        }

        public DbSet<Event> Events { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {

            optionsBuilder.UseNpgsql(configuration.GetValue<string>("ConnectionStrings:DatabaseConnection"));
        }
    }
}
