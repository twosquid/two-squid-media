import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronRight, PlayCircle, Camera, Palette, ShoppingBag, Users, Code, Monitor, Youtube, Film, Mic, Mail, Phone, MapPin, Facebook, Instagram, MessageSquare, Briefcase, Star, Award, Lightbulb, TrendingUp
} from 'lucide-react';

// Define the primary brand colors using CSS variables for precise control
// These will be defined in the <style> tag below
const BLACK = '#000000';
const WHITE = '#FFFFFF';

// A simple page routing component
const PageContent = ({ currentPage }) => {
  return (
    <div key={currentPage} className="animate-fade-in">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'portfolio' && <PortfolioPage />}
      {currentPage === 'testimonials' && <TestimonialsPage />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-black p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-white border-opacity-20">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-10 group-hover:bg-[var(--color-red-dark)] transition-colors duration-300 mb-4">
        <Icon size={32} className="text-white group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-red-primary)] transition-colors duration-300">{title}</h3>
      <p className="text-white text-sm opacity-70">{description}</p>
      <a href="#" className="mt-4 inline-flex items-center text-[var(--color-red-primary)] hover:text-[var(--color-red-light)] transition-colors duration-300 text-sm font-semibold">
        Learn More <ChevronRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Changed to red and black gradient */}
      <section className="relative bg-gradient-to-br from-black to-[var(--color-red-dark)] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url(https://placehold.co/1920x1080/000000/FFFFFF?text=Creative+Background)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <p className="text-[var(--color-red-light)] uppercase tracking-widest text-sm mb-4">Your Vision, Our Expertise</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Amplify Your Brand's Voice with <span className="text-[var(--color-red-primary)]">Two Squid Media</span>
            </h1>
            <p className="text-lg text-white opacity-70 mb-8 max-w-lg mx-auto md:mx-0">
              We are a dynamic digital marketing agency specializing in captivating video, stunning design, and strategic online presence to make your brand unforgettable.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-[var(--color-red-primary)] hover:bg-[var(--color-red-dark)] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get a Free Consultation
              </button>
              <button className="bg-transparent border-2 border-white hover:border-[var(--color-red-primary)] hover:bg-[var(--color-red-primary)] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Our Services
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://placehold.co/600x400/e50914/FFFFFF?text=Digital+Marketing+Creative"
              alt="Digital Marketing Illustration"
              className="rounded-xl shadow-2xl animate-fade-in-right"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e50914/FFFFFF?text=Placeholder+Image'; }}
            />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Core Creative & Digital Services</h2>
          <p className="text-lg text-white opacity-70 mb-12 max-w-2xl mx-auto">
            From compelling visuals to strategic online engagement, we offer a comprehensive suite of services to elevate your brand.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={PlayCircle}
              title="Video Editing"
              description="Crafting captivating narratives from raw footage, transforming your vision into polished, engaging video content."
            />
            <ServiceCard
              icon={Camera}
              title="Videography"
              description="Professional videography for events, products, and brand stories, capturing high-quality cinematic visuals."
            />
            <ServiceCard
              icon={Palette}
              title="Graphic Designing"
              description="Creating visually stunning branding, marketing materials, and digital assets that resonate with your audience."
            />
            <ServiceCard
              icon={ShoppingBag}
              title="Product Shoot"
              description="High-quality product photography that showcases your offerings with exceptional detail and appeal."
            />
            <ServiceCard
              icon={Users}
              title="Influencer Marketing"
              description="Connecting your brand with authentic voices to expand reach, build trust, and drive genuine engagement."
            />
            <ServiceCard
              icon={Code}
              title="Web Development"
              description="Building modern, responsive, and high-performing websites that serve as powerful digital foundations for your business."
            />
            <ServiceCard
              icon={Monitor}
              description="Managing your social presence, crafting engaging content, and growing your community for maximum impact."
            />
            <ServiceCard
              icon={Youtube}
              title="Live Streaming"
              description="Seamless and professional live broadcast solutions for events, webinars, and interactive online experiences."
            />
            <ServiceCard
              icon={Film}
              title="Motion Poster"
              description="Bringing static designs to life with dynamic motion graphics that capture attention and convey your message effectively."
            />
            <ServiceCard
              icon={Mic}
              title="Podcast Editing"
              description="Polishing your audio content for crystal-clear sound, smooth flow, and engaging listening experiences."
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Changed to red and black gradient */}
      <section className="bg-gradient-to-br from-black to-[var(--color-red-dark)] py-16 md:py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Let's discuss how Two Squid Media can help you achieve your marketing goals. We're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-[var(--color-red-primary)] font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Us Today
            </button>
            <button className="bg-transparent border-2 border-white hover:border-[var(--color-red-primary)] hover:bg-[var(--color-red-primary)] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// About Us Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">About <span className="text-[var(--color-red-primary)]">Two Squid Media</span></h1>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <img
              src="https://placehold.co/800x500/e50914/FFFFFF?text=Creative+Team+Collaboration"
              alt="Two Squid Media Team"
              className="rounded-xl shadow-xl w-full"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x500/e50914/FFFFFF?text=Placeholder+Image'; }}
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-[var(--color-red-light)] uppercase tracking-widest text-sm mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Igniting Brands with Bold Creativity and Strategic Impact
            </h2>
            <p className="text-white text-lg opacity-70 mb-6">
              Born from a shared vision for dynamic digital storytelling, Two Squid Media is a collective of passionate videographers, designers, marketers, and developers. We believe in the power of compelling content and innovative strategies to transform brands and connect them deeply with their audience. Our journey is defined by a commitment to pushing creative boundaries and delivering tangible results.
            </p>
            <p className="text-white text-lg opacity-70 mb-6">
              We thrive on challenges, constantly adapting to the evolving digital landscape to ensure our clients always stay ahead. From crafting viral video campaigns to building robust web platforms and executing impactful influencer strategies, we are dedicated to making your brand's digital presence resonate powerfully.
            </p>
            <ul className="text-white text-lg opacity-70 space-y-2">
              <li className="flex items-center justify-center lg:justify-start">
                <ChevronRight size={20} className="text-[var(--color-red-primary)] mr-2" /> Data-Driven Creative Strategies
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <ChevronRight size={20} className="text-[var(--color-red-primary)] mr-2" /> Cutting-Edge Visual Production
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <ChevronRight size={20} className="text-[var(--color-red-primary)] mr-2" /> Measurable Digital Growth
              </li>
            </ul>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-black p-8 rounded-xl shadow-lg border border-white border-opacity-20">
            <Lightbulb size={48} className="text-[var(--color-red-primary)] mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white opacity-70">
              To empower businesses with unparalleled digital content and strategic marketing solutions that captivate audiences, drive engagement, and achieve measurable growth in a competitive digital world.
            </p>
          </div>
          <div className="bg-black p-8 rounded-xl shadow-lg border border-white border-opacity-20">
            <TrendingUp size={48} className="text-[var(--color-red-primary)] mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white opacity-70">
              To be the premier creative digital agency, renowned for transforming brands through innovative visual storytelling, robust web experiences, and impactful online strategies that set new industry benchmarks.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Meet Our Talented Team</h2>
          <p className="text-lg text-white opacity-70 mb-12 max-w-2xl mx-auto">
            Our diverse team of experts brings passion, creativity, and technical prowess to every project, ensuring your brand's success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-black p-6 rounded-xl shadow-md border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://placehold.co/150x150/e50914/FFFFFF?text=Saurabh"
                alt="Saurabh Jha"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/e50914/FFFFFF?text=Placeholder'; }}
              />
              <h4 className="text-xl font-bold text-white">Saurabh Jha</h4>
              {/* Removed designation */}
              <div className="flex justify-center mt-3 space-x-2">
                <a href="#" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-black p-6 rounded-xl shadow-md border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://placehold.co/150x150/e50914/FFFFFF?text=Sujal"
                alt="Sujal Chauhan"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/e50914/FFFFFF?text=Placeholder'; }}
              />
              <h4 className="text-xl font-bold text-white">Sujal Chauhan</h4>
              {/* Removed designation */}
              <div className="flex justify-center mt-3 space-x-2">
                <a href="#" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-black p-6 rounded-xl shadow-md border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://placehold.co/150x150/e50914/FFFFFF?text=Kailash"
                alt="Kailash Rathod"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/e50914/FFFFFF?text=Placeholder'; }}
              />
              <h4 className="text-xl font-bold text-white">Kailash Rathod</h4>
              {/* Removed designation */}
              <div className="flex justify-center mt-3 space-x-2">
                <a href="#" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="bg-black p-6 rounded-xl shadow-md border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://placehold.co/150x150/e50914/FFFFFF?text=Sonu"
                alt="Sonu Jha"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/e50914/FFFFFF?text=Placeholder'; }}
              />
              <h4 className="text-xl font-bold text-white">Sonu Jha</h4>
              {/* Removed designation */}
              <div className="flex justify-center mt-3 space-x-2">
                <a href="#" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Page Component
