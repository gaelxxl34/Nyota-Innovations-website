'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background replaces image background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/216630_small.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-60 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-left max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
                Digital Innovation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We digitize businesses, build AI-powered solutions, and create immersive AR experiences that transform how the world works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                Explore Our Solutions
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-300 animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
      </section>
    );
  }