import React from 'react';
import { Users, FileText, TrendingUp, Settings, BarChart, DollarSign } from 'lucide-react';

export const AdminSection: React.FC = () => {
  const adminFeatures = [
    {
      icon: Users,
      title: 'Student Management',
      description: 'Efficiently manage student records and payment statuses'
    },
    {
      icon: FileText,
      title: 'Payment Reports',
      description: 'Generate comprehensive payment reports and analytics'
    },
    {
      icon: TrendingUp,
      title: 'Financial Summaries',
      description: 'Access real-time financial data and revenue tracking'
    },
    {
      icon: Settings,
      title: 'System Configuration',
      description: 'Customize fee structures and payment settings'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">For ESUT Administration</h2>
            <h3 className="text-2xl text-blue-200 mb-8">Smarter Tools for Efficient Management</h3>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              With ESUTPay, administrators can manage tuition payments, generate student payment reports, 
              and access real-time financial summaries—all from a single dashboard built for higher institutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {adminFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-yellow-500 p-2 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-blue-200 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg">
              Request Admin Access
            </button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <h4 className="text-xl font-bold text-gray-900">Admin Dashboard</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Total Revenue</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-900">₦2.4M</p>
                    <p className="text-xs text-green-600">+12% this month</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">Active Students</span>
                    </div>
                    <p className="text-2xl font-bold text-green-900">1,247</p>
                    <p className="text-xs text-green-600">+5% this week</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">Payments Today</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-900">89</p>
                    <p className="text-xs text-purple-600">Real-time</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="h-5 w-5 text-yellow-600" />
                      <span className="text-sm font-medium text-gray-700">Pending</span>
                    </div>
                    <p className="text-2xl font-bold text-yellow-900">23</p>
                    <p className="text-xs text-yellow-600">Requires attention</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Recent Activity</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">John Doe - Tuition Payment</span>
                      <span className="text-green-600">₦45,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Jane Smith - Lab Fee</span>
                      <span className="text-green-600">₦8,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Mike Johnson - Library Fee</span>
                      <span className="text-green-600">₦2,500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};