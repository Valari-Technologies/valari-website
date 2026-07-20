"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { COMPANY_INFO } from "@/config/company";
import { MapPin, Clock, Mail, Phone, ExternalLink } from "lucide-react";

export const OfficeInformation: React.FC = () => {
  return (
    <section className="relative bg-slate-50/50 py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Details Panel */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full bg-white border border-slate-200/80 rounded-[32px] p-8 sm:p-10 shadow-sm flex flex-col justify-between text-left hover:shadow-[0_20px_40px_rgba(11,61,145,0.04)] hover:-translate-y-1.5 transition-all duration-300"
          >
            <div>
              <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
                Headquarters
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A2540] mb-8 leading-tight">
                Our Office Location
              </h2>

              <div className="flex flex-col gap-6 text-slate-500 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#0B3D91]/10 text-[#0B3D91] flex items-center justify-center shrink-0">
                    <MapPin size={16} className="stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-[#0A2540] mb-0.5">Address</span>
                    <span>
                      {COMPANY_INFO.address.street}, {COMPANY_INFO.address.subdivision},<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.zip}, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#F4C542]/10 text-[#F4C542] flex items-center justify-center shrink-0">
                    <Clock size={16} className="stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-[#0A2540] mb-0.5">Business Hours</span>
                    <span>Monday - Saturday: 09:30 AM - 07:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#639FAB]/10 text-[#639FAB] flex items-center justify-center shrink-0">
                    <Mail size={16} className="stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-[#0A2540] mb-0.5">Business Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#0B3D91] font-medium transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#E25C5C]/10 text-[#E25C5C] flex items-center justify-center shrink-0">
                    <Phone size={16} className="stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-[#0A2540] mb-0.5">Phone Support</span>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#0B3D91] font-medium transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex">
              <a
                href="https://maps.google.com/?q=G86M+GQ,Nachiyarpet,Virudhachalam,Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  );
};
