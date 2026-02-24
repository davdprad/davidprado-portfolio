import { useState, useEffect } from "react";
import { Code2, Layers, Zap } from "lucide-react";
import useScramble from "../hooks/useScramble";
import GridBg from "../components/GridBg";
import Orbs from "../components/Orbs";
import Header from "../components/layout/Header";
import Main from "../components/layout/Main";
import type { ProjectsProps } from "../types/projects";
import Footer from "../components/layout/Footer";

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
      icon: Layers,
      tag: "Next.js · BFF · JWT · Nest.js",
      title: "Sistema de Gestão Clínica",
      description:
        "Plataforma web multi-perfil para gestão integrada de exames, empresas e pacientes — com controle de acesso por roles e fluxos otimizados para cada tipo de usuário.",
      color: "#3D6BFF",
      image: "gestao_clinica2.png",
    },
    {
      icon: Zap,
      tag: "ReactJS · FastAPI",
      title: "Checklist Movies",
      description:
        "Aplicação fullstack para descobrir e organizar filmes em tempo real, integrando a API do TMDB com um backend em FastAPI e interface reativa em React.",
      color: "#C000F6",
      image: "checklist_movies3.png",
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
        <Main heroTitle={heroTitle} projects={projects} skills={skills} />

        {/* ── FOOTER ── */}
        <Footer />
      </div>
    </>
  );
}
