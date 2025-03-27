"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { notFound } from "next/navigation";
import { getJobByKey } from "@/app/data/jobs";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CleanPhoneInput from '@/app/apply/components/PhoneInput';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { CheckCircle, Send, Upload, Briefcase, GraduationCap, Code, Globe, UserPlus, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ApplyPageProps {
    params: {
        position: string;
    };
}

export default function ApplyPage({ params }: ApplyPageProps) {
    const { position } = params;
    const jobPosition = getJobByKey(position);
    const { t, currentLanguage } = useLanguage();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [fileName, setFileName] = useState({ cv: null, coverLetter: null });
    const [selectedRole, setSelectedRole] = useState(position);
    const [phoneValue, setPhoneValue] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // If job position doesn't exist, show 404
    if (!jobPosition) {
        notFound();
    }

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
        }, 3000);
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

    // Get translated field
    const getTranslatedField = (fieldName: string, defaultValue: any): any => {
        // Try with different case variations of language code
        const languageVariations = [
            currentLanguage,
            currentLanguage.toLowerCase(),
            currentLanguage.toUpperCase()
        ];

        for (const langCode of languageVariations) {
            if (
                jobPosition.translations &&
                jobPosition.translations[langCode] &&
                jobPosition.translations[langCode][fieldName] !== undefined
            ) {
                return jobPosition.translations[langCode][fieldName];
            }
        }

        return defaultValue;
    };

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
                                    {t('pages.apply.hero.title_pre')} <span className="bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] bg-clip-text text-transparent">{getTranslatedField('title', jobPosition.title)}</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="max-w-2xl mx-auto text-xl text-gray-600"
                                >
                                    {getTranslatedField('shortDescription', jobPosition.shortDescription)}
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

                                            {/* Hidden role field - pre-filled based on URL */}
                                            <input type="hidden" name="role" value={position} />

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