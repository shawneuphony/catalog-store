"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Shop",       href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "About",      href: "/about" },
  { label: "Journal",    href: "/journal" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent flex items-center justify-center text-white font-display font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
            S
          </span>
          <span className="font-display font-semibold text-slate-800 text-lg tracking-tight">
            Storefront
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-body text-slate-600 hover:text-brand-600 transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-brand-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-body font-medium px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
          >
            <ShoppingBag size={15} />
            Shop Now
          </Link>

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-slate-700 font-body text-base hover:text-brand-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop"
            className="block w-full text-center bg-brand-600 text-white py-2.5 rounded-full font-body font-medium mt-2"
            onClick={() => setOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      )}
    </header>
  );
}
