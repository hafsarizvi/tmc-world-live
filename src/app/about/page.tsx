"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
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
          >
            <span style={{
              color: "#c9a84c", fontSize: "13px", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              display: "block", marginBottom: "12px",
            }}>
              Who We Are
            </span>
            <h1 style={{
              fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900,
              color: "white", marginBottom: "16px", lineHeight: 1.2,
            }}>
              About TMC World Live
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.6)", fontSize: "16px",
              maxWidth: "560px", margin: "0 auto", lineHeight: 1.8,
            }}>
              A trusted platform dedicated to delivering authentic Islamic knowledge to Tamil-speaking Muslims worldwide.
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

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: "white", borderRadius: "24px",
            padding: "48px", marginBottom: "28px",
            boxShadow: "0 4px 24px rgba(26,92,56,0.08)",
          }}
        >
          <h2 style={{ color: "#0f3d25", fontWeight: 800, fontSize: "28px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ width: "4px", height: "28px", background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", borderRadius: "999px", display: "inline-block" }} />
            Our Story
          </h2>
          <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: 1.9, marginBottom: "16px" }}>
            TMC World Live originated as TMC Live Telecast, established with a sincere mission to make authentic Islamic knowledge freely accessible to Tamil-speaking Muslims across Sri Lanka and around the world.
          </p>
          <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: 1.9 }}>
            Over the years, the platform has grown into a trusted digital media channel, delivering scholarly lectures, educational programs, and community guidance through YouTube, WhatsApp, and social media. Today, TMC World Live stands as one of the leading Tamil Islamic knowledge platforms serving a global audience.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          marginBottom: "28px",
        }}>
          {[
            {
              title: "Our Mission",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              ),
              text: "To provide free, authentic, and accessible Islamic knowledge to Tamil-speaking Muslims worldwide through trusted scholarship, educational programs, and digital media.",
            },
            {
              title: "Our Vision",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              ),
              text: "To become the leading Tamil Islamic knowledge platform globally, empowering Muslim communities with authentic scholarship, spiritual guidance, and educational resources.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "linear-gradient(135deg, #0f3d25, #1a5c38)",
                borderRadius: "24px", padding: "36px",
                boxShadow: "0 8px 32px rgba(26,92,56,0.2)",
              }}
            >
              <div style={{
                width: "56px", height: "56px", borderRadius: "16px",
                background: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
              }}>
                {item.icon}
              </div>
              <h3 style={{ color: "#c9a84c", fontWeight: 800, fontSize: "20px", marginBottom: "12px" }}>
                {item.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", lineHeight: 1.8 }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: "white", borderRadius: "24px",
            padding: "48px", marginBottom: "28px",
            boxShadow: "0 4px 24px rgba(26,92,56,0.08)",
          }}
        >
          <h2 style={{ color: "#0f3d25", fontWeight: 800, fontSize: "28px", marginBottom: "32px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ width: "4px", height: "28px", background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", borderRadius: "999px", display: "inline-block" }} />
            What We Offer
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}>
            {[
              {
  title: "Scholarly Lectures",
  desc: "In-depth bayans and lectures by qualified Islamic scholars on core Islamic subjects.",
  icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      <line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/>
    </svg>
  ),
},
{
  title: "Tamil Language Content",
  desc: "All content delivered primarily in Tamil, serving the global Tamil Muslim diaspora.",
  icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
},
{
  title: "Family & Community Guidance",
  desc: "Practical Islamic guidance on marriage, parenting, and community values.",
  icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
},
{
  title: "Free Access",
  desc: "All lectures and educational content are freely available to everyone.",
  icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  ),
},
{
  title: "Multi-Platform",
  desc: "Available on YouTube, Facebook, Instagram, and WhatsApp for easy access.",
  icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
},
{
  title: "Authentic Scholarship",
  desc: "Content reviewed and delivered by qualified scholars following authentic Islamic sources.",
  icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
},
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{
                  background: "linear-gradient(135deg, #f8fffe, #f0f9f4)",
                  borderRadius: "16px", padding: "24px",
                  border: "1.5px solid #e8f5ee",
                }}
              >
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg, #f0f9f4, #e8f5ee)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", boxShadow: "0 4px 12px rgba(26,92,56,0.1)" }}>{item.icon}</div>
                <h3 style={{ color: "#0f3d25", fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: "linear-gradient(135deg, #0a2e1a, #0f3d25)",
            borderRadius: "24px", padding: "48px",
            marginBottom: "28px",
          }}
        >
          <h2 style={{ color: "white", fontWeight: 800, fontSize: "28px", marginBottom: "40px", textAlign: "center" }}>
            TMC World Live in Numbers
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "32px",
            textAlign: "center",
          }}>
            {[
              { number: "500+", label: "Lectures" },
              { number: "15+", label: "Scholars" },
              { number: "50K+", label: "Followers" },
              { number: "10+", label: "Years" },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900,
                  background: "linear-gradient(135deg, #c9a84c, #e2c46a)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  marginBottom: "8px",
                }}>
                  {stat.number}
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", fontWeight: 500, letterSpacing: "0.05em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <Link
            href="/scholars"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(135deg, #1a5c38, #2d7a4f)",
              color: "white", fontWeight: 700, fontSize: "15px",
              padding: "14px 32px", borderRadius: "999px",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(26,92,56,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(26,92,56,0.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(26,92,56,0.3)";
            }}
          >
            Meet Our Scholars →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}