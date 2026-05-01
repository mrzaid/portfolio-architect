interface Props { title: string; number?: string; }
export function SectionTitle({ title, number }: Props) {
  return (
    <div className="mb-10">
      <div className="flex items-baseline gap-3">
        {number && <span className="font-mono text-sm text-muted-foreground">{number}</span>}
        <h2 className="text-3xl font-bold tracking-wide text-foreground">{title}</h2>
      </div>
      <div className="mt-3 h-[3px] w-10 rounded-full bg-primary" />
    </div>
  );
}
