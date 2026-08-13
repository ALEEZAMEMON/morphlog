import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {mockDashboardData} from '../../constants/dashboardData';

const DashboardScreen = () => {
  const {progress, stats} = mockDashboardData;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallGreeting}>
              Good morning 👋
            </Text>

            <Text style={styles.title}>
              Your Progress
            </Text>
          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>
              A
            </Text>
          </View>
        </View>

        {/* Overall Progress */}
        <View style={styles.overallCard}>
          <View style={styles.overallTop}>

            <View>
              <Text style={styles.cardLabel}>
                Overall Progress
              </Text>

              <Text style={styles.overallPercentage}>
                {stats.overallProgress}%
              </Text>
            </View>

            <View style={styles.progressCircle}>
              <Text style={styles.progressCircleText}>
                {stats.overallProgress}%
              </Text>
            </View>

          </View>

          <Text style={styles.overallDescription}>
            Keep tracking your progress. You are doing great!
          </Text>

          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBar,
                {
                  width: `${stats.overallProgress}%`,
                },
              ]}
            />
          </View>
        </View>

        {/* Quick Stats */}
        <Text style={styles.sectionTitle}>
          Your Stats
        </Text>

        <View style={styles.statsRow}>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>
              🔥
            </Text>

            <Text style={styles.statNumber}>
              {stats.currentStreak}
            </Text>

            <Text style={styles.statLabel}>
              Day Streak
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>
              📝
            </Text>

            <Text style={styles.statNumber}>
              {stats.totalLogs}
            </Text>

            <Text style={styles.statLabel}>
              Total Logs
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>
              📏
            </Text>

            <Text style={styles.statNumber}>
              {stats.height}
            </Text>

            <Text style={styles.statLabel}>
              Height (cm)
            </Text>
          </View>

        </View>

        {/* Tracking Progress */}
        <Text style={styles.sectionTitle}>
          Your Tracking
        </Text>

        {/* Acne */}
        <ProgressCard
          emoji="✨"
          title="Acne"
          description="Track changes in your skin"
          progress={progress.acne}
        />

        {/* Scars */}
        <ProgressCard
          emoji="🌸"
          title="Scars"
          description="Monitor your scar progress"
          progress={progress.scars}
        />

        {/* Hair */}
        <ProgressCard
          emoji="🌿"
          title="Hair"
          description="Track your hair progress"
          progress={progress.hair}
        />

        {/* Quick Action */}
        <View style={styles.actionCard}>

          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>
              Track your progress
            </Text>

            <Text style={styles.actionDescription}>
              Add a new update to keep your journey going.
            </Text>
          </View>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>
              + Add
            </Text>
          </TouchableOpacity>

        </View>

        <View style={{height: 30}} />

      </ScrollView>
    </View>
  );
};

interface ProgressCardProps {
  emoji: string;
  title: string;
  description: string;
  progress: number;
}

const ProgressCard = ({
  emoji,
  title,
  description,
  progress,
}: ProgressCardProps) => {
  return (
    <View style={styles.trackingCard}>

      <View style={styles.trackingHeader}>

        <View style={styles.trackingIcon}>
          <Text style={styles.trackingEmoji}>
            {emoji}
          </Text>
        </View>

        <View style={styles.trackingInfo}>

          <Text style={styles.trackingTitle}>
            {title}
          </Text>

          <Text style={styles.trackingDescription}>
            {description}
          </Text>

        </View>

        <Text style={styles.trackingPercentage}>
          {progress}%
        </Text>

      </View>

      <View style={styles.progressBarBackground}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${progress}%`,
            },
          ]}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  // Main app background
  container: {
    flex: 1,
    backgroundColor: '#FFD0B4',
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  smallGreeting: {
    fontSize: 14,
    color: '#795548',
    marginBottom: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4A3028',
  },

  profileCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#B85C3A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  overallCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 26,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  overallTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardLabel: {
    fontSize: 14,
    color: '#8C7B83',
    marginBottom: 5,
  },

  overallPercentage: {
    fontSize: 38,
    fontWeight: '800',
    color: '#B85C3A',
  },

  progressCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 7,
    borderColor: '#E8A98E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  progressCircleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#B85C3A',
  },

  overallDescription: {
    fontSize: 13,
    color: '#8C7B83',
    marginTop: 15,
    marginBottom: 12,
  },

  progressBarBackground: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F1E5E9',
    overflow: 'hidden',
  },

  progressBar: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#B85C3A',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4A3028',
    marginBottom: 14,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  statCard: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 2,
  },

  statEmoji: {
    fontSize: 22,
    marginBottom: 7,
  },

  statNumber: {
    fontSize: 18,
    fontWeight: '800',
    color: '#4A3028',
  },

  statLabel: {
    fontSize: 11,
    color: '#8C7B83',
    textAlign: 'center',
    marginTop: 3,
  },

  trackingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 17,
    marginBottom: 14,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 2,
  },

  trackingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  trackingIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFF0E8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  trackingEmoji: {
    fontSize: 20,
  },

  trackingInfo: {
    flex: 1,
    marginLeft: 12,
  },

  trackingTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4A3028',
  },

  trackingDescription: {
    fontSize: 12,
    color: '#8C7B83',
    marginTop: 3,
  },

  trackingPercentage: {
    fontSize: 16,
    fontWeight: '800',
    color: '#B85C3A',
  },

  actionCard: {
    marginTop: 10,
    backgroundColor: '#F5BFA3',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  actionTextContainer: {
    flex: 1,
    paddingRight: 12,
  },

  actionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4A3028',
  },

  actionDescription: {
    fontSize: 12,
    color: '#705247',
    marginTop: 5,
    lineHeight: 17,
  },

  actionButton: {
    backgroundColor: '#B85C3A',
    paddingHorizontal: 17,
    paddingVertical: 11,
    borderRadius: 14,
  },

  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default DashboardScreen;