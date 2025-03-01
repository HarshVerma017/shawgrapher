import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Serene landscape with deer', category: 'landscape' },
  { id: 2, src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Professional portrait of a man', category: 'portrait' },
  { id: 3, src: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Desert landscape texture', category: 'landscape' },
  { id: 4, src: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Modern architecture', category: 'street' },
  { id: 5, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Elegant wedding couple', category: 'wedding' },
  { id: 6, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Lively event photography', category: 'event' },
  { id: 7, src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Urban street photography', category: 'street' },
  { id: 8, src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Natural portrait in forest setting', category: 'portrait' },
];

const Gallery = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gray-900 text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-black/5 rounded text-sm font-medium">Portfolio</div>
          <h2 className="featured-title">Featured Work</h2>
          <p className="text-gray-200 text-balance">
            Browse through a collection of my most captivating photographs across various genres and styles.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'relative overflow-hidden rounded-lg shadow-md bg-white group',
                'transform opacity-0 transition-all duration-700',
                inView && 'opacity-100 translate-y-0',
                !inView && 'translate-y-8',
                { 'md:col-span-2 md:row-span-2': index % 5 === 0 }, // Make some images larger for a bento effect
                { 'md:col-span-1 md:row-span-1': index % 5 !== 0 }
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
