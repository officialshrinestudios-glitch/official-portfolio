import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { StudioImage, type StudioImageProps } from "@/components/StudioImage";

/** Unsplash — abstract dark texture; reliable CDN URL */
const UNSPLASH_FALLBACK =
  "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop";

type HeroScrollDemoProps = {
  /** Primary image sources (e.g. project photography); falls back to Unsplash */
  imageSources?: StudioImageProps["sources"];
};

export function HeroScrollDemo({ imageSources = [UNSPLASH_FALLBACK] }: HeroScrollDemoProps) {
  return (
    <div className="relative flex flex-col overflow-hidden pt-24 md:pt-28">
      {/* Cinematic atmospheric glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-white/5 opacity-50 blur-[120px]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/40 blur-[1px]"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, Math.random() * 0.5 + 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="space-y-6 px-2">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[10px] tracking-[0.45em] text-zinc-500"
              >
                SHRI.NE
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl leading-[1.05] text-zinc-100 md:text-7xl lg:text-8xl"
              >
                <span className="block text-lg font-normal tracking-wider text-zinc-400 md:text-2xl">
                  Scroll
                </span>
                <span className="mt-2 block text-6xl tracking-tight md:text-[5.5rem] lg:text-[7rem]">
                  Into the build.
                </span>
                <br></br>
              </motion.h1>
            </div>
          }
        >
          <div className="relative h-full min-h-0 w-full overflow-hidden rounded-xl bg-[#0a0a0a] ring-1 ring-white/10">
            <div className="grain pointer-events-none absolute inset-0 z-10 opacity-30" />
            <StudioImage
              sources={imageSources.length ? imageSources : [UNSPLASH_FALLBACK]}
              alt="Cinematic interface preview"
              className="mx-auto h-full w-full object-cover object-center transition-transform duration-[2s] hover:scale-105"
              draggable={false}
            />
            {/* Inner screen reflections */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-50 mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          </div>
        </ContainerScroll>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-4 pb-16 pt-4 md:gap-6"
      >
        <a
          href="#work"
          className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xs tracking-[0.2em] text-zinc-100 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] md:text-sm"
        >
          <span className="relative z-10">View Our Work</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
        </a>
        <a
          href="#contact"
          className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xs tracking-[0.2em] text-zinc-100 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] md:text-sm"
        >
          <span className="relative z-10">Start a Project</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
        </a>
      </motion.div>
    </div>
  );
}
