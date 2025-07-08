import React from 'react';
import { 
  Home, 
  CreditCard, 
  History, 
  User, 
  FileText, 
  Settings,
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'payments', label: 'Pay Fees', icon: CreditCard },
    { id: 'history', label: 'Payment History', icon: History },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'receipts', label: 'Receipts', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help', icon: HelpCircle }
  ];

  return (
    <nav className="bg-white shadow-sm w-64 min-h-screen border-r border-gray-200">
      <div className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};