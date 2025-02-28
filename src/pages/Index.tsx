
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';
import { lov } from 'react-intersection-observer';

const Index = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = "Shawgrapher | Professional Photography by Shubhendra Kumar Shaw";
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional photography services by Shubhendra Kumar Shaw, specializing in wedding, portrait, event, and commercial photography.');
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
