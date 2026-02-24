import { motion } from "framer-motion";
import MagneticBtn from "../MagneticBtn";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSessions() {
  return (
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
        <div className="font-mono text-[12px] text-(--mint) mb-4 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-(--mint) inline-block" />
          CONTATO
          <span className="h-px w-8 bg-(--mint) inline-block" />
        </div>
        <h2 className="text-[clamp(36px,5vw,72px)] font-extrabold tracking-[-2px] leading-none mb-4">
          Vamos construir
          <br />
          <span className="glow-text">algo incrível.</span>
        </h2>
        <p className="text-[16px] text-white/40 mb-12 font-mono font-light">
          Aberto a oportunidades, freelas e projetos desafiadores.
        </p>

        <MagneticBtn
          href="mailto:davidprado0113@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-(--mint) text-[16px] font-bold text-black no-underline cursor-pointer border-none mb-12"
        >
          <Mail size={18} /> davidprado0113@gmail.com
        </MagneticBtn>

        <div className="flex gap-4 justify-center">
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
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-(--border)
                        text-white py-3 px-6 rounded-full text-sm no-underline bg-(--card)
                        font-syne font-semibold transition-colors hover:text-white"
            >
              {icon} {label}
            </MagneticBtn>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
