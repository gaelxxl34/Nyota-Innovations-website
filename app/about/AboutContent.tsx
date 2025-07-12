'use client';

export default function AboutContent() {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Global Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Expert Team Members' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      specialty: 'AI & Machine Learning',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20Asian%20woman%20tech%20executive%20in%20modern%20office%20setting%2C%20wearing%20business%20attire%2C%20with%20subtle%20futuristic%20lighting%20and%20clean%20background%2C%20professional%20corporate%20photography%20style%20with%20blue%20accent%20lighting&width=300&height=300&seq=team-sarah&orientation=squarish'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'AR Development Lead',
      specialty: 'Augmented Reality',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Hispanic%20male%20tech%20developer%20with%20friendly%20expression%2C%20modern%20business%20casual%20attire%2C%20clean%20studio%20background%20with%20subtle%20purple%20accent%20lighting%2C%20corporate%20photography%20style%20with%20contemporary%20feel&width=300&height=300&seq=team-marcus&orientation=squarish'
    },
    {
      name: 'Emily Thompson',
      role: 'Digital Strategy Director',
      specialty: 'Business Transformation',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20Caucasian%20woman%20business%20leader%20with%20warm%20smile%2C%20wearing%20modern%20professional%20attire%2C%20clean%20studio%20background%20with%20soft%20blue%20lighting%20accents%2C%20executive%20corporate%20photography%20style&width=300&height=300&seq=team-emily&orientation=squarish'
    },
    {
      name: 'David Kim',
      role: 'Solutions Architect',
      specialty: 'Cloud & Infrastructure',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Asian%20male%20software%20architect%20with%20confident%20expression%2C%20business%20casual%20attire%2C%20modern%20office%20background%20with%20subtle%20tech%20elements%20and%20cyan%20accent%20lighting%2C%20contemporary%20corporate%20photography&width=300&height=300&seq=team-david&orientation=squarish'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Nyota</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We are pioneers in the digital frontier, crafting tomorrow's technology solutions today.
            </p>
          </div>

          <div className="mb-20">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Futuristic%20technology%20workspace%20with%20multiple%20holographic%20displays%20showing%20AI%20data%20visualizations%2C%20team%20of%20diverse%20professionals%20collaborating%20around%20interactive%20digital%20interfaces%2C%20modern%20glass%20office%20with%20blue%20and%20purple%20ambient%20lighting%2C%20sleek%20furniture%20and%20advanced%20computing%20equipment%2C%20ultra-wide%20cinematic%20composition&width=1200&height=600&seq=about-hero&orientation=landscape"
                alt="Our Vision"
                className="w-full h-96 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-blue-100 text-lg max-w-2xl">
                  To bridge the gap between imagination and reality through cutting-edge technology that empowers businesses to achieve the impossible.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Story</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">The Journey Begins</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Founded in 2019 by a team of visionary technologists, Nyota Innovations emerged from a simple belief: 
                  that advanced technology should be accessible to businesses of all sizes. We started with a mission to 
                  democratize AI, AR, and digital transformation solutions.
                </p>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Our name "Nyota" means "star" in Swahili, reflecting our commitment to helping businesses shine brighter 
                  in the digital universe. From our humble beginnings in a small tech incubator, we've grown into a 
                  globally recognized innovation partner.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  Today, we continue to push the boundaries of what's possible, creating solutions that not only meet 
                  current needs but anticipate future challenges in our rapidly evolving digital landscape.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20tech%20startup%20office%20with%20glass%20walls%20and%20contemporary%20furniture%2C%20team%20of%20diverse%20professionals%20brainstorming%20around%20whiteboards%20filled%20with%20diagrams%20and%20innovation%20concepts%2C%20bright%20natural%20lighting%20mixed%20with%20blue%20accent%20lights%2C%20laptops%20and%20high-tech%20equipment%20visible%2C%20collaborative%20workspace%20atmosphere&width=600&height=500&seq=company-story&orientation=landscape"
                  alt="Our Story"
                  className="rounded-2xl w-full h-96 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Team</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                    <div className="relative mb-6">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-48 object-cover object-top rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent rounded-xl"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
                    <p className="text-blue-100 text-sm">{member.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build the Future Together?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join us on this incredible journey as we continue to shape the future of technology and innovation.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}