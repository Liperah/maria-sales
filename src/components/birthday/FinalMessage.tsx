import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FinalMessage = () => (
  <section className="py-24 px-6 bg-background">
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="inline-block mb-8"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Heart className="w-16 h-16 text-primary fill-primary" />
      </motion.div>

      <blockquote className="text-2xl md:text-4xl font-display font-bold text-foreground leading-snug italic mb-8">
        "Se eu pudesse escolher de novo, escolheria você em todas as vidas."
      </blockquote>

      <div className="divider-heart" />

      <p className="text-lg text-muted-foreground font-light mt-6 mb-2">
        Com todo o amor do mundo,
      </p>
      <p className="text-2xl font-display font-bold text-gradient-gold">
        Do seu marido e amor da sua vida ❤️
      </p>
    </motion.div>
  </section>
);

export default FinalMessage;
