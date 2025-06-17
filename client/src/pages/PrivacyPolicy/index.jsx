import React from 'react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We collect information that you provide directly to us, including your name, email address, phone number, and payment information when you make a booking or create an account.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use the information we collect to process your bookings, communicate with you about your reservations, send you updates about our services, and improve our website and services.'
    },
    {
      title: '3. Information Sharing',
      content: 'We do not sell or rent your personal information to third parties. We may share your information with our service providers who assist us in operating our website and conducting our business.'
    },
    {
      title: '4. Data Security',
      content: 'We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.'
    },
    {
      title: '5. Cookies and Tracking',
      content: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
    },
    {
      title: '6. Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications at any time by clicking the unsubscribe link in our emails.'
    },
    {
      title: '7. Children\'s Privacy',
      content: 'Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.'
    },
    {
      title: '8. Changes to This Policy',
      content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.'
    },
    {
      title: '9. Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at Mohamedihsas001@gmail.com or call us at 0763913526.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Last Updated */}
            <div className="mt-12 text-center text-gray-500">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 