'use client';

import { useEffect, useState, useRef } from 'react';

const skillCategories = [
  {
    title: 'Network Security Engineering',
    description:
      'Design and implementation of secure network architectures with emphasis on segmentation, routing, and Layer 3 switching.',
    tags: ['Cisco IOS', 'VLANs', 'Layer 3', 'ACLs', 'Routing', 'Packet Tracer'],
  },
  {
    title: 'Firewall and Infrastructure Security',
    description:
      'Enterprise firewall configuration, DMZ design, hardening, access control, and security monitoring.',
    tags: ['ASA', 'DMZ Design', 'Hardening', 'Access Control', 'Syslog'],
  },
  {
    title: 'Security Operations Foundations',
    description:
      'Practical security incident handling, log analysis, and infrastructure troubleshooting.',
    tags: ['Log Analysis', 'Troubleshooting', 'Monitoring', 'Incident Response'],
  },
  {
    title: 'AI Security and Governance',
    description:
      'Adversarial robustness, LLM safety, deterministic policy enforcement, and secure gateways for AI systems.',
    tags: ['Adversarial ML', 'LLM Governance', 'Policy Enforcement', 'Secure Gateways'],
  },
  {
    title: 'Systems Architecture and Design',
    description:
      'End-to-end security system design, threat modeling, and architecture documentation.',
    tags: ['Threat Modeling', 'Architecture Design', 'Risk Assessment', 'Documentation'],
  },
  {
    title: 'Development and Implementation',
    description:
      'Security implementation through code, automation, and infrastructure scripting.',
    tags: ['Python', 'Bash', 'Automation', 'Infrastructure as Code'],
  },
];

export default function Skills() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems(new Array(skillCategories.length).fill(true));
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
    <section id="skills" className="py-20 px-6 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((skill, index) => (
            <div
              key={skill.title}
              className={`p-6 rounded-lg border border-border bg-card/50 hover:border-accent transition-all duration-500 ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-bold text-foreground mb-3">{skill.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-background border border-border rounded text-accent font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
