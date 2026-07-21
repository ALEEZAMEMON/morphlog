package morphlog_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "health_records")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HealthRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "record_id")
    private Integer recordId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(precision = 5, scale = 2)
    private Double weight;

    @Column(precision = 5, scale = 2)
    private Double height;

    @Column(name = "acne_level")
    private Integer acneLevel;

    @Column(name = "hair_growth_score")
    private Integer hairGrowthScore;

    @Column(name = "scars_level")
    private Integer scarsLevel;

    @CreationTimestamp
    @Column(name = "record_date", updatable = false)
    private LocalDateTime recordDate;
}
