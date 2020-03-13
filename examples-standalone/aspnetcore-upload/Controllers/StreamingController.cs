using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace upload.Controllers
{

	public class StreamingController : Controller
	{

		private readonly IWebHostEnvironment _webHhostingEnvironment;

		public StreamingController(IWebHostEnvironment webHostingEnvironment)
		{
			_webHhostingEnvironment = webHostingEnvironment;
		}

		[Route("api/Upload")]
		[HttpPost]
		public async Task<IActionResult> OnPostUploadAsync(List<IFormFile> files)
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

		[Route("api/Remove")]
		[HttpPost]
		public ActionResult Async_Remove(string[] fileNames)
		{
			if (fileNames != null)
			{
				foreach (var fullName in fileNames)
				{
					var fileName = Path.GetFileName(fullName);
					var physicalPath = Path.Combine(_webHhostingEnvironment.WebRootPath, "Upload_Directory", fileName);

					// TODO: Verify user permissions

					if (System.IO.File.Exists(physicalPath))
					{
						System.IO.File.Delete(physicalPath);
					}
				}
			}

			// Return an empty string to signify success
			return Content("");
		}

		[DataContract]
		public class ChunkMetaData
		{
			[DataMember(Name = "uploadUid")]
			public string UploadUid { get; set; }
			[DataMember(Name = "fileName")]
			public string FileName { get; set; }
			[DataMember(Name = "contentType")]
			public string ContentType { get; set; }
			[DataMember(Name = "chunkIndex")]
			public long ChunkIndex { get; set; }
			[DataMember(Name = "totalChunks")]
			public long TotalChunks { get; set; }
			[DataMember(Name = "totalFileSize")]
			public long TotalFileSize { get; set; }
		}

        public void AppendToFile(string fullPath, Stream content)
		{
			try
			{
				using (FileStream stream = new FileStream(fullPath, FileMode.Append, FileAccess.Write, FileShare.ReadWrite))
				{
					using (content)
					{
						content.CopyTo(stream);
					}
				}
			}
			catch (IOException ex)
			{
				throw ex;
			}
		}

		public ActionResult Save(List<IFormFile> files)
		{
			if (files != null)
			{
				foreach (var file in files)
				{
					// Some browsers send file names with full path. This needs to be stripped.
					//var fileName = Path.GetFileName(file.FileName);
					//var physicalPath = Path.Combine(_webHhostingEnvironment.WebRootPath, "Upload_Directory", fileName);

					// The files are not actually saved in this demo
					// file.SaveAs(physicalPath);
				}
			}

			// Return an empty string to signify success
			return Content("");
		}

		public class FileResult
		{
			public bool uploaded { get; set; }
			public string fileUid { get; set; }
		}

		[Route("api/Chunk/Upload")]
		[HttpPost]
		public ActionResult ChunkSave(List<IFormFile> files, string metaData)
		{
			if (metaData == null)
			{
				return Save(files);
			}

			MemoryStream ms = new MemoryStream(Encoding.UTF8.GetBytes(metaData));
			var serializer = new DataContractJsonSerializer(typeof(ChunkMetaData));
			ChunkMetaData somemetaData = serializer.ReadObject(ms) as ChunkMetaData;
			string path = String.Empty;
			// The Name of the Upload component is "files"
			if (files != null)
			{
				foreach (var file in files)
				{
					//path = Path.Combine(_webHhostingEnvironment.WebRootPath, "Upload_Directory", somemetaData.FileName);

					//AppendToFile(path, file.InputStream);
				}
			}

			FileResult fileBlob = new FileResult();
			fileBlob.uploaded = somemetaData.TotalChunks - 1 <= somemetaData.ChunkIndex;
			fileBlob.fileUid = somemetaData.UploadUid;

			return Json(fileBlob);
		}
	}
}
