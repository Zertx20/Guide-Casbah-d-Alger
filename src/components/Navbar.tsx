import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Réserver", href: "#booking" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40 bg-foreground/80 backdrop-blur-md border-b border-primary-foreground/10"
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-lg font-bold text-primary-foreground">
          Guide Casbah
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/213561684215"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-accent text-accent-foreground font-body font-bold text-sm rounded-lg hover:brightness-110 transition-all"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-foreground/95 backdrop-blur-md border-t border-primary-foreground/10 px-6 pb-6 pt-4 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/80 font-body hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/213561684215"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-5 py-3 bg-accent text-accent-foreground font-body font-bold rounded-lg"
          >
            WhatsApp
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
