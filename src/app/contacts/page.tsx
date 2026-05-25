'use client';

import React from 'react';
import { Filter, Search, MoreHorizontal } from 'lucide-react';
import ContactTable from '@/src/components/contacts/ContactTable';
import { ContactMessage } from '@/src/types/contact';

const mockMessages: ContactMessage[] = [
  {
    id: '1',
    senderName: 'Sarah Miller',
    email: 'sarah.m@nexuscorp.io',
    subject: 'Q3 Global Summit Inquiry',
    subjectDetail: 'Requesting detailed venue spec...',
    status: 'New',
    statusColor: 'text-purple-400 border-purple-400/20 bg-purple-400/5',
    date: 'Oct 24,',
    time: '2:45 PM',
    avatarColor: 'bg-indigo-500/20 text-indigo-400'
  },
  {
    id: '2',
    senderName: 'James Hudson',
    email: 'j.hudson@creativepeak.com',
    subject: 'Partnership Opportunity',
    subjectDetail: 'We want to integrate our lightin...',
    status: 'Read',
    statusColor: 'text-gray-400 border-gray-400/20 bg-gray-400/5',
    date: 'Oct 23,',
    time: '11:12 AM',
    avatarColor: 'bg-blue-500/20 text-blue-400'
  },
  {
    id: '3',
    senderName: 'Ana Lopez',
    email: 'ana.lopez@festiv.org',
    subject: 'Booking Modification',
    subjectDetail: 'Can we update the guest list for...',
    status: 'Replied',
    statusColor: 'text-blue-400 border-blue-400/20 bg-blue-400/5',
    date: 'Oct 22,',
    time: '09:30 AM',
    avatarColor: 'bg-zinc-700 text-zinc-300'
  },
  {
    id: '4',
    senderName: 'Robert King',
    email: 'king.rob@techpulse.net',
    subject: 'Technical Support Request',
    subjectDetail: 'Difficulty accessing the API doc...',
    status: 'New',
    statusColor: 'text-purple-400 border-purple-400/20 bg-purple-400/5',
    date: 'Oct 22,',
    time: '08:15 AM',
    avatarColor: 'bg-red-500/20 text-red-400'
  },
  {
    id: '5',
    senderName: 'Elena Chen',
    email: 'elena@starlight.pro',
    subject: 'Venue Walkthrough',
    subjectDetail: 'Confirming attendance for the s...',
    status: 'Read',
    statusColor: 'text-gray-400 border-gray-400/20 bg-gray-400/5',
    date: 'Oct 21,',
    time: '04:20 PM',
    avatarColor: 'bg-teal-500/20 text-teal-400'
  },
  // Adding extra for pagination testing
  {
    id: '6',
    senderName: 'Michael Scott',
    email: 'm.scott@dundermifflin.com',
    subject: 'Paper Supply Event',
    subjectDetail: 'Need a venue for the Dundies...',
    status: 'Replied',
    statusColor: 'text-blue-400 border-blue-400/20 bg-blue-400/5',
    date: 'Oct 20,',
    time: '12:00 PM',
    avatarColor: 'bg-amber-500/20 text-amber-400'
  },
  {
    id: '7',
    senderName: 'Pam Beesly',
    email: 'pam.b@scranton.net',
    subject: 'Art Gallery Opening',
    subjectDetail: 'Looking for a clean, white space...',
    status: 'New',
    statusColor: 'text-purple-400 border-purple-400/20 bg-purple-400/5',
    date: 'Oct 19,',
    time: '02:30 PM',
    avatarColor: 'bg-pink-500/20 text-pink-400'
  }
];

export default function ContactsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Message Center</h1>
          <p className="text-gray-500 font-medium">Manage all incoming communications and support requests.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="pl-10 pr-4 py-2 bg-[#1a1c1e] text-sm text-white rounded-lg border border-white/5 focus:outline-none focus:ring-1 focus:ring-purple-500 w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1c1e] text-white rounded-lg border border-white/5 hover:bg-white/5 transition-all text-sm font-semibold">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="p-2 bg-[#1a1c1e] text-white rounded-lg border border-white/5 hover:bg-white/5 transition-all">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      <ContactTable messages={mockMessages} />
    </div>
  );
}
