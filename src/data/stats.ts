export interface StatItem {
  id: string;
  value: number;
  label: string;
  suffix: string;
}

export const STATS_DATA: StatItem[] = [
  { id: "clients", value: 5, label: "Happy Clients", suffix: "+" },
  { id: "projects", value: 5, label: "Projects Completed", suffix: "+" },
  { id: "years", value: 0, label: "Years of Innovation", suffix: "+" },
];
