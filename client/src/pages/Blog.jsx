import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaSearch, FaArrowRight, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'wedding-planning', name: 'Wedding Planning' },
    { id: 'venue-tips', name: 'Venue Tips' },
    { id: 'decorations', name: 'Decorations' },
    { id: 'catering', name: 'Catering' },
    { id: 'photography', name: 'Photography' }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: '10 Essential Tips for Planning Your Dream Wedding',
      excerpt: 'Discover the key elements that will make your wedding day truly special and memorable.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      category: 'wedding-planning',
      readTime: '5 min read',
      content: 'Planning a wedding can be overwhelming, but with these essential tips, you can create the perfect celebration...'
    },
    {
      id: 2,
      title: 'Choosing the Perfect Wedding Venue: A Complete Guide',
      excerpt: 'Everything you need to know about selecting the ideal venue for your special day.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      category: 'venue-tips',
      readTime: '7 min read',
      content: 'The venue sets the tone for your entire wedding. Learn how to find the perfect location that matches your vision...'
    },
    {
      id: 3,
      title: 'Wedding Decor Trends for 2024',
      excerpt: 'Stay ahead of the curve with these stunning decoration ideas for your wedding.',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      author: 'Emma Davis',
      date: 'March 10, 2024',
      category: 'decorations',
      readTime: '6 min read',
      content: 'From minimalist elegance to bold statement pieces, discover the latest trends in wedding decorations...'
    }
  ];

  const filteredPosts = featuredPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleShare = (post) => {
    setSelectedPost(post);
    setShowShareModal(true);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wedding Blog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover inspiration, tips, and trends for your perfect wedding day.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => handleShare(post)}
                      className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <FaTwitter className="text-blue-400" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600">{post.readTime}</span>
                    <button className="text-purple-600 hover:text-purple-700 flex items-center gap-2">
                      Read More
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for the latest wedding trends and tips.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4 justify-center">
                <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <FaFacebook className="w-6 h-6" />
                </button>
                <button className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                  <FaTwitter className="w-6 h-6" />
                </button>
                <button className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 