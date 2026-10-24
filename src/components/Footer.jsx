import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark border-t border-white/10 px-6 sm:px-12 lg:px-24 py-9 text-white/70">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-start">
        <div className="text-[12.5px] text-white/45">{t.footer.rights}</div>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a
            href="mailto:b.fadwaabdullah@gmail.com"
            className="flex items-center gap-2 text-[13.5px] hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path
                d="M3 6l9 7 9-7M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
            <span>b.fadwaabdullah@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/fadwa-abdullah"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fadwa on LinkedIn"
            className="flex items-center gap-2 text-[13.5px] hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M6.94 8.5H4V20h2.94V8.5zM5.47 4a1.71 1.71 0 100 3.42 1.71 1.71 0 000-3.42zM20 13.37c0-3.2-1.7-4.69-3.97-4.69a3.43 3.43 0 00-3.11 1.71V8.5H10v11.5h2.92v-6.42c0-1.7.32-3.34 2.42-3.34 2.07 0 2.1 1.94 2.1 3.44V20H20v-6.63z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/1xfadwa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fadwa on GitHub"
            className="flex items-center gap-2 text-[13.5px] hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
