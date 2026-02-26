import { motion } from "framer-motion";
import TiltCard from "../TiltCard";
// import { ArrowUpRight } from "lucide-react";
import type { ProjectsProps } from "../../types/projects";

export default function ProjectsSection({
  projects,
}: {
  projects: ProjectsProps[];
}) {
  return (
    <section id="projetos" className="px-6 py-20 max-w-300 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 font-mono text-[12px] text-(--mint)">
          <span className="h-px w-8 bg-(--mint) inline-block" />
          PROJETOS
          <span className="h-px w-8 bg-(--mint) inline-block" />
        </div>
        <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1px]">
          O que já construí
        </h2>
      </motion.div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
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
                  className="absolute top-0 left-0 right-0 h-0.5 z-2"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                  }}
                />

                {/* ── Preview Image ── */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={image}
                    alt={`Preview de ${title}`}
                    className="w-full h-full object-cover block transition-transform duration-[0.4s] ease-in-out"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-(--card) pointer-events-none" />
                  <div
                    className="absolute bottom-3 left-4 px-2.5 py-1 rounded-full
                                border backdrop-blur-md
                                font-mono text-[10px] tracking-[0.5px]"
                    style={{
                      background: `${color}22`,
                      border: `1px solid ${color}40`,
                      color,
                    }}
                  >
                    {tag}
                  </div>
                </div>

                {/* ── Card body ── */}
                <div className="flex flex-col flex-1 py-5">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div
                      className="w-8.5 h-8.5 rounded-[10px] border flex items-center justify-center shrink-0"
                      style={{
                        background: `${color}18`,
                        border: `1px solid ${color}30`,
                        color,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-[19px] font-bold tracking-[-0.5px]">
                      {title}
                    </h3>
                  </div>
                  <p className="text-white/45 text-[14px] leading-[1.7] font-mono font-light flex-1">
                    {description}
                  </p>
                  {/* <div
                    className="mt-4.5 flex items-center gap-1.5 text-[13px] font-bold"
                    style={{
                      color,
                    }}
                  >
                    Ver projeto <ArrowUpRight size={14} />
                  </div> */}
                </div>
              </TiltCard>
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
