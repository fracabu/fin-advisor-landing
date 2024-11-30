import { motion } from 'framer-motion';
import { PhoneCall, FileText, LineChart } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: "Primo Contatto",
    description: "Prenota una consulenza gratuita per valutare le tue esigenze"
  },
  {
    icon: FileText,
    title: "Piano Finanziario",
    description: "I nostri esperti costruiscono un piano finanziario personalizzato"
  },
  {
    icon: LineChart,
    title: "Supporto Continuativo",
    description: "Monitoriamo i tuoi progressi e adattiamo il piano alle tue necessità"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Come Funziona</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-md relative"
            >
              <div className="mb-6">
                <step.icon className="w-16 h-16 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-4xl text-gray-300"
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
