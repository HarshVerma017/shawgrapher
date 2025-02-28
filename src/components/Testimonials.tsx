
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Bride',
    content: 'Shubhendra captured our wedding day with such artistry and emotion. The photos exceeded our expectations and truly tell the story of our special day. His calm presence made everyone feel comfortable.',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Corporate Client',
    content: 'Working with Shawgrapher for our company event was an absolute pleasure. He captured all the key moments with professionalism and artistic flair. The images are now proudly displayed in our office.',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    role: 'Portrait Client',
    content: 'I was nervous about my portrait session, but Shubhendra made me feel instantly at ease. The results are stunning—he captured a side of me I rarely see. I couldn\'t recommend him more highly.',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Event Organizer',
    content: 'We\'ve hired Shawgrapher for multiple events, and he consistently delivers exceptional photos that perfectly capture the atmosphere and energy. His attention to detail is unmatched.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 md:py-32 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <Quote className="absolute top-10 left-10 w-40 h-40 text-black" />
        <Quote className="absolute bottom-10 right-10 w-40 h-40 text-black" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-black/5 rounded text-sm font-medium">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-6">
            Client Experiences
          </h2>
          <p className="text-gray-700 text-balance">
            Don't just take my word for it. Here's what clients have to say about their experience working with me.
          </p>
        </div>

        <div className={cn(
          "max-w-4xl mx-auto transform opacity-0 transition-all duration-700",
          inView && "opacity-100 translate-y-0",
          !inView && "translate-y-8"
        )}>
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-lg shadow-md p-8 md:p-10">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="text-lg font-medium">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <Quote className="w-10 h-10 text-black/10 mb-4" />
                      <p className="text-gray-700 italic text-balance">"{testimonial.content}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setActiveIndex(index);
                  }}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-black" : "bg-gray-300"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
