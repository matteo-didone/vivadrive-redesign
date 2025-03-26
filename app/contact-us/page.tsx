"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage(); // Add the translation hook
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
      text: t('pages.contact.benefits.cost_effective')
    },
    {
      text: t('pages.contact.benefits.safe_drivers')
    },
    {
      text: t('pages.contact.benefits.sustainable')
    }
  ];

  const contactReasons = [
    { value: "help", label: t('pages.contact.form.reason.options.help') },
    { value: "optimize", label: t('pages.contact.form.reason.options.optimize') },
    { value: "ev", label: t('pages.contact.form.reason.options.ev') },
    { value: "learn", label: t('pages.contact.form.reason.options.learn') },
    { value: "invest", label: t('pages.contact.form.reason.options.invest') }
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
                {/* Left Column - Text Content - centered only on mobile */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center lg:text-left"
                  >
                    <span className="inline-block text-emerald-600 font-medium mb-2">{t('pages.contact.title')}</span>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 leading-tight">
                      {t('pages.contact.heading').split('free demo')[0]}
                      <span className="bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] bg-clip-text text-transparent relative inline-block">
                        {t('pages.contact.heading').includes('free demo') ? 'free demo' : 'bezpłatną prezentację'}
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
                      {t('pages.contact.description')}
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
                      <div key={index} className="flex items-start justify-center lg:justify-start">
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
                  className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden relative max-w-xl mx-auto lg:ml-0 lg:mr-0"
                >
                  {/* Success message overlay */}
                  {formSubmitted && (
                    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-20 p-8">
                      <div className="w-16 h-16 flex items-center justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-emerald-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('pages.contact.form.success.title')}</h3>
                      <p className="text-gray-600 text-center max-w-xs">
                        {t('pages.contact.form.success.message')}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="p-8">
                    {/* Get in touch title with gradient */}
                    <motion.div 
                      className="mb-6 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold">
                        <span className="bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] bg-clip-text text-transparent">
                          {t('pages.contact.form.title')}
                        </span>
                      </h2>
                    </motion.div>
                    <div className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('pages.contact.form.name.label')}
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                          placeholder={t('pages.contact.form.name.placeholder')}
                        />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('pages.contact.form.phone.label')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                          placeholder={t('pages.contact.form.phone.placeholder')}
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('pages.contact.form.email.label')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                          placeholder={t('pages.contact.form.email.placeholder')}
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('pages.contact.form.company.label')}
                        </label>
                        <input
                          type="text"
                          id="company"
                          required
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                          placeholder={t('pages.contact.form.company.placeholder')}
                        />
                      </div>

                      {/* Contact Reason Dropdown */}
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('pages.contact.form.reason.label')}
                        </label>
                        <div className="relative">
                          <select
                            id="reason"
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none appearance-none bg-white"
                          >
                            <option value="" disabled selected>{t('pages.contact.form.reason.placeholder')}</option>
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
                          {t('pages.contact.form.message.label')}
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none resize-none"
                          placeholder={t('pages.contact.form.message.placeholder')}
                        ></textarea>
                      </div>

                      {/* reCAPTCHA */}
                      <div className="mb-2 flex justify-center lg:justify-start">
                        <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] hover:from-[#0F7B4B] hover:to-[#14AD69] text-white font-medium px-6 py-3 text-base rounded-full group transition-all duration-300"
                      >
                        <span>{t('pages.contact.form.send_button')}</span>
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