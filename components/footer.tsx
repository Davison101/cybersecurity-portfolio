'use client';

import Link from 'next/link';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      label: 'Email',
      value: 'dmapiza14@gmail.com',
      icon: Mail,
      href: 'mailto:dmapiza14@gmail.com',
    },
    {
      label: 'GitHub',
      value: 'Davison101',
      icon: Github,
      href: 'https://github.com/Davison101',
    },
    {
      label: 'LinkedIn',
      value: 'Davison Mapiza',
      icon: Linkedin,
      href: 'https://linkedin.com/in/davison-mapiza',
    },
    {
      label: 'Phone',
      value: '+263 976 235 760',
      icon: Phone,
      href: 'tel:+263976235760',
    },
  ];

  return (
    <footer className="py-16 px-6 border-t border-border bg-gradient-to-b from-background to-background/80">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-4 rounded-lg border border-border/50 bg-card/30 hover:border-accent hover:bg-card/60 transition-all duration-300"
              >
                <div className="flex flex-col gap-2">
                  <Icon size={20} className="text-accent group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide">{link.label}</p>
                  <p className="text-sm text-foreground font-medium truncate group-hover:text-accent transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
              <span className="text-background font-bold text-sm">DM</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">Davison Mapiza</p>
              <p className="text-xs text-muted-foreground">Building secure systems with intention</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} Davison Mapiza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
