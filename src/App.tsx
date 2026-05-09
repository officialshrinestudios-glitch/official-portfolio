import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
const trainImageSources = ["/images/cinematic-window.png", trainImage];
const faceImageSources = ["/images/face-grid.png", faceImage];

function BeforeAfterSlider() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState(52);

  const updateSplit = (clientX: number) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.max(8, Math.min(92, next)));
  };

  return (
    <div
      ref={boxRef}
      className="glass relative overflow-hidden rounded-3xl p-2"
      onMouseMove={(event) => {
        if (event.buttons === 1) updateSplit(event.clientX);
      }}
      onClick={(event) => updateSplit(event.clientX)}
    >
      <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[440px]">
        <StudioImage
          sources={faceImageSources}
          alt="Before redesign"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${split}%` }}
        >
          <StudioImage
            sources={trainImageSources}
            alt="After redesign"
            className="h-full w-[1200px] object-cover saturate-[0.9] brightness-90"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(240,190,120,0.3),transparent_35%)]" />
        <div className="absolute inset-0 bg-black/25" />
        <div
          className="absolute inset-y-0 z-20 w-px bg-white/85 shadow-[0_0_25px_rgba(255,255,255,0.55)]"
          style={{ left: `${split}%` }}
        />
        <div
          className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/35 px-3 py-1 text-xs tracking-[0.22em] text-white"
          style={{ left: `${split}%` }}
        >
          DRAG
        </div>
        <p className="absolute left-4 top-4 text-xs tracking-[0.2em] text-zinc-200">BEFORE</p>
        <p className="absolute right-4 top-4 text-xs tracking-[0.2em] text-zinc-100">AFTER</p>
      </div>
    </div>
  );
}

export default function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hideNav, setHideNav] = useState(false);
  const lastY = useRef(0);

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
    <main className="ambient-bg text-zinc-100">
      {loading && <Loader progress={progress} />}
      <Navbar hidden={hideNav} />

      <section className="grain relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-[#050505]" />
        <HeroScrollDemo imageSources={trainImageSources} />
      </section>

      <section className="border-y border-white/10 bg-black/40 px-5 py-7 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 text-sm text-zinc-300 md:grid-cols-4">
          <p>120% faster load times</p>
          <p>Motion-first premium systems</p>
          <p>Scalable backend architecture</p>
          <p>Trusted by luxury + SaaS teams</p>
        </div>
      </section>

      <section id="work" className="section-padding">
        <SectionTitle
          label="FEATURED WORK"
          title="Cinematic case studies with engineering depth"
          description="Every project combines emotional visual storytelling with robust frontend architecture and performance-grade implementation."
        />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Noir Residence",
              category: "Luxury website",
              stack: "React · Tailwind · Motion",
              tone: "from-amber-200/20 via-zinc-800 to-black",
              image: trainImageSources
            },
            {
              title: "Arclight Platform",
              category: "SaaS product frontend",
              stack: "TypeScript · UI Systems · API",
              tone: "from-sky-200/20 via-zinc-800 to-black",
              image: faceImageSources
            },
            {
              title: "Foundry One",
              category: "Full-stack operating platform",
              stack: "Node · PostgreSQL · React",
              tone: "from-rose-200/20 via-zinc-800 to-black",
              image: trainImageSources
            }
          ].map((item) => (
            <motion.article
              key={item.title}
              className={`glass group relative overflow-hidden rounded-3xl bg-gradient-to-br p-6 ${item.tone}`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.32 }}
            >
              <StudioImage
                sources={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-30 transition duration-500 group-hover:scale-105 group-hover:opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
              <div className="relative z-10">
              <p className="text-xs tracking-[0.2em] text-zinc-300">{item.category}</p>
              <h3 className="mt-3 font-serif text-3xl text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-300">{item.stack}</p>
              <div className="mt-8 flex gap-2">
                <button className="rounded-full border border-white/30 px-4 py-2 text-xs tracking-[0.15em]">
                  Live Preview
                </button>
                <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs tracking-[0.15em]">
                  Case Study
                </button>
              </div>
              </div>
            </motion.article>
          ))}
        </div>
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

      <section id="about" className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.3em] text-zinc-400">ABOUT</p>
            <h2 className="mt-2 font-serif text-5xl leading-tight md:text-6xl">
              Elite engineering with editorial creative direction
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-zinc-300">
            [YOUR STUDIO NAME] is an elite team of developers and designers focused on premium
            frontend engineering, cinematic interfaces, and modern full-stack execution. We shape
            products with strategic clarity and high-end visual craftsmanship, then deliver them
            with scalable architecture and measurable performance.
          </p>
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

      <section id="contact" className="section-padding pb-20">
        <div className="glass mx-auto max-w-6xl rounded-3xl p-7 md:p-12">
          <p className="text-xs tracking-[0.28em] text-zinc-300">CONTACT</p>
          <h2 className="mt-2 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Let&apos;s build something unforgettable.
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="space-y-3 text-zinc-300">
              <p className="flex items-center gap-2">
                <Mail size={16} /> hello@yourstudioname.com
              </p>
              <p>Fiverr · GitHub · Instagram · LinkedIn</p>
              <p className="text-sm">Average response time: under 24 hours</p>
            </div>
            <form className="space-y-3">
              <input
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 outline-none"
                placeholder="Your name"
              />
              <input
                className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 outline-none"
                placeholder="Email"
              />
              <textarea
                className="h-28 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 outline-none"
                placeholder="Project brief"
              />
              <button className="rounded-full border border-white/25 bg-white px-5 py-2 text-black">
                Start Conversation
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-xs tracking-[0.2em] text-zinc-500 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <p>© 2026 [YOUR STUDIO NAME]</p>
          <div className="flex items-center gap-3">
            {[CirclePlay, Sparkles, Layers3, Code2, Database, Globe, Figma, ArrowUpRight].map(
              (Icon, index) => (
                <Icon key={index} size={14} />
              )
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}
