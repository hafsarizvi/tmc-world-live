"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { scholars } from "@/data/scholars";

export default function ScholarPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const scholar = scholars.find((s) => s.slug === slug);

  if (!scholar) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#0f3d25", fontSize: "32px", fontWeight: 800, marginBottom: "16px" }}>Scholar Not Found</h1>
          <Link href="/scholars" style={{ color: "#1a5c38", fontWeight: 600, textDecoration: "none" }}>← Back to Scholars</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8fffe" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0a2e1a 0%, #0f3d25 50%, #1a5c38 100%)",
        padding: "120px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "24px" }}
          >
            <div style={{
              width: "160px", height: "160px", borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid rgba(201,168,76,0.5)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
            }}>
              <img
                src={scholar.image}
                alt={scholar.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div>
              <h1 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 900, color: "white", marginBottom: "8px", lineHeight: 1.2 }}>
                {scholar.name}
              </h1>
              <p style={{ color: "#c9a84c", fontSize: "15px", fontWeight: 600, maxWidth: "600px", lineHeight: 1.5 }}>
                {scholar.designation}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c9a84c" }} />
              <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom" style={{ padding: "64px 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginBottom: "32px",
        }}>

          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: "white", borderRadius: "24px", padding: "32px",
              boxShadow: "0 4px 24px rgba(26,92,56,0.08)",
              gridColumn: "1 / -1",
            }}
          >
            <h2 style={{ color: "#0f3d25", fontWeight: 800, fontSize: "20px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "4px", height: "24px", background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", borderRadius: "999px", display: "inline-block" }} />
              Biography
            </h2>
            <p style={{ color: "#4b5563", fontSize: "15px", lineHeight: 1.9 }}>{scholar.biography}</p>
          </motion.div>

          {/* Qualifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ background: "white", borderRadius: "24px", padding: "32px", boxShadow: "0 4px 24px rgba(26,92,56,0.08)" }}
          >
            <h2 style={{ color: "#0f3d25", fontWeight: 800, fontSize: "20px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "4px", height: "24px", background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", borderRadius: "999px", display: "inline-block" }} />
              Qualifications
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {scholar.qualifications.map((q, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{
                    width: "24px", height: "24px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #1a5c38, #2d7a4f)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: "2px",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span style={{ color: "#4b5563", fontSize: "14px", lineHeight: 1.7 }}>{q}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ background: "white", borderRadius: "24px", padding: "32px", boxShadow: "0 4px 24px rgba(26,92,56,0.08)" }}
          >
            <h2 style={{ color: "#0f3d25", fontWeight: 800, fontSize: "20px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "4px", height: "24px", background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", borderRadius: "999px", display: "inline-block" }} />
              Areas of Expertise
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {scholar.expertise.map((area, i) => (
                <span key={i} style={{
                  background: "linear-gradient(135deg, #f0f9f4, #e8f5ee)",
                  color: "#1a5c38", fontSize: "13px", fontWeight: 700,
                  padding: "8px 16px", borderRadius: "999px",
                  border: "1.5px solid #c8e6d4",
                }}>
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <Link
          href="/scholars"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, #1a5c38, #2d7a4f)",
            color: "white", fontWeight: 700, fontSize: "14px",
            padding: "12px 28px", borderRadius: "999px",
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(26,92,56,0.3)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Scholars
        </Link>
      </div>
    </div>
  );
}