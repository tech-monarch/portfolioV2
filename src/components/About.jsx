import { useState } from 'react';

const About = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const images = [
    { src: '/about/award.jpg', alt: 'Award Achievement', description: 'Recognition for excellence' },
    { src: '/about/do hard things fro the soft life.jpg', alt: 'Motivation', description: 'Embracing challenges for growth' },
    { src: '/about/gesture controlled robot arm.jpg', alt: 'Innovation', description: 'Creating cutting-edge solutions' },
    // { src: '/about/pointing gun at code.jpg', alt: 'Problem Solving', description: 'Tackling complex challenges' }
  ];

  return (
    <section className="py-16 min-h-screen bg-base-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-float"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              background: `radial-gradient(circle at center, ${['rgba(147, 51, 234, 0.15)', 'rgba(59, 130, 246, 0.15)', 'rgba(16, 185, 129, 0.15)'][i % 3]} 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${Math.random() * 10 + 20}s`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-5xl font-extrabold text-primary-content bg-clip-text bg-gradient-to-r from-primary to-secondary">
              I am Tech Monarch🤴
            </h2>
            <p className="text-xl font-medium text-gray-200 leading-relaxed">
              I'm <span className="font-bold text-primary-content">Omijeh David Odianonsen</span>, an 18-year-old developer focused on pushing the boundaries of technology. My work spans from developing <span className="font-bold text-primary-content">AI systems</span> and <span className="font-bold text-primary-content">Nigerian language chatbots</span> to creating <span className="font-bold text-primary-content">immersive 3D websites</span> and <span className="font-bold text-primary-content">automated trading solutions</span>.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              I'm passionate about exploring new technologies and creating solutions that bridge the gap between imagination and implementation.
            </p>
          </div>
          
          <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
              {images.map((item, index) => (
                <div 
                  key={index}
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500 group 
                    ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : index === 3 ? 'sm:col-span-2' : ''}
                    hover:z-10`}
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                  style={{
                    transform: `translateY(${hoveredImage === index ? '-12px' : '0'}) scale(${hoveredImage === index ? '1.02' : '1'})`,
                    boxShadow: hoveredImage === index ? '0 25px 35px -5px rgba(0, 0, 0, 0.4)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{item.alt}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;