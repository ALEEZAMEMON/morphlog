package morphlog_backend.dto;

public class AnalysisResponse {

    private String status;
    private int improvementScore;
    private String recommendations;

    public AnalysisResponse(
            String status,
            int improvementScore,
            String recommendations) {

        this.status = status;
        this.improvementScore = improvementScore;
        this.recommendations = recommendations;
    }

    public String getStatus() {
        return status;
    }

    public int getImprovementScore() {
        return improvementScore;
    }

    public String getRecommendations() {
        return recommendations;
    }
}