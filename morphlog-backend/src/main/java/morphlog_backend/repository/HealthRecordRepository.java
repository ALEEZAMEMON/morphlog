package morphlog_backend.repository;

import morphlog_backend.model.HealthRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HealthRecordRepository extends JpaRepository<HealthRecord, Integer> {
    
    // Find all health records belonging to a specific user
    List<HealthRecord> findByUserId(Long userId);
}
