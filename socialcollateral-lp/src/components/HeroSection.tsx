import { Star, Github, Play } from "lucide-react";
import { Button } from "./ui/button";
import Badge from "./Badge";

const HeroSection = () => {
  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Top Badges */}
        <div className="flex flex-col items-center gap-4 mb-8 animate-fade-in">
          <Badge variant="outline" className="text-xs">
            <span className="text-2xl font-bold">#1</span>
            <span className="text-muted-foreground">Privacy first</span>
          </Badge>
          
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border-2 border-border shadow-[var(--shadow-soft)]">
            <svg className="w-6 h-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
            </svg>
            <span className="text-sm font-bold text-foreground">Ai Meeting Assistant</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-rating text-rating" />
              ))}
            </div>
            <svg className="w-6 h-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
            </svg>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">30K+</div>
            <div className="text-sm text-muted-foreground">users</div>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">8400+</div>
            <div className="text-sm text-muted-foreground">Github Stars</div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl mx-auto text-center mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            The Privacy-First AI Meeting Assistant & Note Taker
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Meetily records, transcribes, and summarizes meetings. Your meeting data never leaves your device.
          </p>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10 animate-fade-in">
          <Badge variant="secondary" className="text-xs">
            Open Source
          </Badge>
          <span className="text-muted-foreground">|</span>
          <Badge variant="secondary" className="text-xs">
            Works with Zoom, Teams, Meet
          </Badge>
          <span className="text-muted-foreground">|</span>
          <Badge variant="secondary" className="text-xs">
            GDPR & HIPAA Ready
          </Badge>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6 animate-scale-in">
          <Button size="lg" className="text-base px-8 py-6">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
            </svg>
            Download Meetily
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 py-6">
            View Pricing
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 py-6">
            <Play className="w-5 h-5" />
            Watch Demo
          </Button>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm animate-fade-in">
          <a href="#github" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-4 h-4" />
            Star on GitHub
          </a>
          <span className="text-border">•</span>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
