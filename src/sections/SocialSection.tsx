"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const socialPlatforms = [
  {
    name: "YouTube",
    icon: FaYoutube,
    gradient: "linear-gradient(135deg, #ff0000, #cc0000)",
    glowColor: "rgba(255,0,0,0.3)",
    borderColor: "rgba(255,0,0,0.2)",
    action: "Subscribe",
    handle: "@tmclivelk",
    href: "https://www.youtube.com/@tmclivelk",
    stats: "Watch Lectures",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    gradient: "linear-gradient(135deg, #1877f2, #0d5fd4)",
    glowColor: "rgba(24,119,242,0.3)",
    borderColor: "rgba(24,119,242,0.2)",
    action: "Follow",
    handle: "@tmcworldlive",
    href: "https://www.facebook.com/tmcworldlive/",
    stats: "Join Community",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    gradient: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af)",
    glowColor: "rgba(221,42,123,0.3)",
    borderColor: "rgba(221,42,123,0.2)",
    action: "Follow",
    handle: "@tmc_world_live",
    href: "https://www.instagram.com/tmc_world_live/",
    stats: "View Updates",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    gradient: "linear-gradient(135deg, #25d366, #128c7e)",
    glowColor: "rgba(37,211,102,0.3)",
    borderColor: "rgba(37,211,102,0.2)",
    action: "Join Channel",
    handle: "TMC Live",
    href: "https://whatsapp.com/channel/0029Va4z0erF6smz8h8HsN2d",
    stats: "Get Updates",
  },
];

export default function SocialSection() {
  const { t } = useLanguage();

  return (
    <section style={{
      padding: "100px 0",
      background: "linear-gradient(135deg, #0a2e1a 0%, #0f3d25 40%, #1a5c38 100%)",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background decorative circles */}
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-100px",
        left: "-100px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(45,122,79,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>

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
            color: "#c9a84c",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            Connect
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px",
          }}>
            {t.social.title}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "520px", margin: "0 auto", fontSize: "16px", lineHeight: 1.7 }}>
            {t.social.subtitle}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
            <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c9a84c" }} />
            <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}>
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${platform.borderColor}`,
                    borderRadius: "24px",
                    padding: "36px 24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.09)";
                    e.currentTarget.style.boxShadow = `0 20px 60px ${platform.glowColor}`;
                    e.currentTarget.style.borderColor = platform.glowColor;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = platform.borderColor;
                  }}
                >
                  {/* Glow top */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80px",
                    height: "2px",
                    background: platform.gradient,
                    borderRadius: "999px",
                  }} />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "20px",
                      background: platform.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "32px",
                      color: "white",
                      marginBottom: "20px",
                      boxShadow: `0 8px 24px ${platform.glowColor}`,
                    }}
                  >
                    <Icon />
                  </motion.div>

                  <h3 style={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: "20px",
                    marginBottom: "4px",
                  }}>
                    {platform.name}
                  </h3>

                  <p style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "13px",
                    marginBottom: "6px",
                  }}>
                    {platform.handle}
                  </p>

                  <p style={{
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "12px",
                    marginBottom: "24px",
                  }}>
                    {platform.stats}
                  </p>

                  {/* Button */}
                  <div style={{
                    background: platform.gradient,
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 700,
                    padding: "10px 28px",
                    borderRadius: "999px",
                    boxShadow: `0 4px 16px ${platform.glowColor}`,
                    letterSpacing: "0.05em",
                  }}>
                    {platform.action}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}