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

                if (!context.CalendarItems.Any()) {

                    context.CalendarItems.AddRange(
                        new CalendarItem {
                            CalendarItemTitle = "My First Event",
                            CalendarItemDescription = "My first event.",
                            CalendarItemStartDate = "2018-12-10T20:00:00.000Z",
                            CalendarItemEndDate = "2018-12-10T23:30:00.000Z"
                        },
                        new CalendarItem {
                            CalendarItemTitle = "My Second Event",
                            CalendarItemDescription = "My second event.",
                            CalendarItemStartDate = "2018-12-24T11:00:00.000Z",
                            CalendarItemEndDate = "2018-12-24T15:00:00.000Z"
                        },
                        new CalendarItem {
                            CalendarItemTitle = "My Third Event",
                            CalendarItemDescription = "My third event.",
                            CalendarItemStartDate = "2018-12-25T17:00:00.000Z",
                            CalendarItemEndDate = "2018-12-25T21:00:00.000Z"
                        });

                    context.SaveChanges();
                }
            }
        }
    }
}
