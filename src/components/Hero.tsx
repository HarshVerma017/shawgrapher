
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="hero-image-container absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Breathtaking landscape photography by Shawgrapher"
          className={cn(
            "w-full h-full object-cover object-center transition-opacity duration-1000",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h1 
          className={cn(
            "text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-medium leading-tight md:leading-tight max-w-5xl opacity-0",
            isLoaded && "text-fade-in"
          )}
        >
          Capturing Moments, <br/>Crafting Stories
        </h1>
        
        <p 
          className={cn(
            "text-white/90 mt-6 text-lg md:text-xl max-w-2xl mx-auto font-light opacity-0",
            isLoaded && "delayed-fade-in"
          )}
        >
          Through the lens of Shubhendra Kumar Shaw, witness life's extraordinary moments frozen in time.
        </p>
        
        <a 
          href="#gallery" 
          className={cn(
            "mt-12 opacity-0",
            isLoaded && "delayed-fade-in-long"
          )}
        >
          <button className="custom-button" data-text="Portfolio">
            <span className="actual-text">&nbsp;Portfolio&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;Portfolio&nbsp;</span>
          </button>
        </a>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-10 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={30} className="opacity-70" />
      </a>
    </section>
  );
};

export default Hero;
