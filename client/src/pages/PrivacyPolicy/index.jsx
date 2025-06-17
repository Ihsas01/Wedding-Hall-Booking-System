import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaLock, FaUserShield, FaCookie, FaUserCog, FaShieldAlt } from 'react-icons/fa';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 'information-collection',
      title: 'Information Collection',
      icon: FaUserShield,
      content: `We collect information that you provide directly to us, including when you create an account, make a booking, or contact us. This may include your name, email address, phone number, and other relevant details. We also collect information about your use of our services and your interactions with our website.`
    },
    {
      id: 'information-usage',
      title: 'Information Usage',
      icon: FaUserCog,
      content: `We use the information we collect to provide, maintain, and improve our services, to process your bookings, to communicate with you, and to personalize your experience. We may also use your information to send you promotional materials and updates about our services.`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: FaShieldAlt,
      content: `We do not sell or rent your personal information to third parties. We may share your information with our service providers who assist us in operating our website and providing our services. We may also share your information when required by law or to protect our rights.`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: FaLock,
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.`
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      icon: FaCookie,
      content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`
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
    <div className="min-h-screen bg-brand-navy">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-brand-navy to-brand-darknavy text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-orange drop-shadow-lg">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-brand-darknavy">
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
              className="bg-brand-navy rounded-lg shadow-md overflow-hidden border border-brand-darknavy"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-brand-darknavy/80 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <section.icon className="w-6 h-6 text-brand-orange" />
                  <h2 className="text-xl font-semibold text-brand-orange">
                    {section.title}
                  </h2>
                </div>
                <FaChevronDown
                  className={`w-5 h-5 text-brand-orange/80 transition-transform duration-200 ${
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
                    className="px-6 py-4 bg-brand-darknavy/80"
                  >
                    <p className="text-white/80 leading-relaxed">
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
          className="mt-12 text-center text-brand-orange/80"
        >
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 