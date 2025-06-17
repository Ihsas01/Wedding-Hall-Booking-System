import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

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
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    description: 'A beautiful venue for your special day.'
  },
  {
    id: 2,
    name: 'Crystal Palace',
    location: 'Los Angeles, CA',
    price: 4500,
    capacity: 400,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'A stunning hall with crystal chandeliers.'
  },
  {
    id: 3,
    name: 'Royal Garden',
    location: 'Chicago, IL',
    price: 4000,
    capacity: 350,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    description: 'A lush garden venue for outdoor weddings.'
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
    return <div className="container mx-auto px-4 py-12">Hall not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="card p-6 flex flex-col md:flex-row gap-8">
        <img src={hall.image} alt={hall.name} className="w-full md:w-1/2 h-80 object-cover rounded-md" />
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{hall.name}</h1>
          <p className="text-gray-600 mb-1">{hall.location}</p>
          <p className="text-gray-600 mb-1">Capacity: {hall.capacity}</p>
          <p className="text-gray-900 font-bold mb-4">${hall.price}/day</p>
          <p className="mb-4">{hall.description}</p>
          <Link to={`/booking/${hall.id}`} className="btn btn-primary w-full md:w-auto">Book Now</Link>
        </div>
      </div>
    </div>
  );
} 