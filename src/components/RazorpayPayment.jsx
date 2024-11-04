import React from "react";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

const RazorpayPayment = ({ price }) => {
  const { Razorpay } = useRazorpay();

  const handlePayment = () => {
    const amount = price * 100; // Amount in paise

    const options= {
      key: 'rzp_test_g6DU9HvDCPU7Dk', // Your Razorpay key
      amount: amount, // Amount in paise
      currency: 'USD', // Currency
      name: "Ecommerce payment", // Company/Shop name
      description: 'Purchase Product', // Transaction description
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        console.log(response);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc', // Theme color
      },
    };

    // Create a new instance of Razorpay and open the payment modal
    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div>

      <button
        onClick={handlePayment}
        className="px-4 py-2 rounded-lg bg-green-600 text-white transition duration-300 hover:bg-green-700"
      >
        Buy Now
      </button>
    </div>
  );
};

export default RazorpayPayment;
