# Wedding Hall Booking System

A full-stack web application for booking wedding halls, built with **React**, **Node.js**, **Express**, and **MongoDB**.

## ✨ Main Features
- **User Authentication**: Customer, Admin, Vendor roles
- **Hall Listing & Search**: Advanced filtering
- **Real-time Availability Calendar**
- **Booking Management**: Status tracking
- **Payment Integration**: Stripe
- **Admin Dashboard**: Manage bookings/users
- **Vendor Dashboard**: Hall management
- **Responsive Design**: Modern UI

## 🛠️ Tech Stack
### Frontend
- **React.js**, **Vite**, **Tailwind CSS**
- **React Router**, **Axios**, **Framer Motion**

### Backend
- **Node.js**, **Express.js**, **MongoDB**
- **Mongoose**, **JWT**, **Bcrypt**, **Stripe**

## 🚀 Quick Start
### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)

### Installation
1. Clone repo:
   ```bash
   git clone https://github.com/yourusername/wedding-hall-booking.git
   cd wedding-hall-booking
   ```
2. Install dependencies:
   ```bash
   npm run install-all
   ```
3. Set up environment variables:
   - `server/.env`: `PORT`, `MONGODB_URI`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `FRONTEND_URL`
   - `client/.env`: `VITE_API_URL`, `VITE_STRIPE_PUBLIC_KEY`
4. Start servers:
   ```bash
   npm run dev
   ```

## 🌐 Deployment
- **Frontend**: Vercel or Netlify
- **Backend**: Render or Railway
- **Database**: MongoDB Atlas (Free Tier)
- **Payments**: Stripe
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for details.

## 📚 Main API Endpoints
- **Auth**: `/api/auth/register`, `/api/auth/login`, `/api/auth/me`
- **Halls**: `/api/halls`, `/api/halls/:id`, `/api/halls` (CRUD)
- **Bookings**: `/api/bookings`, `/api/bookings/:id`, `/api/bookings` (CRUD)
- **Payments**: `/api/payments/create-payment-intent`, `/api/payments/confirm`

## 📊 Database Schema
- **User**: name, email, password, role, phone
- **Hall**: name, description, location, capacity, price
- **Booking**: hall/customer refs, eventDate, totalAmount, status

## 🔒 Security
- JWT authentication
- Password hashing (bcrypt)
- Input validation
- CORS configuration

## 📞 Support
- [GitHub Issues](https://github.com/Ihsas01/wedding-hall-booking/issues)
- Email: Mohamedihsas001@gmail.com
