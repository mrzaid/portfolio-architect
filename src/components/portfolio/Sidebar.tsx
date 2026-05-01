import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";
import { profile, navLinks } from "./data";

function NavList({ active, onNavigate }: { active: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col">
      {navLinks.map((l) => {
        const isActive = active === l.id;
        return (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={onNavigate}
            className={`px-6 py-3 text-sm font-medium transition-all border-l-[3px] ${
              isActive
                ? "border-primary text-primary bg-primary/[0.07]"
                : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/[0.05] hover:border-primary"
            }`}
          >
            {l.label}
          </a>
        );
      })}
    </nav>
  );
}

function SidebarInner({ active, onNavigate }: { active: string; onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col items-center px-6 pt-10">
        <img
          src={profilePhoto}
          alt={profile.fullName}
          loading="lazy"
          width={110}
          height={110}
          className="h-[110px] w-[110px] rounded-full object-cover border-[3px] border-primary glow-ring"
        />
        <h1 className="mt-4 text-lg font-bold text-foreground">{profile.fullName}</h1>
        <p className="mt-1 text-[13px] font-medium text-primary">{profile.title}</p>
        <p className="text-xs text-muted-foreground">{profile.subtitle}</p>
        <a
          href={profile.ctaLink}
          onClick={onNavigate}
          className="mt-4 rounded-full border-[1.5px] border-primary px-5 py-1.5 text-[13px] font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {profile.ctaText}
        </a>
      </div>
      <div className="mx-4 my-6 h-px bg-border" />
      <NavList active={active} onNavigate={onNavigate} />
      <div className="mt-auto px-6 pb-5 text-center">
        <p className="text-[11px] text-muted-foreground/60">Made with ❤️ using Lovable</p>
        <p className="text-[11px] text-muted-foreground/60">© 2025 {profile.fullName}</p>
      </div>
    </div>
  );
}

export function Sidebar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[270px] border-r border-border bg-[var(--color-sidebar-bg)] md:block">
        <SidebarInner active={active} />
      </aside>

      {/* Mobile header */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-[60px] items-center justify-between border-b border-border bg-[var(--color-sidebar-bg)] px-4 md:hidden">
        <span className="text-base font-bold text-foreground">{profile.fullName}</span>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="text-foreground"
        >
          <Menu size={24} />
        </button>
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
            <SidebarInner active={active} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
