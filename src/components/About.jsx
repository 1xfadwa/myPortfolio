import { useLanguage } from "../i18n/LanguageContext";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-light px-6 sm:px-12 lg:px-24 py-[100px] md:py-[150px]">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-[70px] items-center">
        <Reveal className="text-center md:text-start">
          <Eyebrow className="mb-5">{t.about.eyebrow}</Eyebrow>
          <h2 className="font-display font-medium text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.12] mb-6">
            {t.about.heading}
          </h2>
          <p className="text-[16.5px] text-dark2 max-w-[560px] mx-auto md:mx-0 mb-4">
            {t.about.p1}
          </p>
          <p className="text-[16.5px] text-dark2 max-w-[560px] mx-auto md:mx-0">
            {t.about.p2}
          </p>
        </Reveal>

        <Reveal className="flex justify-center relative">
          <div
            aria-hidden="true"
            className="absolute w-[300px] h-[300px] rounded-full border border-neutral"
          />
          <img
            src="/assets/creative.webp"
            alt={t.about.alt}
            width="250"
            height="250"
            className="relative z-10 w-[200px] md:w-[250px] animate-floatSlow"
          />
        </Reveal>
      </div>
    </section>
  );
}
