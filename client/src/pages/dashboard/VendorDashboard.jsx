import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VendorDashboard = () => {
  const [halls, setHalls] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    // Simulated data for now
    setHalls([
      {
        id: 1,
        name: 'Grand Ballroom',
        location: 'New York',
        capacity: 500,
        price: 5000,
        status: 'active'
      },
      {
        id: 2,
        name: 'Crystal Garden',
        location: 'Los Angeles',
        capacity: 300,
        price: 3500,
        status: 'active'
      }
    ]);

    setBookings([
      {
        id: 1,
        hallName: 'Grand Ballroom',
        customerName: 'John Doe',
        date: '2024-06-15',
        status: 'confirmed',
        totalAmount: 5000
      },
      {
        id: 2,
        hallName: 'Crystal Garden',
        customerName: 'Jane Smith',
        date: '2024-07-20',
        status: 'pending',
        totalAmount: 3500
      }
    ]);

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Vendor Dashboard</h1>
      
      {/* Halls Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">My Halls</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add New Hall
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {halls.map(hall => (
            <div key={hall.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{hall.name}</h3>
              <p className="text-gray-600 mb-2">{hall.location}</p>
              <p className="text-gray-600 mb-2">Capacity: {hall.capacity} people</p>
              <p className="text-gray-600 mb-4">Price: ${hall.price}/day</p>
              <div className="flex justify-between">
                <button className="text-blue-500 hover:text-blue-600">Edit</button>
                <button className="text-red-500 hover:text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bookings Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Recent Bookings</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hall</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map(booking => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.hallName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.customerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">${booking.totalAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-500 hover:text-blue-600 mr-3">View</button>
                    <button className="text-green-500 hover:text-green-600">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default VendorDashboard; 