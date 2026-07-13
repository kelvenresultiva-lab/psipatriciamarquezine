import Image from "next/image";
import { Check, User, Heart } from "lucide-react";
import { heroContent } from "@/data/content";
import Reveal from "./Reveal";
import WhatsappIcon from "./WhatsappIcon";

const [heroFirstName, ...heroRestName] = heroContent.title.split(" ");
const heroLastName = heroRestName.join(" ");

export default function Hero() {
  return (
    <section className="relative min-h-[820px] overflow-hidden sm:min-h-[860px] lg:min-h-[820px]">
      <Image
        src={heroContent.image.src}
        alt={heroContent.image.alt}
        fill
        priority
        className="object-cover object-[68%_10%] lg:object-[66%_20%]"
        sizes="100vw"
      />

      {/* Sem bloco sólido: o texto se apoia num véu que se dissolve, deixando
          a foto nítida onde o rosto dela aparece — de baixo pra cima no
          mobile (rosto livre em cima, texto numa faixa própria embaixo) e
          da esquerda pra direita no desktop (texto à esquerda). */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(245,232,238,0)_0%,rgba(245,232,238,0)_38%,rgba(245,232,238,0.9)_54%,rgba(245,232,238,1)_68%)] lg:bg-[linear-gradient(to_right,rgba(245,232,238,1)_0%,rgba(245,232,238,0.85)_33%,rgba(245,232,238,0)_58%)]" />

      <div className="relative mx-auto flex min-h-[820px] max-w-7xl flex-col justify-end px-6 pt-16 pb-7 sm:min-h-[860px] sm:pb-16 lg:min-h-[820px] lg:justify-center lg:px-16 lg:py-0 xl:px-20">
        <Reveal>
          <div className="flex max-w-xl flex-col">
            <Heart size={22} className="mb-4 text-gold" />

            <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold-dark uppercase">
              {heroContent.subtitle}
            </p>

            <h1 className="mb-6 font-serif text-3xl leading-tight whitespace-nowrap text-[#1A1A1A] sm:text-4xl lg:text-6xl lg:whitespace-normal">
              {heroFirstName}
              {heroLastName && (
                <>
                  <br className="hidden lg:block" />
                  <span className="lg:hidden"> </span>
                  {heroLastName}
                </>
              )}
            </h1>

            <p className="mb-8 max-w-md text-lg leading-relaxed text-[#4a4a4a]">
              {heroContent.taglineStart}
              <br className="hidden lg:block" />
              <em className="hidden font-serif font-semibold text-gold italic lg:inline">
                {heroContent.taglineHighlight}
              </em>
            </p>

            <ul className="mb-10 hidden max-w-md space-y-4 lg:block">
              {heroContent.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-[#333333]">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={heroContent.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark sm:w-auto"
              >
                {heroContent.primaryCta.label}
                <WhatsappIcon size={16} />
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-gold/40 px-7 py-3 text-sm font-semibold tracking-wider text-[#1A1A1A] uppercase transition-colors hover:bg-gold hover:border-gold hover:text-white sm:w-auto"
              >
                {heroContent.secondaryCta.label}
                <User size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