const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Comprehensive <span className="text-[var(--color-red-primary)]">Services</span></h1>
        <p className="text-lg text-white opacity-70 mb-12 max-w-3xl mx-auto">
          At Two Squid Media, we offer a full spectrum of digital marketing and creative services tailored to amplify your brand's presence and impact.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={PlayCircle}
            title="Video Editing"
            description="Transform your raw footage into polished, professional videos. We handle everything from cuts and transitions to color grading and sound design, ensuring your message is delivered with impact."
          />
          <ServiceCard
            icon={Camera}
            title="Videography"
            description="From corporate events to product launches and brand stories, our videography team captures high-quality, cinematic footage that tells your unique story visually."
          />
          <ServiceCard
            icon={Palette}
            title="Graphic Designing"
            description="Elevate your brand's visual identity with stunning graphic designs. We create logos, branding guides, marketing collateral, social media graphics, and more that resonate with your audience."
          />
          <ServiceCard
            icon={ShoppingBag}
            title="Product Shoot"
            description="Showcase your products in the best light with professional product photography. High-resolution images that highlight features and appeal directly to your target customers."
          />
          <ServiceCard
            icon={Users}
            title="Influencer Marketing"
            description="Leverage the power of influential voices. We connect your brand with relevant influencers to create authentic campaigns that drive engagement and expand your market reach."
          />
          <ServiceCard
            icon={Code}
            title="Web Development"
            description="Building modern, responsive, and user-friendly websites that serve as the perfect digital storefront for your business."
          />
          <ServiceCard
            icon={Monitor}
            description="Managing your social presence, crafting engaging content, and growing your community for maximum impact."
          />
          <ServiceCard
            icon={Youtube}
            title="Live Streaming"
            description="Host seamless and professional live streams for events, webinars, product launches, or interactive sessions. We ensure high-quality broadcast and audience engagement."
          />
          <ServiceCard
            icon={Film}
            title="Motion Poster"
            description="Captivate your audience with dynamic motion posters. We animate your static designs, adding movement and visual flair to make your advertisements and announcements stand out."
          />
          <ServiceCard
            icon={Mic}
            title="Podcast Editing"
            description="Polishing your audio content with expert podcast editing, ensuring crystal-clear sound and engaging flow for your listeners."
          />
        </div>

        {/* CTA for Services Page */}
        <div className="mt-16">
          <button className="bg-[var(--color-red-primary)] hover:bg-[var(--color-red-dark)] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get a Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};

