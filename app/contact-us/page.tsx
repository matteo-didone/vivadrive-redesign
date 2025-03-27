"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Mail, Phone, Building, MessageSquare, Send, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CleanPhoneInput from '../apply/components/PhoneInput';
import { isValidPhoneNumber } from 'react-phone-number-input';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeReason, setActiveReason] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate phone number if entered
    if (phoneValue && !isValidPhoneNumber(phoneValue)) {
      setPhoneError(true);
      return;
    }
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
      setPhoneValue("");
      setPhoneError(false);
      setActiveReason(null);
    }, 3000);
  };

  const benefitItems = [
    {
      icon: <svg className="h-10 w-10 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V2M12 20v2M6.41421 6.41421l-1.41421-1.41421M19 19l-1.4142-1.4142M4 12H2M20 12h2M6.41421 17.5858l-1.41421 1.4142M19 5l-1.4142 1.41421" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8L12 12L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>,
      title: "Cost-Effective",
      text: t('pages.contact.benefits.cost_effective')
    },
    {
      icon: <svg className="h-10 w-10 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14.5C15.3137 14.5 18 11.8137 18 8.5C18 5.18629 15.3137 2.5 12 2.5C8.68629 2.5 6 5.18629 6 8.5C6 11.8137 8.68629 14.5 12 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 21.5C16 19.567 14.433 18 12.5 18H11.5C9.567 18 8 19.567 8 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 10.5L14 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 10.5L10 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      title: "Safety First",
      text: t('pages.contact.benefits.safe_drivers')
    },
    {
      icon: <svg className="h-10 w-10 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 13L6 2L13 7L18 3L22 13M2 13H22M2 13L6 22H18L22 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 17L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 17L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>,
      title: "Sustainability",
      text: t('pages.contact.benefits.sustainable')
    }
  ];

  const contactReasons = [
    { value: "help", label: t('pages.contact.form.reason.options.help'), icon: <MessageSquare size={20} /> },
    { value: "optimize", label: t('pages.contact.form.reason.options.optimize'), icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8L6 11L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 14L6 17L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 10L16 13L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 16L16 19L21 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> },
    { value: "ev", label: t('pages.contact.form.reason.options.ev'), icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 19V9L14 4H5V19H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 9H14V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 14V12M12 14V12M15 14V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 19H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg> },
    { value: "learn", label: t('pages.contact.form.reason.options.learn'), icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.93 7.93L7.76 10.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 16H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 16H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.07 7.93L16.24 10.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 22L10 18H14L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> },
    { value: "invest", label: t('pages.contact.form.reason.options.invest'), icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 9L12 6L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15L7 20M12 15L17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 6H3.5L6 15H18L20.5 6H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section 
          ref={sectionRef}
          className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-emerald-50 to-white"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl opacity-40 z-0"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl opacity-30 z-0"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Hero header section */}
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-emerald-600 font-medium mb-2 px-4 py-1.5 bg-emerald-50 rounded-full"
                >
                  {t('pages.contact.title')}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mt-4 mb-6"
                >
                  {t('pages.contact.heading').split('free demo')[0]}
                  <span className="bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] bg-clip-text text-transparent mx-2">
                    {t('pages.contact.heading').includes('free demo') ? 'free demo' : 'bezpłatną prezentację'}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-2xl mx-auto text-xl text-gray-600"
                >
                  {t('pages.contact.description')}
                </motion.p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column - Benefits */}
                <div className="lg:col-span-5">
                  <div className="space-y-8">
                    {benefitItems.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-start"
                      >
                        <div className="flex-shrink-0 mr-5">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                          <p className="text-lg text-gray-700">{item.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Add a testimonial or trust indicators */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">{t('pages.contact.testimonial.rating')}</span>
                    </div>
                    <p className="italic text-gray-700">{t('pages.contact.testimonial.quote')}</p>
                    <div className="mt-4 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                        JD
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{t('pages.contact.testimonial.name')}</p>
                        <p className="text-sm text-gray-600">{t('pages.contact.testimonial.position')}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Form Card */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative"
                  >
                    {/* Success message overlay */}
                    {formSubmitted && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-white flex flex-col items-center justify-center z-20 p-8"
                      >
                        <div className="w-20 h-20 flex items-center justify-center mb-6 bg-emerald-50 rounded-full">
                          <CheckCircle className="h-12 w-12 text-emerald-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{t('pages.contact.form.success.title')}</h3>
                        <p className="text-gray-600 text-center text-lg max-w-md">
                          {t('pages.contact.form.success.message')}
                        </p>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="p-8">
                      {/* Get in touch title with gradient */}
                      <motion.div 
                        className="mb-8 text-center"
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

                      {/* Contact reason selection cards */}
                      <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          {t('pages.contact.form.reason.label')}
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {contactReasons.map((reason) => (
                            <button
                              key={reason.value}
                              type="button"
                              onClick={() => setActiveReason(reason.value)}
                              className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${
                                activeReason === reason.value 
                                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                                  : 'border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/30'
                              }`}
                            >
                              <div className={`mb-2 ${activeReason === reason.value ? 'text-emerald-500' : 'text-gray-500'}`}>
                                {reason.icon}
                              </div>
                              <span className="text-sm text-center font-medium">{reason.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="relative">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.contact.form.name.label')}
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              id="name"
                              required
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                              placeholder={t('pages.contact.form.name.placeholder')}
                            />
                          </div>
                        </div>

                        {/* Phone Field */}
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.contact.form.phone.label')}
                          </label>
                          <CleanPhoneInput
                            value={phoneValue}
                            onChange={setPhoneValue}
                            error={phoneError}
                            className="w-full"
                          />
                          {phoneError && (
                            <p className="mt-1 text-sm text-red-600">Please enter a valid phone number</p>
                          )}
                        </div>

                        {/* Email Field */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.contact.form.email.label')}
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              required
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                              placeholder={t('pages.contact.form.email.placeholder')}
                            />
                          </div>
                        </div>

                        {/* Company Name */}
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.contact.form.company.label')}
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Building className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              id="company"
                              required
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                              placeholder={t('pages.contact.form.company.placeholder')}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="mt-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('pages.contact.form.message.label')}
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                            <MessageSquare className="h-5 w-5 text-gray-400" />
                          </div>
                          <textarea
                            id="message"
                            rows="4"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none resize-none"
                            placeholder={t('pages.contact.form.message.placeholder')}
                          ></textarea>
                        </div>
                      </div>

                      {/* Privacy policy and reCAPTCHA */}
                      <div className="mt-6 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="privacy"
                              name="privacy"
                              type="checkbox"
                              required
                              className="h-4 w-4 text-emerald-500 border-gray-300 rounded focus:ring-emerald-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="privacy" className="text-gray-500">
                              I agree to the <a href="#" className="text-emerald-600 hover:text-emerald-500 underline">Privacy Policy</a> and consent to the processing of my data.
                            </label>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full mt-8 inline-flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] hover:from-[#0F7B4B] hover:to-[#14AD69] text-white font-medium px-6 py-4 text-lg rounded-full group transition-all duration-300 shadow-lg shadow-emerald-200"
                      >
                        <span>{t('pages.contact.form.send_button')}</span>
                        <Send className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}