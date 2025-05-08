import { FaJs, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaDatabase, FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiThreedotjs, SiTailwindcss, SiBootstrap, SiNumpy, SiScikitlearn, SiOpenai, SiBlender, SiUnrealengine, SiSelenium } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [scrollPositions, setScrollPositions] = useState({});
  const [isHovered, setIsHovered] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const languages = [
    {
      title: '🧠 Core Competencies',
      skills: [
        { name: 'AI Engineering', icon: <TbBrain className="text-purple-500" />, status: '(in progress)' },
        { name: 'Machine Learning', icon: <TbBrain className="text-purple-500" /> },
        { name: 'Frontend Development', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Full-Stack Development', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Creative Problem Solving', icon: <TbBrain className="text-purple-500" /> },
        { name: '3D Web Integration', icon: <SiThreedotjs className="text-gray-300" /> },
      ]
    },
    {
      title: '💻 Languages',
      skills: [
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'Python', icon: <FaPython className="text-blue-500" /> },
        { name: 'PHP', icon: <FaPhp className="text-indigo-500" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
        { name: 'SQL', icon: <FaDatabase className="text-gray-400" /> },
        { name: 'C++', icon: <TbBrain className="text-purple-500" />, status: '(learning)' },
      ]
    },
    {
      title: '⚙️ Frameworks & Libraries',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Three.js', icon: <SiThreedotjs className="text-gray-300" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, status: '(basic)' },
        { name: 'NumPy', icon: <SiNumpy className="text-blue-500" /> },
        { name: 'Scikit-learn', icon: <SiScikitlearn className="text-orange-500" /> },
      ]
    }
  ];

  useEffect(() => {
    const scrollIntervals = languages.map((category, index) => {
      if (isHovered === index) return null;
      
      return setInterval(() => {
        setScrollPositions(prev => {
          const currentPos = prev[index] || 0;
          const cardWidth = 200; // Width of each card including gap
          const containerWidth = category.skills.length * cardWidth;
          const newPos = currentPos + 1;
          
          return {
            ...prev,
            [index]: newPos >= containerWidth ? 0 : newPos
          };
        });
      }, 30);
    });

    return () => scrollIntervals.forEach(interval => interval && clearInterval(interval));
  }, [isHovered, languages]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 space-y-12" data-aos="fade-up">
        {languages.slice(0, showMore ? languages.length : 1).map((category, index) => (
          <div 
            key={index} 
            className="backdrop-blur-sm bg-base-100/30 rounded-xl shadow-xl p-6 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 200}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <h2 className="text-2xl font-bold text-primary-content mb-6 transition-all duration-300 hover:scale-102" style={{
              textShadow: category.title.includes('🧠') ? '0 0 20px rgba(168, 85, 247, 0.7), 0 0 40px rgba(168, 85, 247, 0.4)' :
                         category.title.includes('💻') ? '0 0 20px rgba(59, 130, 246, 0.7), 0 0 40px rgba(59, 130, 246, 0.4)' :
                         '0 0 20px rgba(34, 197, 94, 0.7), 0 0 40px rgba(34, 197, 94, 0.4)'
            }}>{category.title}</h2>
            <div className="relative overflow-hidden">
              <div 
                className="flex gap-4 transition-transform duration-500 ease-linear"
                style={{
                  transform: `translateX(-${scrollPositions[index] || 0}px)`,
                  width: 'max-content'
                }}
              >
                {[...category.skills, ...category.skills].map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex-shrink-0 w-48 p-4 backdrop-blur-sm bg-base-300/40 rounded-lg flex flex-col items-center hover:scale-105 transition-transform duration-300 hover:shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay={skillIndex * 100}
                  >
                    <div className="text-3xl text-primary mb-2">{skill.icon}</div>
                    <h3 className="text-lg font-semibold text-primary-content text-center">{skill.name}</h3>
                    {skill.status && (
                      <p className="text-sm text-base-content/80 text-center mt-1">{skill.status}</p>
                    )}
                  </div>
                ))}
        {languages.length > 1 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-lg text-primary-content hover:bg-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              {showMore ? 'Show Less' : 'See More Skills'}
            </button>
          </div>
        )}
              </div>
            </div>
          </div>
        ))}
        {languages.length > 1 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-lg text-primary-content hover:bg-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              {showMore ? 'Show Less' : 'See More Skills'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;