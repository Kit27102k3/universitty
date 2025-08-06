import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly with custom animation
  const scrollToTop = () => {
    if (isAnimating) return; // Prevent multiple clicks
    
    setIsAnimating(true);
    
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const duration = 1500; // 1.5 seconds for smoother animation
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      const newPosition = startPosition * (1 - easeOutCubic);
      window.scrollTo(0, newPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsAnimating(false);
      }
    };
    
    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          disabled={isAnimating}
          className={`fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl ${
            isVisible ? 'animate-in fade-in-0 slide-in-from-bottom-2 duration-500' : 'animate-out fade-out-0 slide-out-to-bottom-2 duration-300'
          } ${isAnimating ? 'opacity-70 cursor-not-allowed' : ''}`}
          aria-label="Back to top"
        >
          <ChevronUp className={`w-6 h-6 transition-transform duration-300 ${isAnimating ? 'animate-pulse' : ''}`} />
        </button>
      )}
    </>
  );
};

export default BackToTop; 