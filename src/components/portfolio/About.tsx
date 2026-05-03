import { Check, ArrowDown } from "lucide-react";
import { about } from "./data";
import { SectionTitle } from "./SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative min-h-screen flex items-center py-24 px-6 bg-secondary/20">
      <div className="max-w-[900px] mx-auto w-full">
        <SectionTitle eyebrow="01 — About" title="A bit about me" />
        <div
          ref={contentRef}
          className={`max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`transition-all duration-700 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p}
            </p>
          ))}
          <ul
            className={`mt-6 grid sm:grid-cols-2 gap-2 transition-all duration-700 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {about.highlights.map((h, index) => (
              <li
                key={h}
                className={`flex items-start gap-2 text-sm text-foreground transition-all duration-700 ${
                  contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        aria-label="Scroll to experience"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}
