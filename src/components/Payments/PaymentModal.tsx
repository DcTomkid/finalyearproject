import React, { useState } from 'react';
import { X, CreditCard, Building, Smartphone } from 'lucide-react';
import { FeeItem, PaymentFormData } from '../../types';

interface PaymentModalProps {
  fee: FeeItem;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PaymentFormData) => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ 
  fee, 
  isOpen, 
  onClose, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    feeId: fee.id,
    amount: fee.amount,
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    bankCode: '',
    accountNumber: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      onSubmit(formData);
      setIsProcessing(false);
      onClose();
    }, 2000);
  };

  const paymentMethods = [
    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
    { id: 'bank', label: 'Bank Transfer', icon: Building },
    { id: 'ussd', label: 'USSD', icon: Smartphone }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Pay Fee</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-900">{fee.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{fee.description}</p>
          <p className="text-lg font-semibold text-gray-900 mt-2">
            ₦{fee.amount.toLocaleString()}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method
            </label>
            <div className="grid grid-cols-1 gap-2">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <label key={method.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as any })}
                      className="mr-3"
                    />
                    <Icon className="h-5 w-5 mr-2 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">{method.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {formData.paymentMethod === 'card' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {formData.paymentMethod === 'bank' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bank Code
                </label>
                <select
                  value={formData.bankCode}
                  onChange={(e) => setFormData({ ...formData, bankCode: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Bank</option>
                  <option value="044">Access Bank</option>
                  <option value="014">Afribank</option>
                  <option value="023">Citibank</option>
                  <option value="050">Ecobank</option>
                  <option value="011">First Bank</option>
                  <option value="214">First City Monument Bank</option>
                  <option value="070">Fidelity Bank</option>
                  <option value="058">Guaranty Trust Bank</option>
                  <option value="030">Heritage Bank</option>
                  <option value="301">Jaiz Bank</option>
                  <option value="082">Keystone Bank</option>
                  <option value="526">Parallex Bank</option>
                  <option value="076">Polaris Bank</option>
                  <option value="101">Providus Bank</option>
                  <option value="221">Stanbic IBTC Bank</option>
                  <option value="068">Standard Chartered Bank</option>
                  <option value="232">Sterling Bank</option>
                  <option value="100">SunTrust Bank</option>
                  <option value="032">Union Bank</option>
                  <option value="033">United Bank for Africa</option>
                  <option value="215">Unity Bank</option>
                  <option value="035">Wema Bank</option>
                  <option value="057">Zenith Bank</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Number
                </label>
                <input
                  type="text"
                  placeholder="0123456789"
                  value={formData.accountNumber}
                  onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </>
          )}

          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isProcessing}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};