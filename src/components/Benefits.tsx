import { motion } from 'framer-motion';
import { Target, Shield, Users, TrendingUp, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: "Consulenza Personalizzata",
    description: "Strategie su misura per i tuoi obiettivi finanziari specifici."
  },
  {
    icon: Shield,
    title: "Sicurezza Garantita",
    description: "I tuoi investimenti sono protetti da esperti certificati."
  },
  {
    icon: Users,
    title: "Team di Esperti",
    description: "Professionisti qualificati al tuo servizio."
  },
  {
    icon: TrendingUp,
    title: "Crescita Costante",
    description: "Strategie ottimizzate per massimizzare i rendimenti."
  },
  {
    icon: Clock,
    title: "Supporto Continuo",
    description: "Assistenza dedicata 24/7 per ogni tua necessità."
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">I Nostri Vantaggi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            FinAdvisor ti fornisce gli strumenti per prendere le giuste decisioni finanziarie,
            guidato dai nostri consulenti esperti.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}