import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-6 max-w-300 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-[12px] text-(--mint) mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-(--mint) inline-block" />
            SOBRE MIM
          </div>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] mb-6 tracking-[-1px]">
            Código limpo,
            <br />
            <span className="text-(--mint)">resultados</span> reais.
          </h2>
          <p className="text-white/50 leading-[1.8] text-[16px] mb-6 font-mono font-light">
            Sou estudante de Engenharia de Software pela UFAM, apaixonado por
            construir soluções que fazem diferença. Atuo no desenvolvimento de
            aplicações web, mobile e automações.
          </p>
          <p className="text-white/50 leading-[1.8] text-[16px] mb-6 font-mono font-light">
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
          <div className="bg-(--card) ring-1 ring-(--border) rounded-2xl overflow-hidden">
            <div className="flex gap-1.5 items-center px-4 py-3 border-b border-(--border)">
              <div className="w-3 h-3 rounded-[50%] bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-[50%] bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-[50%] bg-[#28C840]" />
              <span className="ml-2 font-mono text-[11px] text-white/30">
                david@portfolio ~
              </span>
            </div>
            <div className="p-6 font-mono text-[14px] leading-loose">
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
                  className="flex gap-2"
                >
                  <span className="text-white/30">{label}:</span>
                  <span style={{ color }}>{value}</span>
                </motion.div>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-2 h-4 bg-(--mint) mt-2 align-middle"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
