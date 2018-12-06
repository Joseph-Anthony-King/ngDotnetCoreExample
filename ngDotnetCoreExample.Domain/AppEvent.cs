using System;
using System.ComponentModel.DataAnnotations;

namespace ngDotnetCoreExample.Domain {

    public class AppEvent {

        [Key]
        public int AppEventId { get; set; }

        [Required(ErrorMessage = "Please enter an event title.")]
        public string AppEventTitle { get; set; }

        public string AppEventDescription { get; set; }

        [Required(ErrorMessage = "Please enter an event start date.")]
        public string AppEventStartDate { get; set; }

        [Required(ErrorMessage = "Please enter an event end date.")]
        public string AppEventEndDate { get; set; }
    }
}
