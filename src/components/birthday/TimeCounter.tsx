import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const START_DATE = new Date("2020-04-29T00:00:00");

const TimeCounter = () => {
  const [elapsed, setElapsed] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = now.getTime() - START_DATE.getTime();
      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const years = Math.floor(totalDays / 365.25);
      const remainingDays = Math.floor(totalDays - years * 365.25);
      const months = Math.floor(remainingDays / 30.44);
      const days = Math.floor(remainingDays - months * 30.44);

      setElapsed({
        years,
        months,
        days,
        hours: totalHours % 24,
        minutes: totalMinutes % 60,
        seconds: totalSeconds % 60,
      });
    };

    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { value: elapsed.years, label: "Anos" },
    { value: elapsed.months, label: "Meses" },
    { value: elapsed.days, label: "Dias" },
    { value: elapsed.hours, label: "Horas" },
    { value: elapsed.minutes, label: "Min" },
    { value: elapsed.seconds, label: "Seg" },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-4 animate-heartbeat" />
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          Nosso tempo juntos
        </h2>
        <p className="text-muted-foreground font-light mb-12">
          E contando cada segundo com amor...
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-card border border-primary/10 rounded-2xl p-4 shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                {item.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-body">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TimeCounter;
