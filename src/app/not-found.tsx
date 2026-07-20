import React from "react";
import Link from "next/link";
import { Container, Button } from "@/components/common";

/**
 * Custom 404 page for Valari Technologies.
 * Leverages the reusable design system components.
 */
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow py-24 min-h-[60vh] font-sans">
      <Container className="text-center flex flex-col items-center max-w-md">
        <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-3">
          Error 404
        </span>
        <h1 className="text-4xl font-bold text-text-primary mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-text-secondary mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/" tabIndex={-1}>
            <Button variant="primary" size="sm">
              Return Home
            </Button>
          </Link>
          <Link href="/contact" tabIndex={-1}>
            <Button variant="secondary" size="sm">
              Contact Support
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
