import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { Check } from "lucide-react";

const experiences = [
  "Ruelles historiques et passages secrets",
  "Architecture ottomane et anciens palais",
  "Mosquées et vues panoramiques sur la mer",
  "Histoires locales et lieux cachés",
  "Immersion dans la culture algérienne",
];

const images = [
  { src: gallery1, alt: "Ruelle étroite de la Casbah avec des portes colorées" },
  { src: gallery2, alt: "Intérieur d'un palais ottoman avec motifs géométriques islamiques" },
  { src: gallery3, alt: "Vue panoramique depuis la Casbah sur la Méditerranée" },
  { src: gallery4, alt: "Intérieur d'une mosquée historique à Alger" },
];

const TourExperience = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-accent font-bebas font-bold mb-3 animate-on-scroll">
            L'expérience
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-foreground animate-on-scroll">
            Ce que vous allez découvrir
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.ul
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 animate-on-scroll-left"
          >
            {experiences.map((exp, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 text-lg font-body text-foreground"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Check size={16} className="text-accent-foreground" />
                </span>
                {exp}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4 animate-on-scroll-right"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl shadow-elegant ${
                  i === 1 ? "row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TourExperience;
