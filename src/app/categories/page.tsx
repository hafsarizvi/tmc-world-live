"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  { id: "1", name: "Aqeedah", nameTamil: "அகீதா", slug: "aqeedah", description: "Islamic beliefs and articles of faith" },
  { id: "2", name: "Tafseer", nameTamil: "தஃப்சீர்", slug: "tafseer", description: "Quranic explanation and commentary" },
  { id: "3", name: "Hadith", nameTamil: "ஹதீஸ்", slug: "hadith", description: "Prophetic traditions and narrations" },
  { id: "4", name: "Seerah", nameTamil: "சீரா", slug: "seerah", description: "Biography of Prophet Muhammad" },
  { id: "5", name: "Fiqh", nameTamil: "ஃபிக்ஹ்", slug: "fiqh", description: "Islamic jurisprudence and rulings" },
  { id: "6", name: "Family Life", nameTamil: "குடும்ப வாழ்க்கை", slug: "family-life", description: "Marriage, parenting, and family values" },
  { id: "7", name: "Marriage", nameTamil: "திருமணம்", slug: "marriage", description: "Islamic guidance on marriage" },
  { id: "8", name: "Womens Education", nameTamil: "பெண் கல்வி", slug: "womens-education", description: "Islamic knowledge for women" },
  { id: "9", name: "Youth Development", nameTamil: "இளைஞர் வளர்ச்சி", slug: "youth-development", description: "Guidance for Muslim youth" },
  { id: "10", name: "Islamic History", nameTamil: "இஸ்லாமிய வரலாறு", slug: "islamic-history", description: "History of Islam and Muslim civilizations" },
];

const icons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  <svg key="7" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  <svg key="8" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z"/></svg>,
  <svg key="9" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M12 22V12"/><path d="M12 12C12 12 8 9 8 6a4 4 0 0 1 8 0c0 3-4 6-4 6z"/></svg>,
  <svg key="10" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
];

export default function CategoriesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fffe" }}>
      <div style={{
        background: "linear-gradient(135deg, #0a2e1a 0%, #0f3d25 50%, #1a5c38 100%)",
        padding: "120px 0 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span style={{ color: "#c9a84c", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>Browse Topics</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>Lecture Categories</h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              Explore Islamic lectures organized by subject. Find the topics most relevant to you.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
              <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c9a84c" }} />
              <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom" style={{ padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Link href={`/categories/${cat.slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ background: "white", border: "1.5px solid #e8f5ee", borderRadius: "20px", padding: "32px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 2px 12px rgba(26,92,56,0.06)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(26,92,56,0.15)"; e.currentTarget.style.background = "linear-gradient(135deg, #f8fffe, #f0f9f4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8f5ee"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(26,92,56,0.06)"; e.currentTarget.style.background = "white"; }}
                >
                  <div style={{ width: "72px", height: "72px", borderRadius: "18px", background: "linear-gradient(135deg, #f0f9f4, #e8f5ee)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", boxShadow: "0 4px 12px rgba(26,92,56,0.1)" }}>
                    {icons[index]}
                  </div>
                  <h3 style={{ fontWeight: 700, color: "#0f3d25", fontSize: "15px", marginBottom: "4px" }}>{cat.name}</h3>
                  <p style={{ color: "#c9a84c", fontSize: "12px", fontWeight: 600, marginBottom: "8px", fontFamily: "Noto Sans Tamil, sans-serif" }}>{cat.nameTamil}</p>
                  <p style={{ color: "#9ca3af", fontSize: "12px", lineHeight: 1.6 }}>{cat.description}</p>
                  <div style={{ marginTop: "16px", display: "inline-flex", alignItems: "center", gap: "4px", color: "#1a5c38", fontSize: "12px", fontWeight: 700 }}>
                    Explore
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}