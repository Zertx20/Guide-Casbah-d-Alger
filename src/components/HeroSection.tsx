import { motion } from "framer-motion";
import heroBg from "@/assets/hero-casbah.jpg";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/213561684215?text=Bonjour%20Moncef%2C%20je%20souhaite%20r%C3%A9server%20une%20visite%20de%20la%20Casbah.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="La Casbah d'Alger surplombant la Méditerranée"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        <div className="absolute inset-0 zakhrafa-animated opacity-[0.1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-dancing text-lg tracking-[0.3em] text-gold mb-6 animate-on-scroll">
            Visites culturelles privées
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold text-primary-foreground leading-tight mb-6 animate-on-scroll">
            Découvrez l'âme de la
            <br />
            <span className="text-gold-gradient bg-clip-text">Casbah d'Alger</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-libre-baskerville font-light max-w-2xl mx-auto mb-10 animate-on-scroll">
            Visites culturelles privées avec Moncef, votre guide local.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scale"
        >
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-bold rounded-lg shadow-gold hover:brightness-110 transition-all duration-300"
          >
            <CalendarCheck size={20} />
            Réserver une visite
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-body font-medium rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Contacter sur WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
