import { motion } from "framer-motion";

export default function SkillsSection({ skills }: { skills: string[] }) {
  return (
    <section id="habilidades" className="px-6 py-20 max-w-300 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="font-mono text-[12px] text-(--mint) mb-4 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-(--mint) inline-block" />
          HABILIDADES
          <span className="h-px w-8 bg-(--mint) inline-block" />
        </div>
        <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1px]">
          Stack tecnológico
        </h2>
      </motion.div>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-5 py-2.5 rounded-full border border-(--border) hover:border-(--mint)
                        bg-(--card) font-mono text-[15px] text-white/70 hover:scale-105
                        cursor-default transition-all duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
