using DPGN.Framework;
using NHibernate;
using NHibernate.Criterion;
using SimpleNotes.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace WebApi.Controllers
{
    //[Route("api/[controller]")]
    public class NoteController : ApiController
    {
        #region Sample
        [HttpGet]
        [Route("api/note/count")]
        public IHttpActionResult GetListNotes(string searchText = null)
        {
            long count = 0;

            SessionManager.Proc<BaseService>(Guid.Empty, (svc, scope) => {
                ICriterion[] fitlers = null;
                if (!String.IsNullOrWhiteSpace(searchText))
                    fitlers = new ICriterion[] { Restrictions.Like("Name", "%" + searchText + "%") };

                count = svc.GetCount<Note>(scope, fitlers);
            });

            return Ok(count);
        }

        [HttpGet]
        [Route("api/note/find")]
        public IHttpActionResult GetListNotes(string searchText = null, int startIndex = 0, int pageSize = 100)
        {
            List<Note> results = null;

            SessionManager.Proc<BaseService>(Guid.Empty, (svc, scope) => {
                ICriterion[] fitlers = null;
                if (!String.IsNullOrWhiteSpace(searchText))
                {
                    fitlers = new ICriterion[] { Restrictions.Like("Name", "%" + searchText + "%") };

                    // Not yet Supported with Alias --> pending
                    //fitlers = new ICriterion[] { Expression.Sql("Name like ?", "%" + searchText + "%", NHibernateUtil.String) };
                }

                results = svc.Find<Note>(scope, startIndex, pageSize, fitlers);
            });
            
            return Ok<List<Note>>(results);
        }

        [HttpGet]
        [Route("api/note/object")]
        public object GetObject()
        {
            object obj = new { Id = 123, Message = "AA BB CC"};

            SessionManager.Proc<BaseService>(Guid.Empty, (svc, scope) => {
                obj = svc.FindFirst<Note>(scope, null);
            });
            

            return Json(obj);
        }


        // GET: api/values
        [HttpGet]
        [Route("api/note")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        //[HttpGet("{id}")]
        [HttpGet]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        //[HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        //[HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        #endregion
    }
}
