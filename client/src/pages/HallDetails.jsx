import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaMapMarkerAlt, FaUsers, FaDollarSign, FaStar, FaCalendarAlt, FaCheck } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample data - replace with API call
const sampleHall = {
  id: 1,
  name: 'Grand Ballroom',
  location: 'New York, NY',
  price: 5000,
  capacity: 500,
  rating: 4.8,
  description: 'A luxurious ballroom perfect for your dream wedding. Features include crystal chandeliers, marble floors, and a grand staircase.',
  amenities: [
    'Parking',
    'Catering Kitchen',
    'Bridal Suite',
    'Audio/Visual Equipment',
    'Outdoor Space',
    'Wheelchair Accessible',
  ],
  images: [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  ],
  reviews: [
    {
      id: 1,
      author: 'John Doe',
      rating: 5,
      comment: 'Beautiful venue, perfect for our wedding!',
      date: '2024-01-15',
    },
    {
      id: 2,
      author: 'Jane Smith',
      rating: 4,
      comment: 'Great service and beautiful space.',
      date: '2024-02-01',
    },
  ],
};

const halls = [
  {
    id: 1,
    name: 'Grand Ballroom',
    location: 'New York, NY',
    price: 5000,
    capacity: 500,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    description: 'A beautiful venue for your special day.',
    amenities: ['Parking', 'Catering Kitchen', 'Bridal Suite'],
  },
  {
    id: 2,
    name: 'Crystal Palace',
    location: 'Los Angeles, CA',
    price: 4500,
    capacity: 400,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'A stunning hall with crystal chandeliers.',
    amenities: ['Parking', 'Catering Kitchen', 'Bridal Suite'],
  },
  {
    id: 3,
    name: 'Royal Garden',
    location: 'Chicago, IL',
    price: 4000,
    capacity: 350,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    description: 'A lush garden venue for outdoor weddings.',
    amenities: ['Parking', 'Catering Kitchen', 'Bridal Suite'],
  },
];

export default function HallDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [guestCount, setGuestCount] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const hall = halls.find((h) => h.id === Number(id));

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement actual booking logic
      console.log('Booking data:', {
        hallId: id,
        date: selectedDate,
        guestCount,
      });
      toast.success('Booking request submitted!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message || 'Booking failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!hall) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hall not found</h2>
          <Link to="/halls" className="text-purple-600 hover:text-purple-700">
            Return to Halls
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <section className="relative h-[60vh] bg-black">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-full"
        >
          {sampleHall.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${hall.name} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Hall Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h1 className="text-4xl font-bold mb-4">{hall.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <FaMapMarkerAlt className="mr-2" />
                <span>{hall.location}</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(hall.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
                <span className="text-gray-600">({hall.rating})</span>
              </div>
              <p className="text-gray-600 text-lg mb-6">{hall.description}</p>
              
              <h2 className="text-2xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {sampleHall.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Reviews Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Reviews</h2>
              {sampleHall.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 mb-6 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{review.author}</h3>
                    <span className="text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-purple-600 mb-2">${hall.price}</h2>
                <p className="text-gray-600">per day</p>
              </div>

              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaCalendarAlt className="inline mr-2" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUsers className="inline mr-2" />
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={hall.capacity}
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Maximum capacity: {hall.capacity} guests
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Book Now'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Need help? <Link to="/contact" className="text-purple-600 hover:text-purple-700">Contact us</Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 