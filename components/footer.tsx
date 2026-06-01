export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-border bg-background/70 backdrop-blur-xl text-center">
      <p className="text-sm text-muted-foreground">© {currentYear} Davison Mapiza. Building secure systems with intention.</p>
    </footer>
  );
}
