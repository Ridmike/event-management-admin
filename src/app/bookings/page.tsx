'use client';

import React from 'react';
import { Filter, Download } from 'lucide-react';
import StatsGrid from '@/src/components/dashboard/StatsGrid';
import BookingTable from '@/src/components/bookings/BookingTable';
import { Booking } from '@/src/types/booking';
import { BOOKING_STATS } from '@/src/constants/dashboardData';

const mockBookings: Booking[] = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    email: 'e.rodriguez@techglow.com',
    phone: '+1 (555) 012-3456',
    eventType: 'Corporate Gala',
    eventColor: 'text-blue-400 border-blue-400/20 bg-blue-400/5',
    messagePreview: 'Looking to host a high-tech pro...',
    avatarColor: 'bg-purple-900/40'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    email: 'm.chen@nebula-events.io',
    phone: '+1 (555) 987-6543',
    eventType: 'Music Festival',
    eventColor: 'text-purple-400 border-purple-400/20 bg-purple-400/5',
    messagePreview: 'Requirement for automated ligh...',
    avatarColor: 'bg-blue-900/40'
  },
  {
    id: '3',
    name: 'Sarah Williams',
    email: 'sarah.w@creative-studio.net',
    phone: '+1 (555) 444-2211',
    eventType: 'Art Exhibition',
    eventColor: 'text-gray-400 border-gray-400/20 bg-gray-400/5',
    messagePreview: 'Seeking a venue that supports i...',
    avatarColor: 'bg-zinc-800'
  },
  {
    id: '4',
    name: 'Julian Thorne',
    email: 'julian@prime-productions.com',
    phone: '+1 (555) 777-8899',
    eventType: 'Private Party',
    eventColor: 'text-red-400 border-red-400/20 bg-red-400/5',
    messagePreview: 'Exclusive rooftop event with hol...',
    avatarColor: 'bg-orange-900/20'
  },
  {
    id: '5',
    name: 'Sophia Laurent',
    email: 's.laurent@fashionweek.fr',
    phone: '+33 1 42 68 53 00',
    eventType: 'Fashion Show',
    eventColor: 'text-pink-400 border-pink-400/20 bg-pink-400/5',
    messagePreview: 'Requesting backstage management...',
    avatarColor: 'bg-pink-900/40'
  },
  {
    id: '6',
    name: 'David Miller',
    email: 'david.m@cyber-security.com',
    phone: '+1 (555) 234-5678',
    eventType: 'Tech Conference',
    eventColor: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5',
    messagePreview: 'Security logistics for 500+ guests...',
    avatarColor: 'bg-emerald-900/40'
  },
  {
    id: '7',
    name: 'Emma Watson',
    email: 'emma@un-events.org',
    phone: '+1 (555) 345-6789',
    eventType: 'Charity Gala',
    eventColor: 'text-amber-400 border-amber-400/20 bg-amber-400/5',
    messagePreview: 'Fundraising dinner setup at the...',
    avatarColor: 'bg-amber-900/40'
  },
  {
    id: '8',
    name: 'Ryan Gosling',
    email: 'ryan@drive-productions.com',
    phone: '+1 (555) 456-7890',
    eventType: 'Film Premiere',
    eventColor: 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5',
    messagePreview: 'Red carpet logistics and lighting...',
    avatarColor: 'bg-indigo-900/40'
  }
];

export default function BookingsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Booking Management</h1>
          <p className="text-gray-500 font-medium">Oversee and organize all incoming event requests in real-time.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1a1c1e] text-white rounded-lg border border-white/5 hover:bg-white/5 transition-all font-semibold text-sm">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1a1c1e] text-white rounded-lg border border-white/5 hover:bg-white/5 transition-all font-semibold text-sm">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <StatsGrid stats={BOOKING_STATS} />

      {/* Table Section */}
      <BookingTable bookings={mockBookings} />
    </div>
  );
}
