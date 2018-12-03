using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ngDotnetCoreExample.Models.DataModel;
using ngDotnetCoreExample.Domain;

namespace ngDotnetCoreExample.Models {

    public class EventRepository : IEventRepository {

        private ApplicationDbContext context;

        public EventRepository(ApplicationDbContext cntxt) => context = cntxt;

        public IQueryable<Event> Events => context.Events;

        public Event DeleteEvent(int Id, out bool wasDeletionSuccessful) {

            wasDeletionSuccessful = false;
            Event dbEntry = context.Events.FirstOrDefault(ev => ev.Id == Id);

            if (dbEntry != null) {
                try {
                    context.Events.Remove(dbEntry);
                    context.SaveChanges();
                    wasDeletionSuccessful = true;
                } catch {
                    wasDeletionSuccessful = false;
                }
            }

            return dbEntry;
        }

        public void SaveEvent(Event appEvent, out bool wasSaveSuccessful) {

            wasSaveSuccessful = false;

            if (appEvent.Id == 0) {
                context.Events.Add(appEvent);
                wasSaveSuccessful = true;
            } else {
                Event dbEntry = context.Events.FirstOrDefault(ev => ev.Id == appEvent.Id);

                if (dbEntry != null) {
                    dbEntry.Title = appEvent.Title;
                    dbEntry.Description = appEvent.Description;
                    dbEntry.StartDate = appEvent.StartDate;
                    dbEntry.EndDate = appEvent.EndDate;
                    wasSaveSuccessful = true;
                }
            }

            context.SaveChanges();
        }
    }
}
