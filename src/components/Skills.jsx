import { useLanguage } from "../i18n/LanguageContext";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Skills() {
  const { t } = useLanguage();

  const groups = [
    { title: t.skills.groups.data, items: ["Excel", "Power BI", "SQL"] },
    { title: t.skills.groups.frontend, items: ["HTML", "CSS", "JavaScript", "React"] },
    { title: t.skills.groups.backend, items: ["C#"] },
    { title: t.skills.groups.uiux, items: ["Figma"] },
    { title: t.skills.groups.other, items: [t.skills.touchTyping] },
  ];

  return (
    <section id="skills" className="bg-white px-6 sm:px-12 lg:px-24 py-[100px] md:py-[150px]">
      <div className="max-w-container mx-auto">
        <Reveal className="max-w-[640px] mb-16">
          <Eyebrow className="mb-5">{t.skills.eyebrow}</Eyebrow>
          <h2 className="font-display font-medium text-[32px] sm:text-[40px] lg:text-[46px] mb-4">
            {t.skills.heading}
          </h2>
        </Reveal>

        <Reveal>
          <Eyebrow className="mb-5">{t.skills.hard}</Eyebrow>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {groups.map((group) => (
            <Reveal
              as="div"
              key={group.title}
              className="sm:[&:last-child:nth-child(odd)]:col-span-2 border border-dark/10 rounded-[14px] p-7 transition-all hover:border-accent hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(21,52,64,0.08)]"
            >
              <h3 className="text-[14px] font-semibold uppercase tracking-wide text-dark2 mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    dir="auto"
                    className="text-sm px-4 py-2 rounded-full bg-light text-dark border border-transparent transition-colors hover:bg-white hover:border-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Eyebrow className="mb-5">{t.skills.soft}</Eyebrow>
          <ul className="flex flex-wrap gap-3">
            {t.skills.softList.map((item, i) => (
              <li
                key={item}
                className={`font-mono text-[13px] px-[18px] py-2.5 rounded-lg text-white transition-colors hover:bg-accent ${
                  i % 2 === 0 ? "bg-dark" : "bg-dark2"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
