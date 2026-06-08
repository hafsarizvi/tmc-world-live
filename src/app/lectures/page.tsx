"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const lectures = [
  // Mujahid Ibnu Razeen
  {
    id: "1",
    title: "காலம் நெருங்கும் அமல்கள் குறையும் கஞ்சத்தனம் பெருகும்",
    titleEn: "When Time Shortens and Deeds Decrease",
    scholar: "Mujahid Ibnu Razeen",
    category: "Seerah",
    youtubeId: "qUJ0R2jwTOE",
    href: "https://www.youtube.com/watch?v=qUJ0R2jwTOE",
  },
  {
    id: "2",
    title: "அல்லாஹ்வால் மட்டுமே முடியும் காரியத்தை மனிதரிடம் கேட்டால்",
    titleEn: "Seeking from Others What Only Allah Can Give",
    scholar: "Mujahid Ibnu Razeen",
    category: "Aqeedah",
    youtubeId: "tlr7UZt-fos",
    href: "https://www.youtube.com/watch?v=tlr7UZt-fos",
  },
  {
    id: "3",
    title: "துடிப்பான இளமைக்கும் முதிர்ந்த அனுபவத்துக்கும் இடையிலான பாலம்",
    titleEn: "The Bridge Between Youth and Maturity",
    scholar: "Mujahid Ibnu Razeen",
    category: "Youth Development",
    youtubeId: "BKIInI96KPk",
    href: "https://www.youtube.com/watch?v=BKIInI96KPk",
  },
  {
    id: "4",
    title: "இஸ்லாத்துக்கு நுழைவாயில் ஒன்று வெளியேறும் வழிகள் பல",
    titleEn: "One Gate to Enter Islam Many Ways to Leave",
    scholar: "Mujahid Ibnu Razeen",
    category: "Aqeedah",
    youtubeId: "6YM7S0Ok9uQ",
    href: "https://www.youtube.com/watch?v=6YM7S0Ok9uQ",
  },
  {
    id: "5",
    title: "பெரியவர்களின் ஆலோசனையை அலட்சியம் செய்யாதே",
    titleEn: "Never Ignore the Advice of Your Elders",
    scholar: "Mujahid Ibnu Razeen",
    category: "Youth Development",
    youtubeId: "opmBmZC98g4",
    href: "https://www.youtube.com/watch?v=opmBmZC98g4",
  },
  {
    id: "6",
    title: "மனிதர்களை ஹீரோவாகக் கொண்டோம்; நபி ﷺ-யை முன்மாதிரியாக மறந்தோம்!",
    titleEn: "We Made Humans Our Heroes and Forgot the Prophet as Our Role Model",
    scholar: "Mujahid Ibnu Razeen",
    category: "Seerah",
    youtubeId: "RxJIzx9jKIM",
    href: "https://www.youtube.com/watch?v=RxJIzx9jKIM",
  },

  // Mufaris Rashadi
  {
    id: "7",
    title: "இந்த துஆவின் பலன் தெரிந்தால் சுவர்க்கத்தின் வாசலை நோக்கி ஓடுவீர்கள்!",
    titleEn: "If You Knew the Reward of This Dua You Would Run to the Gates of Paradise",
    scholar: "Sheikh Mufaris Rashadi",
    category: "Hadith",
    youtubeId: "t_9og5GcRI8",
    href: "https://www.youtube.com/watch?v=t_9og5GcRI8",
  },
  {
    id: "8",
    title: "மார்க்கத்தில் மட்டும் யாரை வேண்டுமானாலும் பின்பற்றுகிறாயா?",
    titleEn: "Do You Follow Anyone You Want in Religion?",
    scholar: "Sheikh Mufaris Rashadi",
    category: "Aqeedah",
    youtubeId: "WawiAft7Fqs",
    href: "https://www.youtube.com/watch?v=WawiAft7Fqs",
  },
  {
    id: "9",
    title: "முகநூலில் அமல்கள்; உள்ளத்தில் இஃலாஸ் உள்ளதா?",
    titleEn: "Good Deeds on Facebook But Is There Sincerity in the Heart?",
    scholar: "Sheikh Mufaris Rashadi",
    category: "Fiqh",
    youtubeId: "ZBXt9KZSpe4",
    href: "https://www.youtube.com/watch?v=ZBXt9KZSpe4",
  },
  {
    id: "10",
    title: "கொடுக்காத கைகள் பகிராத அறிவு நரகத்திற்கு வழிகாட்டும் கஞ்சத்தனம்!",
    titleEn: "Hands That Do Not Give Knowledge That Is Not Shared Miserliness Leads to Hell",
    scholar: "Sheikh Mufaris Rashadi",
    category: "Hadith",
    youtubeId: "I6l_mqBEgN8",
    href: "https://www.youtube.com/watch?v=I6l_mqBEgN8",
  },
  {
    id: "11",
    title: "விலை கொடுத்து வாங்க முடியாத அருளை தந்தவனை மறக்கும் மனிதனே சிந்தி!",
    titleEn: "O Man Who Forgets the One Who Gave Blessings That Cannot Be Bought Reflect!",
    scholar: "Sheikh Mufaris Rashadi",
    category: "Aqeedah",
    youtubeId: "ry8n7esunps",
    href: "https://www.youtube.com/watch?v=ry8n7esunps",
  },
  {
    id: "12",
    title: "உள்ளத்தை மரணிக்கச் செய்யும் மிகப் பெரிய அநியாயம் பாவம்",
    titleEn: "The Greatest Injustice That Kills the Heart is Sin",
    scholar: "Sheikh Mufaris Rashadi",
    category: "Hadith",
    youtubeId: "RdqSf_NmzIE",
    href: "https://www.youtube.com/watch?v=RdqSf_NmzIE",
  },

  // Moulavi Niyas Siddeek Siraji
  {
    id: "13",
    title: "பணம் கொடுத்து பாவத்தை வாங்கும் மனிதனே உன்னையும் உன் சந்ததியையும் தள்ளாதே!",
    titleEn: "O Man Who Buys Sin With Money Do Not Push Yourself and Your Offspring Into Darkness",
    scholar: "Moulavi Niyas Siddeek Siraji",
    category: "Family Life",
    youtubeId: "iFs0qZRyg3w",
    href: "https://www.youtube.com/watch?v=iFs0qZRyg3w",
  },
  {
    id: "14",
    title: "ஹஜ் ஏற்படுத்தும் சமத்துவமும் சமூகப் பொறுமையும்",
    titleEn: "The Equality and Social Patience That Hajj Creates",
    scholar: "Moulavi Niyas Siddeek Siraji",
    category: "Fiqh",
    youtubeId: "FjFHtDW1JaE",
    href: "https://www.youtube.com/watch?v=FjFHtDW1JaE",
  },
  {
    id: "15",
    title: "ஒரு நன்மையின் உண்மையான பலன் இன்னொரு நன்மை தான்",
    titleEn: "The True Reward of One Good Deed Is Another Good Deed",
    scholar: "Moulavi Niyas Siddeek Siraji",
    category: "Hadith",
    youtubeId: "cQ-b27YUExs",
    href: "https://www.youtube.com/watch?v=cQ-b27YUExs",
  },
  {
    id: "16",
    title: "மூன்று சாட்சியங்களை அறிந்து வாழும் மனிதன்",
    titleEn: "The Man Who Lives Knowing Three Witnesses",
    scholar: "Moulavi Niyas Siddeek Siraji",
    category: "Aqeedah",
    youtubeId: "0SX6hpP1UcQ",
    href: "https://www.youtube.com/watch?v=0SX6hpP1UcQ",
  },
  {
    id: "17",
    title: "மனிதன் தன்னை மாற்றிக் கொள்ள மூன்று சாட்சியங்கள்",
    titleEn: "Three Witnesses for a Man to Transform Himself",
    scholar: "Moulavi Niyas Siddeek Siraji",
    category: "Aqeedah",
    youtubeId: "JIIMKHI8VqA",
    href: "https://www.youtube.com/watch?v=JIIMKHI8VqA",
  },
  {
    id: "18",
    title: "யாருக்கு தண்டனை யாருக்கு சோதனை",
    titleEn: "Who Gets Punishment and Who Gets a Test",
    scholar: "Moulavi Niyas Siddeek Siraji",
    category: "Aqeedah",
    youtubeId: "9Cp1JB2WuJM",
    href: "https://www.youtube.com/watch?v=9Cp1JB2WuJM",
  },

  // Ash Sheikh Adil Hassan
  {
    id: "19",
    title: "மன உறுதி",
    titleEn: "Mental Strength and Steadfastness",
    scholar: "Ash Sheikh Adil Hassan",
    category: "Youth Development",
    youtubeId: "MqpKBRXLEdM",
    href: "https://www.youtube.com/watch?v=MqpKBRXLEdM",
  },
  {
    id: "20",
    title: "மண்ணின் கீழ் புதையல் தேடாதே ஜென்னாவின் பொக்கிஷத்தை தேடு!",
    titleEn: "Do Not Seek Treasure Under the Earth Seek the Treasure of Jannah",
    scholar: "Ash Sheikh Adil Hassan",
    category: "Aqeedah",
    youtubeId: "qBtKfB-cdqA",
    href: "https://www.youtube.com/watch?v=qBtKfB-cdqA",
  },
  {
    id: "21",
    title: "பெண்ணின் அழகு யாருக்காக வெளிப்பட வேண்டும்?",
    titleEn: "For Whom Should a Woman's Beauty Be Revealed?",
    scholar: "Ash Sheikh Adil Hassan",
    category: "Womens Education",
    youtubeId: "b7EEiobBrek",
    href: "https://www.youtube.com/watch?v=b7EEiobBrek",
  },
  {
    id: "22",
    title: "திரைமோகமும் குடும்பச் சிதைவும் குழந்தைப் பருவத்திலிருந்தே விதைக்கப்படும் தாக்கங்கள்",
    titleEn: "Screen Addiction Family Breakdown Effects Planted From Childhood",
    scholar: "Ash Sheikh Adil Hassan",
    category: "Family Life",
    youtubeId: "aK1L009YQd8",
    href: "https://www.youtube.com/watch?v=aK1L009YQd8",
  },
  {
    id: "23",
    title: "குழந்தை பருவத்தில் விதைக்கும் பழக்கம் வாழ்நாளையே தீர்மானிக்கும்!",
    titleEn: "Habits Planted in Childhood Determine Your Entire Life",
    scholar: "Ash Sheikh Adil Hassan",
    category: "Family Life",
    youtubeId: "z6lZihEb9TY",
    href: "https://www.youtube.com/watch?v=z6lZihEb9TY",
  },
  {
    id: "24",
    title: "மரண நாள் தெரிந்தால் பாவத்தில் வாழ முடியுமா",
    titleEn: "If You Knew Your Day of Death Could You Live in Sin",
    scholar: "Ash Sheikh Adil Hassan",
    category: "Aqeedah",
    youtubeId: "aBpt0VD-TIE",
    href: "https://www.youtube.com/watch?v=aBpt0VD-TIE",
  },
];

