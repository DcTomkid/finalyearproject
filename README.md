# ESUTPay - Automated School Fees Payment System

A modern, secure, and user-friendly school fees payment system built for Enugu State University of Science and Technology (ESUT).

## Features

- **Secure Payment Processing** with Paystack integration
- **Student Dashboard** with fee management and payment history
- **Multiple Payment Methods** (Cards, Bank Transfer, USSD)
- **Real-time Payment Verification**
- **Responsive Design** for all devices
- **Admin Dashboard** for fee management
- **Instant Receipt Generation**

## Payment Integration

This application uses Paystack for secure payment processing, supporting:
- Debit/Credit Cards (Visa, Mastercard, Verve)
- Bank Transfers
- USSD Payments
- Mobile Money

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and add your Paystack keys
4. Start the development server: `npm run dev`

## Environment Variables

Create a `.env` file with your Paystack configuration:

```
REACT_APP_PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key_here
```

## Deployment

The application is ready for deployment to any static hosting service like Netlify, Vercel, or AWS S3.

## Security

- All payments are processed securely through Paystack
- No sensitive payment data is stored locally
- Transaction verification is handled server-side
- SSL encryption for all communications

## Support

For support, email support@esutpay.com or call +234 800 123 4567.
