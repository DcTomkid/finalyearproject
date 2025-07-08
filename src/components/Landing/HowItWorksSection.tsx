import React from 'react';
import { UserPlus, Building, CreditCard, CheckCircle } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create an Account',
      description: 'Register as a student or guardian with your ESUT credentials.',
      color: 'bg-blue-500'
    },
    {
      icon: Building,
      title: 'Select Your Department',
      description: 'Choose your faculty and correct academic level for accurate fee calculation.',
      color: 'bg-green-500'
    },
    {
      icon: CreditCard,
      title: 'Make Payment',
      description: 'Pay securely via your preferred method - Card, Bank Transfer, or USSD.',
      color: 'bg-purple-500'
    },
    {
      icon: CheckCircle,
      title: 'Get Confirmation',
      description: 'Receive instant payment confirmation and downloadable e-receipt.',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with ESUTPay is simple. Follow these four easy steps to complete your fee payment.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex-1 h-0.5 bg-gray-300 mx-8 mt-8"></div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold text-gray-600">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Start Your Payment Journey
          </button>
        </div>
      </div>
    </section>
  );
};