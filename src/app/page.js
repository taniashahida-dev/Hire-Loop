import HeroContent from "@/components/HeroContent";
import HeroStats from "@/components/HeroStats";
import Image from "next/image";

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
      
      {/* Background Image */}
      <div
        className="relative h-87.5 sm:h-112.5 md:h-162.5 lg:h-187.5 
        bg-no-repeat bg-bottom bg-contain"
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>

        {/* Purple Glow */}
        <div className="absolute inset-0 bg-violet-600/10 blur-3xl"></div>

        {/* Text Over Image */}
        <div className="absolute left-1/2 top-[35%] md:top-[40%] -translate-x-1/2 text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug text-white/90">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </h2>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="relative z-10 -mt-20 md:-mt-28">
        <HeroStats />
      </div>
    </div>
  </div>
</section>
  );
}
