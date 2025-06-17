import { motion } from 'framer-motion';

const TermsOfService = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using Wedding Hall Booking System, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) on Wedding Hall Booking System for personal, non-commercial transitory viewing only.'
    },
    {
      title: '3. Booking and Reservations',
      content: 'All bookings are subject to availability and confirmation. We reserve the right to refuse any booking at our discretion. A valid credit card is required to secure your reservation.'
    },
    {
      title: '4. Cancellation Policy',
      content: 'Cancellations must be made at least 48 hours before the scheduled event. Refunds are subject to our cancellation policy and may incur administrative fees.'
    },
    {
      title: '5. User Account',
      content: 'You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.'
    },
    {
      title: '6. Privacy Policy',
      content: 'Your use of Wedding Hall Booking System is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.'
    },
    {
      title: '7. Modifications',
      content: 'We reserve the right to modify these terms of service at any time. We will notify users of any changes by updating the date at the top of these terms.'
    },
    {
      title: '8. Contact Information',
      content: 'If you have any questions about these Terms of Service, please contact us at Mohamedihsas001@gmail.com or call us at 0763913526.'
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
            Terms of Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Please read these terms carefully before using our service
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 text-center text-gray-500"
            >
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService; 