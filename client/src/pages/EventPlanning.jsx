import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaCheckCircle, FaClock, FaStar } from 'react-icons/fa';

export default function EventPlanning() {
  const services = [
    {
      title: 'Wedding Planning',
      description: 'Complete wedding planning services from venue selection to day-of coordination.',
      features: [
        'Venue selection and booking',
        'Vendor coordination',
        'Timeline creation',
        'Budget management',
        'Day-of coordination'
      ]
    },
    {
      title: 'Corporate Events',
      description: 'Professional planning for corporate meetings, conferences, and team building events.',
      features: [
        'Venue sourcing',
        'Catering coordination',
        'Audio-visual setup',
        'Guest management',
        'Event logistics'
      ]
    },
    {
      title: 'Social Gatherings',
      description: 'Memorable celebrations for birthdays, anniversaries, and special occasions.',
      features: [
        'Theme development',
        'Decoration planning',
        'Entertainment booking',
        'Guest list management',
        'Timeline coordination'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah & John',
      event: 'Wedding',
      rating: 5,
      comment: 'Our wedding was perfect thanks to the amazing planning team!'
    },
    {
      name: 'TechCorp Inc.',
      event: 'Annual Conference',
      rating: 5,
      comment: 'Professional service and flawless execution of our corporate event.'
    },
    {
      name: 'Maria',
      event: 'Birthday Party',
      rating: 5,
      comment: 'Made my 30th birthday celebration truly special and stress-free.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-darknavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-orange drop-shadow-lg">Event Planning Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Let us turn your vision into a memorable event with our professional planning services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-orange mb-4">Our Services</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Comprehensive event planning solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-brand-navy rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-brand-darknavy"
            >
              <h3 className="text-xl font-semibold text-brand-orange mb-3">{service.title}</h3>
              <p className="text-white/80 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white/80">
                    <FaCheckCircle className="text-brand-orange mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-brand-darknavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-orange mb-4">Our Process</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              A streamlined approach to creating your perfect event.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <div className="bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-brand-orange">
                <FaCalendarAlt className="text-brand-orange text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-orange">Initial Consultation</h3>
              <p className="text-white/80">We discuss your vision, requirements, and budget.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-brand-orange">
                <FaUsers className="text-brand-orange text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-orange">Planning & Coordination</h3>
              <p className="text-white/80">We handle all the details and vendor coordination.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center"
            >
              <div className="bg-brand-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-brand-orange">
                <FaClock className="text-brand-orange text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-orange">Execution</h3>
              <p className="text-white/80">We ensure everything runs smoothly on the day.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-orange mb-4">Client Testimonials</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="bg-brand-navy rounded-xl p-6 shadow-md border border-brand-darknavy"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 mb-4">{testimonial.comment}</p>
              <div>
                <p className="font-semibold text-brand-orange">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-darknavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
            <p className="text-xl mb-8">
              Let's create something extraordinary together.
            </p>
            <button className="bg-brand-orange text-brand-navy px-8 py-3 rounded-lg font-semibold hover:bg-brand-darknavy transition-colors">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 