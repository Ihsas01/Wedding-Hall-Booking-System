import { Link } from 'react-router-dom';

const halls = [
  {
    id: 1,
    name: 'Grand Ballroom',
    location: 'New York, NY',
    price: 5000,
    capacity: 500,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  },
  {
    id: 2,
    name: 'Crystal Palace',
    location: 'Los Angeles, CA',
    price: 4500,
    capacity: 400,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    name: 'Royal Garden',
    location: 'Chicago, IL',
    price: 4000,
    capacity: 350,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  },
];

export default function Halls() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Wedding Halls</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {halls.map((hall) => (
          <div key={hall.id} className="card p-4 flex flex-col">
            <img src={hall.image} alt={hall.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{hall.name}</h2>
            <p className="text-gray-600 mb-1">{hall.location}</p>
            <p className="text-gray-600 mb-1">Capacity: {hall.capacity}</p>
            <p className="text-gray-900 font-bold mb-4">${hall.price}/day</p>
            <Link to={`/halls/${hall.id}`} className="btn btn-primary mt-auto">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
} 