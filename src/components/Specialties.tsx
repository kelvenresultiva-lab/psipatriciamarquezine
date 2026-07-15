import {
  Stethoscope,
  Compass,
  ClipboardList,
  HardHat,
  Presentation,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { specialtiesContent, siteConfig } from "@/data/content";
import Reveal from "./Reveal";
import WhatsappIcon from "./WhatsappIcon";

const iconMap: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  compass: Compass,
  "clipboard-list": ClipboardList,
  "hard-hat": HardHat,
  presentation: Presentation,
  "shield-alert": ShieldAlert,
};

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-dark uppercase">
            {specialtiesContent.eyebrow}
          </p>
          <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A] sm:text-4xl">
            {specialtiesContent.heading}
          </h2>
          <span className="mx-auto mb-5 block h-px w-16 bg-gold" />
          <p className="text-[#4a4a4a]">{specialtiesContent.subtext}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {specialtiesContent.items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.title} delayMs={(index % 3) * 100} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl bg-gold-dark p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white transition-colors group-hover:bg-gold">
                  <Icon size={26} strokeWidth={1.75} />
                </div>

                <h3 className="mb-2 font-serif text-lg leading-snug text-white">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
                    {item.subtitle}
                  </span>
                )}

                <p className="text-sm leading-relaxed text-white/80">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mx-auto mt-14 max-w-xl px-6 text-center lg:px-8">
        <p className="mb-6 font-serif text-xl text-[#1A1A1A] sm:text-2xl">
          {specialtiesContent.ctaText}
        </p>
        <a
          href={`https://wa.me/${siteConfig.phoneWhatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark"
        >
          {specialtiesContent.ctaLabel}
          <WhatsappIcon size={16} />
        </a>
      </Reveal>
    </section>
  );
}
