using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using ngDotnetCoreExample.Models.DataModel;
using ngDotnetCoreExample.Domain;

namespace ngDotnetCoreExample.Models {

    public class SeedData {

        public static void EnsurePopulated(IApplicationBuilder app) {

            ApplicationDbContext context = app.ApplicationServices.GetRequiredService<ApplicationDbContext>();
            context.Database.Migrate();

            if (!context.Events.Any()) {

                context.Events.AddRange(
                    new Event {
                        Title = "My First Event",
                        Description = "My first event.",
                        StartDate = DateTime.ParseExact("2018-12-10 20:00:00 PM", "yyyy-MM-dd HH:mm:ss tt", null),
                        EndDate = DateTime.ParseExact("2018-12-10 23:00:00 PM", "yyyy-MM-dd HH:mm:ss tt", null)
                    },
                    new Event {
                        Title = "My Second Event",
                        Description = "My Second event.",
                        StartDate = DateTime.ParseExact("2018-12-24 11:00:00 AM", "yyyy-MM-dd HH:mm:ss tt", null),
                        EndDate = DateTime.ParseExact("2018-12-24 13:00:00 PM", "yyyy-MM-dd HH:mm:ss tt", null)
                    },
                    new Event {
                        Title = "My Third Event",
                        Description = "My third event.",
                        StartDate = DateTime.ParseExact("2018-12-25 17:00:00 PM", "yyyy-MM-dd HH:mm:ss tt", null),
                        EndDate = DateTime.ParseExact("2018-12-25 23:00:00 PM", "yyyy-MM-dd HH:mm:ss tt", null)
                    });

                context.SaveChanges();
            }
        }
    }
}
