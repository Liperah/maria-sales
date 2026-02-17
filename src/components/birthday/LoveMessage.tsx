import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const LoveMessage = () => (
  <section className="py-20 px-6 bg-romantic-gradient">
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={fadeUp}
    >
      <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-6" />
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
        Para o amor da minha vida
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed font-light">
        Maria, cada dia ao seu lado é um presente. Você é a pessoa que transforma os meus dias comuns em 
        momentos extraordinários. Seu sorriso é a minha paz, seu abraço é o meu lugar favorito no mundo. 
        Hoje, quero que você sinta o quanto é amada, admirada e especial.
      </p>
      <div className="divider-heart mt-8" />
    </motion.div>
  </section>
);

export default LoveMessage;
