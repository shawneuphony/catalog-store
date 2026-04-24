"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
  {/* Background image layer */}
  <div
    className="absolute inset-0 bg-[url('/img5.png')] bg-cover bg-center bg-no-repeat"
    aria-hidden="true"
  />
  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

  {/* Content (keeps the same structure) */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
    {/* left & right columns unchanged */}
  </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left copy ── */}
        <div className="space-y-8">

          {/* Headline */}
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-slate-100">
            <span className="text-brand-600">Natural</span> and<br />organic for{" "}
            <span className="text-accent italic gold-sparkle">your shine</span>
          </h1>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border border-slate-300 bg-white/60 backdrop-blur hover:bg-white text-slate-700 font-body font-medium px-7 py-3.5 rounded-full transition-all"
            >
              Browse the catalog
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-slate-300 bg-white/60 backdrop-blur hover:bg-white text-slate-700 font-body font-medium px-7 py-3.5 rounded-full transition-all"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
