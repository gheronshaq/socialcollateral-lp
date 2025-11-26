import { useEffect, useRef } from "react";
import { ArrowRight, User, Building2, Briefcase, Users } from "lucide-react";

interface Testimonial {
  author: string;
  role: string;
  company: string;
  date: string;
  content: string;
  icon: "user" | "building" | "briefcase" | "users";
}

const testimonials: Testimonial[] = [
  {
    author: "Budi Santoso",
    role: "CEO",
    company: "PT Maju Jaya",
    date: "2 minggu lalu",
    content:
      "Jaringan Amanah memberikan solusi yang sangat profesional dan tepat waktu. Tim mereka sangat responsif dan memahami kebutuhan bisnis kami dengan baik.",
    icon: "building",
  },
  {
    author: "Siti Nurhaliza",
    role: "Marketing Manager",
    company: "Sukses Bersama",
    date: "1 bulan lalu",
    content:
      "Kualitas layanan yang luar biasa! Mereka tidak hanya menyelesaikan proyek, tetapi juga memberikan konsultasi yang berharga untuk pengembangan bisnis kami.",
    icon: "user",
  },
  {
    author: "Ahmad Rahman",
    role: "Founder",
    company: "Digital Inovasi",
    date: "3 minggu lalu",
    content:
      "Partnership dengan Jaringan Amanah adalah keputusan terbaik kami. Hasilnya melebihi ekspektasi dan timeline yang dijanjikan selalu tepat waktu.",
    icon: "briefcase",
  },
  {
    author: "Dewi Lestari",
    role: "Operations Director",
    company: "Karya Mandiri",
    date: "1 minggu lalu",
    content:
      "Tim yang sangat kompeten dan profesional. Mereka mampu mentransformasi ide kami menjadi solusi nyata yang membawa dampak positif bagi bisnis kami.",
    icon: "users",
  },
];

const getIcon = (iconType: string) => {
  const iconClass = "w-6 h-6";
  switch (iconType) {
    case "building":
      return <Building2 className={iconClass} />;
    case "briefcase":
      return <Briefcase className={iconClass} />;
    case "users":
      return <Users className={iconClass} />;
    default:
      return <User className={iconClass} />;
  }
};

const TestimonialsAmanah = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-amanah-light/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            <span className="bg-gradient-to-r from-amanah-purple to-amanah-pink bg-clip-text text-transparent">
              Apa Kata Mereka
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kepercayaan klien adalah prioritas kami. Lihat bagaimana kami membantu
            mereka mencapai kesuksesan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`parallax-card stagger-${index + 1} bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amanah-purple/20 to-amanah-pink/20 flex items-center justify-center text-amanah-purple">
                    {getIcon(testimonial.icon)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Company & Date */}
              <div className="mb-3">
                <div className="text-xs font-medium text-amanah-purple">
                  {testimonial.company}
                </div>
                <div className="text-xs text-muted-foreground">{testimonial.date}</div>
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {testimonial.content}
              </p>

              {/* Read More Link */}
              <a
                href="#"
                className="text-sm font-medium bg-gradient-to-r from-amanah-purple to-amanah-pink bg-clip-text text-transparent hover:opacity-80 transition-opacity inline-flex items-center gap-1 group"
              >
                Selengkapnya
                <ArrowRight className="w-4 h-4 text-amanah-pink group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAmanah;
