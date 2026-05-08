type SectionTitleProps = {
  label: string;
  title: string;
  description: string;
};

export function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl">
      <p className="mb-2 text-xs tracking-[0.3em] text-zinc-400">{label}</p>
      <h2 className="font-serif text-4xl leading-tight text-zinc-100 md:text-6xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base text-zinc-300 md:text-lg">{description}</p>
    </div>
  );
}
