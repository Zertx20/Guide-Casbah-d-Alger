import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Bonjour Moncef, je souhaite réserver une visite.\n\nNom : ${formData.name}\nEmail : ${formData.email}\nDate : ${formData.date}\nPersonnes : ${formData.people}\nMessage : ${formData.message}`;
    window.open(
      `https://wa.me/213561684215?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
    toast({
      title: "Redirection vers WhatsApp",
      description: "Vous serez mis en contact avec Moncef pour confirmer votre réservation.",
    });
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-accent font-body font-bold mb-3">
            Réservation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Réservez votre visite
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Téléphone / WhatsApp</h3>
                <a
                  href="https://wa.me/213561684215"
                  className="text-muted-foreground font-body hover:text-accent transition-colors"
                >
                  +213 561 684 215
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Adresse</h3>
                <p className="text-muted-foreground font-body">
                  Rue du Soudan, Casbah,
                  <br />
                  Alger 16000, Algérie
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 shadow-elegant space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Nom</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Date de visite</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background/60 backdrop-blur-sm text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Nombre de personnes</label>
                <input
                  type="number"
                  required
                  min={1}
                  max={20}
                  value={formData.people}
                  onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="1"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                maxLength={1000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background/60 backdrop-blur-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                placeholder="Demandes spéciales ou questions..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-4 bg-accent text-accent-foreground font-body font-bold rounded-lg shadow-gold hover:brightness-110 transition-all duration-300"
            >
              <Send size={18} />
              Réserver maintenant
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
