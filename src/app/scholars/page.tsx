"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { scholars } from "@/data/scholars";

export default function ScholarsPage() {
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
            <span style={{ color: "#c9a84c", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>Our Team</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>Featured Scholars</h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              Learn from trusted Islamic scholars dedicated to serving Tamil-speaking Muslim communities worldwide.
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
          {scholars.map((scholar, index) => (
            <motion.div
              key={scholar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              style={{ background: "white", borderRadius: "24px", overflow: "hidden", boxShadow: "0 4px 24px rgba(26,92,56,0.08)", display: "flex", flexDirection: "column", transition: "box-shadow 0.3s ease" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 20px 60px rgba(26,92,56,0.18)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 24px rgba(26,92,56,0.08)"}
            >
              <div style={{ position: "relative", width: "100%", paddingTop: "100%", overflow: "hidden" }}>
                <img src={scholar.image} alt={scholar.name} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,61,37,0.85) 0%, rgba(15,61,37,0.1) 50%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px" }}>
                  <h3 style={{ color: "white", fontWeight: 700, fontSize: "18px", lineHeight: 1.3, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>{scholar.name}</h3>
                </div>
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ height: "3px", width: "40px", background: "linear-gradient(90deg, #c9a84c, #e2c46a)", borderRadius: "999px", marginBottom: "12px" }} />
                <p style={{ color: "#c9a84c", fontSize: "12px", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{scholar.designation}</p>
                <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.7, flex: 1 }}>{scholar.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "16px 0" }}>
                  {scholar.expertise.slice(0, 2).map((tag, i) => (
                    <span key={i} style={{ background: "linear-gradient(135deg, #f0f9f4, #e8f5ee)", color: "#1a5c38", fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "999px", border: "1px solid #c8e6d4" }}>{tag}</span>
                  ))}
                </div>
                <Link href={`/scholars/${scholar.slug}`} style={{ display: "block", textAlign: "center", background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", color: "white", fontSize: "14px", fontWeight: 700, padding: "12px", borderRadius: "12px", textDecoration: "none", boxShadow: "0 4px 12px rgba(26,92,56,0.25)" }}>
                  View Profile →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}