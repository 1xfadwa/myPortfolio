import { useLanguage } from "../i18n/LanguageContext";

export default function Eyebrow({ children, className = "" }) {
  const { lang } = useLanguage();
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-accent uppercase text-[12.5px] ${
        lang === "ar"
          ? "font-bold tracking-normal font-arabic"
          : "font-mono tracking-[.14em]"
      } ${className}`}
    >
      {lang !== "ar" && <span className="inline-block w-[22px] h-px bg-accent" />}
      {children}
    </p>
  );
}
