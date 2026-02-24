import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";
import ContactSessions from "../sections/ContactSessions";
import type { ProjectsProps } from "../../types/projects";

interface MainProps {
  heroTitle: string;
  projects: ProjectsProps[];
  skills: string[];
}

export default function Main({ heroTitle, projects, skills }: MainProps) {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      {/* ─── HERO ─── */}
      <HeroSection heroTitle={heroTitle} />

      {/* ─── ABOUT ─── */}
      <AboutSection />

      {/* ─── PROJECTS ─── */}
      <ProjectsSection projects={projects} />

      {/* ─── SKILLS ─── */}
      <SkillsSection skills={skills} />

      {/* ─── CONTACT ─── */}
      <ContactSessions />
    </main>
  );
}
