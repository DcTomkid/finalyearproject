import React, { useState } from 'react';
import { FeeCard } from './FeeCard';
import { PaymentModal } from './PaymentModal';
import { FeeItem, PaymentFormData } from '../../types';

interface PaymentsViewProps {
  fees: FeeItem[];
  onPayment: (data: PaymentFormData) => void;
}

export const PaymentsView: React.FC<PaymentsViewProps> = ({ fees, onPayment }) => {
  const [selectedFee, setSelectedFee] = useState<FeeItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'pending' | 'paid' | 'overdue'>('all');

  const filteredFees = filter === 'all' 
    ? fees 
    : fees.filter(fee => fee.status === filter);

  const handlePayFee = (feeId: string) => {
    const fee = fees.find(f => f.id === feeId);
    if (fee) {
      setSelectedFee(fee);
      setIsModalOpen(true);
    }
  };

  const handlePaymentSubmit = (data: PaymentFormData) => {
    onPayment(data);
    setIsModalOpen(false);
    setSelectedFee(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Fee Payments</h2>
          <p className="text-gray-600">View and pay your outstanding fees</p>
        </div>
        
        <div className="flex space-x-2">
          {['all', 'pending', 'paid', 'overdue'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filteredFees.map((fee) => (
          <FeeCard key={fee.id} fee={fee} onPayFee={handlePayFee} />
        ))}
      </div>

      {selectedFee && (
        <PaymentModal
          fee={selectedFee}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handlePaymentSubmit}
        />
      )}
    </div>
  );
};