import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS } from "../config/emailjs";
import { useLanguage } from "../i18n/LanguageContext";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const { t } = useLanguage();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  // state: "idle" | "sending" | "success" | "error"
  const [state, setState] = useState("idle");
  const sending = state === "sending";

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function validate() {
    const next = {};
    ["name", "subject", "message"].forEach((field) => {
      if (!values[field].trim()) next[field] = t.contact.errRequired;
    });
    if (!values.email.trim()) {
      next.email = t.contact.errRequired;
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = t.contact.errEmail;
    }
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (sending) return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setState("sending");
    const clean = {
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    };

    try {
      // Several aliases are sent so the template works whichever variable names it uses
      // (e.g. {{name}} / {{from_name}}, {{email}} / {{from_email}} / {{reply_to}}).
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          ...clean,
          from_name: clean.name,
          from_email: clean.email,
          reply_to: clean.email,
          title: clean.subject,
        },
        { publicKey: EMAILJS.publicKey }
      );
      setValues(EMPTY);
      setState("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setState("error");
    }
  }

  const fields = [
    { id: "name", label: t.contact.name, type: "text", full: false },
    { id: "email", label: t.contact.email, type: "email", full: false },
    { id: "subject", label: t.contact.subject, type: "text", full: true },
  ];

  return (
    <section id="contact" className="bg-dark text-white px-6 sm:px-12 lg:px-24 py-[100px] md:py-[150px] overflow-hidden">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] md:items-center gap-x-16 gap-y-10">
        <div className="contents md:flex md:flex-col md:gap-10">
          <Reveal className="order-1 max-w-[600px]">
            <Eyebrow className="mb-5">{t.contact.eyebrow}</Eyebrow>
            <h2 className="font-display font-medium text-white text-[32px] sm:text-[40px] lg:text-[46px] mb-4">
              {t.contact.heading}
            </h2>
            <p className="text-white/70 text-base">{t.contact.intro}</p>
          </Reveal>

          <Reveal
            as="form"
            onSubmit={handleSubmit}
            noValidate
            className="order-3 max-w-[680px]"
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {fields.map((field) => (
                <div key={field.id} className={`flex flex-col gap-2 ${field.full ? "sm:col-span-2" : ""}`}>
                  <label htmlFor={field.id} className="text-[13px] text-white/75 font-medium">
                    {field.label} <span className="text-accent">*</span>
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={values[field.id]}
                    onChange={handleChange}
                    autoComplete={field.id === "email" ? "email" : field.id === "name" ? "name" : "off"}
                    aria-invalid={Boolean(errors[field.id])}
                    aria-describedby={errors[field.id] ? `err-${field.id}` : undefined}
                    className={`bg-white/[0.04] border rounded-lg px-4 py-3 text-[14.5px] text-white placeholder-white/35 focus:outline-none focus:border-accent focus:bg-white/[0.07] transition-colors ${
                      errors[field.id] ? "border-[#E7B8A8]" : "border-white/20"
                    }`}
                  />
                  <span id={`err-${field.id}`} role="alert" className="text-[12.5px] text-[#E7B8A8] min-h-[16px]">
                    {errors[field.id] || ""}
                  </span>
                </div>
              ))}

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="text-[13px] text-white/75 font-medium">
                  {t.contact.message} <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "err-message" : undefined}
                  className={`bg-white/[0.04] border rounded-lg px-4 py-3 text-[14.5px] text-white placeholder-white/35 focus:outline-none focus:border-accent focus:bg-white/[0.07] transition-colors resize-y min-h-[130px] ${
                    errors.message ? "border-[#E7B8A8]" : "border-white/20"
                  }`}
                />
                <span id="err-message" role="alert" className="text-[12.5px] text-[#E7B8A8] min-h-[16px]">
                  {errors.message || ""}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5 flex-wrap mt-2">
              <button
                type="submit"
                disabled={sending}
                aria-busy={sending}
                className="inline-flex items-center justify-center rounded-full bg-white text-dark px-[30px] py-[15px] text-[14.5px] font-semibold transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {sending ? t.contact.sending : t.contact.send}
              </button>
            </div>

            <p
              role="status"
              aria-live="polite"
              className={`text-[13.5px] mt-3.5 min-h-[20px] ${
                state === "error" ? "text-[#E7B8A8]" : "text-white/90"
              }`}
            >
              {state === "success" && t.contact.statusSuccess}
              {state === "error" && t.contact.statusError}
            </p>
          </Reveal>
        </div>

        <Reveal className="order-2 md:order-none flex items-center justify-center">
          <img
            src="/assets/hi.webp"
            alt={t.contact.alt}
            width="420"
            height="420"
            className="w-[220px] sm:w-[300px] md:w-[360px] lg:w-[420px] h-auto object-contain animate-float"
          />
        </Reveal>
      </div>
    </section>
  );
}
