"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, CalendarDays } from "lucide-react";
import { navLinks, siteConfig, headerCta } from "@/data/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="topo" className="sticky top-0 z-50 bg-cream/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#topo" className="shrink-0">
          <Image
            src="/images/logo-lockup-burgundy.png"
            alt={`${siteConfig.professionalName} — ${siteConfig.title}`}
            width={733}
            height={393}
            priority
            className="h-11 w-auto sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#333333] transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={headerCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-gold-dark lg:inline-flex"
        >
          {headerCta.label}
          <CalendarDays size={15} />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-[#333333] transition-colors lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[60px] z-40 flex flex-col items-center gap-8 overflow-y-auto bg-cream px-6 pt-12 pb-12 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-[#333333] hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={headerCta.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase hover:bg-gold-dark"
          >
            {headerCta.label}
            <CalendarDays size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
