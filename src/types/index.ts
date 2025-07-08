export interface Student {
  id: string;
  studentId: string;
  name: string;
  email: string;
  course: string;
  level: string;
  faculty: string;
  profileImage?: string;
}

export interface FeeItem {
  id: string;
  name: string;
  amount: number;
  description: string;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
  category: 'tuition' | 'accommodation' | 'library' | 'lab' | 'other';
}

export interface Payment {
  id: string;
  studentId: string;
  feeId: string;
  feeName: string;
  amount: number;
  paymentMethod: string;
  paymentDate: string;
  status: 'completed' | 'pending' | 'failed';
  transactionId: string;
  receiptUrl?: string;
}

export interface PaymentFormData {
  feeId: string;
  amount: number;
  paymentMethod: 'card' | 'bank' | 'ussd';
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  bankCode?: string;
  accountNumber?: string;
}