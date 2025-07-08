import React from 'react';
import { Calendar, DollarSign, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { FeeItem } from '../../types';

interface FeeCardProps {
  fee: FeeItem;
  onPayFee: (feeId: string) => void;
}

export const FeeCard: React.FC<FeeCardProps> = ({ fee, onPayFee }) => {
  const statusConfig = {
    pending: {
      color: 'bg-yellow-50 border-yellow-200',
      textColor: 'text-yellow-800',
      icon: Clock,
      iconColor: 'text-yellow-600'
    },
    paid: {
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-800',
      icon: CheckCircle,
      iconColor: 'text-green-600'
    },
    overdue: {
      color: 'bg-red-50 border-red-200',
      textColor: 'text-red-800',
      icon: AlertCircle,
      iconColor: 'text-red-600'
    }
  };

  const config = statusConfig[fee.status];
  const StatusIcon = config.icon;

  return (
    <div className={`rounded-lg border p-6 transition-all hover:shadow-md ${config.color}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-900">{fee.name}</h3>
            <StatusIcon className={`h-5 w-5 ${config.iconColor}`} />
          </div>
          
          <p className="text-sm text-gray-600 mt-1">{fee.description}</p>
          
          <div className="flex items-center space-x-4 mt-3">
            <div className="flex items-center space-x-1">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                ₦{fee.amount.toLocaleString()}
              </span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Due: {fee.dueDate}</span>
            </div>
          </div>
          
          <div className="mt-3">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.textColor} capitalize`}>
              {fee.status}
            </span>
          </div>
        </div>
        
        <div className="ml-4">
          {fee.status !== 'paid' && (
            <button
              onClick={() => onPayFee(fee.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Pay Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};