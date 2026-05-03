import { useEffect, useState } from "react";
import {
  X,
  Menu,
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  User,
  Briefcase,
  Wrench,
  FolderKanban,
  GraduationCap,
  MessageCircle,
  Users,
  Home,
  Bot,
} from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";
import { profile, navLinks } from "./data";

const NAV_ICONS: Record<string, React.ElementType> = {
  home: Home,
  about: User,
  experience: Briefcase,
  projects: FolderKanban,
  skills: Wrench,
  education: GraduationCap,
  leadership: Users,
  contact: MessageCircle,
};

function NavList({ active, onNavigate }: { active: string; onNavigate?: () => void }) {
  return (
    <nav className="px-4 pb-6 space-y-1">
      {navLinks.map((l) => {
        const Icon = NAV_ICONS[l.id] ?? Home;
        const isActive = active === l.id;
        return (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={onNavigate}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all ${
              isActive
                ? "text-primary bg-primary/10 font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-background"
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span>{l.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

function SidebarInner({
  active,
  dark,
  toggleTheme,
  onNavigate,
}: {
  active: string;
  dark: boolean;
  toggleTheme: () => void;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      {/* Profile */}
      <div className="px-6 pt-10 pb-6 text-center">
        <a href="#home" onClick={onNavigate} className="inline-block">
          <img
            src={profilePhoto}
            alt={profile.fullName}
            loading="lazy"
            width={110}
            height={110}
            className="h-[110px] w-[110px] rounded-full object-cover mx-auto border-[3px] border-primary glow-ring"
          />
        </a>
        <h1 className="mt-4 text-lg font-bold text-foreground">{profile.fullName}</h1>
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed px-2">{profile.title}</p>

        {/* Social icons */}
        <div className="mt-4 flex items-center justify-center gap-4 text-muted-foreground">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* ChatBot CTA */}
        <div className="mt-4 px-4">
          <a
            href={profile.ctaLink}
            target="_blank"
            rel="noreferrer"
            onClick={onNavigate}
            className="flex items-center justify-center gap-2 w-full rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Bot className="h-4 w-4" />
            {profile.ctaText}
          </a>
        </div>
      </div>

      <div className="mx-4 h-px bg-border" />

      <NavList active={active} onNavigate={onNavigate} />

      {/* Theme toggle */}
      <div className="mt-auto px-6 py-4 border-t border-border flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Theme</span>
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-border hover:bg-background transition-colors"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

export function Sidebar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : false;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[270px] border-r border-border bg-[var(--color-sidebar-bg)] md:flex flex-col">
        <SidebarInner active={active} dark={dark} toggleTheme={toggleTheme} />
      </aside>

      {/* Mobile header */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-[60px] items-center justify-between border-b border-border bg-[var(--color-sidebar-bg)]/90 backdrop-blur px-4 md:hidden">
        <a href="#home" className="font-bold tracking-tight text-foreground">
          {profile.firstName}<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border text-foreground"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[280px] animate-slide-in-left border-r border-border bg-[var(--color-sidebar-bg)]">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 text-foreground"
            >
              <X size={22} />
            </button>
            <SidebarInner active={active} dark={dark} toggleTheme={toggleTheme} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
