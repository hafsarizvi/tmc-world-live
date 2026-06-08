"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

type CategoryInfo = {
  name: string;
  nameTamil: string;
  description: string;
  longDescription: string;
  color: string;
};

const categoryData: { [key: string]: CategoryInfo } = {
  "aqeedah": { name: "Aqeedah", nameTamil: "அகீதா", description: "Islamic beliefs and articles of faith", longDescription: "Aqeedah refers to the core beliefs and articles of faith in Islam. It covers belief in Allah, His angels, His books, His messengers, the Day of Judgement, and divine decree.", color: "#1a5c38" },
  "tafseer": { name: "Tafseer", nameTamil: "தஃப்சீர்", description: "Quranic explanation and commentary", longDescription: "Tafseer is the science of Quranic interpretation and commentary. It involves understanding the meanings, context, and wisdom behind the verses of the Holy Quran.", color: "#2d7a4f" },
  "hadith": { name: "Hadith", nameTamil: "ஹதீஸ்", description: "Prophetic traditions and narrations", longDescription: "Hadith refers to the recorded sayings, actions, and approvals of Prophet Muhammad peace be upon him. The science of Hadith is essential for understanding Islamic law and practice.", color: "#0f3d25" },
  "seerah": { name: "Seerah", nameTamil: "சீரா", description: "Biography of Prophet Muhammad", longDescription: "Seerah is the biographical study of the life of Prophet Muhammad peace be upon him. It covers his birth, prophethood, migration, battles, character, and legacy.", color: "#1a5c38" },
  "fiqh": { name: "Fiqh", nameTamil: "ஃபிக்ஹ்", description: "Islamic jurisprudence and rulings", longDescription: "Fiqh is the body of Islamic jurisprudence derived from the Quran and Sunnah. It covers all aspects of a Muslims daily life including worship, transactions, and family matters.", color: "#2d7a4f" },
  "family-life": { name: "Family Life", nameTamil: "குடும்ப வாழ்க்கை", description: "Marriage, parenting, and family values", longDescription: "Islam places great emphasis on the family unit as the foundation of society. This category covers Islamic guidance on building strong families and raising righteous children.", color: "#0f3d25" },
  "marriage": { name: "Marriage", nameTamil: "திருமணம்", description: "Islamic guidance on marriage", longDescription: "Marriage in Islam is a sacred contract and an act of worship. This category covers the rights and responsibilities of spouses and building a harmonious household.", color: "#1a5c38" },
  "womens-education": { name: "Womens Education", nameTamil: "பெண் கல்வி", description: "Islamic knowledge for women", longDescription: "Islam honors and elevates the status of women. This category covers Islamic education for women including their rights, roles, and spiritual development.", color: "#2d7a4f" },
  "youth-development": { name: "Youth Development", nameTamil: "இளைஞர் வளர்ச்சி", description: "Guidance for Muslim youth", longDescription: "Muslim youth face unique challenges today. This category provides practical Islamic guidance for young Muslims on identity, purpose, relationships, and spiritual growth.", color: "#0f3d25" },
  "islamic-history": { name: "Islamic History", nameTamil: "இஸ்லாமிய வரலாறு", description: "History of Islam and Muslim civilizations", longDescription: "Islamic history spans over 1400 years of rich civilization and scholarship. This category covers the rise of Islam and the lessons we can draw from history.", color: "#1a5c38" },
};

export default function CategoryPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const category = slug ? categoryData[slug] : null;

  if (!category) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#0f3d25", fontSize: "32px", fontWeight: 800, marginBottom: "16px" }}>
            Category Not Found
          </h1>
          <Link href="/categories" style={{ color: "#1a5c38", fontWeight: 600, textDecoration: "none" }}>
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8fffe" }}>
      <div style={{
        background: "linear-gradient(135deg, #0a2e1a 0%, #0f3d25 60%, #2d7a4f 100%)",
        padding: "120px 0 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span style={{ color: "#c9a84c", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
              Category
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "white", marginBottom: "8px" }}>
              {category.name}
            </h1>
            <p style={{ color: "#c9a84c", fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>
              {category.nameTamil}
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              {category.description}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
              <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c9a84c" }} />
              <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom" style={{ padding: "64px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ background: "white", borderRadius: "24px", padding: "40px", boxShadow: "0 4px 24px rgba(26,92,56,0.08)", marginBottom: "28px" }}
        >
          <h2 style={{ color: "#0f3d25", fontWeight: 800, fontSize: "22px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "4px", height: "24px", background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", borderRadius: "999px", display: "inline-block" }} />
            About {category.name}
          </h2>
          <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: 1.9 }}>
            {category.longDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: "linear-gradient(135deg, #0f3d25, #1a5c38)", borderRadius: "24px", padding: "60px 40px", textAlign: "center", marginBottom: "28px" }}
        >
          <h3 style={{ color: "white", fontWeight: 800, fontSize: "24px", marginBottom: "12px" }}>
            Lectures Coming Soon
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 28px" }}>
            We are currently adding {category.name} lectures. Subscribe to our YouTube channel to stay updated.
          </p>
          
            href="https://www.youtube.com/@tmclivelk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #c9a84c, #e2c46a)", color: "#0f3d25", fontWeight: 700, fontSize: "14px", padding: "12px 28px", borderRadius: "999px", textDecoration: "none" }}
          >
            Subscribe on YouTube
          </a>
        </motion.div>

        <Link
          href="/categories"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", color: "white", fontWeight: 700, fontSize: "14px", padding: "12px 28px", borderRadius: "999px", textDecoration: "none", boxShadow: "0 4px 16px rgba(26,92,56,0.3)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Categories
        </Link>
      </div>
    </div>
  );
}