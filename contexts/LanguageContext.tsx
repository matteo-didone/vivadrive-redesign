"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import translations, { LANGUAGES, LanguageCode } from '@/translations';
import get from 'lodash/get'; // For safely accessing nested properties

// Interface for a language
interface Language {
  code: LanguageCode;
  label: string;
  nativeName: string;
  flag: string;
}

// Interface for the language context
interface LanguageContextType {
  currentLanguage: LanguageCode;
  switchLanguage: (code: LanguageCode) => void;
  t: (key: string, variables?: Record<string, any>) => string; // Updated to support variables
  languages: Record<LanguageCode, Language>;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Initialize from localStorage if available, otherwise default to English
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('EN');

  // Load saved language preference on initial mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageCode | null;
    if (savedLanguage && Object.keys(LANGUAGES).includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Switch language function
  const switchLanguage = (code: LanguageCode) => {
    setCurrentLanguage(code);
    localStorage.setItem('language', code);
    // Optional: Update HTML lang attribute
    document.documentElement.lang = code.toLowerCase();
  };

  // Translation function that uses lodash get to safely access nested properties
  // and supports variable interpolation
  const t = (key: string, variables?: Record<string, any>): string => {
    let value = get(translations[currentLanguage], key);

    // If the key doesn't exist, return the key itself
    if (value === undefined) {
      return key;
    }

    // Replace variables in the string if there are any
    if (variables && typeof value === 'string') {
      Object.entries(variables).forEach(([varName, varValue]) => {
        value = value.replace(new RegExp(`{{${varName}}}`, 'g'), String(varValue));
      });
    }

    return value;
  };

  const value = {
    currentLanguage,
    switchLanguage,
    t,
    languages: LANGUAGES
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};