"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: "linear-gradient(135deg, #0a2e1a 0%, #0f3d25 35%, #1a5c38 70%, #2d7a4f 100%)",
    }}>

      {/* Animated background orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute",
          bottom: "-200px",
          left: "-200px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,122,79,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.06,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "20%",
          left: "8%",
          width: "60px",
          height: "60px",
          borderRadius: "16px",
          background: "rgba(201,168,76,0.12)",
          border: "1px solid rgba(201,168,76,0.25)",
          backdropFilter: "blur(8px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          position: "absolute",
          bottom: "25%",
          right: "15%",
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          background: "rgba(201,168,76,0.1)",
          border: "1px solid rgba(201,168,76,0.2)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div className="container-custom" style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        color: "white",
        padding: "120px 24px",
      }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(201,168,76,0.15)",
            border: "1px solid rgba(201,168,76,0.35)",
            color: "#e2c46a",
            padding: "8px 20px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            marginBottom: "28px",
            backdropFilter: "blur(8px)",
          }}>
            <span style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#c9a84c",
              display: "inline-block",
            }} />
            TMC World Live
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "white" }}>{t.hero.tagline.split(" ").slice(0, 2).join(" ")}</span>
          <br />
          <span style={{
            background: "linear-gradient(135deg, #c9a84c, #e2c46a, #c9a84c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto",
          }}>
            {t.hero.tagline.split(" ").slice(2).join(" ")}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "580px",
            margin: "0 auto 48px",
            lineHeight: 1.8,
          }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link
            href="/lectures"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, #c9a84c, #e2c46a)",
              color: "#0f3d25",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 32px",
              borderRadius: "999px",
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(201,168,76,0.4)",
              transition: "all 0.3s ease",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 16px 48px rgba(201,168,76,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,168,76,0.4)";
            }}
          >
            {t.hero.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>

          <Link
            href="/scholars"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 32px",
              borderRadius: "999px",
              textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {t.hero.cta2}
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            marginTop: "72px",
            flexWrap: "wrap",
          }}
        >
          {[
            { number: "500+", label: "Lectures" },
            { number: "15+", label: "Scholars" },
            { number: "10+", label: "Categories" },
            { number: "50K+", label: "Followers" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #c9a84c, #e2c46a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.1,
              }}>
                {stat.number}
              </div>
              <div style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "13px",
                fontWeight: 500,
                marginTop: "4px",
                letterSpacing: "0.05em",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            color: "rgba(255,255,255,0.3)",
            fontSize: "11px",
            letterSpacing: "0.1em",
          }}
        >
          <span>SCROLL</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}