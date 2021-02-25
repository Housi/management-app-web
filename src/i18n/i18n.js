import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from '@i18n/en';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  initImmediate: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: { en },
});

export default i18n;
