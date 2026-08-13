export interface DashboardProgress {
  acne: number;
  scars: number;
  hair: number;
}

export interface DashboardStats {
  height: number;
  totalLogs: number;
  currentStreak: number;
  overallProgress: number;
}

export interface DashboardData {
  progress: DashboardProgress;
  stats: DashboardStats;
}