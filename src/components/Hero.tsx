import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-onyx/70 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-silver mb-6 font-montserrat">
          BigLeakAlert
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-open-sans font-light">
          отслеживай утечки, храни контроль
        </p>
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-md border border-red-500/30 rounded-xl p-6 mb-8">
          <p className="text-lg text-gray-200 font-open-sans leading-relaxed">
            Каждый день миллионы персональных данных россиян попадают в руки
            злоумышленников из-за халатности компаний. Мы следим за утечками и
            информируем о реальных угрозах.
          </p>
        </div>
        <button className="bg-gradient-to-r from-silver to-gray-300 text-onyx px-8 py-3 rounded-lg font-semibold hover:from-gray-300 hover:to-white transition-all duration-300 transform hover:scale-105 font-open-sans">
          Последние утечки
        </button>
      </div>
    </section>
  );
};

export default Hero;
