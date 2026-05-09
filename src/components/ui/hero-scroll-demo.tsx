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
    <div className="flex flex-col overflow-hidden pt-24 md:pt-28">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4 px-2">
            <p className="text-[10px] tracking-[0.45em] text-zinc-500">[YOUR STUDIO NAME]</p>
            <h1 className="font-serif text-4xl leading-[1.05] text-zinc-100 md:text-6xl">
              <span className="block text-lg font-normal tracking-wide text-zinc-500 md:text-xl">
                Scroll
              </span>
              <span className="mt-1 block text-5xl md:text-[4.5rem] lg:text-[5.5rem]">
                Into the build.
              </span>
            </h1>
          </div>
        }
      >
        <div className="relative h-full min-h-0 w-full overflow-hidden rounded-xl">
          <div className="grain pointer-events-none absolute inset-0 z-10 opacity-40" />
          <StudioImage
            sources={imageSources.length ? imageSources : [UNSPLASH_FALLBACK]}
            alt="Cinematic interface preview"
            className="mx-auto h-full w-full rounded-xl object-cover object-center"
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>
      </ContainerScroll>

      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-4 pb-12 pt-2 md:gap-4">
        <a
          href="#work"
          className="glass rounded-full px-6 py-3 text-xs tracking-[0.2em] text-zinc-100 transition hover:-translate-y-0.5 md:text-sm"
        >
          View Our Work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/35 bg-white/90 px-6 py-3 text-xs tracking-[0.2em] text-black transition hover:bg-white md:text-sm"
        >
          Start a Project
        </a>
      </div>
    </div>
  );
}
