using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleNotes.DomainModel
{
    public class DomainNote: BaseDomainEntity
    {
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual string IsUrgent { get; set; }
        public virtual DateTime? StartDate { get; set; }
        public virtual DateTime? EndDate { get; set; }
        public virtual string Color { get; set; }
    }
}
