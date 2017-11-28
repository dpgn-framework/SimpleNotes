using NHibernate.Mapping.ByCode.Conformist;
using SimpleNotes.DomainModel;
using NHibernate.Mapping.ByCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Mapping
{
    public class NoteMap : ClassMapping<DomainNote>
    {
        public NoteMap()
        {
            Table("Note");

            Id(x => x.Id);
            Property(x => x.EntityCreationDate, m => m.Type(new NHibernate.Type.UtcDateTimeType()));
            Property(x => x.EntityCreatedById);
            Property(x => x.EntityModificationDate, m => m.Type(new NHibernate.Type.UtcDateTimeType()));
            Property(x => x.EntityModifiedById);
            Property(x => x.Archived);

            Version(x => x.Version, mapper =>
            {
                mapper.Column("Version");
                mapper.Generated(VersionGeneration.Never);
                mapper.UnsavedValue(0);
                mapper.Type(new NHibernate.Type.Int32Type());
                mapper.Access(Accessor.Property);
            });

            Property(x => x.Name, m => m.Length(255));
            Property(x => x.Description, m => m.Length(4000));
            Property(x => x.StartDate, m => m.Type(new NHibernate.Type.UtcDateTimeType()));
            Property(x => x.EndDate, m => m.Type(new NHibernate.Type.UtcDateTimeType()));
            Property(x => x.IsUrgent);
            Property(x => x.Color, m => m.Length(15));
        }
    }
}