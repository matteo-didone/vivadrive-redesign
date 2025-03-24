"use client";

import React from 'react';
import { Globe, Check, ChevronRight, ChevronDown } from 'lucide-react';
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

  // Custom underline hover effect to match the header style
  const underlineHoverClass = "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-4/5";

  if (variant === 'minimal') {
    return (
      <div className="flex gap-3 items-center">
        {languageArray.map((lang) => (
          <button
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`text-sm transition-colors ${lang.code === currentLanguage
                ? 'text-emerald-600 font-medium'
                : 'text-gray-500 hover:text-gray-900'
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
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className={`flex-1 justify-center ${currentLanguage === "EN" ? "border-emerald-500 text-emerald-600 bg-emerald-50" : ""
              }`}
            onClick={() => switchLanguage("EN")}
          >
            <span className="text-base mr-2">🇬🇧</span>
            English
            {currentLanguage === "EN" && (
              <ChevronRight className="ml-auto h-4 w-4 text-emerald-500" />
            )}
          </Button>
          <Button
            variant="outline"
            className={`flex-1 justify-center ${currentLanguage === "PL" ? "border-emerald-500 text-emerald-600 bg-emerald-50" : ""
              }`}
            onClick={() => switchLanguage("PL")}
          >
            <span className="text-base mr-2">🇵🇱</span>
            Polski
            {currentLanguage === "PL" && (
              <ChevronRight className="ml-auto h-4 w-4 text-emerald-500" />
            )}
          </Button>
        </div>
      </div>
    );
  }

  // Default dropdown variant styled to match the site
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 gap-1 px-2 ${underlineHoverClass}`}
        >
          <Globe className="h-4 w-4 text-emerald-500" />
          <span className="text-sm font-medium">{currentLanguage}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 rounded-xl border-0 shadow-xl"
      >
        {languageArray.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`
              flex items-center justify-between px-3 py-2 cursor-pointer
              ${currentLanguage === lang.code ? "bg-gray-50" : ""}
            `}
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{lang.flag}</span>
              <span className={currentLanguage === lang.code ? "font-medium text-emerald-600" : ""}>
                {lang.nativeName}
              </span>
            </div>
            {currentLanguage === lang.code && (
              <ChevronRight className="ml-auto h-4 w-4 text-emerald-500" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;