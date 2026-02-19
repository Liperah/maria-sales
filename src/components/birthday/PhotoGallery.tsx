import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const getPrevIndex = (i: number) => (i - 1 + photos.length) % photos.length;
  const getNextIndex = (i: number) => (i + 1) % photos.length;

  return (
    <section className="py-20 px-6 bg-romantic-gradient overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto"
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

        <div className="relative flex items-center justify-center gap-2 md:gap-4">
          {/* Blurred prev preview */}
          <div className="hidden md:block w-24 lg:w-32 aspect-[3/4] rounded-2xl overflow-hidden flex-shrink-0 relative">
            <img
              src={photos[getPrevIndex(selectedIndex)]}
              alt="Anterior"
              className="w-full h-full object-cover blur-sm scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-background/30 rounded-2xl" />
          </div>

          {/* Main carousel */}
          <div className="relative w-full max-w-sm md:max-w-md flex-shrink-0">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {photos.map((src, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                      <img
                        src={src}
                        alt={`Nosso momento ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm border border-primary/20 rounded-full p-2 shadow-lg hover:bg-background transition-colors z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm border border-primary/20 rounded-full p-2 shadow-lg hover:bg-background transition-colors z-10"
              aria-label="Próxima"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Blurred next preview */}
          <div className="hidden md:block w-24 lg:w-32 aspect-[3/4] rounded-2xl overflow-hidden flex-shrink-0 relative">
            <img
              src={photos[getNextIndex(selectedIndex)]}
              alt="Próxima"
              className="w-full h-full object-cover blur-sm scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-background/30 rounded-2xl" />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30"
              }`}
              aria-label={`Ir para foto ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;
