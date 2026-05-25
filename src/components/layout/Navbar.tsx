import React from 'react';
import { Search, Bell, Grid, Moon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="h-20 border-b border-white/5 bg-black flex items-center justify-between px-8 sticky top-0 z-50">
      {/* Search Bar */}
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-4 flex items-center pr-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-500" />
        </span>
        <input
          type="text"
          className="block w-full pl-12 pr-4 py-2.5 bg-[#1a1c1e] border border-white/5 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all"
          placeholder="Search bookings..."
        />
      </div>

      {/* Right Side Icons & Profile */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-white/10 pr-6 text-gray-400">
          <button className="hover:text-white transition-colors cursor-pointer">
            <Bell className="w-5 h-5" />
          </button>
          <button className="hover:text-white transition-colors cursor-pointer">
            <Grid className="w-5 h-5" />
          </button>
          <button className="hover:text-white transition-colors cursor-pointer">
            <Moon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-white">Admin User</p>
            <p className="text-[11px] text-purple-400 font-medium uppercase tracking-tighter">System Overlord</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-purple-500/30 overflow-hidden ring-1 ring-white/10">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
