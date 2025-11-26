import { Star, Download, GitFork } from "lucide-react";
import Badge from "./Badge";

const StatsSection = () => {
  const stats = [
    {
      icon: Star,
      value: "8.4K",
      label: "Stars",
      color: "text-star",
      bgColor: "bg-star/10",
    },
    {
      icon: Download,
      value: "30.0K",
      label: "Downloads",
      color: "text-download",
      bgColor: "bg-download/10",
    },
    {
      icon: GitFork,
      value: "676",
      label: "Forks",
      color: "text-fork",
      bgColor: "bg-fork/10",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        {/* Banner */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-base sm:text-lg text-muted-foreground font-medium">
            #1 Trending Repository on GitHub - Loved by the open source community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trending Badge */}
        <div className="flex justify-center animate-fade-in">
          <Badge variant="outline" className="gap-3 px-6 py-3">
            <svg className="w-5 h-5 text-star" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Github Trending</span>
              <span className="text-sm font-bold text-foreground">#1 Repository Of The Day</span>
            </div>
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
