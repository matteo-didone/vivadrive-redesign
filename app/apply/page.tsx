"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CleanPhoneInput from './components/PhoneInput';
import { CheckCircle, Send, Upload, Briefcase, GraduationCap, Code, Globe, UserPlus, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ApplyPage() {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fileName, setFileName] = useState({ cv: null, coverLetter: null });
  const [selectedRole, setSelectedRole] = useState(null);
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
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
      setFileName({ cv: null, coverLetter: null });
      setSelectedRole(null);
    }, 3000);
  };
  
  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleFileChange = (e, type) => {
    if (e.target.files[0]) {
      setFileName(prev => ({ ...prev, [type]: e.target.files[0].name }));
    }
  };

  const benefitItems = [
    {
      icon: <Code className="h-6 w-6 text-emerald-500" />,
      text: t('pages.apply.benefits.real_world_projects')
    },
    {
      icon: <Briefcase className="h-6 w-6 text-emerald-500" />,
      text: t('pages.apply.benefits.get_a_job')
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-emerald-500" />,
      text: t('pages.apply.benefits.learn_from_the_best')
    },
    {
      icon: <Zap className="h-6 w-6 text-emerald-500" />,
      text: t('pages.apply.benefits.boost_your_skills')
    },
    {
      icon: <UserPlus className="h-6 w-6 text-emerald-500" />,
      text: t('pages.apply.benefits.try_before_you_buy')
    },
    {
      icon: <Globe className="h-6 w-6 text-emerald-500" />,
      text: t('pages.apply.benefits.enjoy_international_workplace')
    }
  ];

  const roleOptions = [
    { value: "python_django", label: t('pages.apply.form.role.options.python_django') },
    { value: "frontend", label: t('pages.apply.form.role.options.frontend') },
    { value: "data_scientist", label: t('pages.apply.form.role.options.data_scientist') },
    { value: "digital_marketer", label: t('pages.apply.form.role.options.digital_marketer') },
    { value: "business_developer", label: t('pages.apply.form.role.options.business_developer') },
    { value: "ux_ui", label: t('pages.apply.form.role.options.ux_ui') },
    { value: "different", label: t('pages.apply.form.role.options.different') }
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
              {/* Hero section with apply title */}
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-emerald-600 font-medium mb-2 px-4 py-1.5 bg-emerald-50 rounded-full"
                >
                  {t('pages.apply.title')}
                </motion.span>
                <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mt-4 mb-6 leading-tight"
>
  {t('pages.apply.hero.title_pre')} <span className="bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] bg-clip-text text-transparent">{t('pages.apply.hero.title_highlight')}</span>
</motion.h1>
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="max-w-2xl mx-auto text-xl text-gray-600"
>
  {t('pages.apply.hero.description')}
</motion.p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Left Column - Benefits */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('pages.apply.benefits.heading')}</h2>
                    
                    <div className="space-y-6">
                      {benefitItems.map((item, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="flex-shrink-0 p-2 bg-emerald-50 rounded-full mr-4">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-lg text-gray-800 font-medium">{item.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Form Card */}
                <div className="lg:col-span-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative"
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
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{t('pages.apply.form.success.title')}</h3>
                        <p className="text-gray-600 text-center text-lg max-w-md">
                          {t('pages.apply.form.success.message')}
                        </p>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name Field */}
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.apply.form.first_name.label')}
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                          />
                        </div>

                        {/* Last Name Field */}
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.apply.form.last_name.label')}
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                          />
                        </div>

                        {/* Email Field */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.apply.form.email.label')}
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                          />
                        </div>

                        {/* Phone Field */}
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.apply.form.phone.label')}
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

                      </div>

                      <div className="mt-6">
                        {/* Role Selection Cards */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            {t('pages.apply.form.role.label')}
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {roleOptions.map((role) => (
                              <div key={role.value} className="relative">
                                <input 
                                  type="radio" 
                                  id={role.value} 
                                  name="role" 
                                  value={role.value}
                                  checked={selectedRole === role.value}
                                  onChange={() => handleRoleChange(role.value)}
                                  className="peer absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer z-10"
                                  required
                                />
                                <label 
                                  htmlFor={role.value} 
                                  className="flex flex-col items-center justify-center p-4 h-full rounded-xl border border-gray-200 transition-all cursor-pointer hover:border-emerald-200 hover:bg-emerald-50/30 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-700"
                                >
                                  <div className={`mb-3 ${selectedRole === role.value ? 'text-emerald-500' : 'text-gray-500'}`}>
                                    {role.value === "python_django" && (
                                      <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 18.1783C12 20.0858 12.0126 22 14.7857 22C15.8167 22 16.7143 21.7772 17.5 21.3917" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M11.9816 18.1783C11.9816 20.0858 11.969 22 9.19589 22C8.16486 22 7.26737 21.7772 6.48157 21.3917" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.5 2C16.7143 2.38554 15.8167 2.60837 14.7857 2.60837C12.0126 2.60837 12 4.50495 12 6.43047V14.2467" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.48157 2C7.26725 2.38554 8.16486 2.60837 9.19589 2.60837C11.969 2.60837 11.9816 4.50495 11.9816 6.43047V14.2467" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7.5 14.5L8.5 12.5L12 16L16 12L17 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M13 8.5C13 9.05228 12.5523 9.5 12 9.5C11.4477 9.5 11 9.05228 11 8.5C11 7.94772 11.4477 7.5 12 7.5C12.5523 7.5 13 7.94772 13 8.5Z" fill="currentColor"/>
                                      </svg>
                                    )}
                                    {role.value === "frontend" && (
                                      <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    )}
                                    {role.value === "data_scientist" && (
                                      <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2V4M12 20V22M4 12H2M22 12H20M5.93 5.93L4.51 4.51M19.49 4.51L18.07 5.93M18.07 18.07L19.49 19.49M5.93 18.07L4.51 19.49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                        <path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                                      </svg>
                                    )}
                                    {role.value === "digital_marketer" && (
                                      <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V18.75C3 19.5784 3.67157 20.25 4.5 20.25H19.5C20.3284 20.25 21 19.5784 21 18.75V9.75C21 8.92157 20.3284 8.25 19.5 8.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7.5 8.25V6.375C7.5 5.175 8.175 4.125 9.75 4.125C11.325 4.125 12 5.175 12 6.375V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 8.25V6.375C12 5.175 12.675 4.125 14.25 4.125C15.825 4.125 16.5 5.175 16.5 6.375V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 16.125C13.2426 16.125 14.25 15.1176 14.25 13.875C14.25 12.6324 13.2426 11.625 12 11.625C10.7574 11.625 9.75 12.6324 9.75 13.875C9.75 15.1176 10.7574 16.125 12 16.125Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15.375 11.625L15.75 11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8.625 16.125L8.25 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15.375 16.125L15.75 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8.625 11.625L8.25 11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    )}
                                    {role.value === "business_developer" && (
                                      <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                        <path d="M8.5 13.5L11 16L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20H7C5.11438 20 4.17157 20 3.58579 19.4142C3 18.8284 3 17.8856 3 16V10Z" stroke="currentColor" strokeWidth="1.5"/>
                                      </svg>
                                    )}
                                    {role.value === "ux_ui" && (
                                      <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                                        <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M7 18C8.48516 16.6842 10.2745 16 12 16C13.7255 16 15.5148 16.6842 17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                        <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"/>
                                        <circle cx="15.5" cy="10.5" r="1.5" fill="currentColor"/>
                                      </svg>
                                    )}
                                    {role.value === "different" && (
                                      <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2V6M12 22V18M6 12H2M22 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4.92896 4.92896L7.75732 7.75732M19.0711 19.0711L16.2427 16.2427M4.92896 19.0711L7.75732 16.2427M19.0711 4.92896L16.2427 7.75732" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                                        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                                      </svg>
                                    )}
                                  </div>
                                  <span className="text-sm text-center font-medium line-clamp-2">{role.label}</span>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {/* LinkedIn Field */}
                        <div>
                          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.apply.form.linkedin.label')}
                          </label>
                          <input
                            type="url"
                            id="linkedin"
                            placeholder="https://linkedin.com/in/..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                          />
                        </div>

                        {/* GitHub Field */}
                        <div>
                          <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.apply.form.github.label')}
                          </label>
                          <input
                            type="url"
                            id="github"
                            placeholder="https://github.com/..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                          />
                        </div>

                        {/* Portfolio Field */}
                        <div>
                          <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.apply.form.portfolio.label')}
                          </label>
                          <input
                            type="url"
                            id="portfolio"
                            placeholder="https://..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {/* Cover Letter File Upload */}
                        <div>
                          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.apply.form.cover_letter.label')}
                          </label>
                          <div className="relative">
                            <label htmlFor="coverLetter" className="w-full flex items-center px-4 py-3 rounded-lg border border-gray-300 hover:border-emerald-500 transition-all cursor-pointer bg-white">
                              <Upload className="h-5 w-5 text-gray-400 mr-2" />
                              <span className="text-gray-500 truncate">
                                {fileName.coverLetter ? fileName.coverLetter : "Choose file..."}
                              </span>
                            </label>
                            <input
                              type="file"
                              id="coverLetter"
                              className="hidden"
                              onChange={(e) => handleFileChange(e, "coverLetter")}
                            />
                          </div>
                        </div>

                        {/* CV File Upload */}
                        <div>
                          <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                            {t('pages.apply.form.cv.label')}
                          </label>
                          <div className="relative">
                            <label htmlFor="cv" className="w-full flex items-center px-4 py-3 rounded-lg border border-gray-300 hover:border-emerald-500 transition-all cursor-pointer bg-white">
                            <Upload className="h-5 w-5 text-gray-400 mr-2" />
                              <span className="text-gray-500 truncate">
                                {fileName.cv ? fileName.cv : "Choose file..."}
                              </span>
                            </label>
                            <input
                              type="file"
                              id="cv"
                              required
                              className="hidden"
                              onChange={(e) => handleFileChange(e, "cv")}
                            />
                          </div>
                        </div>
                      </div>

                      {/* reCAPTCHA */}
                      <div className="mt-6 flex justify-center">
                        <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full mt-8 inline-flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] hover:from-[#0F7B4B] hover:to-[#14AD69] text-white font-medium px-6 py-4 text-lg rounded-full group transition-all duration-300"
                      >
                        <span>{t('pages.apply.form.send_button')}</span>
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
