'use client';

import React from 'react';
import StatsCard from '@/src/components/dashboard/StatsCard';
import { TrendingUp, Hourglass, Target, Mail, History } from 'lucide-react';
import { BOOKING_STATS } from '@/src/constants/dashboardData';
import StatsGrid from '@/src/components/dashboard/StatsGrid';
import AnalyticsChart from '@/src/components/dashboard/AnalyticsChart';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto pb-20">
      <h1 className="text-4xl mb-8 font-extrabold text-white tracking-tight">Dashboard Overview</h1>
      
      {/* Metric Variants */}
      <StatsGrid stats={BOOKING_STATS} />

      {/* Analytics Section */}
      <AnalyticsChart />
    </div>
  );
}
