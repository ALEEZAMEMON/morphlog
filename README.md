# MorphLog 🪞
### AI-Powered Personal Progress Tracker

MorphLog is a full-stack mobile application that helps users track and analyze their physical progress over time using computer vision and lifestyle correlation. No custom AI model training required — all analysis is done using pixel-level image processing and statistical correlation.

---

## Modules

| Module | Description |
|---|---|
| Face Progress | Tracks acne, skin condition, redness, dark spots, and texture over time |
| Hair Growth | Monitors hair density and hairline position across sessions |
| Scar & Mark Healing | Tracks visibility and area reduction of scars and marks |
| Weight & Body | Logs weight trends and body measurements with lifestyle correlation |
| Progress Dashboard | Central view of all scores, streaks, and before/after comparisons |
| Reports | Generates 30-day progress reports with charts and photo grids |

---

## Tech Stack

### Mobile App
- React Native (TypeScript)
- React Navigation v6
- react-native-vision-camera
- react-native-chart-kit
- react-native-reanimated
- Axios

### Backend API
- Java 21
- Spring Boot 3.3
- Spring Security + JWT
- Spring Data JPA
- JavaMailSender (SMTP)

### Database & Storage
- PostgreSQL
- AWS S3 (photo file storage)

---

## Project Structure

```
morphlog/
├── morphlog-backend/        ← Spring Boot REST API
│   ├── src/
│   │   └── main/java/com/morphlog/
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       ├── model/
│   │       ├── dto/
│   │       ├── security/
│   │       └── scheduler/
│   └── pom.xml
│
├── morphlog-app/            ← React Native mobile app
│   ├── src/
│   │   ├── screens/
│   │   ├── components/
│   │   ├── navigation/
│   │   ├── api/
│   │   └── context/
│   └── package.json
│
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Java 21 (adoptium.net)
- Node.js LTS (nodejs.org)
- Android Studio (with Android SDK API 34)
- PostgreSQL 15+
- Git
