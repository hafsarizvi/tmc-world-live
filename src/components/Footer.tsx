"use client";

import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { categories } from "@/data/categories";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ background: "linear-gradient(135deg, #0a2e1a 0%, #0f3d25 100%)", color: "white", paddingTop: "64px", paddingBottom: "32px" }}>
      <div className="container-custom">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
          paddingTop: "24px",
          marginBottom: "48px",
        }}>

          {/* Brand */}
          <div>
            <Link href="/">
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                overflow: "hidden",
                marginBottom: "16px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                border: "2px solid rgba(201,168,76,0.3)",
              }}>
                <Image
                  src="/assets/logo/logo.jpg"
                  alt="TMC World Live"
                  width={64}
                  height={64}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ paddingTop: "8px" }}>
            <h3 style={{ color: "#c9a84c", fontWeight: 700, marginBottom: "16px", fontSize: "15px" }}>
              {t.footer.quickLinks}
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[t.nav.home, t.nav.scholars, t.nav.lectures, t.nav.about, t.nav.contact].map((label, i) => (
                <li key={i}>
                  <Link href="/" style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div style={{ paddingTop: "8px" }}>
            <h3 style={{ color: "#c9a84c", fontWeight: 700, marginBottom: "16px", fontSize: "15px" }}>
              {t.footer.categories}
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.slug}`} style={{
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div style={{ paddingTop: "8px" }}>
            <h3 style={{ color: "#c9a84c", fontWeight: 700, marginBottom: "16px", fontSize: "15px" }}>
              {t.footer.followUs}
            </h3>
            <div style={{ display: "flex", gap: "16px" }}>
              {[
                { icon: FaYoutube, color: "#ff0000", href: "#" },
                { icon: FaFacebook, color: "#1877f2", href: "#" },
                { icon: FaInstagram, color: "#e1306c", href: "#" },
                { icon: FaWhatsapp, color: "#25d366", href: "#" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a key={i} href={social.href}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "18px",
                      transition: "all 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = social.color;
                      e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "24px",
          textAlign: "center",
          color: "rgba(255,255,255,0.35)",
          fontSize: "13px",
        }}>
          © {new Date().getFullYear()} TMC World Live. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}