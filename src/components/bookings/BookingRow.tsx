import React from 'react';
import { Booking } from '@/src/types/booking';

interface BookingRowProps {
  booking: Booking;
}

const BookingRow: React.FC<BookingRowProps> = ({ booking }) => {
  const initials = booking.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
      <td className="py-5 px-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-300 border border-white/10 ${booking.avatarColor}`}>
            {initials}
          </div>
          <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
            {booking.name}
          </span>
        </div>
      </td>
      <td className="py-5 px-4">
        <span className="text-sm text-gray-400">{booking.email}</span>
      </td>
      <td className="py-5 px-4">
        <span className="text-sm text-gray-400 font-mono">{booking.phone}</span>
      </td>
      <td className="py-5 px-4">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${booking.eventColor}`}>
          {booking.eventType}
        </span>
      </td>
      <td className="py-5 px-4 max-w-xs">
        <p className="text-sm text-gray-500 truncate">{booking.messagePreview}</p>
      </td>
    </tr>
  );
};

export default BookingRow;
