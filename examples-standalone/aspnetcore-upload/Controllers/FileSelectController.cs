using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Hosting;
using System.Threading.Tasks;

namespace aspnetcore_upload.Controllers
{
    public class FileSelectController : Controller
    {

        private readonly IWebHostEnvironment _webHhostingEnvironment;

        public FileSelectController(IWebHostEnvironment webHostingEnvironment)
        {
            _webHhostingEnvironment = webHostingEnvironment;
        }

        [Route("api/Submit")]
        [HttpPost]
        public async Task<IActionResult> OnSubmit(List<IFormFile> files)
        {
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {

                    var fileContent = ContentDispositionHeaderValue.Parse(formFile.ContentDisposition);

                    // Some browsers send file names with full path.
                    // We are only interested in the file name.
                    var fileName = Path.GetFileName(fileContent.FileName.ToString().Trim('"'));
                    var physicalPath = Path.Combine(_webHhostingEnvironment.WebRootPath, "Upload_Directory", fileName);

                    using (var fileStream = new FileStream(physicalPath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(fileStream);
                    }
                }
            }

            // Return an empty string to signify success
            return Content("");
        }
    }
}