package morphlog_backend.repository;

import morphlog_backend.model.AnalysisType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnalysisTypeRepository extends JpaRepository<AnalysisType, Integer> {
}
