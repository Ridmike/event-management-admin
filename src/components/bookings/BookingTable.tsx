import React, { useState } from 'react';
import BookingRow from './BookingRow';
import { Booking } from '@/src/types/booking';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookingTableProps {
  bookings: Booking[];
}

const BookingTable: React.FC<BookingTableProps> = ({ bookings }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate pagination values
  const totalItems = bookings.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  
  const currentItems = bookings.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="py-4 px-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Name</th>
              <th className="py-4 px-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email</th>
              <th className="py-4 px-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Phone</th>
              <th className="py-4 px-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Event Type</th>
              <th className="py-4 px-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Message Preview</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((booking) => (
              <BookingRow key={booking.id} booking={booking} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Dynamic Pagination Section */}
      <div className="p-6 border-t border-white/5 flex items-center justify-between">
        <p className="text-xs text-gray-500 font-medium tracking-tight">
          Showing <span className="text-white">{totalItems === 0 ? 0 : startIndex + 1}-{endIndex}</span> of <span className="text-white">{totalItems}</span> bookings
        </p>
        <div className="flex items-center gap-2">
          <button 
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg bg-[#1a1c1e] border border-white/5 transition-colors ${
              currentPage === 1 ? 'text-gray-700 cursor-not-allowed' : 'text-gray-500 hover:text-white cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-purple-400 px-2">Page {currentPage}</span>
            <span className="text-xs text-gray-600">of {totalPages || 1}</span>
          </div>

          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`p-2 rounded-lg bg-[#1a1c1e] border border-white/5 transition-colors ${
              currentPage === totalPages || totalPages === 0 ? 'text-gray-700 cursor-not-allowed' : 'text-gray-500 hover:text-white cursor-pointer'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingTable;
