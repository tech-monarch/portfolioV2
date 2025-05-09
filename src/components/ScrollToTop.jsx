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
      className={`fixed bottom-8 right-8 p-3 bg-gradient-to-br from-stone-600 to-stone-700 text-primary-content rounded-lg shadow-lg hover:shadow-xl backdrop-blur-sm border border-stone-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-stone-500 hover:to-stone-600 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'} relative before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuLWNvbmNyZXRlIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iOCIgaGVpZ2h0PSI4Ij48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIi8+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjAuOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA2KSIvPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIwLjQiIGZpbGw9InJnYmEoMjU1LDI1NSwwLDAuMDQpIi8+PHBhdGggZD0iTTAgMGw4IDhNOCAwbC04IDgiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybi1jb25jcmV0ZSkiLz48L3N2Zz4=')] before:opacity-40 before:rounded-lg before:pointer-events-none`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;