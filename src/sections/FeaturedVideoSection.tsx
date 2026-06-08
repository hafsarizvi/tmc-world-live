"use client";

import { motion } from "framer-motion";

export default function FeaturedVideoSection() {
  return (
    <section style={{
      padding: "100px 0",
      background: "linear-gradient(135deg, #0a2e1a 0%, #0f3d25 50%, #0a2e1a 100%)",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        top: "-80px",
        left: "-80px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-80px",
        right: "-80px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,122,79,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <span style={{
            display: "inline-block",
            color: "#c9a84c",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            Featured Lecture
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px",
          }}>
            Watch & Learn
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.55)",
            maxWidth: "520px",
            margin: "0 auto",
            fontSize: "16px",
            lineHeight: 1.7,
          }}>
            Authentic Islamic knowledge delivered by trusted scholars for Tamil-speaking Muslims worldwide.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
            <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c9a84c" }} />
            <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
        </motion.div>

        {/* Video + Info */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "40px",
          maxWidth: "900px",
          margin: "0 auto",
        }}>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            {/* Gold top line */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "linear-gradient(90deg, #c9a84c, #e2c46a, #c9a84c)",
              zIndex: 2,
            }} />

            {/* Aspect ratio wrapper 16:9 */}
            <div style={{ position: "relative", paddingTop: "56.25%", background: "#000" }}>
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src="https://www.youtube.com/embed/aseadQ-UnGw?autoplay=0&rel=0&modestbranding=1"
                title="TMC World Live Featured Lecture"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Info cards row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.27 6.27l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                ),
                label: "Channel",
                value: "TMC World Live",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                ),
                label: "Language",
                value: "Tamil",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ),
                label: "Platform",
                value: "YouTube",
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                backdropFilter: "blur(8px)",
              }}>
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(201,168,76,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {item.label}
                  </div>
                  <div style={{ color: "white", fontSize: "15px", fontWeight: 700, marginTop: "2px" }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}