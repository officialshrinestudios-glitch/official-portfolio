import { motion } from "framer-motion";

const links = ["Work", "Services", "Process", "About", "Contact"];

type NavbarProps = {
  hidden: boolean;
};

export function Navbar({ hidden }: NavbarProps) {
  return (
    <motion.header
      className="fixed left-1/2 top-5 z-50 w-[min(980px,93vw)] -translate-x-1/2"
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <nav className="glass flex items-center justify-between rounded-full px-4 py-3 md:px-7" style={{ border: 'none', boxShadow: '0 20px 80px rgba(0, 0, 0, 0.45)' }}>
        <div className="font-serif text-lg tracking-wide text-zinc-100">SHRI.NE</div>
        <ul className="hidden items-center gap-6 text-sm tracking-wide text-zinc-200 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a className="transition hover:text-white" href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-amber-200/30 bg-amber-200/15 px-4 py-2 text-xs tracking-[0.15em] text-amber-100 transition hover:bg-amber-100/20"
        >
          Book a Call
        </a>
      </nav>
    </motion.header>
  );
}
