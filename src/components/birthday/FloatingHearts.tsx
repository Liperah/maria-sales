import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      size: Math.random() * 16 + 8,
      duration: Math.random() * 8 + 8,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary/20"
          style={{
            left: `${heart.left}%`,
            fontSize: heart.size,
            bottom: "-20px",
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            rotate: [0, 360],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
