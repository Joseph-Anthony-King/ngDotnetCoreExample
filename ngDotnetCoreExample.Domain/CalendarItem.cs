using System;
using System.ComponentModel.DataAnnotations;

namespace ngDotnetCoreExample.Domain {

    public class CalendarItem {

        [Key]
        public int CalendarItemId { get; set; }

        [Required(ErrorMessage = "Please enter an event title.")]
        public string CalendarItemTitle { get; set; }

        public string CalendarItemDescription { get; set; }

        [Required(ErrorMessage = "Please enter an event start date.")]
        public string CalendarItemStartDate { get; set; }

        [Required(ErrorMessage = "Please enter an event end date.")]
        public string CalendarItemEndDate { get; set; }
    }
}
