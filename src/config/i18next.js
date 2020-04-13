import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import lt from './locales/lt.json';
import en from './locales/en.json';
import de from './locales/de.json';

i18next
  .use(initReactI18next)
  .init({
    lng: 'lt',
    resources: {
      lt: { translation: lt },
      en: { translation: en },
      de: { translation: de },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;