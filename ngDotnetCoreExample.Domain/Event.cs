using System;
using System.ComponentModel.DataAnnotations;

namespace ngDotnetCoreExample.Domain {

    public class Event {

        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter an event title.")]
        public string Title { get; set; }

        public string Description { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime StartDate { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime EndDate { get; set; }
    }
}
