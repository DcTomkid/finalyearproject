import React from 'react';
import { User, LogOut, Bell, Settings } from 'lucide-react';
import { Student } from '../../types';

interface HeaderProps {
  student: Student;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ student, onLogout }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">ESUTPay</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
              <Bell className="h-6 w-6" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
              <Settings className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                {student.profileImage ? (
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={student.profileImage}
                    alt={student.name}
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                )}
              </div>
              
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900">{student.name}</p>
                <p className="text-xs text-gray-500">{student.studentId}</p>
              </div>
            </div>
            
            <button
              onClick={onLogout}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};