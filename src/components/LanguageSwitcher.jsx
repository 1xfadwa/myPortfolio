import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSwitcher({ scrolled }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-sm font-semibold transition-colors ${
          scrolled
            ? "border-dark/25 text-dark bg-dark/5 hover:border-accent"
            : "border-white/35 text-white bg-white/5 hover:border-accent"
        }`}
      >
        <span>{lang.toUpperCase()}</span>
        <svg
          viewBox="0 0 10 6"
          fill="none"
          className={`w-[9px] h-[9px] transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>

      <div
        role="listbox"
        className={`absolute top-[calc(100%+10px)] ltr:right-0 rtl:left-0 min-w-[150px] bg-white rounded-[10px] overflow-hidden shadow-[0_18px_40px_rgba(21,52,64,0.18)] transition-all origin-top ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        {[
          { code: "en", label: "English" },
          { code: "ar", label: "العربية" },
        ].map((opt) => (
          <button
            key={opt.code}
            type="button"
            role="option"
            aria-selected={lang === opt.code}
            onClick={() => {
              setLang(opt.code);
              setOpen(false);
            }}
            className="w-full text-start px-4 py-3 text-sm text-dark flex items-center justify-between hover:bg-light transition-colors"
          >
            <span>{opt.label}</span>
            <span className={`text-accent text-xs ${lang === opt.code ? "opacity-100" : "opacity-0"}`}>
              ✓
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
