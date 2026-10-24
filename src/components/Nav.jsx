import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const SECTIONS = ["home", "about", "skills", "projects", "contact"];

export default function Nav() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const links = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[80] flex items-center justify-between transition-all duration-300 px-6 sm:px-12 lg:px-24 ${
        scrolled
          ? "bg-light/85 backdrop-blur-md py-3.5 shadow-[0_1px_0_rgba(21,52,64,0.08)]"
          : "py-5"
      }`}
    >
      <a
        href="#home"
        className={`font-display font-semibold text-[19px] tracking-wide transition-colors ${
          scrolled ? "text-dark" : "text-white"
        }`}
      >
        Fadwa
      </a>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
        className="md:hidden relative z-[110] w-[38px] h-[38px]"
      >
        <span
          className={`block w-[22px] h-[2px] mx-auto my-[5px] transition-colors ${
            menuOpen || !scrolled ? "bg-white" : "bg-dark"
          }`}
        />
        <span
          className={`block w-[22px] h-[2px] mx-auto my-[5px] transition-colors ${
            menuOpen || !scrolled ? "bg-white" : "bg-dark"
          }`}
        />
        <span
          className={`block w-[22px] h-[2px] mx-auto my-[5px] transition-colors ${
            menuOpen || !scrolled ? "bg-white" : "bg-dark"
          }`}
        />
      </button>

      <nav
        aria-label="Primary"
        className={`
          md:static md:flex md:flex-row md:w-auto md:h-auto md:items-center md:justify-start md:gap-9 md:bg-transparent md:translate-y-0
          fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-dark
          transition-transform duration-500 ease-out
          ${menuOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"}
        `}
      >
        {links.map((link) => {
          const isActive = active === link.id;
          const desktopColor = scrolled
            ? isActive
              ? "md:text-dark"
              : "md:text-dark2"
            : isActive
            ? "md:text-white"
            : "md:text-white/85";
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`relative py-1 text-[22px] md:text-sm font-medium font-display md:font-body text-white transition-colors ${desktopColor}`}
            >
              {link.label}
              <span
                className={`hidden md:block absolute -bottom-0.5 start-0 h-px bg-accent transition-all duration-300 ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </a>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center justify-center gap-2 rounded-full border px-[22px] py-[11px] text-[13px] font-semibold transition-transform hover:-translate-y-0.5 ${
            scrolled
              ? "border-dark text-dark hover:bg-dark hover:text-white"
              : "border-white/35 text-white hover:border-white"
          }`}
        >
          {t.nav.cta}
        </a>
        <LanguageSwitcher scrolled={scrolled} />
      </div>
    </header>
  );
}