// Portfolio Page Component
const PortfolioPage = () => {
  const portfolioItems = [
    {
      id: 1,
      category: 'Video Editing',
      title: 'High-Energy Gym Promo Video',
      videoUrl: 'https://youtube.com/embed/oJr9REsxATc?feature=share', // Replace with your YouTube video URL
      description: 'A dynamic promotional video for a new gym, showcasing facilities and workout energy to attract members.'
    },
    {
      id: 2,
      category: 'Graphic Design',
      title: 'Nutrition Plan Infographics',
      videoUrl: 'https://youtube.com/embed/PQxnZSPg7QM?feature=share', // Replace with your YouTube video URL
      description: 'Visually engaging infographics and meal plans designed for a wellness coach, simplifying complex nutritional information.'
    },
    {
      id: 3,
      category: 'Web Development',
      title: 'Fitness Coaching Platform',
      videoUrl: 'https://youtube.com/embed/O-0a7KF4wSw?feature=share', // Replace with your YouTube video URL
      description: 'Developed a custom web platform for a fitness coach, featuring workout tracking, client management, and subscription services.'
    },
    {
      id: 4,
      category: 'Videography',
      title: 'Health Supplement Product Shoot',
      videoUrl: 'https://youtube.com/embed/7WiK_wnn28o?feature=share', // Replace with your YouTube video URL
      description: 'High-quality video and photography production for a new line of health supplements, emphasizing product benefits and lifestyle.'
    },
    {
      id: 5,
      category: 'Influencer Marketing',
      title: 'Wellness Brand Ambassador Campaign',
      image: '/wellness-influencer.jpg', // Replace with your image
      videoUrl: 'https://youtube.com/embed/LoVK6NabC0k?feature=share', // Replace with your YouTube video URL
      description: 'Managed an influencer campaign for a wellness brand, partnering with fitness and nutrition experts to boost brand awareness and sales.'
    },
    {
      id: 6,
      category: 'Demonstration',
      title: 'Product Demo Video',
      // Instead of an image, we'll use an iframe for the YouTube video
      videoUrl: 'https://youtube.com/embed/u7ELAooF74g?feature=share', // Replace with your YouTube video URL
      description: 'A product demo video showcasing the features and functionality of our service.'
    },
    {
      id: 7,
      category: 'Demonstration',
      title: 'Product Demo Video',
      // Instead of an image, we'll use an iframe for the YouTube video
      videoUrl: 'https://www.youtube.com/embed/f4NpQPONlUo?si=84fEWbwVxpjGkxlp', // Replace with your YouTube video URL
      description: 'A product demo video showcasing the features and functionality of our service.'
    },
  ];

  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Creative <span className="text-[var(--color-red-primary)]">Portfolio</span></h1>
        <p className="text-lg text-white opacity-70 mb-12 max-w-3xl mx-auto">
          Explore a selection of our recent projects that showcase our expertise and passion for digital excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(item => (
            <div key={item.id} className="bg-black rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white border-opacity-20">
              {item.videoUrl ? ( // Render video if videoUrl exists
                <div className="relative overflow-hidden">
                  <iframe
                    className="w-full h-60" // Adjust height as needed
                    src={item.videoUrl}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : ( // Otherwise, render image
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e50914/FFFFFF?text=Placeholder'; }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-[var(--color-red-primary)] text-white p-3 rounded-full hover:bg-[var(--color-red-dark)] transition-colors">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              )}
              <div className="p-6 text-left">
                <p className="text-[var(--color-red-primary)] text-sm font-semibold uppercase mb-2">{item.category}</p>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white text-sm opacity-70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button className="bg-[var(--color-red-primary)] hover:bg-[var(--color-red-dark)] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

// Testimonials Page Component
const TestimonialsPage = () => {
  // Updated content for "We Have Worked With" - only titles and images
  const collaborations = [
    {
      id: 1,
      image: '/testimonials/1.png',
    },
    {
      id: 2,
      image: '/testimonials/2.png',
    },
    {
      id: 3,
      image: '/testimonials/3.png',
    },
    {
      id: 4,
      image: '/testimonials/4.png',
    },
    {
      id: 5,
      image: '/testimonials/5.png',
    },
    {
      id: 6,
      image: '/testimonials/6.png',
    },
  ];

  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Changed heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">We Have <span className="text-[var(--color-red-primary)]">Worked With</span></h1>
        <p className="text-lg text-white opacity-70 mb-12 max-w-3xl mx-auto">
          Our collaborations speak volumes. Here are some of the amazing brands and clients we've partnered with.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborations.map(item => (
            <div key={item.id} className="bg-black p-6 rounded-xl shadow-lg border border-white border-opacity-20 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <img
                src={item.image}
                alt={`Collaboration ${item.id}`} // Alt text for accessibility
                className="w-80 h-40 rounded-xl object-cover mb-4 border-2 border-[var(--color-red-primary)]"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/e50914/FFFFFF?text=Screenshot'; }}
              />
              {/* Removed title and description rendering */}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button className="bg-[var(--color-red-primary)] hover:bg-[var(--color-red-dark)] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore More Collaborations
          </button>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For now, we'll just log it and provide a success message.
    console.log('Form submitted:', formData);
    // Replaced alert with a custom modal for better UX and consistency
    // For a real app, you'd manage modal state (e.g., show/hide)
    const messageBox = document.createElement('div');
    messageBox.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    messageBox.innerHTML = `
      <div class="bg-black p-8 rounded-xl shadow-2xl text-white text-center max-w-sm mx-4 border border-white border-opacity-20">
        <h3 class="text-2xl font-bold mb-4 text-[var(--color-red-primary)]">Message Sent!</h3>
        <p class="mb-6 text-white opacity-70">Thank thank you for your message! We will get back to you shortly.</p>
        <button id="closeMessageBox" class="bg-[var(--color-red-primary)] hover:bg-[var(--color-red-dark)] text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
          Close
        </button>
      </div>
    `;
    document.body.appendChild(messageBox);
    document.getElementById('closeMessageBox').onclick = () => document.body.removeChild(messageBox);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">Get In <span className="text-[var(--color-red-primary)]">Touch</span></h1>
        <p className="text-lg text-white opacity-70 text-center mb-12 max-w-3xl mx-auto">
          Have a project in mind or just want to say hello? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-black p-8 rounded-xl shadow-lg border border-white border-opacity-20">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail size={24} className="text-[var(--color-red-primary)] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Email Us</h3>
                  <p className="text-white opacity-70">twosquidofficial@gmail.com</p> {/* Updated Email */}
                </div>
              </div>
              <div className="flex items-start">
                <Phone size={24} className="text-[var(--color-red-primary)] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Call Us</h3>
                  <p className="text-white opacity-70">+91 9326249264</p> {/* Updated Phone */}
                  <p className="text-white opacity-70">+91 12345 67890</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin size={24} className="text-[var(--color-red-primary)] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Visit Us</h3>
                  <p className="text-white opacity-70">Mumbai, Maharashtra, India</p> {/* Updated Address */}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-white mb-4">Connect on Social Media</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/TwoSquidMedia" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com/twosquidofficial" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors">
                  <Instagram size={24} />
                </a>
                {/* Removed Twitter and LinkedIn */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black p-8 rounded-xl shadow-lg border border-white border-opacity-20">
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow-inner appearance-none border border-white border-opacity-20 rounded-lg w-full py-3 px-4 bg-black text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--color-red-primary)] focus:border-transparent transition-all duration-200 placeholder-white placeholder-opacity-50"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-inner appearance-none border border-white border-opacity-20 rounded-lg w-full py-3 px-4 bg-black text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--color-red-primary)] focus:border-transparent transition-all duration-200 placeholder-white placeholder-opacity-50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white text-sm font-bold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow-inner appearance-none border border-white border-opacity-20 rounded-lg w-full py-3 px-4 bg-black text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--color-red-primary)] focus:border-transparent transition-all duration-200 placeholder-white placeholder-opacity-50"
                  placeholder="Subject of your message"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="shadow-inner appearance-none border border-white border-opacity-20 rounded-lg w-full py-3 px-4 bg-black text-white leading-tight focus:outline-none focus:ring-2 focus:ring-[var(--color-red-primary)] focus:border-transparent transition-all duration-200 resize-y placeholder-white placeholder-opacity-50"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[var(--color-red-primary)] hover:bg-[var(--color-red-dark)] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Custom font for "Two Squid Media" - for demonstration, using a generic sans-serif
  const brandFontClass = "font-sans tracking-tight";

  // Function to scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close mobile menu
  };

  return (
    <div className="font-inter antialiased text-white bg-black"> {/* Overall black background and white text */}
      {/* Tailwind CSS CDN script */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Custom CSS Variables for Red Shades */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4, h5, h6 {
          text-transform: uppercase;
        }
        /* Define custom red shades */
        :root {
          --color-red-primary: #c00000; /* Main darker red */
          --color-red-light: #e50914;   /* Slightly brighter red for some accents */
          --color-red-dark: #800000;    /* Darker red for hover states */
        }

        /* Basic animation for fade-in */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
      `}</style>

      {/* Header */}
      <header className="bg-black shadow-lg shadow-black sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://placehold.co/40x40/e50914/FFFFFF?text=TSM"
              alt="Two Squid Media Logo"
              className="h-10 w-10 mr-2"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/e50914/FFFFFF?text=Logo'; }}
            />
            <span className={`text-2xl font-extrabold text-white ${brandFontClass}`}>
              TWO SQUID <span className="text-[var(--color-red-primary)]">MEDIA</span>
            </span>
          </div>

          {/* Desktop Navigation - No Dropdown */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => handlePageChange('home')} className={`text-white hover:text-[var(--color-red-primary)] font-semibold uppercase transition-colors duration-200 ${currentPage === 'home' ? 'text-[var(--color-red-primary)]' : ''}`}>Home</button>
            <button onClick={() => handlePageChange('about')} className={`text-white hover:text-[var(--color-red-primary)] font-semibold uppercase transition-colors duration-200 ${currentPage === 'about' ? 'text-[var(--color-red-primary)]' : ''}`}>About Us</button>
            <button onClick={() => handlePageChange('services')} className={`text-white hover:text-[var(--color-red-primary)] font-semibold uppercase transition-colors duration-200 ${currentPage === 'services' ? 'text-[var(--color-red-primary)]' : ''}`}>Services</button>
            <button onClick={() => handlePageChange('portfolio')} className={`text-white hover:text-[var(--color-red-primary)] font-semibold uppercase transition-colors duration-200 ${currentPage === 'portfolio' ? 'text-[var(--color-red-primary)]' : ''}`}>Portfolio</button>
            <button onClick={() => handlePageChange('testimonials')} className={`text-white hover:text-[var(--color-red-primary)] font-semibold uppercase transition-colors duration-200 ${currentPage === 'testimonials' ? 'text-[var(--color-red-primary)]' : ''}`}>Testimonials</button>
            <button onClick={() => handlePageChange('contact')} className={`text-white hover:text-[var(--color-red-primary)] font-semibold uppercase transition-colors duration-200 ${currentPage === 'contact' ? 'text-[var(--color-red-primary)]' : ''}`}>Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-[var(--color-red-primary)]">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 animate-fade-in">
            <button onClick={() => handlePageChange('home')} className="text-white text-2xl font-bold hover:text-[var(--color-red-primary)] transition-colors duration-200">Home</button>
            <button onClick={() => handlePageChange('about')} className="text-white text-2xl font-bold hover:text-[var(--color-red-primary)] transition-colors duration-200">About Us</button>
            <button onClick={() => handlePageChange('services')} className="text-white text-2xl font-bold hover:text-[var(--color-red-primary)] transition-colors duration-200">Services</button>
            <button onClick={() => handlePageChange('portfolio')} className="text-white text-2xl font-bold hover:text-[var(--color-red-primary)] transition-colors duration-200">Portfolio</button>
            <button onClick={() => handlePageChange('testimonials')} className="text-white text-2xl font-bold hover:text-[var(--color-red-primary)] transition-colors duration-200">Testimonials</button>
            <button onClick={() => handlePageChange('contact')} className="text-white text-2xl font-bold hover:text-[var(--color-red-primary)] transition-colors duration-200">Contact</button>
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-white hover:text-[var(--color-red-primary)]">
              <X size={32} />
            </button>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main>
        <PageContent currentPage={currentPage} />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 md:py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/40x40/e50914/FFFFFF?text=TSM"
                alt="Two Squid Media Logo"
                className="h-10 w-10 mr-2"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/e50914/FFFFFF?text=Logo'; }}
            />
              <span className={`text-2xl font-extrabold ${brandFontClass}`}>
                TWO SQUID <span className="text-[var(--color-red-primary)]">MEDIA</span>
              </span>
            </div>
            <p className="text-white text-sm opacity-70 leading-relaxed">
              Two Squid Media is your partner in digital success, crafting compelling stories and impactful strategies to elevate your brand.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handlePageChange('about')} className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors duration-200 text-sm">About Us</button></li>
              <li><button onClick={() => handlePageChange('services')} className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors duration-200 text-sm">Our Services</button></li>
              <li><button onClick={() => handlePageChange('portfolio')} className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors duration-200 text-sm">Portfolio</button></li>
              <li><button onClick={() => handlePageChange('contact')} className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors duration-200 text-sm">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4 uppercase">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors duration-200 text-sm">Video Editing</a></li>
              <li><a href="#" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors duration-200 text-sm">Graphic Designing</a></li>
              <li><a href="#" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors duration-200 text-sm">Web Development</a></li>
              <li><a href="#" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors duration-200 text-sm">Influencer Marketing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4 uppercase">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={20} className="text-[var(--color-red-primary)] mr-3 flex-shrink-0" />
                <span className="text-white opacity-70 text-sm">Mumbai, Maharashtra, India</span> {/* Updated Address */}
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-[var(--color-red-primary)] mr-3 flex-shrink-0" />
                <span className="text-white opacity-70 text-sm">+91 9326249264</span> {/* Updated Phone */}
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[var(--color-red-primary)] mr-3 flex-shrink-0" />
                <span className="text-white opacity-70 text-sm">twosquidofficial@gmail.com</span> {/* Updated Email */}
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com/TwoSquidMedia" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/twosquidofficial" target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:text-[var(--color-red-primary)] transition-colors">
                <Instagram size={24} />
              </a>
              {/* Removed Twitter and LinkedIn */}
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 mt-10 pt-8 text-center text-white opacity-50 text-sm">
          &copy; {new Date().getFullYear()} Two Squid Media. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
