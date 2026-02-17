import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const timelineItems = [
  {
    year: "O Começo",
    title: "Como nos conhecemos",
    text: "O destino nos colocou no mesmo caminho e desde aquele momento, minha vida nunca mais foi a mesma. Foi amor à primeira vista — ou quase isso. ❤️",
  },
  {
    year: "Primeiro Ano",
    title: "Os primeiros passos juntos",
    text: "Descobrimos o nosso jeito de amar, entre risadas, mensagens até de madrugada e o primeiro 'eu te amo' que mudou tudo.",
  },
  {
    year: "Crescendo Juntos",
    title: "Superando desafios",
    text: "Aprendemos que o amor de verdade não é só sobre os dias bons, mas sobre escolher ficar nos dias difíceis. E nós sempre escolhemos ficar.",
  },
  {
    year: "Nosso Lar",
    title: "Construindo sonhos",
    text: "Cada plano, cada conquista, cada passo — tudo ficou mais bonito porque foi ao seu lado. Nossos sonhos começaram a tomar forma.",
  },
  {
    year: "5 Anos",
    title: "Meia década de amor",
    text: "5 anos que parecem 5 minutos quando estou com você e 5 séculos quando estamos distantes. Que venham mais 50, meu amor.",
  },
];

const OurTimeline = () => (
  <section className="py-20 px-6 bg-background">
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-16">
        Nossa História ✨
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-px" />

        {timelineItems.map((item, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col md:flex-row items-start mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-1" />

            {/* Content */}
            <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <span className="text-sm font-body font-bold text-primary uppercase tracking-widest">
                {item.year}
              </span>
              <h3 className="text-xl font-display font-semibold text-foreground mt-1 mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default OurTimeline;
