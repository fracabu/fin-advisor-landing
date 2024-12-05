import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=2000"
          alt="Financial consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-900/80" />
      </div>
      
      <div className="container mx-auto px-4 z-10 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mx-20">
            Pianifica il Tuo Futuro Finanziario con Esperti Certificati
          </h1>
          <p className="text-xl md:text-2xl mb-8 mx-20">
            Affidati a FinAdvisor per costruire il tuo benessere finanziario
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-colors mx-20"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Prenota una Consulenza Gratuita
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
