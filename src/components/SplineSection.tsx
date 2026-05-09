import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

export function SplineSection() {
  return (
    <section className="relative overflow-hidden section-padding z-10 bg-[#030303]">
      {/* Background ambient transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800/10 blur-[150px] pointer-events-none" />
      
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Editorial Typography */}
          <div className="flex-1 space-y-8 lg:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[10px] tracking-[0.4em] text-zinc-500 mb-6">INTERACTIVE SYSTEMS</p>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-zinc-100">
                Engineering <br className="hidden lg:block"/>
                <span className="text-zinc-500">at the edge.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-zinc-400 leading-[1.8] max-w-lg">
                We build interactive architectural environments. 
                Blurring the line between high-end digital luxury and 
                performant motion systems.
              </p>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 text-xs tracking-[0.15em] text-zinc-500">
                  <span className="h-px w-6 bg-zinc-700" /> WebGL & Canvas
                </div>
                <div className="flex items-center gap-4 text-xs tracking-[0.15em] text-zinc-500">
                  <span className="h-px w-6 bg-zinc-700" /> Real-time Physics
                </div>
                <div className="flex items-center gap-4 text-xs tracking-[0.15em] text-zinc-500">
                  <span className="h-px w-6 bg-zinc-700" /> Fluid Interfaces
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4"
            >
              <button className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-[10px] tracking-[0.25em] text-zinc-200 backdrop-blur-md transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <span className="relative z-10">Explore Capabilities</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Spline Robot Container */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="relative w-full aspect-square md:aspect-[4/3] lg:h-[700px] lg:aspect-auto overflow-hidden bg-black/40 border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl group">
              {/* Internal glow and lighting */}
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="rgba(255,255,255,0.15)"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,120,120,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none z-10" />
              
              {/* Spline Scene Integration */}
              <div className="absolute inset-0 z-0">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full scale-[1.2] opacity-80 mix-blend-screen transition-opacity duration-1000 group-hover:opacity-100"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 z-20 flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-pulse" />
                <span className="text-[9px] tracking-[0.3em] text-zinc-600">SYS.ACTIVE</span>
              </div>
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-[10px] tracking-[0.2em] text-zinc-500">INTERACTIVE PREVIEW</p>
              </div>
              
              {/* Glass reflections */}
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 pointer-events-none z-20" />
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
