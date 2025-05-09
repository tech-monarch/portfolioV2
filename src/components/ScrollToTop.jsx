import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 bg-gradient-to-br from-stone-600 to-stone-700 text-primary-content rounded-lg shadow-lg hover:shadow-xl backdrop-blur-sm border border-stone-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-stone-500 hover:to-stone-600 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'} relative`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;