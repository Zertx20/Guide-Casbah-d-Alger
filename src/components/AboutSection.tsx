import { motion } from "framer-motion";
import guidePortrait from "@/blank-profile-picture-973460_1280.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative animate-on-scroll-left">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl -rotate-3" />
              <img
                src={guidePortrait}
                alt="Moncef, votre guide culturel dans la Casbah d'Alger"
                className="relative rounded-2xl w-full max-w-md mx-auto object-cover shadow-elegant"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.25em] uppercase text-accent font-philosopher font-bold mb-3 animate-on-scroll">
              Votre guide
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-foreground mb-6 animate-on-scroll">
              Rencontrez votre guide
            </h2>
            <p className="text-lg text-muted-foreground font-crimson leading-relaxed mb-6 animate-on-scroll">
              Moncef est sociologue et passionné de patrimoine. Grâce à sa formation en arts dramatiques et sa profonde connaissance culturelle, il vous propose une expérience immersive unique au cœur de la Casbah d'Alger.
            </p>
            <div className="flex flex-wrap gap-3 animate-on-scroll">
              {["Sociologue", "Arts dramatiques", "Manager", "Sportif", "Passionné de littérature"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-secondary text-secondary-foreground font-body text-sm rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
