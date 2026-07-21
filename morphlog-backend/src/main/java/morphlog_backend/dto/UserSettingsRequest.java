package morphlog_backend.dto;

import lombok.Data;

@Data
public class UserSettingsRequest {
    private Boolean trackWeight;
    private Boolean trackHeight;
    private Boolean trackAcne;
    private Boolean trackHair;
    private Boolean trackScars;
}
