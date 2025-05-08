import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiDiscord } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl font-bold text-primary-content">Get in Touch.</h2>
          <p className="text-base-content/80 text-center max-w-md">
            Let's talk about how we can work together to build something amazing.
          </p>
          
          <div className="flex space-x-8">
            <a
              href="https://github.com/tech-monarch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary-content transition-colors transform hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/tech-monarch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary-content transition-colors transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://discord.com/users/tech-monarch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary-content transition-colors transform hover:scale-110"
            >
              <SiDiscord size={28} />
            </a>
            <a
              href="mailto:tech-monarch@email.com"
              className="text-base-content hover:text-primary-content transition-colors transform hover:scale-110"
            >
              <MdEmail size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;