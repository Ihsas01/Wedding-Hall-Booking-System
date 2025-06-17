import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronLeft, FaChevronRight, FaSearch, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaHeart, FaRegHeart, FaPlay, FaCheck, FaInfoCircle } from 'react-icons/fa';

const featuredHalls = [
  {
    id: 1,
    name: 'Grand Ballroom',
    location: 'New York, NY',
    price: 5000,
    capacity: 500,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    rating: 4.9,
    reviews: 128,
    features: ['Catering Included', 'Parking Available', 'Outdoor Space', 'Bridal Suite'],
  },
  {
    id: 2,
    name: 'Crystal Palace',
    location: 'Los Angeles, CA',
    price: 4500,
    capacity: 400,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    rating: 4.8,
    reviews: 95,
    features: ['Ocean View', 'Full Bar', 'Dance Floor', 'Photo Booth'],
  },
  {
    id: 3,
    name: 'Royal Garden',
    location: 'Chicago, IL',
    price: 4000,
    capacity: 350,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    rating: 4.7,
    reviews: 112,
    features: ['Garden Ceremony', 'Indoor/Outdoor', 'Catering Options', 'DJ Included'],
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah & John',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    text: 'The perfect venue for our dream wedding. The staff was incredibly helpful and the space was breathtaking.',
    rating: 5,
    date: 'June 2023',
  },
  {
    id: 2,
    name: 'Michael & Emma',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    text: 'Everything was perfect from start to finish. The venue exceeded our expectations in every way.',
    rating: 5,
    date: 'August 2023',
  },
  {
    id: 3,
    name: 'David & Lisa',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    text: 'An unforgettable experience. The attention to detail and service was exceptional.',
    rating: 5,
    date: 'September 2023',
  },
];

const stats = [
  { number: '500+', label: 'Weddings Hosted', icon: '🎉' },
  { number: '98%', label: 'Happy Couples', icon: '❤️' },
  { number: '50+', label: 'Premium Venues', icon: '🏰' },
  { number: '24/7', label: 'Support', icon: '🛎️' },
];

const services = [
  {
    id: 1,
    title: 'Wedding Planning',
    description: 'Full-service wedding planning to make your day perfect',
    icon: '📋',
  },
  {
    id: 2,
    title: 'Catering',
    description: 'Customized menus for your special day',
    icon: '🍽️',
  },
  {
    id: 3,
    title: 'Decoration',
    description: 'Stunning decor to match your vision',
    icon: '✨',
  },
  {
    id: 4,
    title: 'Photography',
    description: 'Professional photography to capture memories',
    icon: '📸',
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [favoriteHalls, setFavoriteHalls] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFavorite = (hallId) => {
    setFavoriteHalls(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(hallId)) {
        newFavorites.delete(hallId);
      } else {
        newFavorites.add(hallId);
      }
      return newFavorites;
    });
  };

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

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching with:', { searchQuery, selectedDate, guestCount });
  };

  return (
    <div className="overflow-hidden font-sans">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')]">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm"
        />
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/halls"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20 hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Explore Venues 
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaArrowRight className="ml-3" />
              </motion.span>
            </Link>
            <button
              onClick={() => setShowVideoModal(true)}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
            >
              <FaPlay className="mr-2" /> Watch Video
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md py-6"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search venues..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                />
                <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="number"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  placeholder="Number of guests"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                />
                <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
              >
                Search Venues
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Featured Halls Slider */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Venues
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular wedding venues, each offering unique charm and exceptional service
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredHalls.map((hall) => (
                  <div key={hall.id} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={hall.image}
                          alt={hall.name}
                          className="w-full h-64 object-cover"
                        />
                        <button
                          onClick={() => toggleFavorite(hall.id)}
                          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-300"
                        >
                          {favoriteHalls.has(hall.id) ? (
                            <FaHeart className="w-5 h-5 text-red-500" />
                          ) : (
                            <FaRegHeart className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {hall.name}
                            </h3>
                            <div className="flex items-center text-gray-600">
                              <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                              {hall.location}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FaStar className="w-5 h-5 text-yellow-400 mr-1" />
                            <span className="font-semibold">{hall.rating}</span>
                            <span className="text-gray-500 ml-1">({hall.reviews})</span>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="text-2xl font-bold text-purple-600">
                            ${hall.price.toLocaleString()}
                            <span className="text-sm font-normal text-gray-500">/event</span>
                          </div>
                          <div className="text-gray-600">
                            Capacity: {hall.capacity} guests
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {hall.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <FaCheck className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Link
                          to={`/halls/${hall.id}`}
                          className="block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
                        >
                          View Details
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <FaChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <FaChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive wedding services to make your special day perfect
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-purple-200 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Happy Couples
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from couples who celebrated their special day with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-purple-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for exclusive offers and wedding tips
            </p>
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:border-white/40 transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </motion.button>
              </div>
              <AnimatePresence>
                {showSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 text-green-300"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
              >
                Close
              </button>
              <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/your-video-id"
                  title="Wedding Venue Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;