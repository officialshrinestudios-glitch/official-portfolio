import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  CirclePlay,
  Code2,
  Database,
  Figma,
  Globe,
  Layers3,
  Mail,
  Sparkles
} from "lucide-react";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { SectionTitle } from "./components/SectionTitle";
import { StudioImage } from "./components/StudioImage";
import { HeroScrollDemo } from "./components/ui/hero-scroll-demo";
import { SplineSection } from "./components/SplineSection";

const services = [
  "Frontend Development",
  "Creative Development",
  "Motion Systems",
  "UI Engineering",
  "Full Stack Applications",
  "API Integrations",
  "Backend Architecture",
  "Performance Optimization",
  "Responsive Design",
  "Interactive Experiences"
];

const processSteps = [
  "Discovery",
  "Creative Direction",
  "UI/UX Systems",
  "Development",
  "Motion & Polish",
  "Launch & Optimization"
];

const techGroups = {
  Frontend: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Firebase", "APIs"],
  Creative: ["Motion Systems", "Figma", "Blender", "Interactive Design"]
};

const trainImage =
  "/@fs/C:/Users/smrid/.cursor/projects/c-Users-smrid-freelance-luxuryportfolio/assets/c__Users_smrid_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_img1-fdd2bcf2-3a2b-4786-906a-76c87943bf7e.png";
const faceImage =
  "/@fs/C:/Users/smrid/.cursor/projects/c-Users-smrid-freelance-luxuryportfolio/assets/c__Users_smrid_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_img2-eed23274-7468-41a9-99b9-98f946585a1f.png";
const trainImageSources = ["/images/hero.png", trainImage];
const faceImageSources = ["/images/face-grid.png", faceImage];

function BeforeAfterSlider() {
  const boxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(50);
  const springX = useSpring(x, { stiffness: 400, damping: 40, restDelta: 0.001 });
  const clipWidth = useTransform(springX, (val) => `${val}%`);

  const updateSplit = (clientX: number) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    x.set(Math.max(5, Math.min(95, next)));
  };

  return (
    <div
      ref={boxRef}
      className="glass group relative overflow-hidden rounded-[2rem] p-3 cursor-ew-resize"
      onMouseMove={(event) => {
        if (event.buttons === 1) updateSplit(event.clientX);
      }}
      onMouseDown={(event) => updateSplit(event.clientX)}
    >
      <div className="relative h-[350px] overflow-hidden rounded-[1.5rem] md:h-[500px]">
        <StudioImage
          sources={faceImageSources}
          alt="Before redesign"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <motion.div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: clipWidth }}
        >
          <StudioImage
            sources={trainImageSources}
            alt="After redesign"
            className="h-full w-[1200px] object-cover saturate-[0.9] brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

        <motion.div
          className="absolute inset-y-0 z-20 w-[1px] bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          style={{ left: clipWidth }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-1 rounded-full bg-white blur-[2px] opacity-70" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-[10px] tracking-[0.3em] text-white backdrop-blur-xl transition-transform duration-500 group-hover:scale-105"
          style={{ left: clipWidth }}
        >
          DRAG
        </motion.div>
        <p className="absolute left-6 top-6 text-[10px] tracking-[0.3em] text-zinc-300">BEFORE</p>
        <p className="absolute right-6 top-6 text-[10px] tracking-[0.3em] text-zinc-300">AFTER</p>
      </div>
    </div>
  );
}

