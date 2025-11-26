import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    title: "Konsultasi Awal",
    description: "Kami mendengarkan kebutuhan dan visi Anda",
  },
  {
    title: "Perencanaan Strategis",
    description: "Merancang solusi terbaik untuk bisnis Anda",
  },
  {
    title: "Implementasi",
    description: "Eksekusi dengan standar kualitas tertinggi",
  },
  {
    title: "Dukungan Berkelanjutan",
    description: "Maintenance dan support jangka panjang",
  },
];

const TimelineAmanah = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const [lineLength, setLineLength] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);
  const lastScrollY = useRef(0);
  const animationTimeouts = useRef<NodeJS.Timeout[]>([]);

  // Clear all pending timeouts
  const clearAllTimeouts = () => {
    animationTimeouts.current.forEach(timeout => clearTimeout(timeout));
    animationTimeouts.current = [];
  };

  // Animate elements in (scroll down)
  const animateIn = () => {
    clearAllTimeouts();
    setIsVisible(true);

    // Animate timeline line
    if (lineRef.current) {
      lineRef.current.style.strokeDashoffset = "0";
    }

    // Animate nodes and content with stagger (top to bottom)
    nodesRef.current.forEach((node, index) => {
      if (node) {
        const timeout = setTimeout(() => {
          node.classList.add("visible");
          node.classList.remove("hidden-reverse");
        }, 1500 + index * 300);
        animationTimeouts.current.push(timeout);
      }
    });

    contentRef.current.forEach((content, index) => {
      if (content) {
        const timeout = setTimeout(() => {
          content.classList.add("visible");
          content.classList.remove("hidden-reverse");
        }, 1900 + index * 300);
        animationTimeouts.current.push(timeout);
      }
    });
  };

  // Animate elements out (scroll up / exit viewport)
  const animateOut = () => {
    clearAllTimeouts();
    setIsVisible(false);

    const totalItems = timelineData.length;

    // Animate content and nodes in REVERSE order (bottom to top)
    for (let i = totalItems - 1; i >= 0; i--) {
      const reverseIndex = totalItems - 1 - i;

      // Content fades out first
      if (contentRef.current[i]) {
        const timeout = setTimeout(() => {
          contentRef.current[i]?.classList.remove("visible");
          contentRef.current[i]?.classList.add("hidden-reverse");
        }, reverseIndex * 200);
        animationTimeouts.current.push(timeout);
      }

      // Then node disappears
      if (nodesRef.current[i]) {
        const timeout = setTimeout(() => {
          nodesRef.current[i]?.classList.remove("visible");
          nodesRef.current[i]?.classList.add("hidden-reverse");
        }, reverseIndex * 200 + 150);
        animationTimeouts.current.push(timeout);
      }
    }

    // Timeline line shrinks last (from bottom to top)
    if (lineRef.current) {
      const timeout = setTimeout(() => {
        lineRef.current!.style.strokeDashoffset = `${lineLength}`;
      }, (totalItems - 1) * 200 + 300);
      animationTimeouts.current.push(timeout);
    }
  };

  useEffect(() => {
    // Get SVG line length for drawing animation
    if (lineRef.current) {
      const length = lineRef.current.getTotalLength();
      setLineLength(length);
      lineRef.current.style.strokeDasharray = `${length}`;
      lineRef.current.style.strokeDashoffset = `${length}`;
    }

    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Entry from top (scrolling down) or re-entering
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            animateIn();
          }
          // Exiting viewport (scrolling up or down past section)
          else if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
            animateOut();
          }
        });
      },
      {
        threshold: [0, 0.2, 0.5, 0.8, 1],
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      clearAllTimeouts();
    };
  }, [lineLength]);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-amanah-light/30 overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            <span className="bg-gradient-to-r from-amanah-purple to-amanah-pink bg-clip-text text-transparent">
              Proses Kerja Kami
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Langkah demi langkah menuju kesuksesan bisnis Anda
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* SVG Timeline Line */}
          <svg
            className="absolute left-1/2 top-0 h-full -translate-x-1/2 hidden md:block"
            width="4"
            height="100%"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4C1B6D" />
                <stop offset="50%" stopColor="#4A1B6D" />
                <stop offset="100%" stopColor="#CD2C58" />
              </linearGradient>
            </defs>
            <path
              ref={lineRef}
              d={`M 2 0 L 2 ${timelineData.length * 250}`}
              stroke="url(#timelineGradient)"
              strokeWidth="3"
              fill="none"
              style={{
                transition: "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </svg>

          {/* Timeline Items */}
          <div className="relative space-y-24 md:space-y-32">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 1;
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Content - Left Side */}
                  {isLeft && (
                    <div
                      ref={(el) => (contentRef.current[index] = el)}
                      className={`timeline-content-left w-full md:w-5/12 md:pr-16 mb-8 md:mb-0 text-center md:text-right ${
                        isLeft ? "md:order-1" : "md:order-3"
                      }`}
                    >
                      <h3
                        className="text-2xl font-bold mb-3 text-foreground"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )}

                  {/* Node Circle */}
                  <div
                    ref={(el) => (nodesRef.current[index] = el)}
                    className="timeline-node relative z-10 md:order-2 mb-8 md:mb-0"
                    style={{ minWidth: "20px" }}
                  >
                    <div className="w-5 h-5 rounded-full bg-amanah-purple shadow-[0_0_20px_rgba(76,27,109,0.5)] border-4 border-white" />
                  </div>

                  {/* Content - Right Side */}
                  {!isLeft && (
                    <div
                      ref={(el) => (contentRef.current[index] = el)}
                      className={`timeline-content-right w-full md:w-5/12 md:pl-16 text-center md:text-left ${
                        isLeft ? "md:order-1" : "md:order-3"
                      }`}
                    >
                      <h3
                        className="text-2xl font-bold mb-3 text-foreground"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )}

                  {/* Spacer for centering */}
                  {isLeft ? (
                    <div className="hidden md:block w-5/12 order-3"></div>
                  ) : (
                    <div className="hidden md:block w-5/12 order-1"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineAmanah;
