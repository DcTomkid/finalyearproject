import React, { useState } from 'react';
import { Navigation } from './components/Landing/Navigation';
import { LandingPage } from './components/Landing/LandingPage';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { DashboardView } from './components/Dashboard/DashboardView';
import { PaymentsView } from './components/Payments/PaymentsView';
import { PaymentHistoryView } from './components/History/PaymentHistoryView';
import { ProfileView } from './components/Profile/ProfileView';
import { LoginForm } from './components/Auth/LoginForm';
import { mockStudent, mockFees, mockPayments } from './data/mockData';
import { Student, FeeItem, Payment, PaymentFormData } from './types';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [student, setStudent] = useState<Student>(mockStudent);
  const [fees, setFees] = useState<FeeItem[]>(mockFees);
  const [payments, setPayments] = useState<Payment[]>(mockPayments);

  const handleLogin = (credentials: { email: string; password: string }) => {
    // In a real app, this would validate credentials with a backend
    setShowLanding(false);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setShowLanding(true);
    setIsAuthenticated(false);
    setActiveTab('dashboard');
  };

  const handlePayment = (paymentData: PaymentFormData) => {
    // Create new payment record
    const newPayment: Payment = {
      id: Date.now().toString(),
      studentId: student.id,
      feeId: paymentData.feeId,
      feeName: fees.find(f => f.id === paymentData.feeId)?.name || '',
      amount: paymentData.amount,
      paymentMethod: paymentData.paymentMethod === 'card' ? 'Credit Card' : 
                    paymentData.paymentMethod === 'bank' ? 'Bank Transfer' : 'USSD',
      paymentDate: new Date().toISOString().split('T')[0],
      status: 'completed',
      transactionId: `TXN${Date.now()}`,
      receiptUrl: '#'
    };

    // Update fees status
    setFees(prevFees => 
      prevFees.map(fee => 
        fee.id === paymentData.feeId 
          ? { ...fee, status: 'paid' as const }
          : fee
      )
    );

    // Add to payments history
    setPayments(prevPayments => [newPayment, ...prevPayments]);

    // Show success message (in a real app, this would be a toast notification)
    alert('Payment successful!');
  };

  const handlePayFee = (feeId: string) => {
    setActiveTab('payments');
  };

  const handleUpdateProfile = (updatedStudent: Student) => {
    setStudent(updatedStudent);
    // In a real app, this would update the backend
    alert('Profile updated successfully!');
  };

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardView
            fees={fees}
            payments={payments}
            onPayFee={handlePayFee}
          />
        );
      case 'payments':
        return (
          <PaymentsView
            fees={fees}
            onPayment={handlePayment}
          />
        );
      case 'history':
        return <PaymentHistoryView payments={payments} />;
      case 'profile':
        return (
          <ProfileView
            student={student}
            onUpdateProfile={handleUpdateProfile}
          />
        );
      case 'receipts':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Receipts</h2>
              <p className="text-gray-600">Download and manage your payment receipts</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <p className="text-gray-500">Receipt management feature coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Settings</h2>
              <p className="text-gray-600">Manage your account settings and preferences</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <p className="text-gray-500">Settings panel coming soon...</p>
            </div>
          </div>
        );
      case 'help':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Help & Support</h2>
              <p className="text-gray-600">Get help with your account and payments</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <p className="text-gray-500">Help center coming soon...</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (showLanding) {
    return (
      <>
        <Navigation onGetStarted={handleGetStarted} />
        <LandingPage onGetStarted={handleGetStarted} />
      </>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header student={student} onLogout={handleLogout} />
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;