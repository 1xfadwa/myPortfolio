import { useLanguage } from "../i18n/LanguageContext";
import Eyebrow from "./Eyebrow";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-center px-6 sm:px-12 lg:px-24 pt-[150px] pb-[90px] text-white overflow-hidden relative"
      style={{
        background:
          "radial-gradient(120% 100% at 15% 0%, #1D4259 0%, #153440 55%)",
      }}
    >
      <div className="max-w-container mx-auto w-full grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center">
        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute w-[340px] h-[340px] rounded-full blur-sm"
            style={{
              background:
                "radial-gradient(circle, rgba(123,146,166,0.35) 0%, rgba(123,146,166,0) 70%)",
            }}
          />
          <img
            src="/assets/okay.webp"
            alt={t.hero.alt}
            width="280"
            height="280"
            className="relative z-10 w-[210px] md:w-[280px] h-auto animate-float"
          />
        </div>

        <div className="text-center md:text-start">
          <Eyebrow className="mb-5">{t.hero.eyebrow}</Eyebrow>
          <h1 className="font-display font-medium text-white text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.12] tracking-tight mb-5">
            {t.hero.name}
          </h1>
          <p className="text-lg text-white/80 max-w-[520px] mx-auto md:mx-0 mb-9">
            {t.hero.intro}
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white text-dark px-[30px] py-[15px] text-[14.5px] font-semibold transition-transform hover:-translate-y-0.5"
            >
              {t.hero.cta1}
            </a>
            <a
              href="/assets/Fadwa-Barnawi-CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/35 text-white px-[30px] py-[15px] text-[14.5px] font-semibold transition-transform hover:-translate-y-0.5 hover:border-white"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="hidden sm:flex absolute bottom-9 left-1/2 -translate-x-1/2 flex-col items-center gap-2.5 text-white/55 font-mono text-[11px] tracking-[.16em]"
      >
        <span>{t.hero.scroll}</span>
        <span
          className="w-px h-[34px] animate-pulse2"
          style={{ background: "linear-gradient(#7B92A6, transparent)" }}
        />
      </div>
    </section>
  );
}
