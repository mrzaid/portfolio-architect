import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { About } from "@/components/portfolio/About";
import { Leadership } from "@/components/portfolio/Leadership";
import { Footer } from "@/components/portfolio/Footer";
import {
  Hero,
  Experience,
  Skills,
  Projects,
  Education,
  Contact,
} from "@/components/portfolio/sections";
import { navLinks, profile, bio } from "@/components/portfolio/data";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.fullName} — ${profile.title}` },
      { name: "description", content: bio[0] },
      { property: "og:title", content: `${profile.fullName} Portfolio` },
      { property: "og:description", content: bio[0] },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState("home");
  useReveal();

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <Sidebar active={active} />
      <div className="md:pl-[270px]">
        <main className="pt-[60px] md:pt-0">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
