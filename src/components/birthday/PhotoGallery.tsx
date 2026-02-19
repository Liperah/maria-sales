import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import photo1 from "@/assets/gallery/photo1.jpeg";
import photo3 from "@/assets/gallery/photo3.jpeg";
import photo4 from "@/assets/gallery/photo4.jpeg";
import photo5 from "@/assets/gallery/photo5.jpeg";
import photo6 from "@/assets/gallery/photo6.jpeg";
import photo7 from "@/assets/gallery/photo7.jpeg";
import photo8 from "@/assets/gallery/photo8.jpeg";
import photo9 from "@/assets/gallery/photo9.jpeg";
import photo10 from "@/assets/gallery/photo10.jpeg";

const photos = [photo1, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

const PhotoGallery = () => {
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
          {photos.map((src, i) => (
            <motion.div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden bg-secondary border-2 border-primary/10 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={src}
                alt={`Nosso momento ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;
