import { Phone, MapPin, Mail, type LucideIcon } from "lucide-react";
import { contactBarContent } from "@/data/content";
import InstagramIcon from "./InstagramIcon";

const iconMap: Record<string, LucideIcon> = {
  phone: Phone,
  "map-pin": MapPin,
  mail: Mail,
};

const externalIcons = ["map-pin", "instagram"];

export default function ContactBar() {
  return (
    <section id="contato" className="bg-gold-dark py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {contactBarContent.map((item) => {
            const Icon = iconMap[item.icon];
            const isExternal = externalIcons.includes(item.icon);
            return (
              <a
                key={item.label}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 px-6 py-8 transition-colors hover:bg-white/5 sm:px-8"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-gold group-hover:text-white">
                  {Icon ? <Icon size={22} /> : <InstagramIcon size={22} />}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.15em] text-white uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-white/90">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
