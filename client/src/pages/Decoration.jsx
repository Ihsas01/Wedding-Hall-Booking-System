import { motion } from 'framer-motion';
import { FaPalette, FaLightbulb, FaCamera, FaMagic } from 'react-icons/fa';

export default function Decoration() {
  const themes = [
    {
      title: 'Classic Elegance',
      description: 'Timeless sophistication with a modern twist.',
      features: [
        'Crystal chandeliers',
        'Luxury drapery',
        'Floral arrangements',
        'Candlelight ambiance',
        'Gold accents'
      ],
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Rustic Charm',
      description: 'Warm and inviting atmosphere with natural elements.',
      features: [
        'Wooden accents',
        'Wildflower arrangements',
        'String lights',
        'Vintage furniture',
        'Natural textures'
      ],
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Modern Minimalist',
      description: 'Clean lines and contemporary design elements.',
      features: [
        'Geometric patterns',
        'Monochrome palette',
        'LED lighting',
        'Minimalist centerpieces',
        'Modern furniture'
      ],
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const services = [
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: 'Theme Development',
      description: 'Custom theme creation based on your vision and preferences.'
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'Lighting Design',
      description: 'Professional lighting solutions to create the perfect ambiance.'
    },
    {
      icon: <FaCamera className="w-8 h-8" />,
      title: 'Photo Backdrops',
      description: 'Stunning backdrops and photo opportunities for your event.'
    },
    {
      icon: <FaMagic className="w-8 h-8" />,
      title: 'Custom Installations',
      description: 'Unique decorative elements tailored to your event theme.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Decoration</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Transform your venue into a magical space with our decoration services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Themes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Themes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our curated collection of decoration themes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{theme.title}</h3>
                <p className="text-gray-600 mb-4">{theme.description}</p>
                <ul className="space-y-2">
                  {theme.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive decoration services for your event.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="text-purple-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8">
              Let's create a stunning atmosphere for your event.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book a Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 