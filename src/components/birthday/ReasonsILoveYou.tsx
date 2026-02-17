import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const reasons = [
  "Do seu sorriso que ilumina qualquer dia nublado",
  "Da forma como você me faz querer ser melhor",
  "Do seu abraço que é o meu lugar seguro",
  "Da sua força e determinação em tudo que faz",
  "Do seu coração enorme e generoso",
  "Do jeito que você cuida de quem ama",
  "Das nossas risadas juntos até doer a barriga",
  "Da sua inteligência e da forma como vê o mundo",
  "De cada 'eu te amo' dito e não dito",
  "De ser minha parceira em todas as aventuras",
  "Da sua beleza — por dentro e por fora",
  "De você ser simplesmente quem você é",
];

const ReasonsILoveYou = () => (
  <section className="py-20 px-6 bg-background">
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
        Motivos que eu amo você 💕
      </h2>
      <p className="text-center text-muted-foreground font-light mb-12">
        São infinitos, mas aqui estão alguns...
      </p>

      <div className="space-y-4">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 p-4 rounded-xl bg-card border border-primary/10"
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Heart className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
            <span className="text-foreground font-light">{reason}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ReasonsILoveYou;
