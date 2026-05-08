import { motion } from "framer-motion";

type LoaderProps = {
  progress: number;
};

const screenBlocks = Array.from({ length: 10 }, (_, index) => index);
const trainImage =
  "/@fs/C:/Users/smrid/.cursor/projects/c-Users-smrid-freelance-luxuryportfolio/assets/c__Users_smrid_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_img1-fdd2bcf2-3a2b-4786-906a-76c87943bf7e.png";

export function Loader({ progress }: LoaderProps) {
  const showImage = progress > 72;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center ambient-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grain absolute inset-0" />
      <div className="glass relative w-[min(920px,94vw)] overflow-hidden rounded-3xl p-6 md:p-8">
        <div className="absolute left-6 top-4 flex items-center gap-2 text-[10px] tracking-[0.24em] text-zinc-400 md:left-8 md:top-5">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
          <span>BOOTING EXPERIENCE</span>
        </div>

        <div className="relative mt-8">
          <motion.div
            className="mx-auto w-[min(820px,100%)] rounded-[28px] border border-white/20 bg-zinc-900/85 p-3 shadow-[0_25px_100px_rgba(0,0,0,0.55)]"
            initial={{ scale: 0.95, opacity: 0.55, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-white/12 bg-black">
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY }}
              />

              <motion.img
                src={trainImage}
                alt="Cinematic reveal"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: showImage ? 0.5 : 0, scale: showImage ? 1 : 1.08 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/75" />

              <div className="absolute inset-0 opacity-35">
                {Array.from({ length: 12 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute left-0 right-0 h-px bg-white/20"
                    style={{ top: `${index * 9}%` }}
                    initial={{ scaleX: 0.2, opacity: 0 }}
                    animate={{
                      scaleX: progress > index * 7 ? 1 : 0.2,
                      opacity: progress > index * 7 ? 0.9 : 0
                    }}
                    transition={{ duration: 0.35 }}
                  />
                ))}
                {Array.from({ length: 12 }).map((_, index) => (
                  <motion.div
                    key={`v-${index}`}
                    className="absolute bottom-0 top-0 w-px bg-white/16"
                    style={{ left: `${index * 9}%` }}
                    initial={{ scaleY: 0.2, opacity: 0 }}
                    animate={{
                      scaleY: progress > index * 7 ? 1 : 0.2,
                      opacity: progress > index * 7 ? 0.9 : 0
                    }}
                    transition={{ duration: 0.35 }}
                  />
                ))}
              </div>

              {screenBlocks.map((block) => (
                <motion.div
                  key={block}
                  className="absolute rounded-md border border-white/20 bg-white/10 backdrop-blur-sm"
                  style={{
                    left: `${8 + (block % 5) * 17}%`,
                    top: `${12 + Math.floor(block / 5) * 33}%`,
                    width: `${12 + ((block * 7) % 12)}%`,
                    height: `${7 + ((block * 5) % 8)}%`
                  }}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{
                    opacity: progress > block * 8 ? 1 : 0,
                    y: progress > block * 8 ? 0 : 16,
                    scale: progress > block * 8 ? 1 : 0.96
                  }}
                  transition={{ duration: 0.33, ease: "easeOut" }}
                />
              ))}

              <motion.div
                className="absolute h-2 w-2 rounded-full border border-amber-200 bg-amber-100/75 shadow-[0_0_16px_rgba(255,210,130,0.85)]"
                initial={{ left: "10%", top: "18%" }}
                animate={{
                  left: progress < 30 ? "74%" : progress < 55 ? "22%" : progress < 80 ? "64%" : "86%",
                  top: progress < 30 ? "20%" : progress < 55 ? "56%" : progress < 80 ? "70%" : "81%"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="mx-auto mt-2 h-2 w-[30%] rounded-b-2xl border border-white/14 bg-zinc-900/95" />
          </motion.div>

          <motion.div
            className="mx-auto mt-3 h-1.5 w-[min(360px,70vw)] overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-amber-300/80 via-zinc-100 to-zinc-200"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35 }}
            />
          </motion.div>

          <div className="mt-2 flex items-center justify-center gap-2 text-[11px] tracking-[0.22em] text-zinc-400">
            <span>{progress}%</span>
            <span>•</span>
            <span>ASSEMBLING</span>
          </div>
        </div>

        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 9 }).map((_, index) => (
            <motion.div
              key={`shell-h-${index}`}
              className="absolute left-0 right-0 h-px bg-white/20"
              style={{ top: `${index * 12}%` }}
              initial={{ scaleX: 0.2, opacity: 0 }}
              animate={{ scaleX: progress > index * 10 ? 1 : 0.2, opacity: progress > index * 10 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />
          ))}
          {Array.from({ length: 11 }).map((_, index) => (
            <motion.div
              key={`shell-v-${index}`}
              className="absolute bottom-0 top-0 w-px bg-white/15"
              style={{ left: `${index * 10}%` }}
              initial={{ scaleY: 0.2, opacity: 0 }}
              animate={{ scaleY: progress > index * 9 ? 1 : 0.2, opacity: progress > index * 9 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
      </div>
    </motion.div>
  );
}
