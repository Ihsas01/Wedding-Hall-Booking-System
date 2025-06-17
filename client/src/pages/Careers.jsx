import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers, FaRocket, FaGraduationCap } from 'react-icons/fa';

export default function Careers() {
  const jobOpenings = [
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are looking for a skilled Frontend Developer to join our team and help build beautiful, responsive user interfaces.',
      requirements: [
        '3+ years of experience with React.js',
        'Strong knowledge of HTML, CSS, and JavaScript',
        'Experience with modern frontend tools and frameworks',
        'Excellent problem-solving skills'
      ]
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Join our design team to create intuitive and engaging user experiences for our wedding hall booking platform.',
      requirements: [
        '2+ years of UX/UI design experience',
        'Proficiency in Figma or similar design tools',
        'Strong portfolio showcasing web and mobile designs',
        'Experience with user research and testing'
      ]
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Support',
      location: 'On-site',
      type: 'Full-time',
      description: 'Help our customers succeed by providing exceptional support and guidance throughout their journey.',
      requirements: [
        '2+ years in customer success or support role',
        'Excellent communication skills',
        'Experience with CRM tools',
        'Strong problem-solving abilities'
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaBriefcase className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'Clear career paths and opportunities for advancement within the company'
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: 'Great Culture',
      description: 'Work with a diverse team in a supportive and inclusive environment'
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Be part of a team that is revolutionizing the wedding industry'
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: 'Learning',
      description: 'Regular training sessions and opportunities for professional development'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Be part of a team that is transforming the wedding industry through technology and innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a range of benefits to help you grow both personally and professionally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-purple-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Check out our current job openings and find the perfect role for you.
          </p>
        </motion.div>

        <div className="space-y-8">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600">{job.department}</p>
                </div>
                <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
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
            <h2 className="text-3xl font-bold mb-4">Don't see the right role?</h2>
            <p className="text-xl mb-8">
              We're always looking for talented individuals to join our team.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Send us your resume
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 