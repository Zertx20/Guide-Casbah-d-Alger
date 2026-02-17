const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-2xl font-bold mb-2">
          Guide Casbah d'Alger — Moncef
        </p>
        <p className="font-body text-primary-foreground/70 text-sm tracking-widest">
          Casbah d'Alger • Culture • Histoire • Expérience authentique
        </p>
        <div className="mt-6 w-16 h-px bg-accent mx-auto" />
        <p className="mt-6 font-body text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Guide Casbah d'Alger. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
