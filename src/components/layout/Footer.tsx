import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { COMPANY_INFO } from "@/config/company";
import { FOOTER_NAV_SECTIONS } from "@/config/navigation";

/**
 * Global Footer Component.
 * Styled using a premium dark theme contrast base (#0F172A) to anchor light pages.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-slate-800 pt-16 pb-8 font-sans text-sm mt-auto text-slate-300">
      <Container>
        {/* Top Section - Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand/Contact Description */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="text-slate-400 leading-relaxed max-w-sm mt-2">
              {COMPANY_INFO.tagline}. Delivering enterprise-grade technology solutions, IT consulting, and custom software engineering.
            </p>
            <div className="flex flex-col gap-2.5 mt-2 text-slate-400">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#60A5FA] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#60A5FA] rounded"
              >
                <Phone size={16} className="text-[#60A5FA]/70 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#60A5FA] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#60A5FA] rounded"
              >
                <Mail size={16} className="text-[#60A5FA]/70 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#60A5FA]/70 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-400">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.subdivision},<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.zip}
                </span>
              </div>
            </div>
          </div>

          {/* Render Sections mapped from Navigation Config */}
          {FOOTER_NAV_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="font-bold text-white uppercase tracking-wider text-xs">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-[#60A5FA] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#60A5FA] rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section - Socials and Copyright Info */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>

          {/* Social Media Link Icons using Inline SVGs for version independence */}
          <div className="flex items-center gap-4">
            <a
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-slate-800 text-slate-400 hover:text-[#60A5FA] hover:border-[#60A5FA]/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
              aria-label={`${COMPANY_INFO.name} LinkedIn Profile`}
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={COMPANY_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-slate-800 text-slate-400 hover:text-[#60A5FA] hover:border-[#60A5FA]/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
              aria-label={`${COMPANY_INFO.name} Twitter/X Profile`}
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={COMPANY_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-slate-800 text-slate-400 hover:text-[#60A5FA] hover:border-[#60A5FA]/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
              aria-label={`${COMPANY_INFO.name} Facebook Page`}
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {COMPANY_INFO.socials.instagram && (
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-slate-800 text-slate-400 hover:text-[#60A5FA] hover:border-[#60A5FA]/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
                aria-label={`${COMPANY_INFO.name} Instagram Page`}
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";
