
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { 
  Camera, 
  Users, 
  Heart, 
  ShoppingBag, 
  User, 
  Building
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Capture your special day with timeless and emotional imagery that tells your unique love story.',
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'Portrait Sessions',
    description: 'Professional portrait photography that brings out your personality and creates lasting memories.',
    icon: <User className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'Event Coverage',
    description: 'Comprehensive documentation of your events with a keen eye for candid moments and key highlights.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'Product Photography',
    description: 'Showcase your products with high-quality, professional images that highlight their best features.',
    icon: <ShoppingBag className="w-8 h-8" />,
  },
  {
    id: 5,
    title: 'Commercial Photography',
    description: 'Elevate your brand with professional imagery for marketing, advertising, and corporate needs.',
    icon: <Building className="w-8 h-8" />,
  },
  {
    id: 6,
    title: 'Photography Workshops',
    description: 'Learn photography techniques and develop your skills with personalized workshops and training.',
    icon: <Camera className="w-8 h-8" />,
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 md:py-32 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-black/5 rounded text-sm font-medium">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-6">
            What I Offer
          </h2>
          <p className="text-gray-700 text-balance">
            I provide a range of professional photography services tailored to your specific needs and vision. Each service is delivered with dedication, creativity, and meticulous attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "service-card rounded-lg p-8 bg-white shadow-sm transform opacity-0 transition-all duration-700",
                inView && "opacity-100 translate-y-0",
                !inView && "translate-y-8",
                { "transition-delay-100": index % 3 === 1 },
                { "transition-delay-200": index % 3 === 2 }
              )}
            >
              <div className="mb-5 text-black">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5 text-balance">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700 transition-colors"
              >
                Inquire Now
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
