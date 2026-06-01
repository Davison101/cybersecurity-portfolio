'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, Code2, Lightbulb, BookOpen, MessageSquare } from 'lucide-react';
import { MenuBar } from '@/components/ui/glow-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('About');

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#research', label: 'Research' },
    { href: '#lab-notes', label: 'Lab Notes' },
    { href: '#contact', label: 'Contact' },
  ];

  const menuItems = [
    {
      icon: FileText,
      label: 'About',
      href: '#about',
      gradient: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)',
      iconColor: 'text-blue-500',
    },
    {
      icon: Code2,
      label: 'Skills',
      href: '#skills',
      gradient: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)',
      iconColor: 'text-orange-500',
    },
    {
      icon: Lightbulb,
      label: 'Projects',
      href: '#projects',
      gradient: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)',
      iconColor: 'text-green-500',
    },
    {
      icon: BookOpen,
      label: 'Research',
      href: '#research',
      gradient: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)',
      iconColor: 'text-purple-500',
    },
    {
      icon: MessageSquare,
      label: 'Contact',
      href: '#contact',
      gradient: 'radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)',
      iconColor: 'text-red-500',
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="text-xl font-bold text-accent">
          DM
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <MenuBar 
            items={menuItems}
            activeItem={activeNav}
            onItemClick={(label) => {
              setActiveNav(label);
              const link = navLinks.find(l => l.label === label);
              if (link) {
                const element = document.querySelector(link.href);
                element?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex items-center justify-between gap-4 px-6 py-4">
            <span className="text-sm text-muted-foreground">Menu</span>
            <ThemeToggle />
          </div>
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
