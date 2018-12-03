using System;
using System.ComponentModel.DataAnnotations;

namespace ngDotnetCoreExample.Domain {

    public class AppEvent {

        [Key]
        public int AppEventId { get; set; }

        [Required(ErrorMessage = "Please enter an event title.")]
        public string AppEventTitle { get; set; }

        public string AppEventDescription { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime AppEventStartDate { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime AppEventEndDate { get; set; }
    }
}
