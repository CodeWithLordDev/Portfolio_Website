import React, { useState } from 'react';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com'; // Import the EmailJS SDK
import { ShootingStars } from '../components/ui/shooting-stars';
import { StarsBackground } from '../components/ui/stars-background';

const ContactPage = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Get EmailJS credentials from environment variables
  const serviceID = "service_knoxe4b"
  const templateID = "template_8lf9f3f"
  const userID = "z5XmDKH2hBKKI7I3U"
  // const serviceID = process.env.REACT_PUBLIC_EMAILJS_SERVICE_ID;
  // const templateID = process.env.REACT_PUBLIC_EMAILJS_TEMPLATE_ID;
  // const userID = process.env.REACT_PUBLIC_EMAILJS_USER_ID;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        setIsSending(false);
        setStatusMessage('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        setIsSending(false);
        setStatusMessage('Oops! Something went wrong. Please try again.');
        console.error('EmailJS error:', err);
      });
  };

  return (
    <>
      <StarsBackground />
      <ShootingStars />
      <section className="text-gray-600 h-[78vh] body-font relative">
        <div className="container px-5 py-5 mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col text-center w-full mb-12"
          >
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-300">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to reach out to us for any inquiries or collaborations. We’re here to help you with your needs.
            </p>
          </motion.div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="p-2 w-1/2"
              >
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </motion.div>
              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="p-2 w-1/2"
              >
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </motion.div>
              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="p-2 w-full"
              >
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    spellCheck="false"
                  ></textarea>
                </div>
              </motion.div>
              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="p-2 w-full"
              >
                <button
                  onClick={handleSubmit}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  {isSending ? 'Sending...' : 'Submit'}
                </button>
              </motion.div>
              {/* Status Message */}
              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="p-2 w-full pt-8 mt-8 text-center"
                >
                  <p className="text-lg text-gray-600">{statusMessage}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
