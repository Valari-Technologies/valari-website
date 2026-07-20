"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MAIN_NAV_ITEMS } from "@/config/navigation";
import { Logo, Button, Container } from "@/components/common";

/**
 * Global Navigation Header. Sticky layout with solid corporate background,
 * smooth Framer Motion indicator, keyboard drawer support, and responsive scaling.
 */
export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Close mobile drawer on route change during render
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <m.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 w-full z-50 transition-all duration-300 font-sans text-white bg-[#0B3D91] border-b border-[#0f46a1] shadow-sm py-6"
    >
      <Container className="flex items-center justify-between">
        {/* Logo (Left side) */}
        <Logo />

        {/* Desktop Navigation (Center) */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-base font-bold transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive ? "text-accent" : "text-slate-100 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.label}</span>
                {isActive && (
                  <m.span
                    layoutId="desktopActiveNavIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Actions (Right side) */}
        <div className="hidden md:flex items-center">
          <Link href="/contact" tabIndex={-1}>
            <Button
              variant="secondary"
              size="sm"
              className="!bg-white !border-transparent !text-[#f4c542] hover:!bg-white/90 hover:!text-[#e0b02b] transition-colors font-semibold"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Burger Button (Mobile) */}
        <button
          className="flex md:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-white hover:text-slate-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Layer */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[60px] bg-black/30 dark:bg-black/50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar Panel */}
            <m.div
              id="mobile-navigation-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-[60px] right-0 bottom-0 w-4/5 max-w-sm bg-surface border-l border-border z-40 md:hidden shadow-lg flex flex-col p-6 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <nav className="flex flex-col gap-4 mb-8">
                {MAIN_NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-base font-semibold py-2 px-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        isActive ? "bg-[rgba(11,61,145,0.08)] text-primary" : "text-text-secondary hover:text-primary"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto border-t border-border/80 pt-6">
                <Link href="/contact" className="w-full block" tabIndex={-1}>
                  <Button variant="primary" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </m.header>
  );
};

Navbar.displayName = "Navbar";
