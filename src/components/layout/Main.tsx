import { motion } from "framer-motion";
import MagneticBtn from "../MagneticBtn";
import {
  ArrowUpRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";
import TiltCard from "../TiltCard";
// import Counter from "../Counter";

export interface StatsProps {
  value: number;
  suffix: string;
  label: string;
}

export interface ProjectsProps {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  color: string;
  image: string;
}

interface MainProps {
  heroTitle: string;
  // stats: StatsProps[];
  projects: ProjectsProps[];
  skills: string[];
}

export default function Main({
  heroTitle,
  // stats,
  projects,
  skills,
}: MainProps) {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      {/* ─── HERO ─── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 24px 0",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 99,
            border: "1px solid rgba(0,255,209,0.3)",
            background: "rgba(0,255,209,0.05)",
            marginBottom: 32,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "var(--mint)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--mint)",
              display: "inline-block",
              animation: "pulse-glow 2s ease infinite",
            }}
          />
          Disponível para projetos
        </motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(48px, 9vw, 120px)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -2,
            marginBottom: 16,
          }}
        >
          <span className="glow-text">{heroTitle}</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            height: 2,
            width: 120,
            background:
              "linear-gradient(90deg, transparent, var(--mint), transparent)",
            margin: "24px auto",
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            maxWidth: 560,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            fontSize: 17,
            marginBottom: 48,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 300,
          }}
        >
          Estudante de Engenharia de Software na UFAM. Construo aplicações web,
          mobile e automações com foco em arquitetura limpa e performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <MagneticBtn
            href="#projetos"
            style={{
              background: "var(--mint)",
              color: "#000",
              border: "none",
              padding: "14px 32px",
              borderRadius: 99,
              fontSize: 15,
              fontWeight: 800,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Ver Projetos <ArrowUpRight size={16} />
          </MagneticBtn>
          <MagneticBtn
            href="#contato"
            style={{
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "14px 32px",
              borderRadius: 99,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Contato
          </MagneticBtn>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "rgba(255,255,255,0.3)",
            fontSize: 11,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <span>scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      {/* <section
        style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 1,
            background: "var(--border)",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          {stats.map(({ value, suffix, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                background: "var(--card)",
                padding: "40px 32px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(40px, 6vw, 64px)",
                  fontWeight: 800,
                  color: "var(--mint)",
                  lineHeight: 1,
                }}
              >
                <Counter end={value} suffix={suffix} />
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 13,
                  marginTop: 8,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* ─── ABOUT ─── */}
      <section
        id="sobre"
        style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "var(--mint)",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  height: 1,
                  width: 32,
                  background: "var(--mint)",
                  display: "inline-block",
                }}
              />
              SOBRE MIM
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 24,
                letterSpacing: -1,
              }}
            >
              Código limpo,
              <br />
              <span style={{ color: "var(--mint)" }}>resultados</span> reais.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                fontSize: 15,
                marginBottom: 24,
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 300,
              }}
            >
              Sou estudante de Engenharia de Software pela UFAM, apaixonado por
              construir soluções que fazem diferença. Atuo no desenvolvimento de
              aplicações web, mobile e automações.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.8,
                fontSize: 15,
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 300,
              }}
            >
              Busco sempre aplicar boas práticas para sistemas organizados,
              eficientes e escaláveis — com foco obsessivo em qualidade e
              performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Terminal window */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "12px 16px",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#FF5F57",
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#FEBC2E",
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#28C840",
                  }}
                />
                <span
                  style={{
                    marginLeft: 8,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  david@portfolio ~{" "}
                </span>
              </div>
              <div
                style={{
                  padding: 24,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  lineHeight: 2,
                }}
              >
                {[
                  {
                    label: "nome",
                    value: '"David Prado"',
                    color: "#00FFD1",
                  },
                  {
                    label: "curso",
                    value: '"Eng. de Software"',
                    color: "#FF2D78",
                  },
                  {
                    label: "universidade",
                    value: '"UFAM"',
                    color: "#3D6BFF",
                  },
                  {
                    label: "foco",
                    value: '["web", "mobile", "API"]',
                    color: "#00FFD1",
                  },
                  { label: "disponivel", value: "true", color: "#28C840" },
                ].map(({ label, value, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    style={{ display: "flex", gap: 8 }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>
                      {label}:
                    </span>
                    <span style={{ color }}>{value}</span>
                  </motion.div>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 16,
                    background: "var(--mint)",
                    verticalAlign: "middle",
                    marginTop: 8,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section
        id="projetos"
        style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "var(--mint)",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                height: 1,
                width: 32,
                background: "var(--mint)",
                display: "inline-block",
              }}
            />
            PROJETOS
            <span
              style={{
                height: 1,
                width: 32,
                background: "var(--mint)",
                display: "inline-block",
              }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            O que já construí
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map(
            ({ icon: Icon, tag, title, description, color, image }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TiltCard>
                  {/* Top accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                      zIndex: 2,
                    }}
                  />

                  {/* ── Preview Image ── */}
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "16/9",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Preview de ${title}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                    {/* gradient fade into card body */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(to bottom, transparent 55%, var(--card) 100%)`,
                        pointerEvents: "none",
                      }}
                    />
                    {/* floating tag chip */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 12,
                        left: 16,
                        padding: "4px 10px",
                        borderRadius: 99,
                        background: `${color}22`,
                        border: `1px solid ${color}40`,
                        backdropFilter: "blur(8px)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color,
                        letterSpacing: 0.5,
                      }}
                    >
                      {tag}
                    </div>
                  </div>

                  {/* ── Card body ── */}
                  <div
                    style={{
                      padding: "20px 24px 24px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 10,
                          background: `${color}18`,
                          border: `1px solid ${color}30`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <h3
                        style={{
                          fontSize: 19,
                          fontWeight: 800,
                          letterSpacing: -0.5,
                        }}
                      >
                        {title}
                      </h3>
                    </div>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: 13.5,
                        lineHeight: 1.7,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 300,
                        flex: 1,
                      }}
                    >
                      {description}
                    </p>
                    <div
                      style={{
                        marginTop: 18,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color,
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      Ver projeto <ArrowUpRight size={14} />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ),
          )}
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section
        id="habilidades"
        style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "var(--mint)",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                height: 1,
                width: 32,
                background: "var(--mint)",
                display: "inline-block",
              }}
            />
            HABILIDADES
            <span
              style={{
                height: 1,
                width: 32,
                background: "var(--mint)",
                display: "inline-block",
              }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            Stack tecnológico
          </h2>
        </motion.div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: "var(--mint)" }}
              style={{
                padding: "10px 20px",
                borderRadius: 99,
                border: "1px solid var(--border)",
                background: "var(--card)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: "rgba(255,255,255,0.7)",
                cursor: "default",
                transition: "border-color 0.2s",
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contato"
        style={{
          padding: "80px 24px 120px",
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "var(--mint)",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                height: 1,
                width: 32,
                background: "var(--mint)",
                display: "inline-block",
              }}
            />
            CONTATO
            <span
              style={{
                height: 1,
                width: 32,
                background: "var(--mint)",
                display: "inline-block",
              }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1,
              marginBottom: 16,
            }}
          >
            Vamos construir
            <br />
            <span className="glow-text">algo incrível.</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              marginBottom: 48,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              fontWeight: 300,
            }}
          >
            Aberto a oportunidades, freelas e projetos desafiadores.
          </p>

          <MagneticBtn
            href="mailto:davidprado0113@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "var(--mint)",
              color: "#000",
              padding: "16px 36px",
              borderRadius: 99,
              fontSize: 16,
              fontWeight: 800,
              textDecoration: "none",
              marginBottom: 48,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            <Mail size={18} /> davidprado0113@gmail.com
          </MagneticBtn>

          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            {[
              {
                href: "https://github.com/davdprad",
                label: "GitHub",
                icon: <Github size={18} />,
              },
              {
                href: "https://www.linkedin.com/in/davidyanprado/",
                label: "LinkedIn",
                icon: <Linkedin size={18} />,
              },
            ].map(({ href, label, icon }) => (
              <MagneticBtn
                key={label}
                href={href}
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid var(--border)",
                  color: "rgba(255,255,255,0.6)",
                  padding: "12px 24px",
                  borderRadius: 99,
                  fontSize: 14,
                  textDecoration: "none",
                  background: "var(--card)",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                }}
              >
                {icon} {label}
              </MagneticBtn>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
