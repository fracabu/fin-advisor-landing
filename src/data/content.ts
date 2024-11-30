import { Testimonial, PricingPlan, BlogPost, FAQ } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marco Rossi",
    text: "Grazie a FinAdvisor, sono riuscito a riorganizzare i miei investimenti e garantire un futuro sereno per la mia famiglia.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150"
  },
  {
    id: 2,
    name: "Laura Bianchi",
    text: "La consulenza personalizzata mi ha aiutato a raggiungere i miei obiettivi finanziari in modo efficace e sicuro.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150"
  },
  {
    id: 3,
    name: "Giuseppe Verdi",
    text: "Un servizio professionale che mi ha permesso di prendere decisioni finanziarie consapevoli e strategiche.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 199,
    description: "Consulenza finanziaria generale",
    features: [
      "Analisi finanziaria iniziale",
      "Piano finanziario base",
      "Supporto email",
      "Report mensile"
    ]
  },
  {
    id: "plus",
    name: "Plus",
    price: 399,
    description: "Consulenza e supporto sugli investimenti",
    features: [
      "Tutto del piano Basic",
      "Gestione investimenti",
      "Consulenze illimitate",
      "Supporto telefonico prioritario"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: 599,
    description: "Piano completo con gestione fiscale",
    features: [
      "Tutto del piano Plus",
      "Gestione fiscale completa",
      "Consulente dedicato",
      "Pianificazione patrimoniale"
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Come Ottimizzare il Tuo Portafoglio di Investimenti",
    excerpt: "Scopri le strategie più efficaci per diversificare i tuoi investimenti e minimizzare i rischi.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=500&h=300"
  },
  {
    id: 2,
    title: "Guida al Risparmio Fiscale",
    excerpt: "Consigli pratici per ridurre legalmente il carico fiscale e massimizzare i tuoi risparmi.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?fit=crop&w=500&h=300"
  },
  {
    id: 3,
    title: "Pianificare la Pensione: Inizia Oggi",
    excerpt: "L'importanza di una pianificazione previdenziale anticipata per un futuro sereno.",
    image: "https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?fit=crop&w=500&h=300"
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Cos'è la consulenza finanziaria?",
    answer: "È un servizio che aiuta a gestire il denaro e pianificare il futuro attraverso strategie personalizzate e professionali."
  },
  {
    id: 2,
    question: "Devo avere un grande patrimonio per iniziare?",
    answer: "No, i nostri piani sono pensati per tutte le fasce patrimoniali. Possiamo aiutarti indipendentemente dalla tua situazione finanziaria."
  },
  {
    id: 3,
    question: "Come si svolge la prima consulenza?",
    answer: "La prima consulenza è gratuita e si concentra sulla comprensione dei tuoi obiettivi finanziari e sulla valutazione della tua situazione attuale."
  },
  {
    id: 4,
    question: "Quali garanzie offrite?",
    answer: "Offriamo consulenti certificati, massima trasparenza e un approccio personalizzato basato sulle tue esigenze specifiche."
  }
];