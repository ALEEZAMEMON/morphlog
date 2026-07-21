package morphlog_backend.service;

import morphlog_backend.dto.HealthRecordRequest;
import morphlog_backend.model.HealthRecord;
import morphlog_backend.model.User;
import morphlog_backend.repository.HealthRecordRepository;
import morphlog_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HealthRecordService {

    @Autowired
    private HealthRecordRepository healthRecordRepository;

    @Autowired
    private UserRepository userRepository;

    public HealthRecord createRecord(String email, HealthRecordRequest request) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        HealthRecord record = HealthRecord.builder()
                .user(user)
                .weight(request.getWeight())
                .height(request.getHeight())
                .acneLevel(request.getAcneLevel())
                .hairGrowthScore(request.getHairGrowthScore())
                .scarsLevel(request.getScarsLevel())
                .build();

        return healthRecordRepository.save(record);
    }
    public List<HealthRecord> getUserRecords(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return healthRecordRepository.findByUserOrderByRecordDateDesc(user);
    }

    public HealthRecord updateRecord(Integer id, String email, HealthRecordRequest request) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        HealthRecord record = healthRecordRepository.findByRecordIdAndUser(id, user)
                .orElseThrow(() -> new RuntimeException("Record not found or access denied"));

        if (request.getWeight() != null) record.setWeight(request.getWeight());
        if (request.getHeight() != null) record.setHeight(request.getHeight());
        if (request.getAcneLevel() != null) record.setAcneLevel(request.getAcneLevel());
        if (request.getHairGrowthScore() != null) record.setHairGrowthScore(request.getHairGrowthScore());
        if (request.getScarsLevel() != null) record.setScarsLevel(request.getScarsLevel());

        return healthRecordRepository.save(record);
    }

    public void deleteRecord(Integer id, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        HealthRecord record = healthRecordRepository.findByRecordIdAndUser(id, user)
                .orElseThrow(() -> new RuntimeException("Record not found or access denied"));

        healthRecordRepository.delete(record);
    }
}
