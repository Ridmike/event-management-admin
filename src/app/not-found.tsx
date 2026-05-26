'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-blue-600/5 rounded-full blur-[80px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="relative mb-8 inline-block">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Search className="w-16 h-16 text-purple-500" />
          </motion.div>
          <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg uppercase tracking-widest">
            Error 404
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
          Lost in <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">Space.</span>
        </h1>
        
        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md mx-auto mb-10 leading-relaxed">
          The page you're looking for has been moved or doesn't exist in our event management hub.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-purple-600/20"
            >
              <Home className="w-5 h-5" />
              Back to Dashboard
            </motion.button>
          </Link>
          
          <Link href="#" onClick={() => window.history.back()}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous Page
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Grid pattern background overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay -z-10" />
    </div>
  );
}