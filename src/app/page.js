import HeroContent from "@/components/HeroContent";
import HeroStats from "@/components/HeroStats";


export default function Home() {
  return (
 <section className="relative overflow-hidden bg-black text-white">
  {/* Top Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_35%)]"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
    
    {/* Hero Content */}
    <HeroContent />

    {/* Globe Background Section */}
    <div className="relative mt-20">
      
     

      {/* Stats Cards */}
      <div className="relative z-10 -mt-20 md:-mt-28">
        <HeroStats />
      </div>
    </div>
  </div>
</section>
  );
}
