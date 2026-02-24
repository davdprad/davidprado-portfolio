export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "24px",
        borderTop: "1px solid var(--border)",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        color: "rgba(255,255,255,0.2)",
      }}
    >
      © {new Date().getFullYear()} David Prado — Feito com muito café ☕
    </footer>
  );
}
