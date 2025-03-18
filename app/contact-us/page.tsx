"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add your form submission logic
    setFormSubmitted(true);
    // Reset form after successful submission
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  const benefitItems = [
    {
      text: "Make your fleet cost-effective"
    },
    {
      text: "Make your driver safe and fuel efficient"
    },
    {
      text: "Make your fleet green and sustainable"
    }
  ];

  const contactReasons = [
    { value: "help", label: "How can we help you?" },
    { value: "optimize", label: "I want to optimise my fleet cost" },
    { value: "ev", label: "I want to introduce EV in my fleet" },
    { value: "learn", label: "I want to learn more about VivaDrive" },
    { value: "invest", label: "I want to invest in VivaDrive" }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section 
          ref={sectionRef}
          className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-emerald-50 to-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Text Content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                  >
                    <span className="inline-block text-emerald-600 font-medium mb-2">Contact Us</span>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 leading-tight">
                      Book a <span className="bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] bg-clip-text text-transparent relative inline-block">free demo</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-md">
                      Discover how VivaDrive can transform your fleet management with our 
                      sustainable solutions.
                    </p>
                  </motion.div>

                  {/* Benefits List */}
                  <motion.div 
                    className="space-y-6 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {benefitItems.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p className="text-lg text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </motion.div>


                </div>

                {/* Right Column - Form Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden relative"
                >
                  {/* Success message overlay */}
                  {formSubmitted && (
                    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-20 p-8">
                      <div className="w-16 h-16 flex items-center justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-emerald-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                      <p className="text-gray-600 text-center max-w-xs">
                        Your message has been sent. We'll get back to you shortly.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="p-8">
                    {/* Get in touch title with gradient - centered */}
                    <motion.div 
                      className="mb-6 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold">
                        <span className="bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] bg-clip-text text-transparent">
                          Get in touch
                        </span>
                      </h2>
                    </motion.div>
                    <div className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                        />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company name*
                        </label>
                        <input
                          type="text"
                          id="company"
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                        />
                      </div>

                      {/* Contact Reason Dropdown */}
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                          Contact reason*
                        </label>
                        <div className="relative">
                          <select
                            id="reason"
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none appearance-none bg-white"
                          >
                            <option value="" disabled selected>Select a reason</option>
                            {contactReasons.map(reason => (
                              <option key={reason.value} value={reason.value}>{reason.label}</option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Any questions?
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none resize-none"
                        ></textarea>
                      </div>

                      {/* reCAPTCHA */}
                      <div className="mb-2">
                        <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] hover:from-[#0F7B4B] hover:to-[#14AD69] text-white font-medium px-6 py-3 text-base rounded-full group transition-all duration-300"
                      >
                        <span>Send</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M22 2L11 13"></path>
                          <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}