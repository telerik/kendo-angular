using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;

namespace upload.Controllers
{
    [ApiController]
    public class StreamingController : Controller
    {
        private readonly IWebHostEnvironment _webHostingEnvironment;
        private readonly ILogger<StreamingController> _logger;

        public StreamingController(IWebHostEnvironment webHostingEnvironment, ILogger<StreamingController> logger)
        {
            _webHostingEnvironment = webHostingEnvironment;
            _logger = logger;
        }

        [Route("upload")]
        [HttpPost]
        public async Task<IActionResult> OnPostUpload(List<IFormFile> files)
        {
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    var fileContent = ContentDispositionHeaderValue.Parse(formFile.ContentDisposition);

                    // Some browsers send file names with full path.
                    // We are only interested in the file name.
                    var fileName = Path.GetFileName(fileContent.FileName.ToString().Trim('"'));

                    // Create upload directory if it doesn't exist
                    var uploadDirectory = Path.Combine(_webHostingEnvironment.WebRootPath, "Upload_Directory");
                    if (!Directory.Exists(uploadDirectory))
                    {
                        Directory.CreateDirectory(uploadDirectory);
                    }

                    var physicalPath = Path.Combine(uploadDirectory, fileName);
                    _logger.LogInformation("Uploading file: {FileName} to {Path}", fileName, physicalPath);
                    
                    using (var fileStream = new FileStream(physicalPath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(fileStream);
                    }
                    
                    _logger.LogInformation("File uploaded successfully: {FileName}", fileName);
                }
            }

            // Return OK to signify success
            return Ok();
        }
        [Route("/remove")]
        [HttpPost]
        public ActionResult Async_Remove(string[] fileNames)
        {
            if (fileNames != null)
            {
                foreach (var fullName in fileNames)
                {
                    var fileName = Path.GetFileName(fullName);
                    var physicalPath = Path.Combine(_webHostingEnvironment.WebRootPath, "Upload_Directory", fileName);

                    // TODO: Verify user permissions

                    if (System.IO.File.Exists(physicalPath))
                    {
                        _logger.LogInformation("Deleting file: {FileName} from {Path}", fileName, physicalPath);
                        System.IO.File.Delete(physicalPath);
                        _logger.LogInformation("File deleted successfully: {FileName}", fileName);
                    }
                    else
                    {
                        _logger.LogWarning("File not found: {FileName}", fileName);
                    }
                }
            }

            // Return OK to signify success
            return Ok();
        }
    }
}