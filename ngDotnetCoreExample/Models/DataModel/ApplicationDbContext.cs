using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ngDotnetCoreExample.Domain;

namespace ngDotnetCoreExample.Models.DataModel {

    public class ApplicationDbContext : DbContext {

        private IConfiguration configuration;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IConfiguration iConfigService) : base(options) {

            configuration = iConfigService;
        }

        public DbSet<CalendarItem> CalendarItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {

            optionsBuilder.UseNpgsql(configuration.GetValue<string>("ConnectionStrings:DatabaseConnection"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) 
            => modelBuilder.ForNpgsqlUseIdentityColumns();
    }
}
