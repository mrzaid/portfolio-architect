import { MapPin, Github, ExternalLink, Mail, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";
import { profile, bio, experience, skills, projects, education } from "./data";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="intro" className="scroll-mt-20 pt-4 pb-24">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center">
        <div>
          <h1 className="animate-fade-up text-4xl md:text-5xl font-bold text-foreground">
            Hi, I'm {profile.firstName} <span className="inline-block">👋</span>
          </h1>
          <p
            className="mt-2 text-base font-medium text-primary animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            👩‍💻 {profile.title} | Researcher | Problem Solver
          </p>
          <p
            className="mt-5 italic text-muted-foreground animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            I love to work with text and images!
          </p>
          <div
            className="mt-5 space-y-4 text-[15px] leading-[1.8] text-foreground/90 animate-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            {bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p
            className="mt-6 italic text-sm text-muted-foreground animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            Find more details in the other sections!
          </p>
          <a
            href={profile.ctaLink}
            className="mt-6 inline-flex animate-fade-up rounded-full bg-primary px-7 py-3 text-[15px] font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-[1.02]"
            style={{ animationDelay: "440ms" }}
          >
            Try My Profile ChatBot
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src={profilePhoto}
            alt={profile.fullName}
            width={260}
            height={260}
            className="h-60 w-60 md:h-64 md:w-64 rounded-full object-cover border-[3px] border-primary glow-ring"
          />
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-16">
      <Reveal>
        <SectionTitle number="01" title="Work Experience" />
      </Reveal>
      <div className="space-y-5">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 80}>
            <article className="card-hover rounded-xl border border-border bg-card p-7 border-l-4 border-l-primary">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-foreground">{job.company}</h3>
                <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {job.dates}
                </span>
              </div>
              <p className="mt-1 text-[15px] font-semibold text-primary">{job.title}</p>
              <p className="mt-1 mb-4 flex items-center gap-1.5 text-[13px] text-muted-foreground">
                <MapPin size={14} /> {job.location}
              </p>
              <ul className="space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm leading-[1.8] text-foreground/85">
                    <span className="mt-1 text-primary">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-mono text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16">
      <Reveal>
        <SectionTitle number="02" title="Skills" />
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 60}>
            <div className="card-hover h-full rounded-xl border border-border bg-card p-6">
              <h3 className="border-b border-border pb-2.5 text-sm font-bold uppercase tracking-wider text-primary">
                {cat.title}
              </h3>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="cursor-default rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-[13px] font-mono text-foreground/90 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary hover:scale-[1.03]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <Reveal>
        <SectionTitle number="03" title="Projects" />
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className="card-hover flex h-full flex-col rounded-xl border border-border bg-card p-6">
              <h3 className="text-[17px] font-bold text-foreground">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-[1.7] text-muted-foreground">{p.description}</p>
              <div className="mt-auto flex gap-2.5 pt-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Github size={14} /> GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-[13px] font-semibold text-primary-foreground transition-all hover:brightness-110"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-16">
      <Reveal>
        <SectionTitle number="04" title="Education" />
      </Reveal>
      <div className="space-y-5">
        {education.map((ed, i) => (
          <Reveal key={ed.degree} delay={i * 80}>
            <article
              className="card-hover rounded-xl border border-border bg-card p-7 border-l-4"
              style={{ borderLeftColor: "var(--color-purple-accent)" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-foreground">{ed.degree}</h3>
                <span
                  className="rounded-full px-3 py-1 text-xs"
                  style={{
                    background: "color-mix(in oklab, var(--color-purple-accent) 12%, transparent)",
                    border: "1px solid color-mix(in oklab, var(--color-purple-accent) 35%, transparent)",
                    color: "var(--color-purple-accent)",
                  }}
                >
                  CGPA: {ed.gpa}
                </span>
              </div>
              <p
                className="mt-1 text-[15px] font-semibold"
                style={{ color: "var(--color-purple-accent)" }}
              >
                {ed.university}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ed.honors.map((h) => (
                  <span
                    key={h}
                    className="rounded-full px-3 py-1 text-xs"
                    style={{
                      background: "color-mix(in oklab, var(--color-gold-accent) 12%, transparent)",
                      border: "1px solid color-mix(in oklab, var(--color-gold-accent) 35%, transparent)",
                      color: "var(--color-gold-accent)",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
              <p className="mt-5 mb-2.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Main Courses
              </p>
              <div className="flex flex-wrap gap-2">
                {ed.courses.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-border bg-secondary/60 px-3 py-1 text-[13px] text-foreground/90"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const links = [
    { icon: Mail, label: "Email", href: `mailto:${profile.email}`, external: false },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, external: true },
    { icon: Github, label: "Github", href: profile.github, external: true },
  ];
  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <Reveal>
        <SectionTitle number="05" title="Get In Touch" />
      </Reveal>
      <Reveal delay={100}>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-base text-muted-foreground">
            Feel free to reach out if you'd like to collaborate or just say hello 👋
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            {links.map(({ icon: Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-card px-7 py-3.5 text-[15px] font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <Icon size={18} /> {label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
