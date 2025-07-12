'use client';

export default function ServicesPreview() {
  const services = [
    {
      icon: 'ri-brain-line',
      title: 'AI-Powered Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-virtual-reality-line',
      title: 'Augmented Reality',
      description: 'Create immersive AR experiences that bridge the physical and digital worlds, transforming how users interact with your products.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Digital Transformation',
      description: 'Modernize your business operations with cutting-edge technology solutions that scale with your growth and ambitions.',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <>
      <section className="relative py-20 px-6 overflow-hidden bg-gray-700">
        {/* Video background removed */}
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We specialize in transforming businesses through advanced technology solutions that push the boundaries of what's possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative transition-transform duration-300 hover:scale-105 active:scale-100 touch-manipulation cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 group-active:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                     style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
                
                <div className="relative bg-gray-300 border border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-lg active:border-blue-500 active:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                    {service.title === 'Augmented Reality' ? (
                      <img
                        src="/icons/augmented-reality-virtual-reality-svgrepo-com.svg"
                        alt="Augmented Reality Symbol"
                        className="w-8 h-8"
                      />
                    ) : (
                      <i className={`${service.icon} text-2xl text-white`}></i>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title === 'Augmented Reality'
                      ? 'Augmented Reality, VR & MR'
                      : service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.title === 'Augmented Reality' ? (
                      <>
                        Augmented Reality enhances the real world with interactive digital content, Virtual Reality immerses users in fully digital environments, and Mixed Reality blends physical and digital spaces for real-time interaction.
                      </>
                    ) : (
                      service.description
                    )}
                  </p>
                  
                  <div className="mt-6">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap">
                      Learn More
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gray-300">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every line of code we write is a step towards a more innovative future where technology meets creativity and transformation. here are some of our recent projects.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 */}
            <div className="group relative transition-transform duration-300 hover:scale-105 active:scale-100 touch-manipulation cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 group-active:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>
              <div className="relative bg-gray-700 border border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-lg active:border-blue-500 active:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <i className="ri-brain-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Who is who African students</h3>
                <p className="text-gray-200 leading-relaxed">
                  Powered by blockchain this is a secured credential verification for African students and institutions. Eliminates document fraud with decentralized, immutable records. Enables instant validation for employers and universities. Scalable across education systems and borders.
                </p>
                <div className="mt-6">
                  <button className="text-blue-300 hover:text-blue-400 font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap">
                    Learn More
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative transition-transform duration-300 hover:scale-105 active:scale-100 touch-manipulation cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 group-active:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>
              <div className="relative bg-gray-700 border border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-lg active:border-blue-500 active:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <img
                    src="/icons/language-translation-svgrepo-com.svg"
                    alt="Translation Symbol"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Nyota Translations Centre</h3>
                <p className="text-gray-200 leading-relaxed">
                  AI powered French to English document translation with human reviewed precision. Specializes in legal, academic, and business materials. Delivers context aware results with industry specific terminology. Integrates seamlessly with enterprise workflows.
                </p>
                <div className="mt-6">
                  <button className="text-blue-300 hover:text-blue-400 font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap">
                    Learn More
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative transition-transform duration-300 hover:scale-105 active:scale-100 touch-manipulation cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 group-active:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>
              <div className="relative bg-gray-700 border border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-lg active:border-blue-500 active:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-6">
                  <i className="ri-brain-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Nyota AI Fusion</h3>
                <p className="text-gray-200 leading-relaxed">AI driven lead generation and marketing automation platform. Identifies high intent prospects using predictive analytics. Executes personalized multi-channel outreach campaigns. Delivers real-time ROI tracking for data-driven decisions.</p>
                <div className="mt-6">
                  <button className="text-blue-300 hover:text-blue-400 font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap">
                    Learn More
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}