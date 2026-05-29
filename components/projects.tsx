'use client';

import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Network Segmentation and DMZ Architecture',
    problem: 'Design a secure network topology that isolates critical servers and minimizes lateral movement risk.',
    approach:
      'Modeled a three-tier architecture with user, server, and management zones. Configured VLANs for isolation, applied granular ACLs to restrict inter-zone traffic, and implemented a DMZ for public-facing services with strict ingress/egress rules.',
    result:
      'Reduced potential attack surface by 60%. Demonstrated architectural thinking beyond basic configuration—each VLAN decision tied to a threat model.',
  },
  {
    title: 'Firewall Policy and Access Control Design',
    problem: 'Develop comprehensive firewall rules that enforce security policy while maintaining operational clarity.',
    approach:
      'Built a policy framework on Cisco ASA with rule ordering, service objects, and logging. Documented each rule&apos;s purpose. Tested edge cases to ensure policy correctness before deployment.',
    result:
      'Reduced rule complexity by 40% through object reuse. Achieved zero unintended denials in testing. Established pattern for auditable, maintainable policies.',
  },
  {
    title: 'AI-Mediated Security Governance Framework',
    problem: 'Explore how AI systems can enforce security policy deterministically without becoming a single point of failure.',
    approach:
      'Designed a conceptual framework where an LLM-based gateway evaluates API requests against structured security policies. Focused on making decisions transparent, auditable, and ultimately overrideable by human administrators.',
    result:
      'Identified key tensions: automation vs. accountability, speed vs. certainty. Concluded that AI in security requires deterministic policy as substrate, not as replacement for policy.',
  },
];

export default function Projects() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems(new Array(projects.length).fill(true));
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 border-t border-border" ref={ref}>
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`p-8 rounded-lg border border-border bg-card/50 hover:border-accent/50 transition-all duration-500 ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>

              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <div>
                  <span className="text-accent font-mono text-xs uppercase tracking-wide">Problem</span>
                  <p className="mt-2">{project.problem}</p>
                </div>

                <div>
                  <span className="text-accent font-mono text-xs uppercase tracking-wide">Approach</span>
                  <p className="mt-2">{project.approach}</p>
                </div>

                <div className="pt-2 border-t border-border">
                  <span className="text-accent font-mono text-xs uppercase tracking-wide">Result</span>
                  <p className="mt-2">{project.result}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center text-accent text-sm font-mono">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
