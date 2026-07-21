package morphlog_backend.controller;

import morphlog_backend.dto.JwtResponse;
import morphlog_backend.dto.LoginRequest;
import morphlog_backend.dto.RegisterRequest;
import morphlog_backend.model.User;
import morphlog_backend.security.JwtUtils;
import morphlog_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            User registeredUser = userService.registerUser(request);
            return ResponseEntity.ok(registeredUser);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            User user = userService.authenticateUser(request);
            String jwt = jwtUtils.generateJwtToken(user.getEmail());
            return ResponseEntity.ok(new JwtResponse(jwt, user));
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }
}