const allCategories = ["All", "Aqeedah", "Seerah", "Youth Development", "Hadith", "Fiqh", "Family Life"];
const allScholars = ["All Scholars", "Mujahid Ibnu Razeen", "Sheikh Mufaris Rashadi", "Moulavi Niyas Siddeek Siraji", "Ash Sheikh Adil Hassan"];
export default function LecturesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeScholar, setActiveScholar] = useState("All Scholars");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filtered = lectures.filter((l) => {
    const catMatch = activeCategory === "All" || l.category === activeCategory;
    const scholarMatch = activeScholar === "All Scholars" || l.scholar === activeScholar;
    return catMatch && scholarMatch;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f8fffe" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0a2e1a 0%, #0f3d25 50%, #1a5c38 100%)",
        padding: "120px 0 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span style={{ color: "#c9a84c", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
              Islamic Content
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>
              Lectures & Bayans
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              Authentic Islamic lectures in Tamil by trusted scholars. Watch, learn, and share.
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

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px", background: "white", borderRadius: "20px", padding: "28px", boxShadow: "0 4px 24px rgba(26,92,56,0.08)" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <p style={{ color: "#0f3d25", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
              Filter by Category
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 18px", borderRadius: "999px", fontSize: "13px", fontWeight: 600,
                    border: "1.5px solid", cursor: "pointer", transition: "all 0.2s",
                    background: activeCategory === cat ? "linear-gradient(135deg, #1a5c38, #2d7a4f)" : "white",
                    color: activeCategory === cat ? "white" : "#1a5c38",
                    borderColor: activeCategory === cat ? "transparent" : "#c8e6d4",
                    boxShadow: activeCategory === cat ? "0 4px 12px rgba(26,92,56,0.25)" : "none",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p style={{ color: "#0f3d25", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
              Filter by Scholar
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {allScholars.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveScholar(s)}
                  style={{
                    padding: "8px 18px", borderRadius: "999px", fontSize: "13px", fontWeight: 600,
                    border: "1.5px solid", cursor: "pointer", transition: "all 0.2s",
                    background: activeScholar === s ? "linear-gradient(135deg, #c9a84c, #e2c46a)" : "white",
                    color: activeScholar === s ? "#0f3d25" : "#6b7280",
                    borderColor: activeScholar === s ? "transparent" : "#e5e7eb",
                    boxShadow: activeScholar === s ? "0 4px 12px rgba(201,168,76,0.3)" : "none",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <div style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", color: "white", fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "999px" }}>
            {filtered.length}
          </span>
          <span style={{ color: "#6b7280", fontSize: "14px" }}>lectures found</span>
        </div>

        {/* Lectures Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {filtered.map((lecture, index) => (
            <motion.div
              key={lecture.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{ background: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 24px rgba(26,92,56,0.08)", transition: "all 0.3s ease" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 16px 48px rgba(26,92,56,0.15)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 24px rgba(26,92,56,0.08)"}
            >
              {/* Thumbnail */}
              <div
                style={{ position: "relative", paddingTop: "56.25%", background: "#000", cursor: "pointer" }}
                onClick={() => setActiveVideo(activeVideo === lecture.youtubeId ? null : lecture.youtubeId)}
              >
                {activeVideo === lecture.youtubeId ? (
                  <iframe
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    src={`https://www.youtube.com/embed/${lecture.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                    title={lecture.titleEn}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${lecture.youtubeId}/maxresdefault.jpg`}
                      alt={lecture.titleEn}
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a5c38"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                      </div>
                    </div>
                    <div style={{ position: "absolute", top: "12px", left: "12px", background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", color: "white", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px" }}>
                      {lecture.category}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "20px" }}>
                <div style={{ height: "3px", width: "32px", background: "linear-gradient(90deg, #c9a84c, #e2c46a)", borderRadius: "999px", marginBottom: "12px" }} />
                <h3 style={{ color: "#0f3d25", fontWeight: 700, fontSize: "15px", lineHeight: 1.5, marginBottom: "6px", fontFamily: "Noto Sans Tamil, Inter, sans-serif" }}>
                  {lecture.title}
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "12px", marginBottom: "16px", fontStyle: "italic" }}>
                  {lecture.titleEn}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <span style={{ color: "#4b5563", fontSize: "12px", fontWeight: 600 }}>{lecture.scholar}</span>
                  </div>
                  <a href={lecture.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#1a5c38", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}
                  >
                    Watch on YouTube
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#9ca3af" }}>
            <p style={{ fontSize: "16px", fontWeight: 600 }}>No lectures found for this filter.</p>
            <p style={{ fontSize: "14px", marginTop: "8px" }}>Try a different category or scholar.</p>
          </div>
        )}
      </div>
    </div>
  );
}