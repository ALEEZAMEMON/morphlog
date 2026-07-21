package morphlog_backend.service;

import morphlog_backend.dto.UserSettingsRequest;
import morphlog_backend.model.User;
import morphlog_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSettingService {

    @Autowired
    private UserRepository userRepository;

    public User updateSettings(String email, UserSettingsRequest request) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (request.getTrackWeight() != null) user.setTrackWeight(request.getTrackWeight());
        if (request.getTrackHeight() != null) user.setTrackHeight(request.getTrackHeight());
        if (request.getTrackAcne() != null) user.setTrackAcne(request.getTrackAcne());
        if (request.getTrackHair() != null) user.setTrackHair(request.getTrackHair());
        if (request.getTrackScars() != null) user.setTrackScars(request.getTrackScars());

        return userRepository.save(user);
    }
}
