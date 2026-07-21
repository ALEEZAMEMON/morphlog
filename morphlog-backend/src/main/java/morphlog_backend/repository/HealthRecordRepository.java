package morphlog_backend.repository;

import morphlog_backend.model.HealthRecord;
import morphlog_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HealthRecordRepository extends JpaRepository<HealthRecord, Integer> {
    
    // Find all health records belonging to a specific user
    List<HealthRecord> findByUserOrderByRecordDateDesc(User user);

    // Find a specific record by ID and User (security check)
    Optional<HealthRecord> findByRecordIdAndUser(Integer recordId, User user);

    List<HealthRecord> findByUserId(Long userId);
}
