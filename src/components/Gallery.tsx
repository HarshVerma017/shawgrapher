
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'portrait', label: 'Portrait' },
  { id: 'landscape', label: 'Landscape' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'street', label: 'Street' },
  { id: 'event', label: 'Event' },
];

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Serene landscape with deer',
    category: 'landscape',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Professional portrait of a man',
    category: 'portrait',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Desert landscape texture',
    category: 'landscape',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Modern architecture',
    category: 'street',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Elegant wedding couple',
    category: 'wedding',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Lively event photography',
    category: 'event',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Urban street photography',
    category: 'street',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Natural portrait in forest setting',
    category: 'portrait',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);
  
  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-gray-50"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-black/5 rounded text-sm font-medium">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-6">
            Featured Work
          </h2>
          <p className="text-gray-700 text-balance">
            Browse through a collection of my most captivating photographs across various genres and styles. Each image tells a unique story and showcases my passion for photography.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === category.id
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "transform opacity-0 transition-all duration-700 photo-card-hover",
                inView && "opacity-100 translate-y-0",
                !inView && "translate-y-8",
                { "transition-delay-100": index % 4 === 1 },
                { "transition-delay-200": index % 4 === 2 },
                { "transition-delay-300": index % 4 === 3 }
              )}
            >
              <div className="overflow-hidden rounded-lg shadow-md bg-white">
                <div className="relative pb-[100%]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-black text-white font-medium rounded hover:bg-black/90 transition-all duration-200 inline-flex items-center"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
