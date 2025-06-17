import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUsers, FaHandshake, FaAward, FaQuoteLeft, FaCalendarAlt, FaHeart, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wedding Coordinator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    bio: 'With over 10 years of experience in wedding planning, Sarah ensures every detail is perfect.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Venue Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    bio: 'Michael brings his expertise in hospitality management to create unforgettable experiences.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Event Designer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    bio: 'Emily\'s creative vision transforms spaces into magical wedding venues.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

const milestones = [
  {
    year: '2010',
    title: 'Our Beginning',
    description: 'Started with a single venue and a dream to create magical moments.'
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Expanded to multiple locations across the country.'
  },
  {
    year: '2018',
    title: 'Award Recognition',
    description: 'Received the "Best Wedding Venue" award for three consecutive years.'
  },
  {
    year: '2023',
    title: 'Global Reach',
    description: 'Now serving couples worldwide with our premium venues.'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'John & Mary',
    text: 'The team made our wedding day absolutely perfect. Every detail was taken care of with precision and care.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 2,
    name: 'David & Lisa',
    text: 'Professional, attentive, and truly passionate about creating the perfect wedding experience.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 3,
    name: 'Robert & Emma',
    text: 'From the first meeting to the last dance, everything was executed flawlessly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  }
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [stats, setStats] = useState({ venues: 0, events: 0, customers: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    const targetStats = { venues: 100, events: 500, customers: 1000 };
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    
    const timer = setInterval(() => {
      setStats(prev => ({
        venues: Math.min(prev.venues + targetStats.venues / steps, targetStats.venues),
        events: Math.min(prev.events + targetStats.events / steps, targetStats.events),
        customers: Math.min(prev.customers + targetStats.customers / steps, targetStats.customers)
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity }}
        className="relative py-32 bg-gradient-to-r from-purple-600 to-pink-500"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl max-w-3xl mx-auto"
          >
            We're dedicated to making your special moments unforgettable by providing the perfect venues and services.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: Math.round(stats.venues), label: "Venues" },
              { value: Math.round(stats.events), label: "Events Hosted" },
              { value: Math.round(stats.customers), label: "Happy Customers" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-8 rounded-xl bg-gray-50 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-4xl font-bold text-purple-600 mb-2">{stat.value}+</h3>
                <p className="text-xl text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 2020, we've been helping couples create their dream weddings and events. Our journey began with a simple mission: to make venue booking seamless and enjoyable.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we're proud to be one of the leading wedding hall booking platforms, connecting thousands of happy couples with their perfect venues.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/about-hero.jpg"
                alt="Our Story"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl text-purple-600" />,
                title: "Customer First",
                description: "We prioritize your needs and satisfaction above all else."
              },
              {
                icon: <FaHandshake className="text-4xl text-purple-600" />,
                title: "Trust & Reliability",
                description: "Building lasting relationships through transparency and honesty."
              },
              {
                icon: <FaAward className="text-4xl text-purple-600" />,
                title: "Excellence",
                description: "Committed to delivering the highest quality service."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 transform hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Couples Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Heartfelt stories from our happy clients
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <FaQuoteLeft className="text-4xl text-purple-200 mb-6" />
                  <p className="text-xl text-gray-600 mb-6">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <div className="flex">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <FaChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <FaChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate professionals behind your perfect wedding day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-purple-200 mb-4">{member.role}</p>
                    <p className="text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-4">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="text-white hover:text-purple-300 transition-colors duration-300"
                        >
                          {platform}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you create unforgettable memories. Contact us today to discuss your dream event.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 