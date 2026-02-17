import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = ({ onStart }: { onStart: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Romantic background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Heart className="w-12 h-12 text-primary fill-primary" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4 leading-tight">
            Feliz Aniversário,{" "}
            <span className="block text-gradient-gold text-5xl md:text-7xl mt-2">
              Maria Sales
            </span>
          </h1>

          <p className="text-primary-foreground/90 text-lg md:text-xl font-body font-light mt-6 mb-10">
            Meu amor, hoje é o dia mais especial do ano. Preparei algo com todo o meu coração para você. ❤️
          </p>

          <motion.button
            onClick={onStart}
            className="bg-gold-shimmer text-foreground font-display font-semibold px-8 py-4 rounded-full text-lg shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Clique aqui, preparei isso para você ✨
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
