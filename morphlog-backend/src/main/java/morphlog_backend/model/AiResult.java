package morphlog_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "ai_results")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AiResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "result_id")
    private Integer resultId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "request_id", nullable = false, unique = true)
    private AnalysisRequest analysisRequest;

    @Column(name = "result_text", columnDefinition = "TEXT")
    private String resultText;

    @Min(0)
    @Max(100)
    @Column(name = "improvement_score")
    private Integer improvementScore;

    @Column(columnDefinition = "TEXT")
    private String recommendations;
}
