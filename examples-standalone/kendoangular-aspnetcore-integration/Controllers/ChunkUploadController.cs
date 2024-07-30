using Microsoft.AspNetCore.Mvc;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;

namespace aspnetcore_upload.Controllers
{
    public class ChunkUploadController : Controller
    {
        private readonly IWebHostEnvironment _webHostingEnvironment;
        private readonly ILogger<ChunkUploadController> _logger;

        public ChunkUploadController(IWebHostEnvironment webHostingEnvironment, ILogger<ChunkUploadController> logger)
        {
            _webHostingEnvironment = webHostingEnvironment;
            _logger = logger;
        }

        public ActionResult Save(List<IFormFile> files)
        {
            if (files != null)
            {
                foreach (var file in files)
                {
                    _logger.LogDebug($"Save(): Processing {file.FileName}.");

                    // Some browsers send file names with full path. This needs to be stripped.
                    var fileName = Path.GetFileName(file.FileName);
                    // As an example, we are writing the file to the wwwroot directory. You should modify this to suit your needs.
                    // var physicalPath = Path.Combine(_webHostingEnvironment.WebRootPath, "Upload_Directory", fileName);
                    
                    // using(var uploadedFile = file.OpenReadStream())
                    // using (var stream = new FileStream(physicalPath, FileMode.Create, FileAccess.Write, FileShare.ReadWrite))
                    // {
                    //     uploadedFile.CopyTo(stream);
                    // }
                }
            }

            // Return Ok to signify success
            return Ok();
        }
        
        [Route("chunk/upload")]
        [HttpPost]
        public ActionResult ChunkSave(List<IFormFile> files, string metaData)
        {
            // This is not a chunk upload, pass it off to the normal Save method
            if (metaData == null)
            {
                return Save(files);
            }

            using var ms = new MemoryStream(Encoding.UTF8.GetBytes(metaData));
            var serializer = new DataContractJsonSerializer(typeof(ChunkMetaData)); // 'ChunkMetaData' class is defined below
            var metadata = serializer.ReadObject(ms) as ChunkMetaData;

            // The Name of the Upload component is "files"
            if (files != null)
            {
                foreach (var file in files)
                {
                    // ********************************************************************** //
                    // ** Scenario 1: Concurrent=false - Supports Sequential Chunk Upload  ** //
                    // ********************************************************************** //

                    // If the upload is in sequential order, you can just append the chunks to what has already been written to disk
                    //var path = Path.Combine(_root, somemetaData.FileName);
                    //using (var uploadedChunkStream = file.OpenReadStream())
                    //using(var stream = new FileStream(path, FileMode.Append, FileAccess.Write, FileShare.ReadWrite))
                    //{
                    //    uploadedChunkStream.CopyTo(stream);
                    //}


                    // ********************************************************************* //
                    // ** Scenario 2: Concurrent=true - Supports Concurrent Chunk Upload  ** //
                    // ********************************************************************* //

                    // To support concurrent chunk upload, you need a system to keep track of each chunk and assemble them in the correct
                    // order when all the chunks have been uploaded. The ChunkMetaData object gives you all the information you need.

                    // Step 1. Save the chunk
                    // As an example, we are writing the file to the wwwroot directory. You should modify this to suit your needs.
                    // var tempChunkFilePath = Path.Combine(_webHostingEnvironment.WebRootPath, "Upload_Directory", $"{metadata.FileName}_{metadata.ChunkIndex}");
                    // using (var uploadedChunkStream = file.OpenReadStream())
                    // using (var chunkFileStream = System.IO.File.OpenWrite(tempChunkFilePath))
                    // {
                    //     uploadedChunkStream.CopyTo(chunkFileStream);

                    //     _logger.LogDebug($"ChunkSave(): Saved {file.FileName} to Chunk #{metadata.ChunkIndex + 1} of {metadata.TotalChunks}.");
                    // }

                    // Step 2. Lets check to see if we have all the chunks
                    // If we do, then we can assemble them all into a final destination file
                    // CombineChunks(metadata);
                }
            }

            // Return Ok to signify success
            return Ok();
        }
        
        [Route("Chunk/Remove")]
        [HttpPost]
        public ActionResult Async_Remove(string[] fileNames)
        {
            if (fileNames != null)
            {
                foreach (var fullName in fileNames)
                {
                    var fileName = Path.GetFileName(fullName);
                    // As an example, we are deleting the file from the wwwroot directory. You should modify this to suit your needs.
                    // var physicalPath = Path.Combine(_webHostingEnvironment.WebRootPath, "Upload_Directory", fileName);

                    // TODO: Verify user permissions

                    // if (System.IO.File.Exists(physicalPath))
                    // {
                    //     System.IO.File.Delete(physicalPath);
                    // }
                }
            }

            // Return Ok to signify success
            return Ok();
        }
        

