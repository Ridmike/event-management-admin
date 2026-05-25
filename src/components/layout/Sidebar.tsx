'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Calendar, 
  MessageSquare, 
  Settings, 
  LifeBuoy, 
  PlusCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Booking Management', icon: Calendar, href: '/bookings' },
    { label: 'Contact Messages', icon: MessageSquare, href: '/contacts' },
  ];

  const bottomItems = [
    { label: 'Settings', icon: Settings, href: '/settings' },
    { label: 'Support', icon: LifeBuoy, href: '/support' },
  ];

  return (
    <div className="w-72 h-screen bg-black border-r border-white/5 flex flex-col p-6 sticky top-0">
      {/* Logo Section */}
      <div className="mb-10 pl-2">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent tracking-tight">
          Lumina
        </h1>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mt-1 text-center pr-4">
          Command Center
        </p>
      </div>

      {/* New Event Button */}
      <button className="w-full py-3.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 transition-all active:scale-[0.98] mb-8">
        <PlusCircle className="w-5 h-5 transition-transform group-hover:rotate-90" />
        New Event
      </button>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`relative group flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-[#1a1c1e] text-purple-400 border border-white/5' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute left-0 w-1.5 h-8 bg-purple-500 rounded-r-full"
                />
              )}
              <item.icon className={`w-6 h-6 ${isActive ? 'text-purple-500' : 'group-hover:text-white transition-colors'}`} />
              <span className={`text-sm font-medium leading-tight ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="pt-6 border-t border-white/5 space-y-2">
        {bottomItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className="group flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <item.icon className="w-5 h-5 group-hover:text-white transition-colors" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
