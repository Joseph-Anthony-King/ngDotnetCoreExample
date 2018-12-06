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
                            AppEventStartDate = "2018-12-10T20:00:00.000Z",
                            AppEventEndDate = "2018-12-10T23:30:00.000Z"
                        },
                        new AppEvent {
                            AppEventTitle = "My Second Event",
                            AppEventDescription = "My second event.",
                            AppEventStartDate = "2018-12-24T11:00:00.000Z",
                            AppEventEndDate = "2018-12-24T15:00:00.000Z"
                        },
                        new AppEvent {
                            AppEventTitle = "My Third Event",
                            AppEventDescription = "My third event.",
                            AppEventStartDate = "2018-12-25T17:00:00.000Z",
                            AppEventEndDate = "2018-12-25T21:00:00.000Z"
                        });

                    context.SaveChanges();
                }
            }
        }
    }
}
