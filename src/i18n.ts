import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Language, Namespaces } from '@UG/libs/types';
import translationsEN from './assets/translations/en.json';
import translationsPL from './assets/translations/pl.json';
import translationsENAdminPanel from './AdminPanel/assets/translations/en.json';
import translationsPLAdminPanel from './AdminPanel/assets/translations/pl.json';
import translationsENLibs from './libs/assets/translations/en.json';
import translationsPLLibs from './libs/assets/translations/pl.json';

i18n.use(initReactI18next).init({
  resources: {
    [Language.PL]: {
      [Namespaces.MAIN_APP]: translationsPL,
      [Namespaces.ADMIN_PANEL]: translationsPLAdminPanel,
      [Namespaces.LIBS]: translationsPLLibs,
    },
    [Language.EN]: {
      [Namespaces.MAIN_APP]: translationsEN,
      [Namespaces.ADMIN_PANEL]: translationsENAdminPanel,
      [Namespaces.LIBS]: translationsENLibs,
    },
  },
  lng: Language.PL,
  defaultNS: Namespaces.MAIN_APP,
  debug: true,
  fallbackLng: Language.EN,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
