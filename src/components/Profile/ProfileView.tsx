import React, { useState } from 'react';
import { User, Mail, BookOpen, GraduationCap, Building, Edit3, Save, X } from 'lucide-react';
import { Student } from '../../types';

interface ProfileViewProps {
  student: Student;
  onUpdateProfile: (updatedStudent: Student) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ student, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStudent, setEditedStudent] = useState(student);

  const handleSave = () => {
    onUpdateProfile(editedStudent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedStudent(student);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
          <p className="text-gray-600">Manage your personal information</p>
        </div>
        
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Edit3 className="h-4 w-4 mr-2" />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex items-center space-x-6 mb-8">
            <div className="relative">
              {student.profileImage ? (
                <img
                  src={student.profileImage}
                  alt={student.name}
                  className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-lg">
                  <User className="h-12 w-12 text-blue-600" />
                </div>
              )}
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700 transition-colors">
                  <Edit3 className="h-4 w-4" />
                </button>
              )}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{student.name}</h3>
              <p className="text-gray-600">{student.studentId}</p>
              <p className="text-gray-500 text-sm">{student.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedStudent.name}
                    onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-900">{student.name}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editedStudent.email}
                    onChange={(e) => setEditedStudent({ ...editedStudent, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-900">{student.email}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student ID
                </label>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-900">{student.studentId}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course of Study
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedStudent.course}
                    onChange={(e) => setEditedStudent({ ...editedStudent, course: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-900">{student.course}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Level
                </label>
                {isEditing ? (
                  <select
                    value={editedStudent.level}
                    onChange={(e) => setEditedStudent({ ...editedStudent, level: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="100 Level">100 Level</option>
                    <option value="200 Level">200 Level</option>
                    <option value="300 Level">300 Level</option>
                    <option value="400 Level">400 Level</option>
                    <option value="500 Level">500 Level</option>
                  </select>
                ) : (
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-900">{student.level}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Faculty
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedStudent.faculty}
                    onChange={(e) => setEditedStudent({ ...editedStudent, faculty: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-900">{student.faculty}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};