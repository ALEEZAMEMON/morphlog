package morphlog_backend.repository;

import morphlog_backend.model.AiResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AiResultRepository extends JpaRepository<AiResult, Integer> {
    
    // Find the AI Result by the ID of the Analysis Request it belongs to
    Optional<AiResult> findByAnalysisRequestRequestId(Integer requestId);
}
