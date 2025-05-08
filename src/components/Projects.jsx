import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'LuminaAI',
      description: 'An AI chatbot designed to be empathetic and give human-like responses.',
      image: '/projects/Lumina.png',
      tags: ['React', 'Node.js', 'IoT'],
      link: '#',
      featured: true
    },
    {
      title: 'Discover Niger',
      description: 'An interactive platform showcasing the beauty and culture of Niger through immersive experiences.',
      image: '/projects/discover-niger.png',
      tags: ['React', 'Tailwind', 'JavaScript'],
      link: '#'
    },
    {
      title: 'PXXL',
      description: 'Pxxl Space, a free webhosting provider.',
      image: '/projects/pxxl.png',
      tags: ['React', 'Canvas API', 'WebSocket'],
      link: '#',
      featured: true
    },
    {
      title: 'Robot Car',
      description: 'Autonomous robot car project with advanced navigation and obstacle avoidance capabilities.',
      image: '/projects/robot-car.jpg',
      tags: ['Python', 'ROS', 'Computer Vision'],
      link: '#'
    }
  ];

  return (
    <section className="py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary-content mb-12 text-center">
          Featured Projects
        </h2>
        <div className="flex flex-col gap-24 transition-all duration-700 ease-in-out">
          {projects.slice(0, showAll ? projects.length : 2).map((project, index) => (
            <div 
              key={index}
              className={`group relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center transition-all duration-700 ease-out`}
              style={{
                opacity: showAll || index < 2 ? (hoveredProject === index ? 1 : 0.9) : 0,
                transform: `translateY(${showAll || index < 2 ? '0' : '4rem'})`,
                transitionDelay: `${index * 200}ms`,
                pointerEvents: showAll || index < 2 ? 'auto' : 'none'
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="w-full md:w-7/12 overflow-hidden rounded-xl">
                <div 
                  className="aspect-video w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                opacity: hoveredProject === index ? 1 : 0.9,
                transform: `translateY(${hoveredProject === index ? '0' : '0.5rem'})`, backgroundImage: `url(${project.image})` }}
                />
              </div>
              <div className="w-full md:w-5/12 p-6 space-y-4">
                <h3 className="text-3xl font-bold text-primary-content">{project.title}</h3>
                <p className="text-gray-300 text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm text-primary-content"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-primary-content hover:text-primary transition-colors duration-300 mt-4"
                >
                  View Project
                  <svg 
                    className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        {projects.length > 2 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-lg text-primary-content hover:bg-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              {showAll ? 'Show Less' : 'See More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;