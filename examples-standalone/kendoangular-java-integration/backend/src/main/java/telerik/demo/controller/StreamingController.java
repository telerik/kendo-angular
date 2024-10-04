package telerik.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/upload")
public class StreamingController {

    private static final Logger logger = LoggerFactory.getLogger(StreamingController.class);

    private final String uploadDir = "Upload_Directory";
    // This endpoint will also receive multiple files and chunks. 
    // However, a separate handler should be implemented for chunked uploads, 
    // as they require more complex logic to manage properly (e.g., handling partial uploads, 
    // reassembly, and error recovery).
    @PostMapping
    public ResponseEntity<String> onPostUpload(@RequestParam("files") List<MultipartFile> files) {
        // Saves the uploaded files to the upload directory on the server
        // Feel free to change the directory to suit your needs
        logger.info("Received {} files", files.size());
        for (MultipartFile file : files) {
            if (!file.isEmpty()) {
                String fileName = file.getOriginalFilename();
                logger.info("Received file: {}", fileName);

                try {
                    // Save file to the upload directory
                    Path path = Paths.get(uploadDir, fileName);
                    Files.createDirectories(path.getParent());
                    try (FileOutputStream fos = new FileOutputStream(path.toFile())) {
                        fos.write(file.getBytes());
                    }
                    logger.info("Uploaded file: {}", fileName);
                } catch (IOException e) {
                    logger.error("Error uploading file: {}", fileName, e);
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed");
                }
            }
        }
        return ResponseEntity.ok().build();
    }

    @PostMapping("/remove")
    public ResponseEntity<String> asyncRemove(@RequestParam("fileNames") List<String> fileNames) {
        if (fileNames == null || fileNames.isEmpty()) {
            logger.warn("No file names provided in the request");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No file names provided in the request");
        }

        for (String fileName : fileNames) {
            if (fileName == null || fileName.trim().isEmpty()) {
                logger.warn("Invalid file name provided");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid file name provided");
            }

            Path path = Paths.get(uploadDir, fileName);
            logger.info("Attempting to delete file: {}", path.toString());

            // Ensure the file actually exists
            if (Files.exists(path)) {
                try {
                    Files.delete(path);
                    logger.info("Deleted file: {}", fileName);
                } catch (IOException e) {
                    logger.error("Error deleting file: {}", fileName, e);
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File deletion failed");
                }
            } else {
                logger.warn("File not found: {}", fileName);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("File not found: " + fileName);
            }
        }

        return ResponseEntity.ok().build();
    }
    
}