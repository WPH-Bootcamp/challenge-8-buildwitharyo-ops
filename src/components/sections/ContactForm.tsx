import { useState, type FormEvent } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ContactModal } from "./ContactModal";
import { contact } from "../../data/content";
import type { ContactFormData } from "../../types";

const empty: ContactFormData = {
  name: "",
  email: "",
  message: "",
  services: [],
};

const inputCls =
  "w-full rounded-xl border border-ink-200 dark:border-white/10 bg-white dark:bg-[#14181f] px-4 py-3.5 text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors";

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [modal, setModal] = useState<"success" | "failed" | null>(null);

  const toggleService = (option: string) => {
    setData((prev) => ({
      ...prev,
      services: prev.services.includes(option)
        ? prev.services.filter((s) => s !== option)
        : [...prev.services, option],
    }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    // random 15% failure rate to demo both modal states
    const ok = Math.random() > 0.15;
    setSubmitting(false);
    setModal(ok ? "success" : "failed");
    if (ok) setData(empty);
  };

  return (
    <>
      <section id="contact" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              title={contact.title}
              description={contact.description}
            />
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={submit}
              className="max-w-[640px] mx-auto mt-12 md:mt-16 flex flex-col gap-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-semibold text-ink-900 dark:text-white"
                >
                  {contact.fields.nameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={data.name}
                  onChange={(e) =>
                    setData({ ...data, name: e.target.value })
                  }
                  placeholder={contact.fields.namePlaceholder}
                  className={inputCls}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-ink-900 dark:text-white"
                >
                  {contact.fields.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={data.email}
                  onChange={(e) =>
                    setData({ ...data, email: e.target.value })
                  }
                  placeholder={contact.fields.emailPlaceholder}
                  className={inputCls}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-ink-900 dark:text-white"
                >
                  {contact.fields.messageLabel}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  placeholder={contact.fields.messagePlaceholder}
                  className={`${inputCls} resize-y`}
                />
              </div>

              <fieldset>
                <legend className="block mb-3 text-sm font-semibold text-ink-900 dark:text-white">
                  {contact.fields.servicesLabel}
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {contact.serviceOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 text-ink-700 dark:text-white/70 cursor-pointer hover:text-ink-900 dark:hover:text-white transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={data.services.includes(option)}
                        onChange={() => toggleService(option)}
                        className="w-5 h-5 accent-primary"
                      />
                      <span className="text-sm md:text-base">{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 w-full rounded-xl bg-primary text-white font-semibold py-4 hover:bg-[#cc4e32] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 disabled:scale-100"
              >
                {submitting ? "Sending..." : contact.submitLabel}
              </button>
            </form>
          </Reveal>
        </Container>
      </section>
      <ContactModal state={modal} onClose={() => setModal(null)} />
    </>
  );
}
