import React, { useState } from 'react';
import { X, CreditCard, Building, Smartphone, Loader } from 'lucide-react';
import { FeeItem, PaymentFormData } from '../../types';
import { paystackService } from '../../services/paystack';

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
    paymentMethod: 'paystack',
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

    if (formData.paymentMethod === 'paystack') {
      // Use Paystack for payment processing
      const reference = paystackService.generateReference();
      const amountInKobo = paystackService.convertToKobo(fee.amount);

      paystackService.initializePayment({
        email: 'student@esut.edu.ng', // In real app, get from user profile
        amount: amountInKobo,
        currency: 'NGN',
        ref: reference,
        metadata: {
          student_id: 'current_student_id', // Get from context
          fee_id: fee.id,
          fee_name: fee.name,
          student_name: 'Current Student Name' // Get from context
        },
        callback: async (response) => {
          // Verify payment
          const isVerified = await paystackService.verifyPayment(response.reference);
          
          if (isVerified) {
            // Payment successful
            const paymentData = {
              ...formData,
              transactionId: response.reference,
              paystackReference: response.reference
            };
            onSubmit(paymentData);
            setIsProcessing(false);
            onClose();
          } else {
            alert('Payment verification failed. Please contact support.');
            setIsProcessing(false);
          }
        },
        onClose: () => {
          setIsProcessing(false);
        }
      });
    } else {
      // Fallback for other payment methods (simulate processing)
      setTimeout(() => {
        onSubmit(formData);
        setIsProcessing(false);
        onClose();
      }, 2000);
    }
  };

  const paymentMethods = [
    { id: 'paystack', label: 'Pay with Paystack (Card/Bank)', icon: CreditCard, description: 'Secure payment via Paystack' },
    { id: 'bank', label: 'Direct Bank Transfer', icon: Building, description: 'Transfer directly to school account' },
    { id: 'ussd', label: 'USSD Payment', icon: Smartphone, description: 'Pay using USSD codes' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Pay Fee</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
            disabled={isProcessing}
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
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Payment Method
            </label>
            <div className="space-y-3">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <label 
                    key={method.id} 
                    className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.paymentMethod === method.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as any })}
                      className="mt-1 mr-3"
                      disabled={isProcessing}
                    />
                    <Icon className="h-5 w-5 mr-3 mt-0.5 text-gray-600" />
                    <div>
                      <span className="text-sm font-medium text-gray-900 block">{method.label}</span>
                      <span className="text-xs text-gray-500">{method.description}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {formData.paymentMethod === 'paystack' && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CreditCard className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">Paystack Secure Payment</span>
              </div>
              <p className="text-sm text-blue-700">
                You'll be redirected to Paystack's secure payment page where you can pay with:
              </p>
              <ul className="text-sm text-blue-600 mt-2 ml-4">
                <li>• Debit/Credit Cards (Visa, Mastercard, Verve)</li>
                <li>• Bank Transfer</li>
                <li>• USSD</li>
                <li>• Mobile Money</li>
              </ul>
            </div>
          )}

          {formData.paymentMethod === 'bank' && (
            <>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2">Bank Transfer Details</h4>
                <div className="text-sm text-yellow-800 space-y-1">
                  <p><strong>Bank:</strong> First Bank of Nigeria</p>
                  <p><strong>Account Name:</strong> ESUT School Fees Collection</p>
                  <p><strong>Account Number:</strong> 2013456789</p>
                  <p><strong>Amount:</strong> ₦{fee.amount.toLocaleString()}</p>
                </div>
                <p className="text-xs text-yellow-700 mt-2">
                  Please use your Student ID as the transfer reference
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction Reference
                </label>
                <input
                  type="text"
                  placeholder="Enter bank transfer reference"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </>
          )}

          {formData.paymentMethod === 'ussd' && (
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">USSD Payment Codes</h4>
              <div className="text-sm text-green-800 space-y-2">
                <p><strong>GTBank:</strong> *737*50*Amount*2013456789#</p>
                <p><strong>Access Bank:</strong> *901*50*Amount*2013456789#</p>
                <p><strong>First Bank:</strong> *894*50*Amount*2013456789#</p>
                <p><strong>UBA:</strong> *919*50*Amount*2013456789#</p>
              </div>
              <p className="text-xs text-green-700 mt-2">
                Replace "Amount" with {fee.amount} and follow the prompts
              </p>
            </div>
          )}

          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isProcessing}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isProcessing}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <Loader className="animate-spin h-4 w-4 mr-2" />
                  Processing...
                </>
              ) : (
                formData.paymentMethod === 'paystack' ? 'Pay with Paystack' : 'Confirm Payment'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};