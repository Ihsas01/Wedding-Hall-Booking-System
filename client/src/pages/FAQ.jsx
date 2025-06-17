import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I book a wedding hall?',
      answer: 'To book a wedding hall, simply browse our available venues, select your preferred date and time, and follow the booking process. You\'ll need to create an account, provide your details, and make a deposit payment to secure your booking.'
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'Our cancellation policy allows for full refunds up to 48 hours before the event. Cancellations made within 48 hours of the event may be subject to a partial refund or credit for future use. Please refer to our Terms of Service for detailed information.'
    },
    {
      question: 'Can I modify my booking?',
      answer: 'Yes, you can modify your booking through your account dashboard. Changes to date, time, or venue are subject to availability and may incur additional charges. Please contact our support team for assistance with modifications.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and online payment methods. Payment can be made securely through our platform. A deposit is required to confirm your booking, with the remaining balance due before the event.'
    },
    {
      question: 'Do you offer catering services?',
      answer: 'Yes, we offer comprehensive catering services through our partner vendors. You can choose from various menu options and customize them according to your preferences. Please contact us for detailed catering packages and pricing.'
    },
    {
      question: 'What is included in the venue rental?',
      answer: 'Our venue rental includes the space, basic furniture, lighting, and sound system. Additional services such as decoration, catering, and entertainment can be arranged separately. Please check the specific venue details for a complete list of inclusions.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 6-12 months in advance, especially for popular dates and venues. However, we do accept last-minute bookings subject to availability. Contact us to check current availability.'
    },
    {
      question: 'Do you offer wedding planning services?',
      answer: 'Yes, we offer comprehensive wedding planning services through our experienced team. Our planners can help with everything from venue selection to vendor coordination. Please contact us for more information about our planning packages.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Find answers to common questions about our services
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
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {expandedIndex === index ? (
                    <FaChevronUp className="text-purple-600" />
                  ) : (
                    <FaChevronDown className="text-purple-600" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600">
              Still have questions? Contact our support team at{' '}
              <a href="mailto:Mohamedihsas001@gmail.com" className="text-purple-600 hover:text-purple-700">
                Mohamedihsas001@gmail.com
              </a>
              {' '}or call us at{' '}
              <a href="tel:0763913526" className="text-purple-600 hover:text-purple-700">
                0763913526
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 