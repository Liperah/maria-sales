import { Heart } from "lucide-react";

const RomanticFooter = () => (
  <footer className="py-10 px-6 bg-card border-t border-primary/10 text-center">
    <div className="flex items-center justify-center gap-2 mb-3">
      <Heart className="w-4 h-4 text-primary fill-primary" />
      <Heart className="w-3 h-3 text-primary/60 fill-primary/60" />
      <Heart className="w-4 h-4 text-primary fill-primary" />
    </div>
    <p className="text-muted-foreground font-light text-sm">
      Feito com amor para <span className="text-primary font-medium">Maria Sales</span>
    </p>
    <p className="text-muted-foreground/60 text-xs mt-2 font-light">
      17 de Fevereiro de 2026 • Para sempre juntos ❤️
    </p>
  </footer>
);

export default RomanticFooter;
