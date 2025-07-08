import React from 'react';
import { GraduationCap, Users, Shield, Zap, Clock, CreditCard, FileText } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Pay your fees anytime, anywhere with round-the-clock access to our platform.'
    },
    {
      icon: Shield,
      title: 'Instant Receipts',
      description: 'Get immediate payment confirmation and digital receipts for all transactions.'
    },
    {
      icon: CreditCard,
      title: 'Multiple Payment Options',
      description: 'Choose from Debit Card, Bank Transfer, or USSD for convenient payments.'
    },
    {
      icon: Users,
      title: 'Easy Dashboard',
      description: 'Navigate through our intuitive interface designed for all users.'
    },
    {
      icon: FileText,
      title: 'Transparent Records',
      description: 'Access complete transaction history and payment records anytime.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About ESUTPay</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ESUTPay is a smart digital platform developed to streamline the process of paying school fees at 
            Enugu State University of Science and Technology (ESUT). Our system empowers students and guardians 
            with a simple, reliable, and secure way to pay fees while helping ESUT efficiently manage finances.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose ESUTPay?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">{feature.title}</h4>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
          <h3 className="text-3xl font-bold mb-4">Trusted by ESUT Community</h3>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of students and parents who have made ESUTPay their preferred choice for secure, 
            convenient school fee payments.
          </p>
        </div>
      </div>
    </section>
  );
};