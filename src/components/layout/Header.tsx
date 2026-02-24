import { motion } from "framer-motion";
import MagneticBtn from "../MagneticBtn";

interface HeaderProps {
  navLinks: string[];
  menuOpen: boolean;
  setMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function Header({
  navLinks,
  menuOpen,
  setMenuOpen,
}: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-1000 backdrop-blur-[20px] border-b border-(--border) bg-(--card)/60">
      <div className="max-w-300 mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono font-extrabold text-(--mint) opacity-70">
            //{" "}
          </span>
          <span className="font-extrabold tracking-[-1px]">David Prado</span>
        </motion.div>

        <nav className="hidden md:flex gap-2 items-center">
          {navLinks.map((label) => (
            <motion.a
              key={label}
              href={`#${label.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/60 bg-transparent no-underline text-[14px] px-3.5 py-1.5 rounded-full
                          transition-all duration-200 font-mono font-normal
                          hover:text-(--mint) hover:bg-(--mint)/10"
            >
              {label}
            </motion.a>
          ))}

          <MagneticBtn
            href="mailto:davidprado0113@gmail.com"
            className="inline-block text-black bg-(--mint) no-underline text-[13px] px-5 py-2 rounded-full font-syne font-bold cursor-pointer ml-2"
          >
            Contratar
          </MagneticBtn>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1"
          onClick={() => setMenuOpen((p) => !p)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
          />
        </button>
      </div>

      {/* Container do Menu */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        } border-t border-t-(--border)`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-3 px-6 py-5">
            {navLinks.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/70 no-underline text-[14px] py-2 font-mono hover:text-(--mint) transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
