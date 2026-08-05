package morphlog_backend.controller;

import morphlog_backend.dto.AnalysisResponse;
import morphlog_backend.service.ImageAiAnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.security.Principal;

/**
 * The "Waiter" of the AI Analysis feature.
 * It receives images from the frontend and sends them to the "Chef" (Service).
 */
@RestController
@RequestMapping("/api/analysis")
public class AnalysisController {

    @Autowired
    private ImageAiAnalysisService analysisService;

    /**
     * This endpoint receives the image.
     * @param photo The actual image bytes sent by the user.
     * @param type The type of analysis (e.g., "ACNE", "HAIR").
     * @param principal The current logged-in user (from the JWT).
     */
    @PostMapping("/uploadImage")
    public ResponseEntity<?> uploadImage(
            @RequestParam("image") MultipartFile photo,
            @RequestParam("type") String type,
            Principal principal) {
        
        try {
            AnalysisResponse response = analysisService.analyzeImage(photo, type, principal.getName());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to process image: " + e.getMessage());
        }
    }
}
