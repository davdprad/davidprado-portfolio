import { useState, useEffect } from "react";
import { Code2, Layers, Zap } from "lucide-react";
import useScramble from "../hooks/useScramble";
import type { ProjectsProps } from "../components/layout/Main";
import GridBg from "../components/GridBg";
import Orbs from "../components/Orbs";
import Header from "../components/layout/Header";
import Main from "../components/layout/Main";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const heroTitle = useScramble({
    text: "Full Stack Developer",
    started: heroReady,
  });

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  const projects: ProjectsProps[] = [
    {
      icon: Zap,
      tag: "ReactJS · FastAPI",
      title: "Checklist Movies",
      description:
        "Aplicação fullstack para descobrir e organizar filmes em tempo real, integrando a API do TMDB com um backend em FastAPI e interface reativa em React.",
      color: "#C000F6",
      image: "checklist_movies2.png",
    },
    {
      icon: Code2,
      tag: "Flutter · Riverpod",
      title: "Todo App Mobile",
      description:
        "App Flutter com persistência local, animações fluidas e gerenciamento de estado com Riverpod.",
      color: "#FF2D78",
      image: "todo_app2.png",
    },
    {
      icon: Layers,
      tag: "Next.js · BFF · JWT · Nest.js",
      title: "Sistema de Gestão Clínica",
      description:
        "Plataforma web multi-perfil para gestão integrada de exames, empresas e pacientes — com controle de acesso por roles e fluxos otimizados para cada tipo de usuário.",
      color: "#3D6BFF",
      image: "gestao_clinica1.png",
    },
  ];

  const skills: string[] = [
    "React",
    "Flutter",
    "Node.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQL Server",
    "Docker",
    "DevOps",
    "REST APIs",
    "JWT Auth",
    "Git",
  ];

  // const stats: StatsProps[] = [
  //   { value: 3, suffix: "+", label: "Anos aprendendo" },
  //   { value: 10, suffix: "+", label: "Projetos entregues" },
  //   { value: 100, suffix: "%", label: "Dedicação total" },
  // ];

  const navLinks: string[] = ["Sobre", "Projetos", "Habilidades", "Contato"];

  return (
    <>
      <div
        className="grain"
        style={{
          fontFamily: "'Syne', sans-serif",
          background: "var(--bg)",
          color: "#fff",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div className="scanline" />
        <GridBg />
        <Orbs />

        {/* ─── NAV ─── */}
        <Header
          navLinks={navLinks}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        {/* ─── MAIN ─── */}
        <Main
          heroTitle={heroTitle}
          // stats={stats}
          projects={projects}
          skills={skills}
        />

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

        {/* Responsive overrides */}
        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .burger { display: flex !important; }
            section > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}
