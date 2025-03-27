import React from 'react';
import PhoneInput from 'react-phone-number-input';
import { E164Number } from 'libphonenumber-js/types';

interface CleanPhoneInputProps {
  value: E164Number | undefined;
  onChange: (value: E164Number | undefined) => void;
  error?: boolean;
  className?: string;
  defaultCountry?: string;
}

const CleanPhoneInput: React.FC<CleanPhoneInputProps> = ({ 
  value, 
  onChange, 
  error, 
  className,
  defaultCountry = "PL" // Default to Poland if not specified
}) => {
  // Custom styling to make the phone input cleaner and more elegant
  return (
    <div className={`${className || ''} relative ${error ? 'ring-2 ring-red-500 rounded-lg' : ''}`}>
      <style jsx global>{`
        /* Override default phone input styling */
        .PhoneInput {
          display: flex;
          align-items: center;
        }
        
        .PhoneInputCountry {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          margin-right: 0.5rem;
          z-index: 1;
        }
        
        .PhoneInputCountryIcon {
          width: 1.5rem;
          height: 1rem;
          border-radius: 2px;
          overflow: hidden;
        }
        
        .PhoneInputCountrySelectArrow {
          margin: 0 3px;
          width: 6px;
          height: 6px;
          border-style: solid;
          border-color: #6b7280;
          border-top-width: 0;
          border-right-width: 1px;
          border-bottom-width: 1px;
          border-left-width: 0;
          transform: rotate(45deg);
          opacity: 0.6;
        }
        
        .PhoneInputInput {
          flex: 1;
          padding: 0.75rem 0.75rem 0.75rem 4.5rem;
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
        }
        
        /* Reset button styling */
        .PhoneInputCountrySelect {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 4rem;
          z-index: 1;
          opacity: 0;
          cursor: pointer;
        }
      `}</style>
      
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry={defaultCountry}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-all"
      />
    </div>
  );
};

export default CleanPhoneInput;