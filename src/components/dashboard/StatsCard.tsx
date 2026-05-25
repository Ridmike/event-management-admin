import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  variant?: 'metric' | 'horizontal';
  title: string;
  value: string | number;
  icon?: LucideIcon;
  footerIcon?: LucideIcon;
  footerText?: string;
  footerColor?: string;
  iconBgColor?: string;
  iconColor?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  variant = 'metric',
  title,
  value,
  icon: Icon,
  footerIcon: FooterIcon,
  footerText,
  footerColor = 'text-blue-400',
  iconBgColor = 'bg-gray-800/50',
  iconColor = 'text-white',
}) => {
  if (variant === 'horizontal') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a1c1e] p-5 rounded-2xl flex items-center gap-4 border border-white/5 hover:border-white/10 transition-colors"
      >
        <div className={`p-3 rounded-xl ${iconBgColor}`}>
          {Icon && <Icon className={`w-6 h-6 ${iconColor}`} />}
        </div>
        <div>
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{title}</p>
          <h3 className="text-white text-2xl font-bold mt-0.5">{value}</h3>
        </div>
      </motion.div>
    );
  }

  // Default Metric Variant
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1a1c1e] p-6 rounded-2xl flex flex-col gap-4 border border-white/5 hover:border-white/10 transition-colors h-full"
    >
      <div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{title}</p>
        <h3 className="text-white text-3xl font-bold mt-2">{value}</h3>
      </div>
      
      {footerText && (
        <div className={`flex items-center gap-1.5 mt-2 ${footerColor}`}>
          {FooterIcon && <FooterIcon className="w-4 h-4" />}
          <span className="text-xs font-medium">{footerText}</span>
        </div>
      )}
    </motion.div>
  );
};

export default StatsCard;
