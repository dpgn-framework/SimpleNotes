using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleNotes.DataModel
{
    public class Note: BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string IsUrgent { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Color { get; set; }
    }
}
