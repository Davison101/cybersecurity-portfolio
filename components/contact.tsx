'use client';

import { useEffect, useState, useRef } from 'react';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'dmapiza14@gmail.com',
    icon: Mail,
    href: 'mailto:dmapiza14@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'Davison Mapiza',
    icon: Linkedin,
    href: 'https://linkedin.com/in/davison-mapiza',
  },
  {
    label: 'GitHub',
    value: 'Davison101',
    icon: Github,
    href: 'https://github.com/Davison101',
  },
  {
    label: 'WhatsApp & Phone',
    value: '+263 976 235 760',
    icon: MessageCircle,
    href: 'https://wa.me/263976235760',
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section id="contact" className="py-20 px-6 border-t border-border" ref={ref}>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h2>
          <p className={`text-muted-foreground text-lg transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Open to internships, collaborations, and technical discussions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-6 rounded-lg border border-border bg-card/50 hover:border-accent hover:bg-card transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                      {link.label}
                    </p>
                    <p className="text-foreground font-medium">{link.value}</p>
                  </div>
                  <Icon
                    size={20}
                    className="text-accent group-hover:scale-110 transition-transform"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
