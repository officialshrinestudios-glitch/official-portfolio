/** shadcn-compatible helper; swap for `clsx` + `tailwind-merge` when you add more UI primitives */
export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}
