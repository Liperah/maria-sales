import { motion } from "framer-motion";

const LoveLetter = () => (
  <section className="py-20 px-6 bg-romantic-gradient">
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
        Uma carta para você 💌
      </h2>

      <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10 relative">
        {/* Decorative quotes */}
        <span className="absolute top-4 left-6 text-6xl text-primary/10 font-display">"</span>

        <div className="space-y-5 text-foreground font-light leading-relaxed relative z-10 font-body">
          <p className="font-display text-xl text-foreground/90 italic">Minha Maria,</p>

          <p>
            Escrever sobre o que sinto por você nunca vai ser suficiente, porque o que eu sinto 
            não cabe em palavras. Mas eu vou tentar, porque você merece ouvir — todos os dias.
          </p>

          <p>
            Obrigado por estar ao meu lado. Por cada manhã em que acordo e sei que tenho a 
            pessoa mais incrível do mundo ao meu lado. Você é minha paz, minha alegria, 
            minha melhor amiga e o amor da minha vida.
          </p>

          <p>
            Nesses 5 anos juntos, aprendi que amar você é a coisa mais natural que já fiz. 
            Não preciso pensar, não preciso tentar. Simplesmente acontece — como respirar, 
            como o sol nascer todo dia.
          </p>

          <p>
            Tenho tanto orgulho da mulher que você é. Da sua força, da sua garra, 
            da sua capacidade de amar, de cuidar, de transformar tudo ao seu redor em algo mais bonito. 
            O mundo é melhor porque você existe nele.
          </p>

          <p>
            Quero construir uma vida inteira ao seu lado. Quero envelhecer contando nossas histórias, 
            quero que os nossos melhores dias sejam sempre os próximos. Quero ser para sempre o motivo 
            do seu sorriso, como você é do meu.
          </p>

          <p className="font-display text-lg italic text-primary">
            Eu te amo mais do que as palavras podem dizer — e vou te provar isso todos os dias da minha vida.
          </p>

          <p className="text-right font-display text-lg text-foreground mt-8">
            Com todo o meu amor,<br />
            <span className="text-gradient-gold text-xl font-semibold">
              Seu amor para sempre ❤️
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default LoveLetter;
