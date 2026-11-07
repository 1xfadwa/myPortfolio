import { createContext, useContext, useEffect, useState } from "react";
import translations from "./translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "fb-portfolio-lang";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || "en";
    } catch {
      return "en";
    }
  });

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
    document.title =
      lang === "ar"
        ? "فدوى برناوي — مطوّرة واجهات أمامية ومحللة بيانات"
        : "Fadwa Barnawi — Front-End Developer & Data Analyst";
  }, [lang, dir]);

  function setLang(next) {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