        private void CombineChunks(ChunkMetaData metadata)
        {
            // ------------------- //
            // PHASE 1 - VERIFYING
            // ------------------- //

            for (var chunkIndex = 0; chunkIndex <= metadata.TotalChunks - 1; chunkIndex++)
            {   // As an example, we are checking the existence of the file in the wwwroot directory. You should modify this to suit your needs.
                // var chunkFilePath = Path.Combine(_webHostingEnvironment.WebRootPath, "Upload_Directory", $"{metadata.FileName}_{chunkIndex}");

                // If any of these chunk files are missing, then we know we're not done, break and exit.
                // if (!System.IO.File.Exists(chunkFilePath))
                // {
                //     // Exit the method entirely
                //     return;
                // }
            }
            
            // ------------------- //
            // PHASE 2 - COMBINING
            // ------------------- //

            _logger.LogDebug($"Combining all chunks for {metadata.FileName}.");

            // Create a single file to combine everything
            // As an example, we are writing the file to the wwwroot directory. You should modify this to suit your needs.
            // var tempFinalFilePath = Path.Combine(_webHostingEnvironment.WebRootPath, "Upload_Directory", $"tmp_{metadata.FileName}");
            
            // Open a file stream
            // using (var destStream = System.IO.File.Create(tempFinalFilePath))
            {
                // iterate over each chunk, in the order of the ChunkIndex
                for (var chunkIndex = 0; chunkIndex <= metadata.TotalChunks - 1; chunkIndex++)
                {
                    // var chunkFileName = Path.Combine(_webHostingEnvironment.WebRootPath, "Upload_Directory", $"{metadata.FileName}_{chunkIndex}");

                    // _logger.LogDebug($"Appending ({chunkIndex + 1} of {metadata.TotalChunks}): {chunkFileName}.");

                    // Open the chunk's filestream
                    // using var sourceStream = System.IO.File.OpenRead(chunkFileName);

                    // Copy the chunk to the end of the main file stream
                    // sourceStream.CopyTo(destStream);
                }
            }
            
            // -------------------- //
            // PHASE 3 - FINALIZING
            // -------------------- //

            // Now that we have a combined file, lets move it to the final destination
            // Some browsers send file names with full path. This needs to be stripped.
            var cleanFileName = Path.GetFileName(metadata.FileName);
            // As an example, we are writing the file to the wwwroot directory. You should modify this to suit your needs.
            // var filePath = Path.Combine(_webHostingEnvironment.WebRootPath, "Upload_Directory", cleanFileName);
            
            // if (System.IO.File.Exists(filePath))
            //     System.IO.File.Delete(filePath);
            
            // System.IO.File.Move(tempFinalFilePath, filePath);

            // _logger.LogDebug($"Moved: {tempFinalFilePath} to {filePath}.");
            
            // ----------------- //
            // PHASE 4 - CLEANUP
            // ----------------- //

            // With the final final assembled and moved, we need to delete all the temporary chunk files

            _logger.LogDebug($"Deleting temporary chunk files for {metadata.FileName}..");

            for (var chunkIndex = 0; chunkIndex <= metadata.TotalChunks - 1; chunkIndex++)
            {
                // As an example, we are deleting the file from the wwwroot directory. You should modify this to suit your needs.
                // var chunkFileName = Path.Combine(_webHostingEnvironment.WebRootPath, "Upload_Directory", $"{metadata.FileName}_{chunkIndex}");

                // if (System.IO.File.Exists(chunkFileName))
                // {
                //     System.IO.File.Delete(chunkFileName);

                //     _logger.LogDebug($"Deleted chunk: {chunkFileName}.");
                // }
            }

            _logger.LogDebug($"*** Upload and recombination complete! *** File: {cleanFileName}");
        }
    }

    [DataContract]
    public class ChunkMetaData
    {
        [DataMember(Name = "uploadUid")]
        public string? UploadUid { get; set; }
        [DataMember(Name = "fileName")]
        public string? FileName { get; set; }
        [DataMember(Name = "contentType")]
        public string? ContentType { get; set; }
        [DataMember(Name = "chunkIndex")]
        public long ChunkIndex { get; set; }
        [DataMember(Name = "totalChunks")]
        public long TotalChunks { get; set; }
        [DataMember(Name = "totalFileSize")]
        public long TotalFileSize { get; set; }
    }
}
