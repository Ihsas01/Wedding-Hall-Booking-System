# Wedding Hall Booking System

A full-stack web application for booking wedding halls and venues. Built with React, Node.js, Express, and MongoDB.




## ✨ Features

- **User Authentication** (Customer, Admin, Vendor roles)
- **Hall Listing and Search** with advanced filtering
- **Real-time Availability Calendar**
- **Booking Management** with status tracking
- **Payment Integration** with Stripe
- **Admin Dashboard** for managing bookings and users
- **Vendor Dashboard** for hall management
- **Responsive Design** with modern UI
- **Email Notifications** (coming soon)
- **Review System** (coming soon)

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Framer Motion** - Animations
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Express Validator** - Input validation
- **Stripe** - Payment processing
- **Multer** - File uploads

## 📁 Project Structure

```
wedding-hall-booking/
├── client/                 # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/     # Reusable components
│       │   ├── auth/       # Authentication components
│       │   ├── layout/     # Layout components
│       │   └── ui/         # UI components
│       ├── pages/          # Page components
│       │   ├── auth/       # Auth pages
│       │   ├── booking/    # Booking pages
│       │   └── dashboard/  # Dashboard pages
│       ├── services/       # API services
│       └── utils/          # Utility functions
│
├── server/                 # Backend Node.js application
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── config/           # Configuration files
│   └── utils/            # Utility functions
│
├── DEPLOYMENT.md          # Deployment guide
├── deploy.sh             # Deployment script
├── vercel.json           # Vercel configuration
├── netlify.toml          # Netlify configuration
└── render.yaml           # Render configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/wedding-hall-booking.git
cd wedding-hall-booking
```

2. **Install dependencies**
```bash
# Install all dependencies (root, client, and server)
npm run install-all
```

3. **Set up environment variables**

Create `server/.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Create `client/.env`:
```env
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

4. **Start development servers**

```bash
# Start both frontend and backend
npm run dev

# Or start separately:
npm run client  # Frontend only
npm run server  # Backend only
```

## 🌐 Deployment

### Free Deployment Options

This project is configured for free deployment on:

- **Frontend**: Vercel or Netlify
- **Backend**: Render or Railway
- **Database**: MongoDB Atlas (Free Tier)
- **Payments**: Stripe (Free tier)

### Quick Deployment

1. **Run the deployment script**:
```bash
chmod +x deploy.sh
./deploy.sh
```

2. **Follow the deployment guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Manual Deployment Steps

1. **Set up MongoDB Atlas**
   - Create free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create cluster and get connection string

2. **Set up Stripe**
   - Create account at [Stripe](https://stripe.com)
   - Get API keys from dashboard

3. **Deploy Backend (Render)**
   - Connect GitHub repository
   - Set environment variables
   - Deploy

4. **Deploy Frontend (Vercel)**
   - Import GitHub repository
   - Set environment variables
   - Deploy

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Halls Endpoints
- `GET /api/halls` - Get all halls (with filtering)
- `GET /api/halls/:id` - Get hall by ID
- `POST /api/halls` - Create new hall (Vendor/Admin)
- `PUT /api/halls/:id` - Update hall (Owner/Admin)
- `DELETE /api/halls/:id` - Delete hall (Owner/Admin)

### Bookings Endpoints
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:id` - Get booking by ID
- `POST /api/bookings` - Create new booking
- `PATCH /api/bookings/:id/status` - Update booking status (Admin)
- `PATCH /api/bookings/:id/cancel` - Cancel booking

### Payments Endpoints
- `POST /api/payments/create-payment-intent` - Create payment intent
- `POST /api/payments/confirm` - Confirm payment
- `GET /api/payments/status/:bookingId` - Get payment status

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_super_secret_jwt_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.onrender.com
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

## 🧪 Testing

```bash
# Test backend
cd server
npm test

# Test frontend
cd client
npm test
```

## 📊 Database Schema

### User Model
- name, email, password, role
- phone, address, isActive
- timestamps

### Hall Model
- name, description, location
- capacity, price, images
- amenities, features, availability
- vendor reference, isActive

### Booking Model
- hall, customer references
- eventDate, startTime, endTime
- numberOfGuests, eventType
- totalAmount, status, paymentStatus
- contactInfo, specialRequests

## 🔒 Security Features

- JWT authentication
- Password hashing with bcrypt
- Input validation with express-validator
- CORS configuration
- Environment variable protection
- Rate limiting (coming soon)

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Update CORS configuration in server.js
   - Check environment variables

2. **Database Connection**
   - Verify MongoDB URI format
   - Check network access settings

3. **Build Failures**
   - Check package.json scripts
   - Verify all dependencies installed

4. **Payment Issues**
   - Verify Stripe API keys
   - Check webhook configuration

### Debug Commands
```bash
# Check environment variables
echo $MONGODB_URI

# Test database connection
cd server && npm start

# Test frontend build
cd client && npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI framework
- [Express](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Stripe](https://stripe.com/) - Payment processing
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Frontend hosting
- [Render](https://render.com/) - Backend hosting

## 📞 Support

- **Documentation**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Issues**: [GitHub Issues](https://github.com/yourusername/wedding-hall-booking/issues)
- **Email**: your-email@example.com

---

**Made with ❤️ for wedding planners and couples** 
