export interface PaystackConfig {
  publicKey: string;
  email: string;
  amount: number; // in kobo (smallest currency unit)
  currency: string;
  ref: string;
  callback: (response: any) => void;
  onClose: () => void;
  metadata?: {
    student_id: string;
    fee_id: string;
    fee_name: string;
    student_name: string;
  };
}

export interface PaystackResponse {
  message: string;
  redirecturl: string;
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
}

export class PaystackService {
  private publicKey: string;

  constructor(publicKey: string) {
    this.publicKey = publicKey;
  }

  // Generate a unique reference for each transaction
  generateReference(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ESUT_${timestamp}_${random}`;
  }

  // Convert Naira to Kobo (Paystack uses kobo)
  convertToKobo(nairaAmount: number): number {
    return nairaAmount * 100;
  }

  // Initialize Paystack payment
  initializePayment(config: Omit<PaystackConfig, 'publicKey'>): void {
    // Check if Paystack is loaded
    if (typeof window === 'undefined' || !(window as any).PaystackPop) {
      console.error('Paystack library not loaded');
      return;
    }

    const handler = (window as any).PaystackPop.setup({
      key: this.publicKey,
      email: config.email,
      amount: config.amount,
      currency: config.currency || 'NGN',
      ref: config.ref,
      metadata: config.metadata,
      callback: (response: PaystackResponse) => {
        // Payment successful
        console.log('Payment successful:', response);
        config.callback(response);
      },
      onClose: () => {
        // Payment cancelled
        console.log('Payment cancelled');
        config.onClose();
      }
    });

    handler.openIframe();
  }

  // Verify payment on backend (this would typically be done on your server)
  async verifyPayment(reference: string): Promise<boolean> {
    try {
      // In a real application, this would be a call to your backend
      // which would then verify the payment with Paystack's API
      console.log('Verifying payment with reference:', reference);
      
      // Simulate verification (replace with actual backend call)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true); // Assume payment is verified
        }, 1000);
      });
    } catch (error) {
      console.error('Payment verification failed:', error);
      return false;
    }
  }
}

// Create a singleton instance
export const paystackService = new PaystackService(
  // In production, this should come from environment variables
  import.meta.env.VITE_REACT_APP_PAYSTACK_PUBLIC_KEY || 'pk_test_your_paystack_public_key_here'
);