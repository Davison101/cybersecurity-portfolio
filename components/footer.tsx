export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-background/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="text-accent font-bold">DM</span>
          <span>•</span>
          <span>Building secure systems with intention</span>
        </div>
        <p>© {currentYear} Davison Mapiza. All rights reserved.</p>
      </div>
    </footer>
  );
}
