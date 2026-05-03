import { Users, Heart, MapPin, Calendar } from "lucide-react";
import { leadershipExperience } from "./data";
import { SectionTitle } from "./SectionTitle";

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-20 py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="reveal">
          <SectionTitle
            eyebrow="06 — Leadership & Community"
            title="Community Impact"
            description="Leadership roles and contributions to community service."
          />
        </div>
        <div className="reveal mt-8 space-y-8">
          {leadershipExperience.map((exp) => (
            <div
              key={exp.organization}
              className="relative pl-8 pb-8 border-l border-border last:border-l-0"
            >
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    {exp.location && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    )}
                  </div>
                  <h4 className="text-base font-medium text-foreground mb-2">{exp.organization}</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <p className="text-sm text-primary font-medium">{exp.duration}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="h-4 w-4 text-primary" />
                      <h5 className="text-sm font-semibold text-foreground">Key Achievements & Impact:</h5>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-4 relative">
                          <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
