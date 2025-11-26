import { useEffect, useRef, useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const FooterAmanah = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isTransitioned, setIsTransitioned] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTransitioned) {
            // Trigger background transition
            if (footerRef.current) {
              footerRef.current.classList.add("bg-transitioned");
            }
            setIsTransitioned(true);

            // Stagger content animations after color transition
            if (contentRef.current) {
              const children = Array.from(contentRef.current.children);
              children.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add("visible");
                }, 1000 + index * 100); // Start after 1s color transition
              });
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, [isTransitioned]);

  const quickLinks = [
    "Tentang Kami",
    "Layanan",
    "Portfolio",
    "Tim Kami",
    "Karir",
    "Blog",
  ];

  const services = [
    "Konsultasi IT",
    "Pengembangan Web",
    "Mobile Apps",
    "Cloud Solutions",
    "Digital Marketing",
    "Maintenance",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer
      ref={footerRef}
      className="footer-transition pt-16 pb-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Description */}
          <div className="stagger-5">
            <h3
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-amanah-pink bg-clip-text text-transparent"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              jaringan amanah
            </h3>
            <p className="text-amanah-light/80 text-sm leading-relaxed mb-6">
              Membangun kepercayaan melalui layanan profesional dan solusi
              teknologi terdepan untuk mengembangkan bisnis Anda.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-amanah-pink flex items-center justify-center transition-all duration-300 hover:scale-110 min-w-[44px] min-h-[44px]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="stagger-6">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-amanah-light/80 hover:text-amanah-pink transition-colors text-sm inline-block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="stagger-7">
            <h4 className="text-lg font-semibold mb-4 text-white">Layanan</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-amanah-light/80 hover:text-amanah-pink transition-colors text-sm inline-block py-1"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="stagger-7">
            <h4 className="text-lg font-semibold mb-4 text-white">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amanah-pink flex-shrink-0 mt-0.5" />
                <span className="text-amanah-light/80 text-sm">
                  Jl. Contoh No. 123
                  <br />
                  Jakarta, Indonesia 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amanah-pink flex-shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="text-amanah-light/80 hover:text-amanah-pink transition-colors text-sm"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amanah-pink flex-shrink-0" />
                <a
                  href="mailto:info@jaringanamanah.com"
                  className="text-amanah-light/80 hover:text-amanah-pink transition-colors text-sm"
                >
                  info@jaringanamanah.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amanah-light/60 text-sm text-center md:text-left">
              © 2025 Jaringan Amanah. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-amanah-light/60 hover:text-amanah-pink transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-amanah-light/60 hover:text-amanah-pink transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAmanah;
