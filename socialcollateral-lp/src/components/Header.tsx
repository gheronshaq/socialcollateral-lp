import { Github, ChevronDown, Menu, Apple } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and GitHub Stars */}
          <div className="flex items-center gap-4">
            <a href="/" className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
              meetily
            </a>
            <a 
              href="https://github.com" 
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>8.4K</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Use Cases
              <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#pro" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Meetily Pro
            </a>
            <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </a>
          </nav>

          {/* Download Button */}
          <div className="flex items-center gap-3">
            <Button 
              className="hidden sm:flex items-center gap-2"
              size="lg"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
              <Apple className="w-4 h-4" />
              Download
            </Button>
            
            <button 
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#use-cases" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Use Cases
              </a>
              <a href="#pro" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Meetily Pro
              </a>
              <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <Button className="w-full sm:hidden" size="lg">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
                <Apple className="w-4 h-4" />
                Download
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
