import {
  Stethoscope,
  Compass,
  ClipboardList,
  HardHat,
  Presentation,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { specialtiesContent } from "@/data/content";
import Reveal from "./Reveal";

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
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-dark uppercase">
            {specialtiesContent.eyebrow}
          </p>
          <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A] sm:text-4xl">
            {specialtiesContent.heading}
          </h2>
          <p className="text-[#4a4a4a]">{specialtiesContent.subtext}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {specialtiesContent.items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal key={item.title} delayMs={(index % 3) * 100}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                  <Icon size={22} className="text-gold-dark" />
                </div>
                <h3 className="mb-1 font-serif text-lg text-[#1A1A1A]">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="mb-2 text-xs font-medium tracking-wide text-gold uppercase">
                    {item.subtitle}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-[#666666]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
