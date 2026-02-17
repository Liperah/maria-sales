import { motion } from "framer-motion";
import { Sparkles, Cake } from "lucide-react";

const BirthdaySection = () => (
  <section className="py-20 px-6 bg-romantic-gradient">
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="inline-block mb-6"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Cake className="w-12 h-12 text-accent mx-auto" />
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
        Hoje é o seu dia! 🎂
      </h2>

      <div className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border border-primary/10 mt-8">
        <Sparkles className="w-6 h-6 text-accent mx-auto mb-4" />
        <p className="text-lg text-foreground font-light leading-relaxed mb-6">
          <span className="font-display font-semibold text-2xl text-gradient-gold">26 anos</span>{" "}
          da mulher mais incrível que eu já conheci. Cada ano que passa, você fica mais linda, 
          mais forte e mais especial.
        </p>
        <p className="text-muted-foreground font-light leading-relaxed">
          Que esse novo ciclo traga tudo o que o seu coração deseja. Que você realize cada sonho, 
          que a felicidade seja sua companheira diária e que o amor — o nosso amor — continue sendo 
          a sua maior certeza. Você merece o mundo, Maria. E eu vou fazer de tudo para te dar.
        </p>
      </div>
    </motion.div>
  </section>
);

export default BirthdaySection;
