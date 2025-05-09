import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const projectsMetadata = {
  title: 'Projects | Omijeh David Odianonsen - Software Developer',
  description: 'Explore my portfolio of innovative projects including AI chatbots, FOREX academy websites, and interactive educational platforms.',
  keywords: 'LuminaAI, Otal, CSC 200 Project, Marzive Oracle, Discover Niger, Restaurant App, React, Node.js, AI, Full Stack',
  canonical: 'https://omijeh-david.vercel.app/projects'
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Add SEO metadata
  const { title, description, keywords, canonical } = projectsMetadata;

  const projects = [
    {
      title: 'LuminaAI',
      description: 'An advanced AI chatbot leveraging OpenAIs GPT architecture to provide empathetic, context-aware responses. Implemented real-time sentiment analysis to adapt conversation tone and custom prompt engineering for enhanced natural dialogue. Overcame challenges in maintaining conversation context and emotion detection through innovative state management.',
      challenges: 'Developed custom middleware for handling complex conversation states and implemented efficient token management to optimize API costs while maintaining response quality.',
      image: '/projects/Lumina.png',
      tags: ['React', 'Node.js', 'OpenAI API', 'Express', 'Socket.io', 'Redis'],
      link: 'https://lumina-smoky.vercel.app',
      featured: true
    },
    {
      title: 'Marzive Oracle',
      description: 'A sophisticated prediction platform combining machine learning models with traditional technical analysis for market forecasting. Engineered a custom algorithm that processes multiple data sources to generate accurate predictions with confidence scores.',
      challenges: 'Successfully tackled the challenge of real-time data processing by implementing a microservices architecture and optimizing the ML pipeline for faster predictions.',
      image: '/projects/marzive.png',
      tags: ['React', 'Python', 'Flask', 'TensorFlow', 'PostgreSQL', 'Docker'],
      link: 'https://marzive-oracle.vercel.app',
      featured: true
    },
    {
      title: 'Otal',
      description: 'A comprehensive FOREX education platform featuring interactive learning modules, real-time market analysis, and a custom-built trading simulator. Implemented secure payment processing and user authentication system handling over 1000+ active users.',
      challenges: 'Optimized database queries and implemented caching strategies to handle high concurrent user loads while maintaining sub-second response times.',
      image: '/projects/otal.png',
      tags: ['PHP', 'MySQL', 'Laravel', 'WebSocket', 'Redis', 'AWS'],
      link: 'https://otal.ng'
    },
    {
      title: 'CSC 200 Project',
      description: 'An innovative educational platform demonstrating complex computer science concepts through interactive visualizations. Features include real-time algorithm visualization, code execution playground, and a comprehensive learning management system.',
      challenges: 'Developed custom animation framework for algorithm visualization and implemented efficient state management for handling multiple concurrent animations.',
      image: '/projects/csc-200.png',
      tags: ['JavaScript', 'D3.js', 'Web Workers', 'IndexedDB', 'Service Workers'],
      link: 'https://csc-200-lv-group-09.vercel.app'
    },
    {
      title: 'Discover Niger',
      description: 'An immersive cultural platform showcasing Nigers heritage through interactive 3D experiences and virtual tours. Implemented progressive web app features for offline access and optimized media delivery for low-bandwidth conditions.',
      // challenges: 'Achieved 60fps performance for 3D rendering on mobile devices through aggressive optimization and implemented custom lazy loading for large media assets.',
      image: '/projects/discover-niger.png',
      tags: ['HTML5', 'CSS3', 'Javascript'],
      link: 'https://discover-niger.vercel.app'
    },
    {
      title: 'Restaurant Website',
      description: 'A modern restaurant website with beautiful UI',
      // challenges: 'Developed a sophisticated queuing system for handling peak-hour orders and implemented real-time kitchen display system synchronization.',
      image: '/projects/restaurant.png',
      tags: ['HTML5', 'CSS3', 'Javascript'],
      link: 'https://restaurant-nine-khaki.vercel.app'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <section id="projects" className="py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary-content mb-12 text-center">
          Featured Projects
        </h2>
        <div className="flex flex-col gap-24 transition-all duration-700 ease-in-out">
          {projects.slice(0, showAll ? projects.length : 2).map((project, index) => (
            <div 
              key={index}
              className={`group relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center transition-all duration-700 ease-out`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 100}
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
                {project.challenges && (
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-primary-content mb-2">Challenges & Solutions</h4>
                    <p className="text-gray-300 text-base">
                      {project.challenges}
                    </p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
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
                  target="_blank"
                  rel="noopener noreferrer"
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
              {showAll ? 'Show Less' : 'See More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default Projects;