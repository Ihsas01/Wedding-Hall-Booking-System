import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const featuredHalls = [
  {
    id: 1,
    name: 'Grand Ballroom',
    location: 'New York, NY',
    price: 5000,
    capacity: 500,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
  },
  {
    id: 2,
    name: 'Crystal Palace',
    location: 'Los Angeles, CA',
    price: 4500,
    capacity: 400,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    name: 'Royal Garden',
    location: 'Chicago, IL',
    price: 4000,
    capacity: 350,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredHalls.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredHalls.length) % featuredHalls.length);
  };

  return (
    <div className="overflow-hidden font-sans">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 text-center text-white px-6"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your Dream Venue Awaits
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover and book stunning wedding halls for your unforgettable day
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/halls"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20 hover:scale-105"
            >
              Explore Venues <FaArrowRight className="ml-3" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Halls Slider */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Venues</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most popular wedding venues
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[16/9]"
                >
                  <img
                    src={featuredHalls[currentSlide].image}
                    alt={featuredHalls[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">{featuredHalls[currentSlide].name}</h3>
                      <p className="text-lg mb-4">{featuredHalls[currentSlide].location}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-semibold">${featuredHalls[currentSlide].price}</span>
                        <span className="text-gray-300">|</span>
                        <span>Capacity: {featuredHalls[currentSlide].capacity} guests</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <FaChevronLeft className="text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <FaChevronRight className="text-gray-800" />
            </button>

            <div className="flex justify-center gap-2 mt-4">
              {featuredHalls.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-gray-800 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create your perfect celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Wedding Halls',
                description: 'Elegant venues for your special day',
                icon: '🏰',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Event Planning',
                description: 'Professional planning services',
                icon: '📋',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Catering',
                description: 'Delicious food and beverages',
                icon: '🍽️',
                gradient: 'from-green-500 to-lime-500',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 bg-gradient-to-br ${service.gradient} bg-opacity-10`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-5xl mb-6 text-gray-800">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-base">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Couples Say</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Heartfelt stories from our happy clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah & John',
                text: 'The perfect venue for our wedding. Everything was magical!',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1529154691717-3306083d6339?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
              },
              {
                name: 'Emily & Michael',
                text: 'Professional service and beautiful atmosphere. Highly recommended!',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1530136406830-2a85b360f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
              },
              {
                name: 'Lisa & David',
                text: 'Our guests still talk about how amazing the venue was!',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1521336575822-6a8b7e929781?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-lg" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stay in the Loop</h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe for exclusive updates and special offers
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative w-full sm:w-80">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md text-white placeholder-white/50 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 border border-white/20"
                />
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-8 left-0 right-0 text-white text-sm"
                    >
                      Thank you for subscribing!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-purple-700 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto flex justify-center space-x-8">
          {[
            { icon: FaFacebook, href: '#' },
            { icon: FaTwitter, href: '#' },
            { icon: FaInstagram, href: '#' },
            { icon: FaLinkedin, href: '#' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <social.icon size={28} className="p-3 bg-white/10 rounded-full hover:bg-white/20" />
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;