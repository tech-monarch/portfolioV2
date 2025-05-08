import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiDiscord } from 'react-icons/si';
import Skills from './Skills';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content relative">
      <ParticleBackground />
      <nav className="py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-xl font-semibold text-primary-content">Tech Monarch 🤴</div>
        <div className="flex space-x-4">
          <a href="#education" className="text-base-content hover:text-primary-content transition-all duration-300 hover:scale-110 hover:-translate-y-1">education</a>
          <a href="#experience" className="text-base-content hover:text-primary-content transition-all duration-300 hover:scale-110 hover:-translate-y-1">experience</a>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/tech-monarch" target="_blank" rel="noopener noreferrer" className="text-base-content hover:text-primary-content transition-all duration-300 hover:scale-110 hover:-translate-y-1">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/tech-monarch" target="_blank" rel="noopener noreferrer" className="text-base-content hover:text-primary-content transition-all duration-300 hover:scale-110 hover:-translate-y-1">
            <FaLinkedin size={22} />
          </a>
          <a href="https://discord.com/users/tech-monarch" target="_blank" rel="noopener noreferrer" className="text-base-content hover:text-primary-content transition-all duration-300 hover:scale-110 hover:-translate-y-1">
            <SiDiscord size={22} />
          </a>
          <a href="mailto:tech-monarch@email.com" className="text-base-content hover:text-primary-content transition-all duration-300 hover:scale-110 hover:-translate-y-1">
            <MdEmail size={22} />
          </a>
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-8">
      <div className="max-w-2xl text-center md:text-left">
  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-content bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent" style={{backgroundSize: '200% 200%', animation: 'gradientShift 8s ease infinite'}}>Hi, I'm Omijeh David Odianonsen</h1>
  <p className="text-lg md:text-xl mb-10 text-base-content/80">
    I build weird stuff... <span className="italic">and somehow it works</span> 🌚  <br></br><br></br>
    I’m a developer who experiments boldly — blending AI, the web, and raw ideas into things that make people pause, click, and say “wait… that’s actually genius.”  
    I don't follow blueprints — I draw new ones.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
    <a
      href="/cv.pdf"
      download
      className="btn btn-primary hover:bg-primary-content hover:text-primary transition-colors"
    >
      Download CV
    </a>
    <a
      href="#contact-me"
      className="btn btn-outline text-primary-content hover:bg-primary-content hover:text-primary transition-colors"
    >
      Contact Me
    </a>
  </div>
</div>

        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="w-full h-full bg-gradient-to-r from-green-400 to-green-600 absolute blur-3xl opacity-20"></div>
          <img
            src="./profile.jpg"
            alt="Omijeh David Odianonsen"
            className="w-full h-full relative z-10 object-cover border-4 border-base-content/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] hover:rounded-[70%_30%_30%_70%/30%_70%_70%_30%] transition-all duration-500 ease-in-out hover:shadow-glow-xl animate-float"
          />
        </div>
      </main>

      <Skills />
    </div>
  );
};

export default Hero;