package morphlog_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "first_name", nullable = false)
    private String firstName;
    
    @Column(name = "last_name", nullable = false)
    private String lastName;
    
    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private int age;

    @Column(nullable = false)
    private String gender;
   
    @Column(nullable = false)
    private String country;

    // Tracking Preferences
    @Builder.Default
    @Column(name = "track_weight")
    private boolean trackWeight = true;

    @Builder.Default
    @Column(name = "track_height")
    private boolean trackHeight = true;

    @Builder.Default
    @Column(name = "track_acne")
    private boolean trackAcne = false;

    @Builder.Default
    @Column(name = "track_hair")
    private boolean trackHair = false;

    @Builder.Default
    @Column(name = "track_scars")
    private boolean trackScars = false;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
