import { motion } from "framer-motion";
import MagneticBtn from "../MagneticBtn";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function HeroSection({ heroTitle }: { heroTitle: string }) {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center pt-20 px-6 pb-0 text-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[clamp(32px,10vw,64px)] font-extrabold leading-[1.1] mb-4 max-w-[100vw] mx-auto wrap-break-word"
      >
        <span className="glow-text">{heroTitle}</span>
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="h-0.5 w-30 bg-linear-to-r from-transparent via-(--mint) to-transparent my-6 mx-auto"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-140 text-white/50 leading-[1.7] text-[17px] mb-12 font-mono font-light"
      >
        Estudante de Engenharia de Software na UFAM. Construo aplicações web,
        mobile e automações com foco em arquitetura limpa e performance.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        {/* Botão 1 - Projetos */}
        <MagneticBtn
          href="#projetos"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-(--mint) text-[16px] font-bold text-black no-underline cursor-pointer border-none"
        >
          Ver Projetos <ArrowUpRight size={18} />
        </MagneticBtn>

        {/* Botão 2 - Contato (Totalmente em Tailwind) */}
        <MagneticBtn
          href="#contato"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-transparent text-white border border-white/15 text-[16px] font-bold cursor-pointer no-underline font-syne"
        >
          Contato
        </MagneticBtn>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/30 text-[11px] font-mono"
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
  );
}
