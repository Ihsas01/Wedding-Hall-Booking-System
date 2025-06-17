# Wedding Hall Booking System

A full-stack web application for booking wedding halls and venues. Built with React, Node.js, Express, and MongoDB.

## Features

- User Authentication (Customer, Admin, Vendor roles)
- Hall Listing and Search
- Advanced Filtering (Location, Date, Capacity, Price)
- Availability Calendar
- Booking Management
- Payment Integration
- Admin Dashboard
- Responsive Design

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Redux Toolkit
- Axios
- React Icons
- React Calendar

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Express Validator

## Project Structure

```
wedding-hall-booking/
├── client/                 # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/         # Page components
│       ├── features/      # Redux slices
│       ├── services/      # API services
│       ├── utils/         # Utility functions
│       └── assets/        # Images and other assets
│
└── server/                # Backend Node.js application
    ├── config/           # Configuration files
    ├── controllers/      # Route controllers
    ├── models/          # Database models
    ├── routes/          # API routes
    ├── middleware/      # Custom middleware
    └── utils/           # Utility functions
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/wedding-hall-booking.git
cd wedding-hall-booking
```

2. Install frontend dependencies
```bash
cd client
npm install
```

3. Install backend dependencies
```bash
cd ../server
npm install
```

4. Create a .env file in the server directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

5. Start the development servers

Frontend:
```bash
cd client
npm start
```

Backend:
```bash
cd server
npm run dev
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user

### Halls
- GET /api/halls - Get all halls
- GET /api/halls/:id - Get hall by ID
- POST /api/halls - Create new hall (Admin only)
- PUT /api/halls/:id - Update hall (Admin only)
- DELETE /api/halls/:id - Delete hall (Admin only)

### Bookings
- GET /api/bookings - Get user bookings
- POST /api/bookings - Create new booking
- PUT /api/bookings/:id - Update booking
- DELETE /api/bookings/:id - Cancel booking

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 