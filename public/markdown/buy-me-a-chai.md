# Buy Me a Chai
A Next.js application designed to allow users to support creators through small contributions. It includes user authentication and integrates Razorpay for payments.

## ***Features***
- User authentication
- Payment integration with Razorpay
- Clean and modern UI

## Technologies Used***
- Next.js
- Razorpay API
- React
- Tailwind CSS

## ***Razorpay Integration Code***
To integrate Razorpay, you can add the following code in your component to load Razorpay's checkout script:

```javascript

  import { useEffect } from 'react';

  const RazorpayButton = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        // Razorpay payment integration
        const options = {
          key: 'YOUR_RAZORPAY_KEY',
          amount: 50000,  // Example amount in paise
          currency: 'INR',
          name: 'Buy Me a Chai',
          description: 'Support your favorite creator',
          image: '/path-to-your-logo.png',
          handler: function (response) {
            alert("Payment Successful!");
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      };
      document.body.appendChild(script);
    }, []);
    
    return <button onClick={ () => { /* invoke Razorpay script here */ } }>Pay with Razorpay</button>;
  };

  export default RazorpayButton;

```

## ***Setup for Next.js App***

```bash

  npx create-next-app@latest buy-me-a-chai

```
-Install Razorpay SDK

```bash

  npm install razorpay

```
-Set up authentication (e.g., using NextAuth.js or your custom auth)