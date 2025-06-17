import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaGavel, FaUserCheck, FaHandshake, FaExclamationTriangle, FaBook } from 'react-icons/fa';

const TermsOfService = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 'agreement',
      title: 'Agreement to Terms',
      icon: FaHandshake,
      content: `By accessing and using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting.`
    },
    {
      id: 'eligibility',
      title: 'Eligibility',
      icon: FaUserCheck,
      content: `You must be at least 18 years old to use our services. By using our services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these terms.`
    },
    {
      id: 'bookings',
      title: 'Booking and Cancellation',
      icon: FaBook,
      content: `All bookings are subject to availability and confirmation. We reserve the right to refuse any booking request. Cancellation policies vary by venue and service type. Please review the specific cancellation policy for your booking.`
    },
    {
      id: 'prohibited',
      title: 'Prohibited Activities',
      icon: FaExclamationTriangle,
      content: `You agree not to engage in any activity that may interfere with or disrupt the services or servers and networks connected to the services. This includes unauthorized access, distribution of harmful code, or any other activity that may harm our systems or other users.`
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: FaGavel,
      content: `To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.`
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <section.icon className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <FaChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    expandedSection === section.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-gray-50"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Last Updated Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center text-gray-500"
        >
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService; 