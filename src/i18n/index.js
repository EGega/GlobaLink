import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en/common.json";
import sqCommon from "./locales/sq/common.json";

const storedLanguage = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    sq: { common: sqCommon },
  },
  lng: storedLanguage || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  defaultNS: "common",
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
