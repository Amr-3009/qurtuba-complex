import i18n, { t } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          headerRibbon:
            "Tarbyh Namouthajiyah Schools in Alnarjis & Qurtoba are now open ",
          admissionLink: "Register Now",
        },
      },
      ar: {
        translation: {
          headerRibbon:
            "تم افتتاح مدارس التربية النموذجية في حي النرجس - حي قرطبة ",
          admissionLink: "سجل الآن ",
        },
      },
    },
  });
