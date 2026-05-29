export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border bg-background/50 text-center">
      <p className="text-sm text-muted-foreground">© {currentYear} Davison Mapiza. Building secure systems with intention.</p>
    </footer>
  );
}
