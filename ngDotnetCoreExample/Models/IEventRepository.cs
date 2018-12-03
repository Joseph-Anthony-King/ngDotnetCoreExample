using System.Linq;
using ngDotnetCoreExample.Domain;

namespace ngDotnetCoreExample.Models {

    public interface IEventRepository {

        IQueryable<Event> Events { get; }
        void SaveEvent(Event appEvent, out bool wasSaveSuccessful);
        Event DeleteEvent(int Id, out bool wasDeletionSuccessful);
    }
}
