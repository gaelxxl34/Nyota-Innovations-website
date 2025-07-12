'use client';

export default function ServiceDetail() {
  const services = [
    {
      icon: 'ri-brain-line',
      title: 'AI-Powered Solutions',
      description: 'Transform your business with intelligent automation and machine learning capabilities that adapt and evolve with your needs.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Intelligent Automation',
        'Data Mining & Analysis'
      ],
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20AI%20brain%20with%20neural%20networks%20and%20glowing%20connections%2C%20holographic%20data%20streams%20flowing%20around%20a%20central%20processing%20unit%2C%20deep%20blue%20and%20cyan%20lighting%20effects%2C%20high-tech%20laboratory%20environment%20with%20floating%20digital%20interfaces%20and%20particle%20effects%2C%20ultra-modern%20sci-fi%20aesthetic&width=600&height=400&seq=ai-service&orientation=landscape'
    },
    {
      icon: 'ri-virtual-reality-line',
      title: 'Augmented Reality, VR & MR',
      description: 'Create immersive experiences that blend digital content with the real world, revolutionizing how users interact with your products.',
      features: [
        'AR Mobile Applications',
        'Immersive 3D Environments',
        'Gesture-Based Interactions',
        'Spatial Mapping',
        'Holographic Interfaces',
        'Real-time Rendering',
        'Cross-platform XR Development'
      ],
      image: 'https://readdy.ai/api/search-image?query=Person%20wearing%20AR%20glasses%20with%20holographic%20digital%20overlays%20in%20the%20environment%2C%20floating%203D%20models%20and%20interface%20elements%2C%20purple%20and%20blue%20neon%20lighting%2C%20modern%20technology%20workspace%20with%20transparent%20displays%20and%20interactive%20projections%2C%20sleek%20futuristic%20design&width=600&height=400&seq=ar-service&orientation=landscape'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Digital Transformation',
      description: 'Modernize your entire business infrastructure with cloud-native solutions, automation, and cutting-edge technology stacks.',
      features: [
        'Cloud Migration',
        'Process Automation',
        'API Integration',
        'Legacy System Modernization',
        'DevOps Implementation',
        'Security Enhancement'
      ],
      image: 'https://readdy.ai/api/search-image?query=Digital%20transformation%20concept%20with%20interconnected%20network%20nodes%2C%20glowing%20data%20pathways%20connecting%20various%20business%20systems%2C%20modern%20server%20infrastructure%20with%20blue%20and%20purple%20accent%20lighting%2C%20cloud%20computing%20visualization%20with%20floating%20geometric%20shapes%20and%20energy%20flows&width=600&height=400&seq=digital-transform&orientation=landscape'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge technology solutions that transform businesses and create extraordinary digital experiences.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="relative">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl w-full h-96 object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent rounded-2xl"></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${index === 0 ? 'from-blue-500 to-cyan-500' : index === 1 ? 'from-purple-500 to-pink-500' : 'from-indigo-500 to-blue-500'} flex items-center justify-center mb-6`}>
{service.title === 'Augmented Reality, VR & MR' ? (
  <img
    src="/icons/augmented-reality-virtual-reality-svgrepo-com.svg"
    alt="Augmented Reality Symbol"
    className="w-8 h-8"
  />
) : (
  <i className={`${service.icon} text-2xl text-white`}></i>
)}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-blue-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative solutions can drive your digital transformation journey.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}