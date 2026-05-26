import React from 'react';
import { ContactMessage } from '@/src/types/contact';

interface ContactRowProps {
  message: ContactMessage;
  onClick: (message: ContactMessage) => void;
}

const ContactRow: React.FC<ContactRowProps> = ({ message, onClick }) => {
  const initials = message.senderName
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <tr 
      onClick={() => onClick(message)}
      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer"
    >
      <td className="py-5 px-6" onClick={(e) => e.stopPropagation()}>
        <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-[#1a1c1e] text-purple-600 focus:ring-purple-500/20" />
      </td>
      <td className="py-5 px-6">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold text-white/80 border border-white/10 ${message.avatarColor}`}>
            {initials}
          </div>
          <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
            {message.senderName}
          </span>
        </div>
      </td>
      <td className="py-5 px-6">
        <span className="text-sm text-gray-500 font-medium">{message.email}</span>
      </td>
      <td className="py-5 px-6">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-200">{message.subject}</span>
          <span className="text-[11px] text-gray-500 font-medium truncate max-w-[200px]">{message.subjectDetail}</span>
        </div>
      </td>
      <td className="py-5 px-6">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${message.statusColor}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${message.statusColor.split(' ')[0].replace('text-', 'bg-')}`} />
          <span className="text-[10px] font-bold uppercase tracking-wider">{message.status}</span>
        </div>
      </td>
      <td className="py-5 px-6 text-right">
        <div className="flex flex-col items-end">
          <span className="text-xs font-bold text-gray-400">{message.date}</span>
          <span className="text-[10px] text-gray-600 font-medium uppercase tracking-tighter">{message.time}</span>
        </div>
      </td>
    </tr>
  );
};

export default ContactRow;
