package morphlog_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import morphlog_backend.model.User;

@Data
@AllArgsConstructor
public class JwtResponse {
    private String token;
    private User user;
}
