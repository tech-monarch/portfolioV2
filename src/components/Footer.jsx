import { FaGithub, FaWhatsapp, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { SiDiscord } from 'react-icons/si';

const Footer = () => {
  return (
    <footer id="footer" className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl font-bold text-primary-content">Get in Touch.</h2>
          <p className="text-base-content/80 text-center max-w-md">
            Let's talk about how we can work together to build something amazing.
          </p>
          
          <div className="flex flex-col items-center space-y-6">
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
                href="https://instagram.com/still_odia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary-content transition-colors transform hover:scale-110"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://discord.com/users/tech_monarch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary-content transition-colors transform hover:scale-110"
              >
                <SiDiscord size={28} />
              </a>
              <a
                href="https://x.com/_Tech_Monarch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary-content transition-colors transform hover:scale-110"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://www.tiktok.com/@tech.monarch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary-content transition-colors transform hover:scale-110"
              >
                <FaTiktok size={28} />
              </a>
            </div>
            
            <div className="flex flex-col items-center space-y-3 text-base-content/80">
              <div className="flex items-center space-x-2">
                <MdEmail size={20} />
                <a href="mailto:om2918440@gmail.com" className="hover:text-primary-content transition-colors">
                  om2918440@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaWhatsapp size={20} />
                <a href="https://wa.me/2347043427233" target="_blank" rel="noopener noreferrer" className="hover:text-primary-content transition-colors">
                  +234 704 342 7233
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone size={20} />
                <a href="tel:+2347043427233" className="hover:text-primary-content transition-colors">
                  +234 704 342 7233
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;