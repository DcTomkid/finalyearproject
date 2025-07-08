import { Student, FeeItem, Payment } from '../types';

export const mockStudent: Student = {
  id: '1',
  studentId: 'ESUT/2023/CSC/001',
  name: 'John Doe',
  email: 'john.doe@student.esut.edu.ng',
  course: 'Computer Science',
  level: '300 Level',
  faculty: 'Physical Sciences',
  profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
};

export const mockFees: FeeItem[] = [
  {
    id: '1',
    name: 'Tuition Fee',
    amount: 45000,
    description: 'Academic tuition for 2023/2024 session',
    dueDate: '2024-03-15',
    status: 'pending',
    category: 'tuition'
  },
  {
    id: '2',
    name: 'Accommodation Fee',
    amount: 25000,
    description: 'Hostel accommodation for 2023/2024 session',
    dueDate: '2024-02-28',
    status: 'paid',
    category: 'accommodation'
  },
  {
    id: '3',
    name: 'Library Fee',
    amount: 2500,
    description: 'Library access and services',
    dueDate: '2024-04-01',
    status: 'pending',
    category: 'library'
  },
  {
    id: '4',
    name: 'Laboratory Fee',
    amount: 8000,
    description: 'Laboratory equipment and materials',
    dueDate: '2024-03-20',
    status: 'overdue',
    category: 'lab'
  },
  {
    id: '5',
    name: 'Sports Fee',
    amount: 1500,
    description: 'Sports and recreation activities',
    dueDate: '2024-04-10',
    status: 'pending',
    category: 'other'
  }
];

export const mockPayments: Payment[] = [
  {
    id: '1',
    studentId: '1',
    feeId: '2',
    feeName: 'Accommodation Fee',
    amount: 25000,
    paymentMethod: 'Card',
    paymentDate: '2024-01-15',
    status: 'completed',
    transactionId: 'TXN001234567890',
    receiptUrl: '#'
  },
  {
    id: '2',
    studentId: '1',
    feeId: '3',
    feeName: 'Library Fee',
    amount: 2500,
    paymentMethod: 'Bank Transfer',
    paymentDate: '2024-01-20',
    status: 'completed',
    transactionId: 'TXN001234567891',
    receiptUrl: '#'
  }
];