
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Send, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-black/5 rounded text-sm font-medium">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-6">
            Contact Me
          </h2>
          <p className="text-gray-700 text-balance">
            Have a project in mind or interested in working together? I'd love to hear from you. Let's create something beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className={cn(
            "lg:col-span-2 transform opacity-0 transition-all duration-700",
            inView && "opacity-100 translate-y-0",
            !inView && "translate-y-8"
          )}>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-black/5 rounded-full p-3 mr-4">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                    <a href="mailto:contact@shawgrapher.com" className="text-black hover:text-gray-700 transition-colors">
                      contact@shawgrapher.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black/5 rounded-full p-3 mr-4">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Phone</h4>
                    <a href="tel:+919876543210" className="text-black hover:text-gray-700 transition-colors">
                      +91 987 654 3210
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-10 mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/5 hover:bg-black/10 transition-colors rounded-full p-3"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/5 hover:bg-black/10 transition-colors rounded-full p-3"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/5 hover:bg-black/10 transition-colors rounded-full p-3"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className={cn(
            "lg:col-span-3 transform opacity-0 transition-all duration-700 delay-300",
            inView && "opacity-100 translate-y-0",
            !inView && "translate-y-8"
          )}>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-200"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-200"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="Wedding Photography">Wedding Photography</option>
                  <option value="Portrait Session">Portrait Session</option>
                  <option value="Event Coverage">Event Coverage</option>
                  <option value="Product Photography">Product Photography</option>
                  <option value="Commercial Work">Commercial Work</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all duration-200"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "flex items-center justify-center w-full px-6 py-3 bg-black text-white font-medium rounded transition-all duration-200",
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-black/90"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
