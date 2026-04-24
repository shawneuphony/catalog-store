"use client";

import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";

const BADGES = [
  { icon: Star,        text: "4.9 / 5 rating" },
  { icon: ShieldCheck, text: "Secure checkout" },
  { icon: Truck,       text: "Free shipping over $50" },
];

const FEATURE_CARDS = [
  {
    title: "Curated collections",
    description: "Hand-picked products from world-class makers.",
    stat: "500+ products",
  },
  {
    title: "Expert curation",
    description: "Every item passes our quality review.",
    stat: "100% verified",
  },
  {
    title: "Your own wishlist",
    description: "Save favourites and come back anytime.",
    stat: "$30 / month",
  },
  {
    title: "Personalised picks",
    description: "Smart recommendations built around you.",
    stat: "AI-powered",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center">

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-100/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-200/50 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left copy ── */}
        <div className="space-y-8">
          {/* Pill badge */}
          <span className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur border border-white/80 text-brand-700 text-xs font-body font-semibold px-3 py-1.5 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            New arrivals every week
          </span>

          {/* Headline */}
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-slate-900">
            <span className="text-brand-600">Discover</span> products<br />
            made for{" "}
            <span className="text-accent italic">real life</span>
          </h1>

          {/* Sub-copy */}
          <p className="font-body text-lg text-slate-600 max-w-md leading-relaxed">
            Let our specialist curators guide you to better choices.
            Receive tailored recommendations, expert reviews, and
            exclusive deals on everything you love.
          </p>

          {/* Badges row */}
          <ul className="flex flex-wrap gap-4">
            {BADGES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-1.5 text-sm text-slate-600 font-body">
                <Icon size={15} className="text-brand-500 shrink-0" />
                {text}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-body font-medium px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all group"
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

        {/* ── Right card panel ── */}
        <div className="relative">
          {/* Floating main card */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 p-6 space-y-4">
            <p className="font-display font-semibold text-slate-800 text-center text-base">
              Holistic shopping, curated just for you
            </p>

            <div className="grid grid-cols-2 gap-3">
              {FEATURE_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="bg-slate-50/80 rounded-2xl p-4 space-y-1 hover:bg-brand-50 transition-colors group"
                >
                  <p className="text-xs font-body font-semibold text-slate-500 uppercase tracking-wide">
                    {card.title}
                  </p>
                  <p className="text-xs font-body text-slate-600 leading-snug">
                    {card.description}
                  </p>
                  <p className="text-sm font-display font-bold text-brand-600 group-hover:text-accent transition-colors">
                    {card.stat}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA inside card */}
            <Link
              href="/shop"
              className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-body font-medium py-3 rounded-2xl transition-colors shadow"
            >
              Start your journey today
            </Link>
          </div>

          {/* Floating social-proof chip */}
          <div className="absolute -top-5 -right-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-2.5 flex items-center gap-2">
            <div className="flex -space-x-2">
              {["#7c3aed","#0ea5e9","#f59e0b"].map((bg, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ background: bg }} />
              ))}
            </div>
            <div>
              <p className="text-xs font-body font-bold text-slate-800 leading-none">12,000+</p>
              <p className="text-[10px] font-body text-slate-500 mt-0.5">happy shoppers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
