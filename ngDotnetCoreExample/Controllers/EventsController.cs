using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ngDotnetCoreExample.Domain;
using ngDotnetCoreExample.Models.DataModel;

namespace ngDotnetCoreExample.Controllers {

    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase {

        private readonly ApplicationDbContext _context;

        public EventsController(ApplicationDbContext context) {

            _context = context;
        }

        // GET: api/Events
        [HttpGet]
        public IEnumerable<CalendarEvent> GetEvents() {
            
            return _context.CalendarEvents.OrderBy(evt => evt.CalendarEventStartDate);
        }

        // GET: api/Events/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEvent([FromRoute] int id) {

            if (!ModelState.IsValid) {

                return BadRequest(ModelState);
            }

            var @event = await _context.CalendarEvents.FindAsync(id);

            if (@event == null) {

                return NotFound();
            }

            return Ok(@event);
        }

        // PUT: api/Events/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvent([FromRoute] int id, [FromBody] CalendarEvent @event)
        {
            if (!ModelState.IsValid) {

                return BadRequest(ModelState);
            }

            if (id != @event.CalendarEventId) {

                return BadRequest();
            }

            _context.Entry(@event).State = EntityState.Modified;

            try {

                await _context.SaveChangesAsync();

            } catch (DbUpdateConcurrencyException) {

                if (!EventExists(id)) {

                    return NotFound();

                } else {

                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Events
        [HttpPost]
        public async Task<IActionResult> PostEvent([FromBody] CalendarEvent @event) {

            if (!ModelState.IsValid) {

                return BadRequest(ModelState);
            }

            _context.CalendarEvents.Add(@event);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEvent", new { id = @event.CalendarEventId }, @event);
        }

        // DELETE: api/Events/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent([FromRoute] int id) {

            if (!ModelState.IsValid) {

                return BadRequest(ModelState);
            }

            var @event = await _context.CalendarEvents.FindAsync(id);

            if (@event == null) {

                return NotFound();
            }

            _context.CalendarEvents.Remove(@event);
            await _context.SaveChangesAsync();

            return Ok(@event);
        }

        private bool EventExists(int id) {

            return _context.CalendarEvents.Any(e => e.CalendarEventId == id);
        }
    }
}