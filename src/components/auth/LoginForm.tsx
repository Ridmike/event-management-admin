'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate login delay
    setTimeout(() => {
      if (formData.email === 'admin@lumina.io' && formData.password === 'admin123') {
        setIsLoading(false);
        router.push('/dashboard');
      } else {
        setIsLoading(false);
        setError('Invalid credentials. Please use the developer access below.');
      }
    }, 1200);
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent tracking-tight mb-2">
          Lumina Event OS
        </h1>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em]">
          Command Center Access
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#111111] p-10 rounded-[2rem] border border-white/5 shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-white mb-2">Secure Admin Access</h2>
        <p className="text-gray-500 text-sm mb-8">
          Please authenticate to manage your premium events.
        </p>

        {error && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-medium"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">
              Email Address
            </label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
              <input 
                type="email"
                required
                className="w-full bg-[#1a1c1e] border border-white/5 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="admin@lumina.io"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                Password
              </label>
              <button type="button" className="text-[10px] font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider">
                Forgot Password?
              </button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
              <input 
                type={showPassword ? 'text' : 'password'}
                required
                className="w-full bg-[#1a1c1e] border border-white/5 rounded-xl py-3.5 pl-12 pr-12 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="••••••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-3 ml-1">
            <input 
              type="checkbox" 
              id="remember"
              className="w-4 h-4 rounded border-white/10 bg-[#1a1c1e] text-purple-600 focus:ring-purple-500/20 focus:ring-offset-0"
              checked={formData.rememberMe}
              onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
            />
            <label htmlFor="remember" className="text-xs text-gray-400 font-medium">
              Remember this device for 30 days
            </label>
          </div>

          {/* Sign In Button */}
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Sign In <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Development Credentials Hint */}
          <div className="p-4 bg-purple-500/5 rounded-xl border border-purple-500/10 text-center">
            <p className="text-[10px] text-purple-400 font-bold uppercase tracking-wider mb-1">Development Credentials</p>
            <div className="flex justify-center gap-4">
              <p className="text-[11px] text-gray-500">Email: <span className="text-gray-300">admin@lumina.io</span></p>
              <p className="text-[11px] text-gray-500">Pass: <span className="text-gray-300">admin123</span></p>
            </div>
          </div>
        </form>
      </motion.div>

      <div className="mt-10 text-center space-x-2">
        <span className="text-[10px] text-gray-600 font-medium uppercase tracking-wider">
          Protected by Lumina Security Shield.
        </span>
        <button className="text-[10px] text-purple-400 hover:text-purple-300 font-bold uppercase tracking-wider">
          Privacy Protocol
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
