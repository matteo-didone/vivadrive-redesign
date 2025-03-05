"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

// Available languages configuration
export const languages = {
    EN: {
        code: 'EN',
        label: 'English',
        nativeName: 'English',
        direction: 'ltr',
        dateFormat: 'MM/DD/YYYY',
        flag: '🇺🇸',
    },
    PL: {
        code: 'PL',
        label: 'Polish',
        nativeName: 'Polski',
        direction: 'ltr',
        dateFormat: 'DD.MM.YYYY',
        flag: '🇵🇱',
    },
};

// Create context with a default value
const LanguageContext = createContext({
    currentLanguage: 'EN',
    switchLanguage: (langCode: string) => { },
    t: (key: string, variables?: Record<string, any>) => key,
    formatDate: (date: Date | string, format?: any) => '',
    formatNumber: (number: number, options?: Intl.NumberFormatOptions) => '',
    languages,
    isLoading: true,
    direction: 'ltr'
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentLanguage, setCurrentLanguage] = useState('EN');
    const [translations, setTranslations] = useState<Record<string, any>>({});
    const [isLoading, setIsLoading] = useState(true);

    // Try to get language from localStorage or use browser language or default to EN
    const getBrowserLanguage = () => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('language');
            if (storedLanguage && languages[storedLanguage as keyof typeof languages]) {
                return storedLanguage;
            }

            const browserLang = navigator.language.split('-')[0].toUpperCase();
            return languages[browserLang as keyof typeof languages] ? browserLang : 'EN';
        }
        return 'EN';
    };

    // Load translations for the current language
    useEffect(() => {
        const loadTranslations = async () => {
            setIsLoading(true);
            try {
                // Dynamic import of language files
                // Make sure the path is correct relative to your project structure
                const langData = await import(`@/locales/${currentLanguage.toLowerCase()}.json`);
                setTranslations(langData.default || langData);
            } catch (error) {
                console.error(`Failed to load translations for ${currentLanguage}:`, error);
                // Fallback to English
                if (currentLanguage !== 'EN') {
                    try {
                        const fallbackData = await import('@/locales/en.json');
                        setTranslations(fallbackData.default || fallbackData);
                    } catch (e) {
                        console.error("Failed to load fallback translations:", e);
                        setTranslations({});
                    }
                }
            } finally {
                setIsLoading(false);
            }
        };

        loadTranslations();
    }, [currentLanguage]);

    // Initialize language on component mount
    useEffect(() => {
        setCurrentLanguage(getBrowserLanguage());
    }, []);

    // Switch language function
    const switchLanguage = (langCode: string) => {
        if (languages[langCode as keyof typeof languages]) {
            setCurrentLanguage(langCode);

            if (typeof window !== 'undefined') {
                localStorage.setItem('language', langCode);

                // Set HTML dir attribute for RTL languages if needed
                document.documentElement.dir = languages[langCode as keyof typeof languages].direction;

                // You could also add meta tags for SEO
                document.documentElement.lang = langCode.toLowerCase();
            }
        }
    };

    // Translation function with nested key support and variables support
    const t = (key: string, variables: Record<string, any> = {}) => {
        if (!translations || isLoading) return key;

        // Handle nested keys (e.g., "nav.solutions")
        const keyParts = key.split('.');
        let value = translations;

        // Traverse the nested object
        for (const part of keyParts) {
            if (value && typeof value === 'object' && part in value) {
                value = value[part];
            } else {
                // Key not found in translations
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        // If we've reached a non-object (string) value, that's our translation
        if (typeof value === 'string') {
            // Replace variables in the text (format: {{variableName}})
            if (Object.keys(variables).length > 0) {
                Object.keys(variables).forEach(varName => {
                    const regex = new RegExp(`{{${varName}}}`, 'g');
                    value = value.replace(regex, variables[varName]);
                });
            }
            return value;
        }

        // If we reach here, the key exists but doesn't point to a string
        console.warn(`Translation key does not point to a string: ${key}`);
        return key;
    };

    // Format date according to locale
    const formatDate = (date: Date | string, format: any = null) => {
        const dateObj = date instanceof Date ? date : new Date(date);
        const options = format ? format : {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        try {
            return dateObj.toLocaleDateString(
                currentLanguage.toLowerCase() + '-' + currentLanguage,
                options
            );
        } catch (e) {
            console.error("Error formatting date:", e);
            return dateObj.toDateString();
        }
    };

    // Format number according to locale
    const formatNumber = (number: number, options: Intl.NumberFormatOptions = {}) => {
        try {
            return new Intl.NumberFormat(
                currentLanguage.toLowerCase() + '-' + currentLanguage,
                options
            ).format(number);
        } catch (e) {
            console.error("Error formatting number:", e);
            return number.toString();
        }
    };

    return (
        <LanguageContext.Provider
            value={{
                currentLanguage,
                switchLanguage,
                t,
                formatDate,
                formatNumber,
                languages,
                isLoading,
                direction: languages[currentLanguage as keyof typeof languages]?.direction || 'ltr'
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);