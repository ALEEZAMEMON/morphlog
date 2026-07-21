package morphlog_backend.dto;

import lombok.Data;
//This is what the App can track
@Data
public class HealthRecordRequest {
    private Double weight;
    private Double height;
    private Integer acneLevel;
    private Integer hairGrowthScore;
    private Integer scarsLevel;
}
