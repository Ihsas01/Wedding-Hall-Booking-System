import { motion } from 'framer-motion';
import { FaSearch, FaQuestionCircle, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';

const HelpCenter = () => {
  const helpCategories = [
    {
      title: 'Booking Process',
      description: 'Learn how to book a venue and manage your reservations',
      icon: <FaQuestionCircle className="text-4xl text-purple-600" />
    },
    {
      title: 'Payment & Refunds',
      description: 'Information about payment methods and refund policies',
      icon: <FaQuestionCircle className="text-4xl text-purple-600" />
    },
    {
      title: 'Venue Information',
      description: 'Details about our venues and available amenities',
      icon: <FaQuestionCircle className="text-4xl text-purple-600" />
    },
    {
      title: 'Account Management',
      description: 'How to manage your account and profile settings',
      icon: <FaQuestionCircle className="text-4xl text-purple-600" />
    }
  ];

  const contactOptions = [
    {
      title: 'Phone Support',
      description: 'Call us at 0763913526',
      icon: <FaPhone className="text-4xl text-purple-600" />
    },
    {
      title: 'Email Support',
      description: 'Email us at Mohamedihsas001@gmail.com',
      icon: <FaEnvelope className="text-4xl text-purple-600" />
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: <FaComments className="text-4xl text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Help Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Find answers to your questions and get support
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-purple-600">
                <FaSearch size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Need More Help?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="mb-4 flex justify-center">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter; 