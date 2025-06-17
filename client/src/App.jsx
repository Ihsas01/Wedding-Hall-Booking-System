import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Halls from './pages/Halls';
import HallDetails from './pages/HallDetails';
import BookingForm from './pages/booking/BookingForm';
import Payment from './pages/booking/Payment';
import Dashboard from './pages/dashboard/Dashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import VendorDashboard from './pages/dashboard/VendorDashboard';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import EventPlanning from './pages/EventPlanning';
import Catering from './pages/Catering';
import Decoration from './pages/Decoration';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
              borderRadius: '8px',
            },
          }}
        />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/halls" element={<Halls />} />
              <Route path="/halls/:id" element={<HallDetails />} />
              <Route path="/booking/:hallId" element={<BookingForm />} />
              <Route path="/payment/:bookingId" element={<Payment />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/vendor" element={<VendorDashboard />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services/planning" element={<EventPlanning />} />
              <Route path="/services/catering" element={<Catering />} />
              <Route path="/services/decoration" element={<Decoration />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App; 