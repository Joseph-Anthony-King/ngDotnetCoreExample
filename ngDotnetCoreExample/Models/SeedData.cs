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

            using (var servicesScope = app.ApplicationServices.CreateScope()) {

                ApplicationDbContext context = servicesScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                context.Database.Migrate();

                if (!context.AppEvents.Any()) {

                    context.AppEvents.AddRange(
                        new AppEvent {
                            AppEventTitle = "My First Event",
                            AppEventDescription = "My first event.",
                            AppEventStartDate = DateTime.ParseExact("2018-12-10 20:00:00 PM", "yyyy-MM-dd HH:mm:ss tt", null),
                            AppEventEndDate = DateTime.ParseExact("2018-12-10 23:00:00 PM", "yyyy-MM-dd HH:mm:ss tt", null)
                        },
                        new AppEvent {
                            AppEventTitle = "My Second Event",
                            AppEventDescription = "My second event.",
                            AppEventStartDate = DateTime.ParseExact("2018-12-24 11:00:00 AM", "yyyy-MM-dd HH:mm:ss tt", null),
                            AppEventEndDate = DateTime.ParseExact("2018-12-24 13:00:00 PM", "yyyy-MM-dd HH:mm:ss tt", null)
                        },
                        new AppEvent {
                            AppEventTitle = "My Third Event",
                            AppEventDescription = "My third event.",
                            AppEventStartDate = DateTime.ParseExact("2018-12-25 17:00:00 PM", "yyyy-MM-dd HH:mm:ss tt", null),
                            AppEventEndDate = DateTime.ParseExact("2018-12-25 23:00:00 PM", "yyyy-MM-dd HH:mm:ss tt", null)
                        });

                    context.SaveChanges();
                }
            }
        }
    }
}
