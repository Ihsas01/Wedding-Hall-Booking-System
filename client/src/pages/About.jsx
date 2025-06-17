import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUsers, FaHandshake, FaAward, FaQuoteLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [stats, setStats] = useState({ venues: 0, events: 0, customers: 0 });

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

  const testimonials = [
    {
      text: "The perfect venue for our dream wedding. The team was incredibly helpful throughout the process.",
      author: "Sarah & James",
      role: "Newlyweds"
    },
    {
      text: "Professional service and beautiful venues. Made our special day truly memorable.",
      author: "Michael & Emma",
      role: "Happy Couple"
    },
    {
      text: "Outstanding experience from start to finish. Highly recommended!",
      author: "David & Lisa",
      role: "Wedding Clients"
    }
  ];

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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real stories from happy couples</p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto"
                >
                  <FaQuoteLeft className="text-4xl text-purple-600 mb-4" />
                  <p className="text-xl text-gray-600 mb-6">{testimonial.text}</p>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the people behind our success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                position: "Founder & CEO",
                image: "/images/team-1.jpg"
              },
              {
                name: "Jane Smith",
                position: "Head of Operations",
                image: "/images/team-2.jpg"
              },
              {
                name: "Mike Johnson",
                position: "Customer Success Manager",
                image: "/images/team-3.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
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