import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const HeroAmanah = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amanah-light via-white to-amanah-pink/5 -z-10" />
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--amanah-purple)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amanah-purple/10 to-amanah-pink/10 border border-amanah-purple/20">
            <Sparkles className="w-4 h-4 text-amanah-pink" />
            <span className="text-sm font-semibold bg-gradient-to-r from-amanah-purple to-amanah-pink bg-clip-text text-transparent">
              Solusi Terpercaya untuk Bisnis Anda
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12 animate-fade-in">
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            <span className="bg-gradient-to-r from-amanah-purple via-amanah-purple to-amanah-pink bg-clip-text text-transparent">
              Membangun Kepercayaan
            </span>
            <br />
            <span className="text-foreground">Melalui Layanan Profesional</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jaringan Amanah hadir sebagai mitra terpercaya untuk mengembangkan
            bisnis Anda dengan solusi teknologi modern dan layanan konsultasi
            profesional.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16 animate-scale-in">
          <Button
            size="lg"
            className="bg-gradient-to-r from-amanah-purple to-amanah-pink hover:shadow-xl hover:scale-105 transition-all duration-300 text-base px-8 py-6 min-h-[44px]"
          >
            Mulai Sekarang
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 border-2 border-amanah-purple hover:bg-amanah-purple/5 hover:border-amanah-pink transition-all duration-300 min-h-[44px]"
          >
            Pelajari Lebih Lanjut
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          {[
            { value: "500+", label: "Proyek Selesai" },
            { value: "300+", label: "Klien Puas" },
            { value: "10+", label: "Tahun Pengalaman" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-4xl font-bold bg-gradient-to-r from-amanah-purple to-amanah-pink bg-clip-text text-transparent mb-2"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroAmanah;
