import React from 'react';
import { CreditCard, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { StatCard } from './StatCard';
import { FeeItem, Payment } from '../../types';

interface DashboardViewProps {
  fees: FeeItem[];
  payments: Payment[];
  onPayFee: (feeId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ 
  fees, 
  payments, 
  onPayFee 
}) => {
  const totalFees = fees.reduce((sum, fee) => sum + fee.amount, 0);
  const paidFees = fees.filter(fee => fee.status === 'paid').reduce((sum, fee) => sum + fee.amount, 0);
  const pendingFees = fees.filter(fee => fee.status === 'pending').length;
  const overdueFees = fees.filter(fee => fee.status === 'overdue').length;

  const recentPayments = payments.slice(0, 3);
  const upcomingDues = fees.filter(fee => fee.status !== 'paid').slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
        <p className="text-gray-600">Overview of your fee payments and status</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Fees"
          value={`₦${totalFees.toLocaleString()}`}
          icon={CreditCard}
          color="blue"
        />
        <StatCard
          title="Paid Fees"
          value={`₦${paidFees.toLocaleString()}`}
          icon={CheckCircle}
          color="green"
        />
        <StatCard
          title="Pending Fees"
          value={pendingFees.toString()}
          icon={Clock}
          color="yellow"
        />
        <StatCard
          title="Overdue Fees"
          value={overdueFees.toString()}
          icon={AlertCircle}
          color="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Payments</h3>
          <div className="space-y-3">
            {recentPayments.length > 0 ? (
              recentPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{payment.feeName}</p>
                    <p className="text-sm text-gray-600">{payment.paymentDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">₦{payment.amount.toLocaleString()}</p>
                    <p className="text-sm text-green-600">Completed</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No recent payments</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Due Dates</h3>
          <div className="space-y-3">
            {upcomingDues.length > 0 ? (
              upcomingDues.map((fee) => (
                <div key={fee.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{fee.name}</p>
                    <p className="text-sm text-gray-600">Due: {fee.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">₦{fee.amount.toLocaleString()}</p>
                    <button
                      onClick={() => onPayFee(fee.id)}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No upcoming due dates</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};