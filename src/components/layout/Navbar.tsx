"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Text color: white when NOT scrolled (hero), dark when scrolled
  const linkColor = scrolled ? "text-slate-700 hover:text-brand-600" : "text-white hover:text-white/80";
  const buttonClasses = scrolled
    ? "bg-brand-600 hover:bg-brand-700 text-white"
    : "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30";
  const iconColor = scrolled ? "text-slate-700" : "text-white";

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
        <Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="Storefront Logo"
    width={612}
    height={408}
    className="h-auto w-auto max-h-32"   // or simply remove className entirely
    priority
  />
</Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn("text-sm font-body transition-colors", linkColor)}
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
            className={cn(
              "hidden md:inline-flex items-center gap-2 text-sm font-body font-medium px-5 py-2 rounded-full shadow-sm transition-all",
              buttonClasses
            )}
          >
            <ShoppingBag size={15} />
            Shop Now
          </Link>

          <button
            className={cn("md:hidden p-2 rounded-lg transition-colors", iconColor, "hover:bg-white/10")}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer – always dark text on white background */}
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