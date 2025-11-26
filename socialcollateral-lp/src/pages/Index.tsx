import NavbarAmanah from "@/components/NavbarAmanah";
import HeroAmanah from "@/components/HeroAmanah";
import DemoSection from "@/components/DemoSection";
import TimelineAmanah from "@/components/TimelineAmanah";
import FooterAmanah from "@/components/FooterAmanah";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <NavbarAmanah />
      <main>
        <HeroAmanah />
        <DemoSection />
        <TimelineAmanah />
      </main>
      <FooterAmanah />
    </div>
  );
};

export default Index;
