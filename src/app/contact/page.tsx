"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await emailjs.send(
        "service_yad9tdd",
        "template_1oxkags",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "oa1pomq96au1V0Hb-"
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const socialLinks = [
    {
      href: "https://www.youtube.com/@tmclivelk",
      color: "#ff0000",
      label: "TMC Live",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z"/>
        </svg>
      ),
    },
    {
      href: "https://www.facebook.com/tmcworldlive/",
      color: "#1877f2",
      label: "Facebook",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      href: "https://www.instagram.com/tmc_world_live/",
      color: "#e1306c",
      label: "Instagram",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      href: "https://whatsapp.com/channel/0029Va4z0erF6smz8h8HsN2d",
      color: "#25d366",
      label: "WhatsApp",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.859L.057 23.428a.5.5 0 0 0 .606.627l5.684-1.49A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.001-1.371l-.36-.214-3.716.974.994-3.62-.234-.373A9.818 9.818 0 1 1 12 21.818z"/>
        </svg>
      ),
    },
  ];

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
            <span style={{ color: "#c9a84c", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
              Get In Touch
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>
              Contact Us
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              Have a question, suggestion, or want to collaborate? We would love to hear from you.
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
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{
              background: "linear-gradient(135deg, #0f3d25, #1a5c38)",
              borderRadius: "24px", padding: "36px",
              boxShadow: "0 8px 32px rgba(26,92,56,0.2)",
            }}>
              <h2 style={{ color: "white", fontWeight: 800, fontSize: "22px", marginBottom: "8px" }}>
                Let us Connect
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7, marginBottom: "28px" }}>
                Reach out to us through any of the following channels or fill in the contact form.
              </p>
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: "Email",
                  value: "tmclivetelecast@gmail.com",
                  href: "mailto:tmclivetelecast@gmail.com",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.27 6.27l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  label: "YouTube",
                  value: "@tmclivelk",
                  href: "https://www.youtube.com/@tmclivelk",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: "Location",
                  value: "Sri Lanka",
                  href: "#",
                },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px", textDecoration: "none", transition: "opacity 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(201,168,76,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {item.label}
                    </div>
                    <div style={{ color: "white", fontSize: "14px", fontWeight: 600, marginTop: "2px" }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ background: "white", borderRadius: "24px", padding: "28px", boxShadow: "0 4px 24px rgba(26,92,56,0.08)" }}>
              <h3 style={{ color: "#0f3d25", fontWeight: 700, fontSize: "16px", marginBottom: "16px" }}>Follow Us</h3>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      padding: "10px 16px", borderRadius: "12px",
                      background: "linear-gradient(135deg, #f0f9f4, #e8f5ee)",
                      color: s.color, textDecoration: "none",
                      fontSize: "13px", fontWeight: 700,
                      transition: "all 0.2s", border: "1.5px solid #e8f5ee",
                      boxShadow: "0 2px 8px rgba(26,92,56,0.06)",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = s.color;
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 6px 20px ${s.color}40`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #f0f9f4, #e8f5ee)";
                      e.currentTarget.style.color = s.color;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(26,92,56,0.06)";
                    }}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ background: "white", borderRadius: "24px", padding: "40px", boxShadow: "0 4px 24px rgba(26,92,56,0.08)" }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, #1a5c38, #2d7a4f)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ color: "#0f3d25", fontWeight: 800, fontSize: "22px", marginBottom: "8px" }}>Message Sent!</h3>
                <p style={{ color: "#6b7280", fontSize: "15px", lineHeight: 1.7 }}>
                  Thank you for reaching out. We will get back to you soon, insha Allah.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{ color: "#0f3d25", fontWeight: 800, fontSize: "22px", marginBottom: "8px" }}>Send a Message</h2>
                <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "28px", lineHeight: 1.7 }}>
                  Fill in the form and we will respond as soon as possible. Message will be sent directly to our email.
                </p>

                {error && (
                  <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "12px 16px", marginBottom: "16px", color: "#dc2626", fontSize: "13px", fontWeight: 600 }}>
                    {error}
                  </div>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { label: "Your Name *", key: "name", type: "text", placeholder: "Enter your full name" },
                    { label: "Email Address *", key: "email", type: "email", placeholder: "Enter your email" },
                    { label: "Subject", key: "subject", type: "text", placeholder: "What is this about?" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ display: "block", color: "#374151", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e8f5ee", borderRadius: "12px", fontSize: "14px", color: "#1a1a1a", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box", fontFamily: "Inter, sans-serif" }}
                        onFocus={e => (e.target.style.borderColor = "#1a5c38")}
                        onBlur={e => (e.target.style.borderColor = "#e8f5ee")}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: "block", color: "#374151", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                      Message *
                    </label>
                    <textarea
                      placeholder="Write your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e8f5ee", borderRadius: "12px", fontSize: "14px", color: "#1a1a1a", outline: "none", transition: "border-color 0.2s", resize: "vertical", boxSizing: "border-box", fontFamily: "Inter, sans-serif" }}
                      onFocus={e => (e.target.style.borderColor = "#1a5c38")}
                      onBlur={e => (e.target.style.borderColor = "#e8f5ee")}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                      background: loading ? "#9ca3af" : "linear-gradient(135deg, #1a5c38, #2d7a4f)",
                      color: "white", fontWeight: 700, fontSize: "15px",
                      padding: "14px 32px", borderRadius: "999px",
                      border: "none", cursor: loading ? "not-allowed" : "pointer",
                      boxShadow: "0 8px 24px rgba(26,92,56,0.3)",
                      transition: "all 0.3s ease", width: "100%",
                    }}
                    onMouseEnter={e => {
                      if (!loading) {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 12px 32px rgba(26,92,56,0.4)";
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(26,92,56,0.3)";
                    }}
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}