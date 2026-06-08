"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
  {
    id: "1", name: "Aqeedah", nameTamil: "அகீதா", slug: "aqeedah",
    description: "Islamic beliefs and articles of faith",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#g1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a5c38"/><stop offset="100%" stopColor="#2d7a4f"/></linearGradient></defs>
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    id: "2", name: "Tafseer", nameTamil: "தஃப்சீர்", slug: "tafseer",
    description: "Quranic explanation and commentary",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#g2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a5c38"/><stop offset="100%" stopColor="#2d7a4f"/></linearGradient></defs>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/>
      </svg>
    ),
  },
  {
    id: "3", name: "Hadith", nameTamil: "ஹதீஸ்", slug: "hadith",
    description: "Prophetic traditions and narrations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a5c38"/><stop offset="100%" stopColor="#2d7a4f"/></linearGradient></defs>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    id: "4", name: "Seerah", nameTamil: "சீரா", slug: "seerah",
    description: "Biography of Prophet Muhammad ﷺ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#g4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a5c38"/><stop offset="100%" stopColor="#2d7a4f"/></linearGradient></defs>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    id: "5", name: "Fiqh", nameTamil: "ஃபிக்ஹ்", slug: "fiqh",
    description: "Islamic jurisprudence and rulings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#g5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <defs><linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a5c38"/><stop offset="100%" stopColor="#2d7a4f"/></linearGradient></defs>
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    id: "6", name: "Family Life", nameTamil: "குடும்ப வாழ்க்கை", slug: "family-life",
    description: "Marriage, parenting, and family values",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#g6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <defs><linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a5c38"/><stop offset="100%" stopColor="#2d7a4f"/></linearGradient></defs>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: "7", name: "Marriage", nameTamil: "திருமணம்", slug: "marriage",
    description: "Islamic guidance on marriage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#g7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <defs><linearGradient id="g7" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a5c38"/><stop offset="100%" stopColor="#2d7a4f"/></linearGradient></defs>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    id: "8", name: "Women's Education", nameTamil: "பெண் கல்வி", slug: "womens-education",
    description: "Islamic knowledge for women",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#g8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <defs><linearGradient id="g8" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a5c38"/><stop offset="100%" stopColor="#2d7a4f"/></linearGradient></defs>
        <circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z"/>
      </svg>
    ),
  },
  {
    id: "9", name: "Youth Development", nameTamil: "இளைஞர் வளர்ச்சி", slug: "youth-development",
    description: "Guidance for Muslim youth",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#g9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <defs><linearGradient id="g9" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a5c38"/><stop offset="100%" stopColor="#2d7a4f"/></linearGradient></defs>
        <path d="M12 22V12"/><path d="M12 12C12 12 8 9 8 6a4 4 0 0 1 8 0c0 3-4 6-4 6z"/>
      </svg>
    ),
  },
  {
    id: "10", name: "Islamic History", nameTamil: "இஸ்லாமிய வரலாறு", slug: "islamic-history",
    description: "History of Islam and Muslim civilizations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#g10)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <defs><linearGradient id="g10" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1a5c38"/><stop offset="100%" stopColor="#2d7a4f"/></linearGradient></defs>
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

export default function CategoriesSection() {
  const { t, language } = useLanguage();

  return (
    <section style={{ padding: "100px 0", background: "white" }}>
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #1a5c38, #2d7a4f)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            Explore
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "#0f3d25",
            marginBottom: "16px",
          }}>
            {t.categories.title}
          </h2>
          <p style={{ color: "#6b7280", maxWidth: "520px", margin: "0 auto", fontSize: "16px", lineHeight: 1.7 }}>
            {t.categories.subtitle}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
            <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c9a84c" }} />
            <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
        }}>
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <Link
                href={`/categories/${cat.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "white",
                    border: "1.5px solid #e8f5ee",
                    borderRadius: "20px",
                    padding: "28px 16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 12px rgba(26,92,56,0.06)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#c9a84c";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(26,92,56,0.15)";
                    e.currentTarget.style.background = "linear-gradient(135deg, #f8fffe, #f0f9f4)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#e8f5ee";
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(26,92,56,0.06)";
                    e.currentTarget.style.background = "white";
                  }}
                >
                  {/* Icon container */}
                  <div style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "18px",
                    background: "linear-gradient(135deg, #f0f9f4, #e8f5ee)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    boxShadow: "0 4px 12px rgba(26,92,56,0.1)",
                  }}>
                    {cat.icon}
                  </div>

                  <span style={{
                    fontWeight: 700,
                    color: "#0f3d25",
                    fontSize: "14px",
                    marginBottom: "6px",
                    lineHeight: 1.3,
                  }}>
                    {language === "ta" ? cat.nameTamil : cat.name}
                  </span>

                  <span style={{
                    color: "#9ca3af",
                    fontSize: "11px",
                    lineHeight: 1.5,
                  }}>
                    {cat.description}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}