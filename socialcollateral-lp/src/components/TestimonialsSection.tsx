import { Mail, Twitter } from "lucide-react";

interface Testimonial {
  author: string;
  platform: "reddit" | "twitter" | "email";
  date: string;
  content: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    author: "u/localllama",
    platform: "reddit",
    date: "3 days ago",
    content: "The integration with our existing tools is seamless. Plus, the transcription accuracy is impressive!",
  },
  {
    author: "@tom_doerr",
    platform: "twitter",
    date: "5 days ago",
    content: "Meetily is an AI-based open-source meeting minutes generator that can run entirely on a personal computer. Address:",
  },
  {
    author: "aisharenet",
    platform: "email",
    date: "Feb 13, 2025",
    content: "AI assistant for generating meeting minutes, transcribing and generating meeting summaries in real-time",
  },
  {
    author: "u/selfhosted",
    platform: "reddit",
    date: "Feb 12, 2025",
    content: "AI Meeting note taker and meeting minutes generator and Transcribing AI - Building a Fully Open-Source Local LLM-Based AI for Recording and transcribing meetings.",
  },
];

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "reddit":
      return (
        <div className="w-8 h-8 rounded-full bg-rating/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-rating" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
          </svg>
        </div>
      );
    case "twitter":
      return (
        <div className="w-8 h-8 rounded-full bg-download/10 flex items-center justify-center">
          <Twitter className="w-5 h-5 text-download" />
        </div>
      );
    case "email":
      return (
        <div className="w-8 h-8 rounded-full bg-fork/10 flex items-center justify-center">
          <Mail className="w-5 h-5 text-fork" />
        </div>
      );
    default:
      return null;
  }
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 animate-scale-in border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getPlatformIcon(testimonial.platform)}
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {testimonial.content}
              </p>

              {/* Read More Link */}
              <a
                href="#"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
              >
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
