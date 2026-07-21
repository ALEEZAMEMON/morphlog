package morphlog_backend.controller;

import morphlog_backend.model.User;
import morphlog_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/api/user/profile")
public class UserProfileController {

    @Autowired
    private UserService userService;

    @PatchMapping("/email")
    public ResponseEntity<?> updateEmail(@RequestBody Map<String, String> request, Principal principal) {
        try {
            String newEmail = request.get("email");
            if (newEmail == null || newEmail.isEmpty()) {
                return ResponseEntity.badRequest().body("Email cannot be empty");
            }
            User updatedUser = userService.updateEmail(principal.getName(), newEmail);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
