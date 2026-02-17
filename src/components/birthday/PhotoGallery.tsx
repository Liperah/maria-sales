import { motion } from "framer-motion";
import { Heart, ImageIcon } from "lucide-react";

const PhotoGallery = () => {
  const placeholders = Array.from({ length: 6 });

  return (
    <section className="py-20 px-6 bg-romantic-gradient">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
          Nossos Momentos 📸
        </h2>
        <p className="text-center text-muted-foreground font-light mb-12">
          Cada foto, uma lembrança que guardo no coração
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((_, i) => (
            <motion.div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden bg-secondary border-2 border-primary/10 flex items-center justify-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-center text-muted-foreground/50">
                <ImageIcon className="w-10 h-10 mx-auto mb-2" />
                <span className="text-xs font-body">Adicione sua foto</span>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground/60 text-sm mt-6 font-light italic">
          💡 Substitua os espaços acima pelas suas fotos favoritas do casal
        </p>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;
