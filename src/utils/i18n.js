import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationRU from "../../public/locales/ru/translation.json";
import translationUA from "../../public/locales/ua/translation.json";
import translationEN from "../../public/locales/en/translation.json";
import translationIT from "../../public/locales/it/translation.json";
import translationES from "../../public/locales/es/translation.json";

const resources = {
  ru: { common: translationRU },
  ua: { common: translationUA },
  en: { common: translationEN },
  it: { common: translationIT },
  es: { common: translationES },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "ru",
  fallbackLng: "ru",
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
