"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/scholars", label: t.nav.scholars },
    { href: "/lectures", label: t.nav.lectures },
    { href: "/categories", label: t.nav.categories },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "white",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.10)" : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
        
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
  <div style={{
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(26,92,56,0.15)",
    border: "2px solid rgba(26,92,56,0.1)",
  }}>
    <Image
      src="/assets/logo/logo.jpg"
      alt="TMC World Live"
      width={52}
      height={52}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      priority
    />
  </div>
</Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#1a5c38",
                textDecoration: "none",
                transition: "color 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={e => (e.currentTarget.style.color = "#1a5c38")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => setLanguage(language === "en" ? "ta" : "en")}
            style={{
              padding: "6px 16px",
              fontSize: "13px",
              fontWeight: 600,
              border: "2px solid #1a5c38",
              color: "#1a5c38",
              borderRadius: "999px",
              background: "transparent",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#1a5c38";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1a5c38";
            }}
          >
            {language === "en" ? "தமிழ்" : "English"}
          </button>

          <button
            style={{ background: "none", border: "none", cursor: "pointer", color: "#1a5c38" }}
            onClick={() => setIsOpen(!isOpen)}
            className="show-mobile"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          backgroundColor: "white",
          borderTop: "1px solid #f0f0f0",
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "#1a5c38",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}