
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill = "rgba(255, 255, 255, 0.2)" }: SpotlightProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 animate-in fade-in duration-1000",
        className
      )}
      style={{
        background: `radial-gradient(ellipse at center, ${fill} 0%, transparent 70%)`,
        transform: "matrix(-0.822377, -0.568943, -0.568943, 0.822377, 0, 0)",
      }}
    />
  );
};

