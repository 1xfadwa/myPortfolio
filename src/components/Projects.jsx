import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

// Fallback link for projects that don't define their own `url`.
const GITHUB_URL = "https://github.com/1xfadwa";

function ProjectCard({ project, index }) {
  const { t } = useLanguage();
  const [imageFailed, setImageFailed] = useState(false);

  const hasImage = Boolean(project.image) && !imageFailed;
  // A project marked `featured` spans the full row, but only when its image exists.
  const featured = Boolean(project.featured) && hasImage;
  const url = project.url || GITHUB_URL;
  // `noLink: true` hides the GitHub button (for projects without a public repository).
  const showLink = !project.noLink;

  return (
    <Reveal
      as="article"
      className={`group bg-white rounded-[14px] border border-transparent overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_rgba(21,52,64,0.12)] hover:border-accent/40 ${
        featured ? "sm:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-[1.1fr_1fr]" : ""
      }`}
    >
      {hasImage && (
        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[340px] bg-light border-b border-light lg:border-b-0 lg:border-e">
          <img
            src={project.image}
            alt={project.imageAlt}
            width="1200"
            height="750"
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      )}

      <div className="p-8 flex flex-col flex-grow">
        <span className="font-mono text-xs text-accent mb-5">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-[21px] font-medium mb-3">{project.name}</h3>
        <p className="text-dark2 text-[14.5px] mb-6">{project.desc}</p>

        {project.highlights && (
          <ul className="mb-6 space-y-2">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-dark2">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className={`flex flex-wrap gap-2 mt-auto ${showLink ? "mb-6" : ""}`}>
          {project.tech.map((tech) => (
            <span
              key={tech}
              dir="auto"
              className="font-mono text-[11.5px] px-2.5 py-1 rounded-md bg-light text-dark2 border border-neutral"
            >
              {tech}
            </span>
          ))}
        </div>

        {showLink && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.projects.viewGithub}: ${project.name} ${t.projects.opensNewTab}`}
            className="self-start inline-flex items-center gap-2 text-[13.5px] font-semibold text-dark pt-4 border-t border-light rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark"
          >
            <span>{t.projects.viewGithub}</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="w-[15px] h-[15px] rtl:-scale-x-100 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] rtl:group-hover:-translate-x-[3px]"
            >
              <path
                d="M4 12L12 4M12 4H5M12 4V11"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-light px-6 sm:px-12 lg:px-24 py-[100px] md:py-[150px]">
      <div className="max-w-container mx-auto">
        <Reveal className="max-w-[640px] mb-16">
          <Eyebrow className="mb-5">{t.projects.eyebrow}</Eyebrow>
          <h2 className="font-display font-medium text-[32px] sm:text-[40px] lg:text-[46px] mb-4">
            {t.projects.heading}
          </h2>
          <p className="text-dark2 text-base">{t.projects.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
