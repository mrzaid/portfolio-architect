interface Props {
  title: string;
  number?: string;
  eyebrow?: string;
  description?: string;
}

export function SectionTitle({ title, number, eyebrow, description }: Props) {
  const label = eyebrow ?? (number ? `${number}` : undefined);
  return (
    <div className="mb-10">
      {label && (
        <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3 font-medium">
          {label}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      {description && (
        <p className="mt-3 text-muted-foreground">{description}</p>
      )}
      {!eyebrow && !description && (
        <div className="mt-3 h-[3px] w-10 rounded-full bg-primary" />
      )}
    </div>
  );
}
