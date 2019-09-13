using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using aspnetcore_data.Models;

namespace aspnetcore_data.Controllers
{
    public class BlogsController : Controller
    {
        private readonly BloggingContext _context;

        public BlogsController(BloggingContext context)
        {
  
            _context = context;
        }

        [Route("api/Blogs")]
        [HttpGet]
        public JsonResult GetProducts([DataSourceRequest] DataSourceRequest request)
        {
            var result = Json(this._context.Blog.ToDataSourceResult(request));
            return result;
        }

        [Route("api/Blogs/create")]
        [HttpPost]
        public JsonResult AddBlog([FromBody] Blog request)
        {

            this._context.Add(request);
            this._context.SaveChanges();
            var result = Json(this._context.Blog.Local);
            return result;

        }

        [Route("api/Blogs/{id}/delete")]
        [HttpDelete]
        public JsonResult DeleteBlog([FromBody] Blog request)
        {
            this._context.Remove(request);
            this._context.SaveChanges();
            var result = Json(this._context.Blog.Local);
            return result;
        }

        [Route("api/Blogs/{id}/edit")]
        [HttpPut]

        public JsonResult Editblog([FromBody] Blog request)
        {

            var existingblog = this._context.Blog.Where(b => b.BlogId == request.BlogId).FirstOrDefault<Blog>();

            if (existingblog != null)
            {
                existingblog.Url = request.Url;
            }
            this._context.SaveChanges();

            var result = Json(this._context.Blog.Local);
            return result;
        }
    }
}
