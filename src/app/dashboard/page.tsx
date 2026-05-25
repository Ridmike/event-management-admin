'use client';

import React from 'react';
import StatsCard from '@/src/components/dashboard/StatsCard';
import { TrendingUp, Hourglass, Target, Mail, History } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
      
      {/* Metric Variants */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          title="Total Bookings"
          value="1,284"
          footerIcon={TrendingUp}
          footerText="+12% from last month"
          footerColor="text-blue-400"
        />
        <StatsCard 
          title="Pending Requests"
          value="42"
          footerIcon={Hourglass}
          footerText="8 require urgent action"
          footerColor="text-purple-400"
        />
        <StatsCard 
          title="Revenue Projected"
          value="$142.5k"
          footerIcon={Target}
          footerText="Q3 Targets reached"
          footerColor="text-blue-300"
        />
      </div>

      {/* Horizontal Variants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatsCard 
          variant="horizontal"
          title="Unread Messages"
          value="12"
          icon={Mail}
          iconBgColor="bg-purple-900/40"
          iconColor="text-purple-400"
        />
        <StatsCard 
          variant="horizontal"
          title="Avg. Response Time"
          value="2.4h"
          icon={History}
          iconBgColor="bg-blue-900/40"
          iconColor="text-blue-400"
        />
      </div>
    </div>
  );
}
