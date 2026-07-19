package morphlog_backend.repository;

import morphlog_backend.model.AnalysisRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnalysisRequestRepository extends JpaRepository<AnalysisRequest, Integer> {
    
    // Custom method to find all requests for a specific user
    List<AnalysisRequest> findByUserId(Long userId);
}
