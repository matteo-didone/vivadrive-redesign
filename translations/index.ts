import en from "./en";
import pl from "./pl";

export type LanguageCode = "EN" | "PL";

// Define the languages with their properties
export const LANGUAGES = {
  EN: {
    code: "EN",
    label: "English",
    nativeName: "English",
    flag: "🇬🇧",
  },
  PL: {
    code: "PL",
    label: "Polish",
    nativeName: "Polski",
    flag: "🇵🇱",
  },
};

// Export all translations
const translations = {
  EN: en,
  PL: pl,
};

export default translations;
