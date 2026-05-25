import React from 'react';
import StatsCard from './StatsCard';
import { StatItem } from '@/src/types/dashboard';

interface StatsGridProps {
  stats: StatItem[];
  gridCols?: string;
}

const StatsGrid: React.FC<StatsGridProps> = ({ 
  stats, 
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" 
}) => {
  return (
    <div className={`grid ${gridCols} gap-6`}>
      {stats.map((stat) => (
        <StatsCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          variant={stat.variant}
          icon={stat.icon}
          footerIcon={stat.footerIcon}
          footerText={stat.footerText}
          footerColor={stat.footerColor}
          iconBgColor={stat.iconBgColor}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
};

export default StatsGrid;