export default function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hideNav, setHideNav] = useState(false);
  const lastY = useRef(0);

  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(timer);
          window.setTimeout(() => setLoading(false), 220);
          return 100;
        }
        return current + 4;
      });
    }, 90);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setHideNav(currentY > lastY.current && currentY > 150);
      lastY.current = currentY;
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="text-zinc-100 relative bg-[#030303] overflow-hidden">
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-60 ambient-bg"
        style={{ y: bgY }}
      />

      <div className="relative z-10">
        {loading && <Loader progress={progress} />}
        <Navbar hidden={hideNav} />

        <section className="grain relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-[#050505]" />
          <HeroScrollDemo imageSources={trainImageSources} />
        </section>

        <section className="border-y border-white/10 bg-black/40 px-5 py-7 md:px-12 relative z-20">
          <div className="mx-auto grid max-w-6xl gap-4 text-sm text-zinc-300 md:grid-cols-4 relative z-20">
            <p>120% faster load times</p>
            <p>Motion-first premium systems</p>
            <p>Scalable backend architecture</p>
            <p>Trusted by luxury + SaaS teams</p>
          </div>
        </section>

        <SplineSection />


        <section id="work" className="section-padding relative">
          <SectionTitle
            label="FEATURED WORK"
            title="Cinematic case studies with engineering depth"
            description="Every project combines emotional visual storytelling with robust frontend architecture and performance-grade implementation."
          />
          <motion.div style={{ y: cardsY }} className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {[
              {
                title: "Noir Residence",
                category: "Luxury website",
                stack: "React · Tailwind · Motion",
                tone: "from-amber-200/5 via-zinc-800/10 to-black",
                image: trainImageSources
              },
              {
                title: "Arclight Platform",
                category: "SaaS product frontend",
                stack: "TypeScript · UI Systems · API",
                tone: "from-sky-200/5 via-zinc-800/10 to-black",
                image: faceImageSources
              },
              {
                title: "Foundry One",
                category: "Full-stack operating platform",
                stack: "Node · PostgreSQL · React",
                tone: "from-rose-200/5 via-zinc-800/10 to-black",
                image: trainImageSources
              }
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`glass group relative overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 ${item.tone} shadow-[0_30px_60px_rgba(0,0,0,0.6)]`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <StudioImage
                  sources={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-[0.25] transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <div className="mb-8"></div>
                  <p className="text-[10px] tracking-[0.25em] text-zinc-400">{item.category}</p>
                  <h3 className="mt-4 font-serif text-4xl text-zinc-100 drop-shadow-md md:text-5xl">{item.title}</h3>
                  <p className="mt-4 text-sm tracking-wide text-zinc-400">{item.stack}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button className="rounded-full border border-white/20 px-5 py-2.5 text-[10px] tracking-[0.2em] transition hover:bg-white/10 hover:border-white/30">
                      Live Preview
                    </button>
                    <button className="rounded-full border border-transparent bg-white/10 px-5 py-2.5 text-[10px] tracking-[0.2em] transition hover:bg-white/20">
                      Case Study
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="section-padding" id="services">
          <SectionTitle
            label="TRANSFORMATION"
            title="Before and after, reimagined in motion"
            description="An interactive redesign comparison that highlights visual hierarchy, usability, and premium finishing."
          />
          <div className="mx-auto max-w-6xl">
            <BeforeAfterSlider />
          </div>
        </section>

        <section className="section-padding">
          <SectionTitle
            label="SERVICES"
            title="Specialized capabilities for premium digital products"
            description="From cinematic frontend systems to backend architecture, we build products that are both beautiful and commercially reliable."
          />
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service}
                className="glass rounded-2xl p-5"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm tracking-[0.12em] text-zinc-100">{service}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="process" className="section-padding">
          <SectionTitle
            label="PROCESS"
            title="A cinematic production pipeline"
            description="Our process blends strategy, design direction, engineering systems, and polish into a single precision workflow."
          />
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <motion.div
                key={step}
                className="glass rounded-2xl p-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <p className="text-xs tracking-[0.22em] text-zinc-400">STEP {index + 1}</p>
                <h3 className="mt-2 text-2xl font-medium text-zinc-100">{step}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505] to-transparent pointer-events-none opacity-50" />
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 relative z-10">
            <div>
              <p className="text-[10px] tracking-[0.35em] text-zinc-400">ABOUT</p>
              <h2 className="mt-4 font-serif text-6xl leading-[1.1] md:text-7xl lg:text-[5rem]">
                Elite engineering with editorial creative direction
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg leading-[1.8] text-zinc-300 md:text-xl">
                SHRI.NE is an elite team of developers and designers focused on premium
                frontend engineering, cinematic interfaces, and modern full-stack execution.
                <br /><br />
                We shape products with strategic clarity and high-end visual craftsmanship,
                then deliver them with scalable architecture and measurable performance.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <SectionTitle
            label="TECH STACK"
            title="Modern stack, engineered for impact"
            description="We combine robust software foundations with creative technology workflows to ship immersive products at scale."
          />
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
            {Object.entries(techGroups).map(([group, values]) => (
              <div key={group} className="glass rounded-2xl p-6">
                <h3 className="mb-4 text-sm tracking-[0.2em] text-zinc-300">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-200"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding">
          <SectionTitle
            label="TESTIMONIALS"
            title="Built for teams that expect world-class outcomes"
            description="Fictional partner feedback styled to feel believable and premium."
          />
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
            {[
              "They translated our vision into an immersive product launch experience with perfect execution.",
              "A rare blend of technical rigor and creative instinct. Every detail felt deliberate.",
              "From strategy to polish, the final platform looked premium and performed flawlessly."
            ].map((quote) => (
              <article key={quote} className="glass rounded-2xl p-6">
                <p className="text-base italic text-zinc-200">“{quote}”</p>
                <p className="mt-4 text-xs tracking-[0.18em] text-zinc-400">FICTIONAL CLIENT</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-padding pb-28 relative">
          {/* Soft volumetric glow behind contact */}
          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 60%)'
            }}
          />

          <div className="glass mx-auto max-w-6xl rounded-[3rem] p-8 md:p-16 relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            <p className="text-[10px] tracking-[0.35em] text-zinc-400">CONTACT</p>
            <h2 className="mt-4 max-w-3xl font-serif text-6xl leading-[1.05] md:text-7xl lg:text-8xl">
              Let&apos;s build something unforgettable.
            </h2>
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              <div className="space-y-6 text-zinc-300">
                <a href="mailto:official.shri.ne.studios@gmail.com" className="flex items-center gap-3 text-lg hover:text-white transition-colors">
                  <Mail size={20} /> official.shri.ne.studios@gmail.com
                </a>
                <p className="text-sm tracking-wide text-zinc-400">Fiverr · GitHub · Instagram · LinkedIn</p>
                <p className="text-xs tracking-wider text-zinc-500">Average response time: under 24 hours</p>
              </div>
              <form 
                action="https://docs.google.com/forms/d/e/1FAIpQLSdvj8MVN7mhAQntNo6qSBhLD_pfZ-Ks5YhdzBTLtLwuKTqpNg/formResponse" 
                method="POST" 
                target="_blank"
                className="space-y-4"
              >
                <input
                  name="entry.2049473133"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition-colors focus:border-white/30 focus:bg-black/60"
                  placeholder="Your name"
                />
                <input
                  name="entry.1542824503"
                  required
                  type="email"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition-colors focus:border-white/30 focus:bg-black/60"
                  placeholder="Email"
                />
                <textarea
                  name="entry.1301230246"
                  required
                  className="h-32 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition-colors focus:border-white/30 focus:bg-black/60"
                  placeholder="Project brief"
                />
                <button type="submit" className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-transform hover:scale-[1.02]">
                  <span className="relative z-10">Start Conversation</span>
                  <div className="absolute inset-0 bg-zinc-200 translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 px-5 py-12 text-[10px] tracking-[0.3em] text-zinc-500 md:px-12 relative z-10 bg-black/50">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
            <p>© 2026 SHRI.NE</p>
            <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
              {[CirclePlay, Sparkles, Layers3, Code2, Database, Globe, Figma, ArrowUpRight].map(
                (Icon, index) => (
                  <Icon key={index} size={16} className="text-zinc-400" />
                )
              )}
            </div>
          </div>
        </footer>

      </div> {/* End of relative z-10 wrapper */}
    </main>
  );
}
