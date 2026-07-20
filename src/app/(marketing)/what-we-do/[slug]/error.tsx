"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/common";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-24 flex-grow flex items-center justify-center bg-white font-sans text-center">
      <Container>
        <div className="max-w-md mx-auto flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold text-slate-900">Something went wrong!</h2>
          <p className="text-slate-500 text-sm">
            We encountered an unexpected error loading the details page.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 bg-[#0B5ED7] hover:bg-[#0a52be] text-white font-bold rounded-full transition-colors cursor-pointer text-sm"
          >
            Try again
          </button>
        </div>
      </Container>
    </section>
  );
}
