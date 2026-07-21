package morphlog_backend.controller;

import morphlog_backend.dto.UserSettingsRequest;
import morphlog_backend.model.User;
import morphlog_backend.service.UserSettingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/user/settings")
public class UserSettingController {

    @Autowired
    private UserSettingService userSettingService;

    @PatchMapping
    public ResponseEntity<?> updateSettings(@RequestBody UserSettingsRequest request, Principal principal) {
        try {
            User updatedUser = userSettingService.updateSettings(principal.getName(), request);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
