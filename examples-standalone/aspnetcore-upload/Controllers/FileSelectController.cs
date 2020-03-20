using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace aspnetcore_upload.Controllers
{
    public class FileSelectController : Controller
    {
        [Route("api/Submit")]
        [HttpPost]
        public ActionResult OnSubmit(List<IFormFile> form)
        {

            // Return an empty string to signify success
            return Content("");
        }
    }
}