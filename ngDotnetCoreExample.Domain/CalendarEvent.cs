using System;
using System.ComponentModel.DataAnnotations;

namespace ngDotnetCoreExample.Domain {

    public class CalendarEvent {

        [Key]
        public int CalendarEventId { get; set; }

        [Required(ErrorMessage = "Please enter an event title.")]
        public string CalendarEventTitle { get; set; }

        public string CalendarEventDescription { get; set; }

        [Required(ErrorMessage = "Please enter an event start date.")]
        public string CalendarEventStartDate { get; set; }

        [Required(ErrorMessage = "Please enter an event end date.")]
        public string CalendarEventEndDate { get; set; }
    }
}
