'use client';

import React from 'react';
import { Booking } from '@/src/types/booking';
import Modal from '../common/Modal';
import { User, Mail, Phone, Calendar, MessageSquare, Tag } from 'lucide-react';

interface BookingDetailsModalProps {
  booking: Booking | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingDetailsModal: React.FC<BookingDetailsModalProps> = ({ booking, isOpen, onClose }) => {
  if (!booking) return null;

  const initials = booking.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  const DetailItem = ({ icon: Icon, label, value, colorClass = "text-white" }: { icon: any, label: string, value: string, colorClass?: string }) => (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/2 border border-white/5">
      <div className="mt-1 p-2 rounded-lg bg-white/5">
        <Icon className="w-4 h-4 text-purple-400" />
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{label}</p>
        <p className={`text-sm font-medium ${colorClass}`}>{value}</p>
      </div>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Booking Details">
      <div className="space-y-8">
        {/* Profile Header */}
        <div className="flex items-center gap-5 p-2">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white border-2 border-white/10 ${booking.avatarColor} shadow-xl`}>
            {initials}
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">{booking.name}</h2>
            <div className={`mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${booking.eventColor}`}>
              <Calendar className="w-3 h-3" />
              {booking.eventType}
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DetailItem icon={Mail} label="Email Address" value={booking.email} />
          <DetailItem icon={Phone} label="Phone Number" value={booking.phone} />
          <div className="md:col-span-2">
            <DetailItem 
                icon={Tag} 
                label="Event Type" 
                value={booking.eventType} 
                colorClass={booking.eventColor.split(' ')[0]} 
            />
          </div>
        </div>

        {/* Message Section */}
        <div className="p-6 rounded-2xl bg-white/3 border border-white/5 space-y-3">
          <div className="flex items-center gap-2 text-purple-400">
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Message from Client</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed italic">
            "{booking.messagePreview}..."
          </p>
          <p className="text-[10px] text-gray-600 font-medium">
            Note: This is a preview of the client's request. Full details are available in the CRM.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button 
            className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-purple-600/20"
            onClick={() => {}} // Handle follow up
          >
            Follow Up
          </button>
          <button 
            className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-sm transition-all"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BookingDetailsModal;