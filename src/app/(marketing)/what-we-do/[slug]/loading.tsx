import React from "react";
import { Container } from "@/components/common";

export default function Loading() {
  return (
    <section className="py-24 flex-grow flex items-center justify-center bg-white font-sans">
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 animate-pulse">
          {/* Skeleton Badge */}
          <div className="w-24 h-6 bg-slate-100 rounded-full" />
          {/* Skeleton Title */}
          <div className="w-64 h-12 bg-slate-200 rounded-2xl" />
          {/* Skeleton Description */}
          <div className="w-full max-w-xl h-6 bg-slate-100 rounded-lg" />
          <div className="w-full max-w-md h-6 bg-slate-100 rounded-lg" />
        </div>
      </Container>
    </section>
  );
}
