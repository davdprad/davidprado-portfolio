import { motion, AnimatePresence } from "framer-motion";
import MagneticBtn from "../MagneticBtn";

interface HeaderProps {
  navLinks: string[];
  menuOpen: boolean;
  setMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function Header({
  navLinks,
  menuOpen,
  setMenuOpen,
}: HeaderProps) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        background: "rgba(6,6,8,0.7)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 64,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              color: "var(--mint)",
              opacity: 0.7,
            }}
          >
            //{" "}
          </span>
          <span style={{ fontWeight: 800, letterSpacing: 1 }}>David Prado</span>
        </motion.div>

        <nav
          style={{ display: "flex", gap: 8, alignItems: "center" }}
          className="desktop-nav"
        >
          {navLinks.map((label, i) => (
            <motion.a
              key={label}
              href={`#${label.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              style={{
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                fontSize: 13,
                padding: "6px 14px",
                borderRadius: 99,
                transition: "all 0.2s",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 400,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--mint)";
                e.currentTarget.style.background = "rgba(0,255,209,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {label}
            </motion.a>
          ))}
          <MagneticBtn
            href="mailto:davidprado0113@gmail.com"
            style={{
              background: "var(--mint)",
              color: "#000",
              border: "none",
              padding: "8px 20px",
              borderRadius: 99,
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              textDecoration: "none",
              fontFamily: "'Syne', sans-serif",
              marginLeft: 8,
              display: "inline-block",
            }}
          >
            Contratar
          </MagneticBtn>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1"
          onClick={() => setMenuOpen((p) => !p)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
          />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {navLinks.map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    padding: "8px 0",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 14,
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
