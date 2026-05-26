'use client';

import React from 'react';
import { ContactMessage } from '@/src/types/contact';
import Modal from '../common/Modal';
import { User, Mail, MessageSquare, Clock, Calendar, CheckCircle2 } from 'lucide-react';

interface ContactDetailsModalProps {
  message: ContactMessage | null;
  isOpen: boolean;
  onClose: () => void;
}

const ContactDetailsModal: React.FC<ContactDetailsModalProps> = ({ message, isOpen, onClose }) => {
  if (!message) return null;

  const initials = message.senderName
    .split(' ')
    .map((n) => n[0])
    .join('');

  const InfoCard = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/2 border border-white/5">
      <div className="p-2 rounded-lg bg-white/5">
        <Icon className="w-4 h-4 text-purple-400" />
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</p>
        <p className="text-xs font-semibold text-white">{value}</p>
      </div>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact Message Details">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-linear-to-br from-purple-500/10 to-transparent border border-purple-500/10">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold text-white border border-white/10 ${message.avatarColor} shadow-lg`}>
              {initials}
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white tracking-tight">{message.senderName}</h2>
              <div className="flex items-center gap-2 mt-1">
                <Mail className="w-3 h-3 text-gray-500" />
                <span className="text-xs text-gray-400 font-medium">{message.email}</span>
              </div>
            </div>
          </div>
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${message.statusColor} bg-white/5`}>
            <div className={`w-1.5 h-1.5 rounded-full ${message.statusColor.split(' ')[0].replace('text-', 'bg-')}`} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{message.status}</span>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-3">
          <InfoCard icon={Calendar} label="Received Date" value={message.date} />
          <InfoCard icon={Clock} label="Received Time" value={message.time} />
        </div>

        {/* Message Content */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-purple-400">
            <MessageSquare className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Message Thread</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/3 border border-white/5 space-y-4">
            <div>
                <p className="text-[10px] font-bold text-gray-600 uppercase mb-1">Subject</p>
                <h4 className="text-sm font-bold text-white">{message.subject}</h4>
            </div>
            <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] font-bold text-gray-600 uppercase mb-2">Detailed Content</p>
                <p className="text-sm text-gray-400 leading-relaxed italic">
                "{message.subjectDetail}"
                </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
            <button className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Mark as Replied
            </button>
            <button 
                onClick={onClose}
                className="flex-1 py-3 bg-[#1a1c1e] hover:bg-white/5 text-white border border-white/5 rounded-xl font-bold text-sm transition-all"
            >
                Close
            </button>
        </div>
      </div>
    </Modal>
  );
};

export default ContactDetailsModal;