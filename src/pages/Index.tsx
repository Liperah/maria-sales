import { useRef } from "react";
import FloatingHearts from "@/components/birthday/FloatingHearts";
import HeroSection from "@/components/birthday/HeroSection";
import LoveMessage from "@/components/birthday/LoveMessage";
import OurTimeline from "@/components/birthday/OurTimeline";
import PhotoGallery from "@/components/birthday/PhotoGallery";
import ReasonsILoveYou from "@/components/birthday/ReasonsILoveYou";
import LoveLetter from "@/components/birthday/LoveLetter";
import TimeCounter from "@/components/birthday/TimeCounter";
import BirthdaySection from "@/components/birthday/BirthdaySection";
import FinalMessage from "@/components/birthday/FinalMessage";
import RomanticFooter from "@/components/birthday/RomanticFooter";

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      <HeroSection onStart={handleStart} />
      <div ref={contentRef}>
        <LoveMessage />
        <OurTimeline />
        <PhotoGallery />
        <ReasonsILoveYou />
        <LoveLetter />
        <TimeCounter />
        <BirthdaySection />
        <FinalMessage />
        <RomanticFooter />
      </div>
    </div>
  );
};

export default Index;
