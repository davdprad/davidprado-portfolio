export default function GridBg() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage: `
        linear-gradient(rgba(0,255,209,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,255,209,0.03) 1px, transparent 1px)
      `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}
