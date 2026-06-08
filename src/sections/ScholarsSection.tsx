"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { scholars } from "@/data/scholars";
import { useLanguage } from "@/context/LanguageContext";

export default function ScholarsSection() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: "100px 0", background: "linear-gradient(135deg, #f8fffe 0%, #f0f9f4 50%, #f8fffe 100%)" }}>
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
            Our Scholars
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "#0f3d25",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}>
            {t.scholars.title}
          </h2>
          <p style={{ color: "#6b7280", maxWidth: "520px", margin: "0 auto", fontSize: "16px", lineHeight: 1.7 }}>
            {t.scholars.subtitle}
          </p>

          {/* Decorative line */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
            <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c9a84c" }} />
            <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "28px",
        }}>
          {scholars.map((scholar, index) => (
            <motion.div
              key={scholar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -10, rotateY: 2 }}
              style={{
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(26,92,56,0.08)",
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.3s ease",
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(26,92,56,0.18)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(26,92,56,0.08)";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", width: "100%", paddingTop: "100%", overflow: "hidden" }}>
                <Image
                  src={scholar.image}
                  alt={scholar.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(15,61,37,0.85) 0%, rgba(15,61,37,0.1) 50%, transparent 100%)",
                }} />
                {/* Name on image */}
                <div style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                }}>
                  <h3 style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: 1.3,
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}>
                    {scholar.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Gold accent bar */}
                <div style={{
                  height: "3px",
                  width: "40px",
                  background: "linear-gradient(90deg, #c9a84c, #e2c46a)",
                  borderRadius: "999px",
                  marginBottom: "12px",
                }} />

                <p style={{
                  color: "#c9a84c",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "10px",
                  lineHeight: 1.4,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}>
                  {scholar.designation}
                </p>

                <p style={{
                  color: "#6b7280",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  flex: 1,
                }}>
                  {scholar.description}
                </p>

                {/* Expertise tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "14px 0" }}>
                  {scholar.expertise.slice(0, 2).map((tag, i) => (
                    <span key={i} style={{
                      background: "linear-gradient(135deg, #f0f9f4, #e8f5ee)",
                      color: "#1a5c38",
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: "999px",
                      border: "1px solid #c8e6d4",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/scholars/${scholar.slug}`}
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "linear-gradient(135deg, #1a5c38, #2d7a4f)",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 700,
                    padding: "12px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    letterSpacing: "0.03em",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(26,92,56,0.25)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #0f3d25, #1a5c38)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(26,92,56,0.4)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #1a5c38, #2d7a4f)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(26,92,56,0.25)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {t.scholars.viewProfile} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}