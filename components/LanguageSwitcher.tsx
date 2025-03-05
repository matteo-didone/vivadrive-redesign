"use client";

import React from 'react';
import { Globe, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageSwitcherProps {
  variant?: 'default' | 'minimal' | 'mobile';
}

const LanguageSwitcher = ({ variant = 'default' }: LanguageSwitcherProps) => {
  const { currentLanguage, switchLanguage, languages } = useLanguage();
  const languageArray = Object.values(languages);

  if (variant === 'minimal') {
    return (
      <div className="flex gap-3 items-center">
        {languageArray.map((lang) => (
          <button
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`text-sm transition-colors ${
              lang.code === currentLanguage
                ? 'text-primary font-medium'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.code}
          </button>
        ))}
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-2">
        <Globe className="h-5 w-5 text-gray-500" />
        <div className="flex gap-4">
          {languageArray.map((lang) => (
            <button 
              key={lang.code}
              className={`${lang.code === currentLanguage ? 'text-primary font-bold' : 'text-gray-500'}`}
              onClick={() => switchLanguage(lang.code)}
            >
              {lang.code}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Default dropdown variant
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2 h-9">
          <Globe className="h-4 w-4 mr-1 text-gray-500" />
          <span>{currentLanguage}</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 text-gray-500">
            <path d="M6 8.5L2 4.5H10L6 8.5Z" fill="currentColor"/>
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languageArray.map((lang) => (
          <DropdownMenuItem 
            key={lang.code} 
            onClick={() => switchLanguage(lang.code)}
            className="flex items-center justify-between px-3 py-2 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{lang.flag}</span>
              <span className={lang.code === currentLanguage ? "font-medium" : ""}>
                {lang.nativeName}
              </span>
            </div>
            {lang.code === currentLanguage && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;