export default function Orbs() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,255,209,0.08) 0%, transparent 70%)",
          top: "10%",
          left: "-10%",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,45,120,0.07) 0%, transparent 70%)",
          top: "50%",
          right: "-5%",
          animation: "float 11s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(61,107,255,0.06) 0%, transparent 70%)",
          bottom: "10%",
          left: "40%",
          animation: "float 9s ease-in-out infinite 2s",
        }}
      />
    </div>
  );
}
