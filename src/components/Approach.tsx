import Image from "next/image";
import {
  Sofa,
  Compass,
  ClipboardList,
  Briefcase,
  Presentation,
  ShieldAlert,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { approachContent, siteConfig } from "@/data/content";
import Reveal from "./Reveal";
import WhatsappIcon from "./WhatsappIcon";

const iconMap: Record<string, LucideIcon> = {
  sofa: Sofa,
  compass: Compass,
  "clipboard-list": ClipboardList,
  briefcase: Briefcase,
  presentation: Presentation,
  "shield-alert": ShieldAlert,
};

export default function Approach() {
  return (
    <section id="abordagem" className="bg-gold-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <h2 className="mb-3 font-serif text-3xl text-white sm:text-4xl">
            {approachContent.heading}
          </h2>
          <span className="mb-8 block h-px w-16 bg-white/40" />

          <div className="mb-8 divide-y divide-white/10">
            {approachContent.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.title} className="flex items-start gap-4 py-4 first:pt-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href={`https://wa.me/${siteConfig.phoneWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-opacity hover:opacity-90"
          >
            {approachContent.ctaLabel}
            <WhatsappIcon size={16} />
          </a>
        </Reveal>

        <Reveal delayMs={150} className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[6/7] w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={approachContent.image.src}
              alt={approachContent.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 28rem, 90vw"
            />
          </div>
          <div className="absolute -bottom-6 left-4 w-56 rounded-2xl bg-white p-5 text-center shadow-xl sm:left-6">
            <Heart size={22} className="mx-auto mb-2 text-gold" />
            <p className="font-serif text-base leading-tight text-gold-dark">
              {approachContent.badge.heading}
            </p>
            <span className="mx-auto my-2 block h-px w-8 bg-gold/40" />
            <p className="text-xs leading-snug text-[#666666]">
              {approachContent.badge.subtext}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
