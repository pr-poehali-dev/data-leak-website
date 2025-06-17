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
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-gradient-to-r from-silver to-gray-300 text-onyx px-8 py-3 rounded-lg font-semibold hover:from-gray-300 hover:to-white transition-all duration-300 transform hover:scale-105 font-open-sans">
            Последние утечки
          </button>
          <a
            href="https://t.me/your_bot_username"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-silver to-gray-300 text-onyx px-8 py-3 rounded-lg font-semibold hover:from-gray-300 hover:to-white transition-all duration-300 transform hover:scale-105 font-open-sans flex items-center space-x-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.377 2.617-1.273 3.071-2.616 1.875-.747-.666-1.252-1.108-2.684-1.548-.19-.059-.29-.223-.29-.428 0-.286.172-.542.415-.542.112 0 .224.037.224.037s3.017.012 4.166-.037c.669-.028 1.137-.177 1.482-.177.669 0 1.331.037 1.331.037s.224 0 .224-.037c0-.177-.112-.428-.298-.542l-1.927-1.214c-.224-.149-.671-.037-.671-.037s-1.667.037-2.467.037c-.224 0-.448-.037-.448-.037s-.112-.037-.112-.149c0-.037.037-.112.112-.149l2.019-1.214c.298-.177.447-.428.447-.766 0-.112-.037-.224-.112-.298-.224-.224-.56-.298-.896-.298-.224 0-.448.037-.672.112l-1.815.56c-.037.012-.075.012-.112.012-.224 0-.447-.149-.447-.373 0-.149.075-.298.224-.373l3.278-1.548c.298-.149.597-.224.896-.224.896 0 1.63.747 1.63 1.673 0 .224-.037.448-.112.672z" />
            </svg>
            <span>Проверить свою кибергигиену</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
