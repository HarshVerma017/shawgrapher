
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const About = () => {
  const { ref: aboutRef, inView: aboutVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
  id="about"
  ref={aboutRef}
  className="py-24 md:py-32 bg-gray-900 text-white"
>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-16">
          <div className={cn(
            "md:w-1/2 transform opacity-0 transition-all duration-700",
            aboutVisible && "opacity-100 translate-y-0",
            !aboutVisible && "translate-y-8"
          )}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-black/5 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Portrait of Shubhendra Kumar Shaw"
                className="w-full h-auto object-cover rounded-lg relative z-10"
                style={{ maxHeight: '600px' }}
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-black/5 rounded-lg"></div>
            </div>
          </div>

          <div className={cn(
            "md:w-1/2 transform opacity-0 transition-all duration-700 delay-300",
            aboutVisible && "opacity-100 translate-y-0",
            !aboutVisible && "translate-y-8"
          )}>
            <div className="inline-block mb-3 px-3 py-1 bg-black/5 rounded text-sm font-medium">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-6">
              Shubhendra Kumar Shaw
            </h2>
            
            <p className="text-gray-700 mb-6 text-balance">
              With over 10 years behind the lens, I've dedicated my career to capturing the extraordinary in the ordinary. My journey in photography began as a passion and evolved into a lifelong pursuit of visual storytelling.
            </p>
            
            <p className="text-gray-700 mb-6 text-balance">
              My approach is defined by patience, attention to detail, and a deep appreciation for authentic moments. Whether I'm shooting a wedding, portrait session, or landscape, I strive to create images that evoke emotion and preserve memories for generations.
            </p>
            
            <p className="text-gray-700 mb-10 text-balance">
              I believe that great photography is about connection—connecting with my subjects, connecting with the environment, and ultimately creating images that connect with viewers on an emotional level.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#gallery" 
                className="px-6 py-3 bg-black text-white text-center font-medium rounded hover:bg-black/90 transition-all duration-200"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-black text-black text-center font-medium rounded hover:bg-black/5 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
