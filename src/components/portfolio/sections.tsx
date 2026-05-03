import { useEffect, useRef, useState, useMemo } from "react";
import {
  MapPin,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ArrowDown,
  Download,
  Briefcase,
  GraduationCap,
  Brain,
  Eye,
  FileText,
  BarChart3,
  Globe,
  Settings,
  Code,
  Bot,
  BookOpen,
  Award,
  Sun,
  Rocket,
} from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";
import {
  profile,
  experience,
  skillGroups,
  projects,
  education,
  certifications,
  summerSchools,
} from "./data";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ─── Hero ────────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section
      id="home"
      className="relative z-0 min-h-screen flex items-center pt-16 md:pt-0 pb-16 bg-background overflow-x-hidden"
    >
      <div className="max-w-[900px] mx-auto w-full px-6">
        <div className="text-center space-y-6">
          <p className="text-sm text-primary font-medium tracking-wide">Hi, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            {profile.fullName}.
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
            {profile.title}
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed mx-auto">
            {profile.intro}
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="flex items-center gap-5 text-muted-foreground justify-center">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

export function Experience() {
  const [filter, setFilter] = useState<"professional" | "teaching">("professional");
  const filtered = experience.filter((e) => e.category === filter);

  return (
    <section id="experience" className="relative scroll-mt-20 py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="02 — Experience"
            title="Where I've worked"
            description="Roles spanning research, industry, and teaching."
          />
        </Reveal>

        {/* Toggle */}
        <Reveal delay={80}>
          <div className="mt-2 mb-10 flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setFilter("professional")}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                filter === "professional"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase className="h-4 w-4" /> Professional
            </button>
            <button
              onClick={() => setFilter("teaching")}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                filter === "teaching"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap className="h-4 w-4" /> Teaching
            </button>
          </div>
        </Reveal>

        {/* Timeline */}
        <ol className="relative border-l border-border ml-3 space-y-10">
          {filtered.map((e, index) => (
            <Reveal key={`${filter}-${index}-${e.role}`} delay={index * 80}>
              <li className="pl-6 relative">
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {e.role}{" "}
                    <span className="text-primary font-medium">
                      @{" "}
                      {e.companyLink ? (
                        <a href={e.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {e.company}
                        </a>
                      ) : (
                        e.company
                      )}
                    </span>
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {e.duration}{e.location ? ` · ${e.location}` : ""}
                  </span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {e.tags && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            </Reveal>
          ))}
        </ol>

        {filtered.length === 0 && (
          <p className="text-center py-12 text-sm text-muted-foreground">
            No {filter} experience to display.
          </p>
        )}
      </div>

      <button
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export function Projects() {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal<HTMLDivElement>();

  const domains = useMemo(() => [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "computer-vision", label: "Computer Vision", count: projects.filter((p) => p.domain === "computer-vision").length },
    { id: "nlp", label: "NLP", count: projects.filter((p) => p.domain === "nlp").length },
  ], []);

  const filtered = useMemo(() => {
    if (selectedDomain === "all") return showAll ? projects : projects.slice(0, 6);
    return projects.filter((p) => p.domain === selectedDomain);
  }, [selectedDomain, showAll]);

  return (
    <section id="projects" className="relative scroll-mt-20 py-16 px-6 bg-secondary/20">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="03 — Projects"
            title="Selected work"
            description="A mix of research, production, and side projects."
          />
        </Reveal>

        {/* Domain filter */}
        <Reveal delay={80}>
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {domains.map((d) => (
              <button
                key={d.id}
                onClick={() => { setSelectedDomain(d.id); if (d.id !== "all") setShowAll(false); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedDomain === d.id
                    ? "bg-primary text-primary-foreground ring-2 ring-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-secondary hover:ring-1 hover:ring-border"
                }`}
              >
                {d.label} ({d.count})
              </button>
            ))}
          </div>
        </Reveal>

        <div
          ref={projectsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filtered.map((p, index) => (
            <article
              key={p.title}
              className={`group rounded-xl border border-border bg-card p-6 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 ${
                projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-end mb-4 gap-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live demo"
                    className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground bg-background/50">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {selectedDomain === "all" && projects.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              {showAll ? "Show Less" : `Show More (${projects.length - 6} more)`}
            </button>
          </div>
        )}
      </div>

      <button
        onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        aria-label="Scroll to skills"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

const SKILL_ICONS: Record<string, React.ElementType> = {
  "AI / ML": Brain,
  "Computer Vision": Eye,
  "NLP & OCR": FileText,
  "LLM Tooling": Bot,
  "Data & Analytics": BarChart3,
  "Backend & Web": Globe,
  "DevOps & Infra": Settings,
  "Languages": Code,
};

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="04 — Skills"
            title="Tools I work with"
            description="The everyday stack across AI, data, and backend."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = SKILL_ICONS[group.title] ?? Code;
            return (
              <Reveal key={group.title} delay={i * 60}>
                <div className="card-hover rounded-xl border border-border bg-card overflow-hidden h-full">
                  <div className="h-28 bg-secondary/50 flex items-center justify-center">
                    <div className="text-center">
                      <Icon className="h-7 w-7 text-primary mb-2 mx-auto" />
                      <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground cursor-default hover:border-primary hover:text-primary transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* Always Learning card */}
          <Reveal delay={skillGroups.length * 60}>
            <div className="card-hover rounded-xl border border-dashed border-border bg-card/50 overflow-hidden h-full">
              <div className="h-28 bg-secondary/30 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Rocket className="h-7 w-7 mb-2 mx-auto" />
                  <h3 className="text-base font-semibold">Always Learning</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground text-center">
                  Continuously expanding my skill set with new technologies and frameworks.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        aria-label="Scroll to education"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 py-16 px-6 bg-secondary/20">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="05 — Education"
            title="Academic Background"
            description="My educational journey and academic achievements."
          />
        </Reveal>

        {/* Degrees */}
        <div className="reveal mt-8 space-y-8">
          {education.map((ed) => (
            <div key={ed.degree} className="relative pl-8 pb-8 border-l border-border last:border-l-0">
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {ed.type === "master" ? "MASTER'S DEGREE" : "BACHELOR'S DEGREE"}
                    </h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full border ${
                        ed.status === "Currently enrolled"
                          ? "bg-primary/10 text-primary border-primary/20"
                          : "bg-muted text-foreground border-border"
                      }`}
                    >
                      {ed.status}
                    </span>
                  </div>
                  <h4 className="text-base font-medium text-foreground mb-1">{ed.degree}</h4>
                  <p className="text-sm text-muted-foreground font-medium mb-1">{ed.school}</p>
                  <p className="text-sm text-primary font-medium mb-3">{ed.duration}</p>
                  {ed.courses.length > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <h5 className="text-sm font-semibold text-foreground">Main Courses:</h5>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {ed.courses.map((c) => (
                          <span key={c} className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summer Schools */}
        <div className="reveal mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Sun className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Summer Schools & Academic Training</h3>
          </div>
          <div className="space-y-6">
            {summerSchools.map((school, index) => (
              <div key={index} className="relative pl-8 pb-6 border-l border-border/50 last:border-l-0">
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="flex items-start gap-3">
                  <Sun className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-1">{school.title}</h4>
                    <p className="text-sm text-muted-foreground font-medium mb-1">{school.institution}</p>
                    <p className="text-sm text-primary font-medium mb-3">{school.duration}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{school.description}</p>
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <h5 className="text-sm font-semibold text-foreground">Key Topics:</h5>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {school.topics.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="reveal mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Professional Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative group bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground leading-tight mb-1">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("leadership")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        aria-label="Scroll to leadership"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 min-h-[60vh] flex items-center justify-center py-16 px-6 bg-secondary/20">
      <div className="max-w-[900px] mx-auto text-center w-full">
        <div className="reveal">
          <SectionTitle
            eyebrow="07 — Contact"
            title="Let's work together"
            description="Open to AI/ML engineering, data science, applied research, and LLM/NLP roles. Always happy to chat."
          />
        </div>
        <div className="reveal mt-4 flex flex-col items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="text-2xl md:text-3xl font-semibold text-primary hover:underline underline-offset-4"
          >
            {profile.email}
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
