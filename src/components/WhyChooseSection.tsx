import { motion } from "framer-motion";
import { Landmark, UserCheck, Footprints, Globe } from "lucide-react";

const features = [
  {
    icon: Landmark,
    title: "Histoire authentique",
    description: "Découvrez les véritables histoires de la Casbah et de ses habitants.",
  },
  {
    icon: UserCheck,
    title: "Guide professionnel",
    description: "Une visite vivante grâce à une formation en arts et communication.",
  },
  {
    icon: Footprints,
    title: "Expérience immersive",
    description: "Explorez les ruelles secrètes et les points de vue cachés.",
  },
  {
    icon: Globe,
    title: "Approche culturelle",
    description: "Comprenez la vie sociale et culturelle d'Alger.",
  },
];

const WhyChooseSection = () => {
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
            Pourquoi nous choisir
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-foreground animate-on-scroll">
            Une visite unique en son genre
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-card border border-border rounded-2xl p-8 text-center hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 animate-on-scroll-scale"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary flex items-center justify-center group-hover:shadow-gold transition-shadow duration-500">
                <feature.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
