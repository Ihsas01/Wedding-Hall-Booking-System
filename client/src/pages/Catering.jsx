import { motion } from 'framer-motion';
import { FaUtensils, FaGlassCheers, FaBirthdayCake, FaLeaf } from 'react-icons/fa';

export default function Catering() {
  const menuCategories = [
    {
      title: 'Wedding Menus',
      description: 'Elegant dining experiences for your special day.',
      items: [
        'Plated Dinner Service',
        'Buffet Style Dining',
        'Cocktail Reception',
        'Late Night Snacks',
        'Wedding Cake Service'
      ]
    },
    {
      title: 'Corporate Catering',
      description: 'Professional catering for business events.',
      items: [
        'Breakfast & Brunch',
        'Working Lunches',
        'Coffee Breaks',
        'Networking Receptions',
        'Conference Dinners'
      ]
    },
    {
      title: 'Special Events',
      description: 'Custom menus for any celebration.',
      items: [
        'Birthday Parties',
        'Anniversary Celebrations',
        'Holiday Gatherings',
        'Graduation Parties',
        'Family Reunions'
      ]
    }
  ];

  const specialFeatures = [
    {
      icon: <FaUtensils className="w-8 h-8" />,
      title: 'Custom Menus',
      description: 'Tailored menus to match your event theme and preferences.'
    },
    {
      icon: <FaGlassCheers className="w-8 h-8" />,
      title: 'Beverage Service',
      description: 'Full bar service with professional bartenders.'
    },
    {
      icon: <FaBirthdayCake className="w-8 h-8" />,
      title: 'Dessert Stations',
      description: 'Sweet treats and dessert displays for any occasion.'
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: 'Dietary Options',
      description: 'Accommodating all dietary requirements and preferences.'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-orange drop-shadow-lg">Catering Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Exquisite culinary experiences for every occasion.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Menu Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-orange mb-4">Our Menu Categories</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Discover our diverse range of catering options for any event.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-brand-navy rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-brand-darknavy"
            >
              <h3 className="text-xl font-semibold text-brand-orange mb-3">{category.title}</h3>
              <p className="text-white/80 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-white/80">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Special Features Section */}
      <div className="bg-brand-darknavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-orange mb-4">Special Features</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Additional services to enhance your catering experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-brand-navy rounded-xl p-6 text-center border border-brand-darknavy"
              >
                <div className="text-brand-orange mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-orange mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-darknavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-brand-orange">Ready to Plan Your Menu?</h2>
            <p className="text-xl mb-8 text-white">Let's create a memorable dining experience for your event.</p>
            <button className="bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-navy hover:text-brand-orange transition-colors">
              Request a Quote
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 