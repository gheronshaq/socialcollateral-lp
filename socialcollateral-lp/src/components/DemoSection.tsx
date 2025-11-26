import { useState, useEffect, useRef } from "react";
import { BarChart3, Zap, TrendingUp, ArrowRight, Maximize2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const tabs = [
    { id: 0, label: "Dashboard", icon: BarChart3 },
    { id: 1, label: "Fitur Utama", icon: Zap },
    { id: 2, label: "Analytics", icon: TrendingUp },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleReset = () => {
    setActiveTab(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-b from-[hsl(var(--amanah-light))] to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-12 md:mb-16 transition-all duration-800",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--amanah-purple))] to-[hsl(var(--amanah-pink))] bg-clip-text text-transparent">
            Coba Demo Interaktif
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Rasakan pengalaman langsung fitur-fitur kami
          </p>
        </div>

        {/* Demo Mockup */}
        <div
          className={cn(
            "transition-all duration-1000 delay-200",
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          )}
        >
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(76,27,109,0.1)] overflow-hidden border border-border/50">
            {/* Window Chrome Header */}
            <div className="h-12 bg-gradient-to-r from-muted/50 to-muted/30 border-b border-border/50 flex items-center px-4">
              {/* macOS Traffic Lights */}
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              {/* Window Title */}
              <div className="flex-1 text-center">
                <span className="text-sm font-semibold bg-gradient-to-r from-[hsl(var(--amanah-purple))] to-[hsl(var(--amanah-pink))] bg-clip-text text-transparent">
                  jaringan amanah
                </span>
              </div>
              {/* Window Controls */}
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="p-1.5 hover:bg-secondary rounded transition-colors"
                  aria-label="Reset Demo"
                >
                  <RotateCcw className="w-4 h-4 text-muted-foreground" />
                </button>
                <button
                  className="p-1.5 hover:bg-secondary rounded transition-colors"
                  aria-label="Maximize"
                >
                  <Maximize2 className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="h-14 bg-muted/30 border-b border-border/50 flex items-center px-6 gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105",
                      activeTab === tab.id
                        ? "text-foreground bg-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-semibold">{tab.label}</span>
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--amanah-purple))] to-[hsl(var(--amanah-pink))]"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Demo Content Area */}
            <div className="min-h-[500px] md:min-h-[600px] p-8 md:p-12 bg-white relative overflow-hidden">
              {/* Tab Content */}
              <div className="relative">
                {activeTab === 0 && <DashboardContent key="dashboard" />}
                {activeTab === 1 && <FeaturesContent key="features" />}
                {activeTab === 2 && <AnalyticsContent key="analytics" />}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={cn(
            "text-center mt-12 transition-all duration-1000 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[hsl(var(--amanah-purple))] to-[hsl(var(--amanah-pink))] text-white font-bold text-lg rounded-xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] hover:scale-105 transition-all duration-300">
            Mulai Gratis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Dashboard Tab Content
const DashboardContent = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Proyek", value: "150+", change: "+12%" },
          { label: "Klien Aktif", value: "89", change: "+8%" },
          { label: "Rating", value: "4.9", change: "+0.2" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-muted/30 to-muted/10 p-6 rounded-xl border border-border/50 hover:border-[hsl(var(--amanah-purple))]/30 transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[hsl(var(--amanah-purple))] to-[hsl(var(--amanah-pink))] bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-green-600 font-semibold mt-1">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
          <h3 className="font-bold text-lg mb-4">Aktivitas Terkini</h3>
          <div className="space-y-3">
            {["Proyek baru dimulai", "Klien memberikan review", "Update sistem selesai"].map(
              (activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-sm transition-shadow"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(var(--amanah-purple))] to-[hsl(var(--amanah-pink))]"></div>
                  <span className="text-sm">{activity}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
          <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {["Buat Proyek", "Lihat Laporan", "Tambah Tim", "Kontak Support"].map((action) => (
              <button
                key={action}
                className="p-3 bg-white rounded-lg text-sm font-semibold hover:bg-gradient-to-r hover:from-[hsl(var(--amanah-purple))] hover:to-[hsl(var(--amanah-pink))] hover:text-white transition-all duration-300"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Features Tab Content
const FeaturesContent = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Konsultasi Profesional",
            desc: "Tim expert siap membantu menganalisa dan memberikan solusi terbaik",
            icon: "💼",
          },
          {
            title: "Pengembangan Cepat",
            desc: "Proses development yang efisien dengan metodologi agile",
            icon: "⚡",
          },
          {
            title: "Support 24/7",
            desc: "Tim support selalu siap membantu kapanpun Anda membutuhkan",
            icon: "🛟",
          },
          {
            title: "Teknologi Modern",
            desc: "Menggunakan stack teknologi terkini dan best practices",
            icon: "🚀",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="group p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl border border-border/50 hover:border-[hsl(var(--amanah-purple))]/50 hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-[hsl(var(--amanah-purple))] to-[hsl(var(--amanah-pink))] bg-clip-text text-transparent">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-[hsl(var(--amanah-purple))]/10 to-[hsl(var(--amanah-pink))]/10 rounded-xl border border-[hsl(var(--amanah-purple))]/20">
        <h3 className="font-bold text-2xl mb-3 bg-gradient-to-r from-[hsl(var(--amanah-purple))] to-[hsl(var(--amanah-pink))] bg-clip-text text-transparent">
          Siap untuk memulai?
        </h3>
        <p className="text-muted-foreground mb-4">
          Bergabunglah dengan 300+ klien yang telah mempercayai kami
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-[hsl(var(--amanah-purple))] to-[hsl(var(--amanah-pink))] text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300">
          Konsultasi Gratis
        </button>
      </div>
    </div>
  );
};

// Analytics Tab Content
const AnalyticsContent = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
          <h3 className="font-bold text-lg mb-4">Performa Bulanan</h3>
          <div className="space-y-4">
            {[
              { label: "Proyek Selesai", percentage: 92, color: "from-green-500 to-emerald-600" },
              { label: "Kepuasan Klien", percentage: 98, color: "from-blue-500 to-cyan-600" },
              {
                label: "Response Time",
                percentage: 85,
                color: "from-[hsl(var(--amanah-purple))] to-[hsl(var(--amanah-pink))]",
              },
            ].map((metric, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">{metric.label}</span>
                  <span className="text-muted-foreground">{metric.percentage}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${metric.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
          <h3 className="font-bold text-lg mb-4">Statistik Growth</h3>
          <div className="space-y-4">
            {[
              { month: "Jan", value: 65 },
              { month: "Feb", value: 78 },
              { month: "Mar", value: 85 },
              { month: "Apr", value: 92 },
              { month: "Mei", value: 88 },
              { month: "Jun", value: 95 },
            ].map((data, idx) => (
              <div key={idx} className="flex items-end gap-2">
                <span className="text-xs text-muted-foreground w-8">{data.month}</span>
                <div className="flex-1 h-8 bg-gradient-to-r from-[hsl(var(--amanah-purple))] to-[hsl(var(--amanah-pink))] rounded transition-all duration-700 hover:scale-105"
                  style={{ width: `${data.value}%`, animationDelay: `${idx * 100}ms` }}
                ></div>
                <span className="text-xs font-semibold w-8">{data.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[hsl(var(--amanah-purple))]/10 to-[hsl(var(--amanah-pink))]/10 p-8 rounded-xl border border-[hsl(var(--amanah-purple))]/20 text-center">
        <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--amanah-purple))]" />
        <h3 className="font-bold text-xl mb-2">Pertumbuhan Konsisten</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Data menunjukkan peningkatan performa dan kepuasan klien secara berkelanjutan
        </p>
      </div>
    </div>
  );
};

export default DemoSection;
