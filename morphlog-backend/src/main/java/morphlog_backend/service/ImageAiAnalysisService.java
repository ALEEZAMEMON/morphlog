package morphlog_backend.service;

import morphlog_backend.dto.AnalysisResponse;
import morphlog_backend.model.*;
import morphlog_backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

@Service
public class ImageAiAnalysisService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AnalysisRequestRepository requestRepository;

    @Autowired
    private AiResultRepository resultRepository;

    @Autowired
    private AnalysisTypeRepository typeRepository;

    //this will be folder in which all images will be store
    private final String uploadDir = "uploads/";

    //this is the method that will give response to user
    public AnalysisResponse analyzeImage(MultipartFile photo, String typeName, String email) throws IOException {
        // 1. Find the User
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // 2. Find the Analysis Type (e.g., ACNE)
        AnalysisType analysisType = typeRepository.findByTypeName(typeName)
                .orElseThrow(() -> new RuntimeException("Analysis type not found: " + typeName));

        // 3. Save the file to your hard drive
        String fileName = saveFile(photo);

        // 4. Create and save the Request record
        AnalysisRequest request = AnalysisRequest.builder()
                .user(user)
                .analysisType(analysisType)
                .imageUrl(fileName)
                .status("COMPLETED")
                .build();
        request = requestRepository.save(request);

        // 5. Create and save a FAKE (Mock) AI result
        AiResult result = AiResult.builder()
                .analysisRequest(request)
                .resultText("Analysis successful for " + typeName)
                .improvementScore(85) // This is our mock score
                .recommendations("Your skin is looking great! Keep using your current routine.")
                .build();
        resultRepository.save(result);

        // 6. Send the response back to the Waiter (Controller)
        return new AnalysisResponse("SUCCESS", 85, result.getRecommendations());
    }

    private String saveFile(MultipartFile file) throws IOException {
        // Create the 'uploads' folder if it doesn't exist
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Create a unique name: e.g., a1b2-c3d4.jpg
        String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);

        // Copy the bytes from the upload to the folder
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return fileName;
    }
}
