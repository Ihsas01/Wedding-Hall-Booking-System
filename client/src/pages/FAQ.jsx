import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaSearch, FaQuestionCircle, FaCalendarAlt, FaMoneyBillWave, FaUsers, FaInfoCircle } from 'react-icons/fa';

const faqCategories = [
  {
    id: 'booking',
    title: 'Booking & Reservations',
    icon: <FaCalendarAlt className="w-6 h-6" />,
    questions: [
      {
        question: 'How far in advance should I book my wedding venue?',
        answer: 'We recommend booking your wedding venue at least 12-18 months in advance, especially for popular dates and peak seasons. This ensures you have the best selection of venues and dates available.'
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'Our cancellation policy allows for a full refund up to 6 months before the event date. Between 6 months and 3 months, a 50% refund is provided. Cancellations within 3 months of the event date are non-refundable.'
      },
      {
        question: 'Can I visit the venues before booking?',
        answer: 'Absolutely! We encourage venue visits to help you make an informed decision. You can schedule a tour through our website or by contacting our team directly.'
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing & Packages',
    icon: <FaMoneyBillWave className="w-6 h-6" />,
    questions: [
      {
        question: 'What is included in the venue rental fee?',
        answer: 'Our venue rental fee includes the space, basic furniture, staff assistance, and cleaning services. Additional services like catering, decoration, and entertainment can be added to your package.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans to help you manage your budget. A 30% deposit is required to secure your booking, with the remaining balance due 30 days before your event.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'We believe in complete transparency. All fees are clearly outlined in your contract, including venue rental, service charges, and any additional services you choose to add.'
      }
    ]
  },
  {
    id: 'capacity',
    title: 'Capacity & Guest Management',
    icon: <FaUsers className="w-6 h-6" />,
    questions: [
      {
        question: 'What is the maximum capacity of your venues?',
        answer: 'Our venues can accommodate anywhere from 50 to 500 guests, depending on the location. Each venue page on our website lists its specific capacity and layout options.'
      },
      {
        question: 'Do you provide staff for the event?',
        answer: 'Yes, we provide professional staff including venue coordinators, security, and cleaning personnel. Additional staff can be arranged based on your specific needs.'
      },
      {
        question: 'Is there parking available for guests?',
        answer: 'All our venues offer parking facilities. The number of parking spaces varies by location, and valet service can be arranged for an additional fee.'
      }
    ]
  },
  {
    id: 'general',
    title: 'General Information',
    icon: <FaInfoCircle className="w-6 h-6" />,
    questions: [
      {
        question: 'What are your operating hours?',
        answer: 'Our venues are available for events from 8 AM to 12 AM. Setup and cleanup times are arranged based on your specific event schedule.'
      },
      {
        question: 'Do you allow outside vendors?',
        answer: 'Yes, we work with a variety of preferred vendors but also allow outside vendors. All vendors must be licensed and insured, and we can provide recommendations if needed.'
      },
      {
        question: 'What is your alcohol policy?',
        answer: 'We have a licensed bar service and can provide alcohol service through our catering partners. Outside alcohol is not permitted, and all alcohol service must comply with local regulations.'
      }
    ]
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('booking');
  const [expandedQuestions, setExpandedQuestions] = useState(new Set());

  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our wedding venues and services
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {faqCategories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className={`space-y-4 ${activeCategory === category.id ? 'block' : 'hidden'}`}
            >
              {category.questions.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(`${category.id}-${index}`)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <FaQuestionCircle className="text-purple-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedQuestions.has(`${category.id}-${index}`) ? 180 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-gray-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedQuestions.has(`${category.id}-${index}`) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 py-4 bg-gray-50"
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is here to help you with any additional questions you may have
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ; 