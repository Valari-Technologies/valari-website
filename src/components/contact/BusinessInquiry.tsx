"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export const BusinessInquiry: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    industry: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    agree: false,
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.agree) return;
    setStatus("sending");

    const subject = encodeURIComponent(`Project Inquiry from ${formState.name} (${formState.company})`);
    const body = encodeURIComponent(
      `Hello Valari Team,\n\n` +
      `Here are the project scoping details:\n` +
      `- Full Name: ${formState.name}\n` +
      `- Company: ${formState.company}\n` +
      `- Email: ${formState.email}\n` +
      `- Phone: ${formState.phone}\n` +
      `- Country: ${formState.country}\n` +
      `- Industry: ${formState.industry}\n` +
      `- Service: ${formState.service}\n` +
      `- Budget Range: ${formState.budget}\n` +
      `- Timeline: ${formState.timeline}\n\n` +
      `Project Description:\n${formState.message}\n`
    );

    setTimeout(() => {
      window.location.href = `mailto:contact@valari.co.in?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 1200);
  };

  return (
    <section id="inquiry-form" className="relative bg-white py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
            <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
              Inquiry
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
              Project Consultation Form
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              Fill out the details below, and our senior engineering leads will evaluate your requirements within 1 business day.
            </p>
          </div>

          {/* Form Card */}
          <div className="w-full bg-slate-50/50 border border-slate-200/80 rounded-[32px] p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden select-none">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <m.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle size={32} className="stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-3 leading-tight">
                    Inquiry Submitted Successfully
                  </h3>
                  <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6">
                    Thank you. A senior engineering manager has been assigned to your request and will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormState({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        country: "",
                        industry: "",
                        service: "",
                        budget: "",
                        timeline: "",
                        message: "",
                        agree: false,
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
                >
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Your Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      disabled={status === "sending"}
                      className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/15 transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-xs font-bold text-slate-700">Company Name *</label>
                    <input
                      id="company"
                      type="text"
                      required
                      placeholder="e.g. Acme Corp"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      disabled={status === "sending"}
                      className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/15 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700">Business Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. Your Email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      disabled={status === "sending"}
                      className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/15 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      disabled={status === "sending"}
                      className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/15 transition-all"
                    />
                  </div>

                  {/* Country */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="country" className="text-xs font-bold text-slate-700">Country *</label>
                    <input
                      id="country"
                      type="text"
                      required
                      placeholder="e.g. United States"
                      value={formState.country}
                      onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                      disabled={status === "sending"}
                      className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/15 transition-all"
                    />
                  </div>

                  {/* Industry */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="industry" className="text-xs font-bold text-slate-700">Industry *</label>
                    <select
                      id="industry"
                      required
                      value={formState.industry}
                      onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                      disabled={status === "sending"}
                      className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/15 transition-all"
                    >
                      <option value="">Select industry</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="logistics">Logistics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Service Interested In */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-slate-700">Service Interested In *</label>
                    <select
                      id="service"
                      required
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      disabled={status === "sending"}
                      className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/15 transition-all"
                    >
                      <option value="">Select service</option>
                      <option value="software">Software Engineering</option>
                      <option value="automation">Business Automation</option>
                      <option value="cloud">Cloud & DevOps</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="consulting">IT Consulting</option>
                    </select>
                  </div>

                  {/* Project Budget */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="budget" className="text-xs font-bold text-slate-700">Project Budget Range *</label>
                    <select
                      id="budget"
                      required
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      disabled={status === "sending"}
                      className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/15 transition-all"
                    >
                      <option value="">Select budget</option>
                      <option value="<5k">Less than $5,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>

                  {/* Project Timeline */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="timeline" className="text-xs font-bold text-slate-700">Project Timeline *</label>
                    <select
                      id="timeline"
                      required
                      value={formState.timeline}
                      onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                      disabled={status === "sending"}
                      className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/15 transition-all"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-2 weeks)</option>
                      <option value="mid">1-3 Months</option>
                      <option value="long">3-6 Months</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700">Project Description *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Outline your primary system objectives..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      disabled={status === "sending"}
                      className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/15 transition-all resize-none"
                    />
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-center gap-3 sm:col-span-2 mt-2">
                    <input
                      id="agree"
                      type="checkbox"
                      required
                      checked={formState.agree}
                      onChange={(e) => setFormState({ ...formState, agree: e.target.checked })}
                      disabled={status === "sending"}
                      className="w-4 h-4 rounded text-[#0B3D91] focus:ring-[#0B3D91]"
                    />
                    <label htmlFor="agree" className="text-xs text-slate-500 font-semibold cursor-pointer">
                      I agree to the Privacy Policy. *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="sm:col-span-2 mt-4 flex justify-end">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B3D91] text-white font-bold text-sm hover:bg-[#092e6e] disabled:bg-slate-350 transition-colors shadow-sm cursor-pointer"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Start My Project</span>
                        </>
                      )}
                    </button>
                  </div>
                </m.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
