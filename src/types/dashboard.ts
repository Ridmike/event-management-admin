import { LucideIcon } from 'lucide-react';

export interface StatItem {
  id: string;
  title: string;
  value: string | number;
  footerIcon?: LucideIcon;
  footerText?: string;
  footerColor?: string;
  variant?: 'metric' | 'horizontal';
  icon?: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
}
