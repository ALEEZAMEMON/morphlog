package morphlog_backend.service;

import morphlog_backend.dto.LoginRequest;
import morphlog_backend.dto.RegisterRequest;
import morphlog_backend.model.User;
import morphlog_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Error: Email is already in use!");
        }

        User newUser = User.builder()
                .email(request.getEmail())
                .password(request.getPassword())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .age(request.getAge())
                .gender(request.getGender())
                .country(request.getCountry())
                .build();

        return userRepository.save(newUser);
    }

    public User authenticateUser(LoginRequest request) {
        // 1. Find user by email
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());

        // 2. Check if user exists and password matches
        if (userOpt.isPresent() && userOpt.get().getPassword().equals(request.getPassword())) {
            return userOpt.get();
        } else {
            throw new RuntimeException("Error: Invalid email or password!");
        }
    }
}
