import { TrendingUp, Hourglass, Target, Zap } from 'lucide-react';
import { StatItem } from '../types/dashboard';

export const BOOKING_STATS: StatItem[] = [
  {
    id: 'total-bookings',
    title: 'Total Bookings',
    value: '1,284',
    footerIcon: TrendingUp,
    footerText: '+12% from last month',
    footerColor: 'text-blue-400',
  },
  {
    id: 'pending-requests',
    title: 'Pending Requests',
    value: '42',
    footerIcon: Hourglass,
    footerText: '8 require urgent action',
    footerColor: 'text-purple-400',
  },
  {
    id: 'revenue-projected',
    title: 'Revenue Projected',
    value: '$142.5k',
    footerIcon: Target,
    footerText: 'Q3 Targets reached',
    footerColor: 'text-blue-400',
  },
  {
    id: 'avg-response',
    title: 'Avg. Response Time',
    value: '2.4h',
    footerIcon: Zap,
    footerText: 'Performance: Optimal',
    footerColor: 'text-gray-400',
  },
];
