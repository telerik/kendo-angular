using Microsoft.AspNetCore.Mvc;

namespace aspnetcore_upload.Controllers
{
    public interface IForm
    {
        string username { get; set; }
        string avatar { get; set; }
    }
    public class FileSelectController : Controller
    {
        [Route("api/Submit/Form")]
        [HttpPost]
        public ActionResult OnSubmit(IForm form)
        {
            // Return an empty string to signify success
            return Content("");
        }
    }
}