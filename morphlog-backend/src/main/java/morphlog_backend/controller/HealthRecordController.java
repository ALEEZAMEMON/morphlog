package morphlog_backend.controller;

import morphlog_backend.dto.HealthRecordRequest;
import morphlog_backend.model.HealthRecord;
import morphlog_backend.service.HealthRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/health-records")
public class HealthRecordController {

    @Autowired
    private HealthRecordService healthRecordService;

    @PostMapping
    public ResponseEntity<?> createRecord(@RequestBody HealthRecordRequest request, Principal principal) {
        try {
            HealthRecord record = healthRecordService.createRecord(principal.getName(), request);
            return ResponseEntity.ok(record);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<?> getMyRecords(Principal principal) {
        try {
            List<HealthRecord> records = healthRecordService.getUserRecords(principal.getName());
            return ResponseEntity.ok(records);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateRecord(@PathVariable Integer id, @RequestBody HealthRecordRequest request, Principal principal) {
        try {
            HealthRecord updatedRecord = healthRecordService.updateRecord(id, principal.getName(), request);
            return ResponseEntity.ok(updatedRecord);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRecord(@PathVariable Integer id, Principal principal) {
        try {
            healthRecordService.deleteRecord(id, principal.getName());
            return ResponseEntity.ok("Record deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
