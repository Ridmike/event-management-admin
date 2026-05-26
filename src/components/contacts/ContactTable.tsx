'use client';

import React, { useState } from 'react';
import ContactRow from './ContactRow';
import { ContactMessage } from '@/src/types/contact';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContactDetailsModal from './ContactDetailsModal';

interface ContactTableProps {
  messages: ContactMessage[];
}

const ContactTable: React.FC<ContactTableProps> = ({ messages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 6;

  const totalItems = messages.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  
  const currentItems = messages.slice(startIndex, startIndex + itemsPerPage);

  const handleRowClick = (message: ContactMessage) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="py-4 px-6 w-10">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-[#1a1c1e]" />
              </th>
              <th className="py-5 px-6 text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">Sender Name</th>
              <th className="py-5 px-6 text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">Email Address</th>
              <th className="py-5 px-6 text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">Subject</th>
              <th className="py-5 px-6 text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">Status</th>
              <th className="py-5 px-6 text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] text-right">Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((msg) => (
              <ContactRow 
                key={msg.id} 
                message={msg} 
                onClick={handleRowClick}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Fix */}
      <div className="p-6 border-t border-white/5 flex items-center justify-between bg-black/20">
        <p className="text-xs text-gray-500 font-medium">
          Showing <span className="text-white">{totalItems === 0 ? 0 : startIndex + 1}-{endIndex}</span> of <span className="text-white">{totalItems}</span> messages
        </p>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg bg-[#1a1c1e] border border-white/5 transition-colors ${
              currentPage === 1 ? 'text-gray-700 cursor-not-allowed' : 'text-gray-400 hover:text-white pointer-events-auto'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#1a1c1e] rounded-lg border border-white/5">
            <span className="text-[11px] font-bold text-purple-400">{currentPage}</span>
            <span className="text-[11px] text-gray-600 font-bold uppercase tracking-tighter">/ {totalPages || 1}</span>
          </div>

          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`p-2 rounded-lg bg-[#1a1c1e] border border-white/5 transition-colors ${
              currentPage === totalPages || totalPages === 0 ? 'text-gray-700 cursor-not-allowed' : 'text-gray-400 hover:text-white pointer-events-auto'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Contact Details Modal */}
      <ContactDetailsModal 
        message={selectedMessage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ContactTable;
