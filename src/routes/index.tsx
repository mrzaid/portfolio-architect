import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import {
  Hero,
  Experience,
  Skills,
  Projects,
  Education,
  Contact,
} from "@/components/portfolio/sections";
import { navLinks, profile, bio } from "@/components/portfolio/data";

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
  const [active, setActive] = useState("intro");

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
    <div className="min-h-screen bg-background">
      <Sidebar active={active} />
      <main className="md:pl-[270px]">
        <div className="mx-auto max-w-[900px] px-6 pt-[80px] pb-20 md:pt-16">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  );
}
