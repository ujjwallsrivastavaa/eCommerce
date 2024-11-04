import { useRazorpay } from "react-razorpay";
export const handlePayment = (price,title) => {
  const amount = price * 100; // Amount in paise
  const Razorpay = useRazorpay();
  const options = {
    key: 'rzp_test_g6DU9HvDCPU7Dk', // Replace with your Razorpay key
    amount: amount, // Amount in paise
    currency: 'USD',
    name:  title,
    description: 'Purchase Product',
    handler: function (response) {
      alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
    },
    prefill: {
      name: 'Customer Name',
      email: 'customer@example.com',
      contact: '9999999999',
    },

    theme: {
      color: '#3399cc',
    },
  };

  const rzp = new Razorpay(options);

  rzp.on('payment.failed', function (response) {
    alert(`Payment failed: ${response.error.description}`);
  });

  rzp.open();
};