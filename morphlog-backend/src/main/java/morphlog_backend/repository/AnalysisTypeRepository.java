package morphlog_backend.repository;

import morphlog_backend.model.AnalysisType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnalysisTypeRepository extends JpaRepository<AnalysisType, Integer> {
    Optional<AnalysisType> findByTypeName(String typeName);
}
