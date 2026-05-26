'use client';

import React, { useState } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const monthlyData = [
  { name: 'WK 1', bookings: 25 },
  { name: 'WK 2', bookings: 38 },
  { name: 'WK 3', bookings: 32 },
  { name: 'WK 4', bookings: 75 },
  { name: 'WK 5', bookings: 120 },
  { name: 'WK 6', bookings: 60 },
];

const weeklyData = [
  { name: 'MON', bookings: 10 },
  { name: 'TUE', bookings: 25 },
  { name: 'WED', bookings: 15 },
  { name: 'THU', bookings: 45 },
  { name: 'FRI', bookings: 30 },
  { name: 'SAT', bookings: 60 },
  { name: 'SUN', bookings: 40 },
];

const AnalyticsChart = () => {
  const [activeTab, setActiveTab] = useState('Month');
  const data = activeTab === 'Month' ? monthlyData : weeklyData;

  return (
    <div className="bg-[#0f0f10] border border-white/5 rounded-[32px] p-10 mt-10 shadow-3xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Analytics Overview</h2>
          <p className="text-gray-500 font-medium mt-1">Weekly booking trends across all active event hubs</p>
        </div>
        
        <div className="flex bg-[#1a1c1e] p-1.5 rounded-2xl border border-white/5 self-start">
          {['Week', 'Month'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-2.5 rounded-xl text-xs font-bold transition-all duration-500 ${
                activeTab === tab 
                ? 'text-white' 
                : 'text-gray-500 hover:text-gray-400'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c084fc" stopOpacity={0.25}/>
                <stop offset="95%" stopColor="#c084fc" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              vertical={false} 
              strokeDasharray="0" 
              stroke="rgba(255,255,255,0.03)" 
            />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 11, fontWeight: 700 }}
              dy={15}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 11, fontWeight: 700 }}
              dx={-10}
            />
            <Tooltip 
              cursor={{ stroke: 'rgba(192, 132, 252, 0.2)', strokeWidth: 2 }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#1a1c1e] border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-md">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{payload[0].payload.name}</p>
                      <p className="text-sm font-extrabold text-white">
                        {payload[0].value} <span className="text-purple-400">Bookings</span>
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area 
              type="monotone" 
              dataKey="bookings" 
              stroke="#c084fc" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorBookings)" 
              animationDuration={1500}
              strokeLinecap="round"
              activeDot={{ r: 6, fill: '#fff', stroke: '#c084fc', strokeWidth: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;