# Database Setup Guide

## 🗄️ MongoDB Setup (Current Project)

Your Wedding Hall Booking System uses MongoDB. Here are the setup commands:

### 1. MongoDB Atlas Setup (Recommended)

```bash
# Connection string format
mongodb+srv://username:password@cluster.mongodb.net/wedding-hall-booking
```

### 2. Local MongoDB Setup

```bash
# Install MongoDB locally
# Windows: Download from mongodb.com
# Mac: brew install mongodb-community
# Linux: sudo apt install mongodb

# Start MongoDB service
# Windows: Start MongoDB service
# Mac/Linux: sudo systemctl start mongod

# Connect to MongoDB
mongosh

# Create database
use wedding-hall-booking

# Create collections (tables)
db.createCollection('users')
db.createCollection('halls')
db.createCollection('bookings')
```

### 3. MongoDB Sample Data

```javascript
// Insert sample users
db.users.insertMany([
  {
    name: "John Doe",
    email: "john@example.com",
    password: "$2a$10$hashedpassword",
    role: "customer",
    phone: "+1234567890",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "$2a$10$hashedpassword",
    role: "admin",
    phone: "+1234567891",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Vendor User",
    email: "vendor@example.com",
    password: "$2a$10$hashedpassword",
    role: "vendor",
    phone: "+1234567892",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Insert sample halls
db.halls.insertMany([
  {
    name: "Grand Ballroom",
    description: "A luxurious ballroom perfect for weddings",
    location: {
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001"
    },
    capacity: 500,
    price: 5000,
    images: ["https://example.com/hall1.jpg"],
    amenities: ["Parking", "Catering", "Decoration"],
    features: {
      parking: true,
      catering: true,
      decoration: true,
      audioVisual: true,
      wifi: true,
      airConditioning: true
    },
    availability: "available",
    vendor: ObjectId("vendor_id_here"),
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Crystal Garden",
    description: "Beautiful garden venue for outdoor events",
    location: {
      address: "456 Park Avenue",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90210"
    },
    capacity: 300,
    price: 3500,
    images: ["https://example.com/hall2.jpg"],
    amenities: ["Garden", "Outdoor Space", "Catering"],
    features: {
      parking: true,
      catering: true,
      decoration: false,
      audioVisual: false,
      wifi: true,
      airConditioning: false
    },
    availability: "available",
    vendor: ObjectId("vendor_id_here"),
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Insert sample bookings
db.bookings.insertMany([
  {
    hall: ObjectId("hall_id_here"),
    customer: ObjectId("customer_id_here"),
    eventDate: new Date("2024-06-15"),
    startTime: "18:00",
    endTime: "23:00",
    numberOfGuests: 200,
    eventType: "wedding",
    additionalServices: ["Decoration", "Catering"],
    specialRequests: "Please set up white flowers",
    totalAmount: 5200,
    status: "confirmed",
    paymentStatus: "paid",
    paymentMethod: "stripe",
    contactInfo: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890"
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
```

## 🗄️ SQL Database Setup (Alternative)

If you want to use SQL instead, here are the equivalent SQL queries:

### 1. Create Database

```sql
-- Create database
CREATE DATABASE wedding_hall_booking;
USE wedding_hall_booking;
```

### 2. Create Tables

```sql
-- Users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('customer', 'admin', 'vendor') DEFAULT 'customer',
    phone VARCHAR(20),
    street VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    zip_code VARCHAR(20),
    country VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Halls table
CREATE TABLE halls (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip_code VARCHAR(20),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    capacity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    price_per_hour DECIMAL(10, 2),
    availability ENUM('available', 'booked', 'maintenance') DEFAULT 'available',
    vendor_id INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (vendor_id) REFERENCES users(id)
);

-- Hall images table
CREATE TABLE hall_images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hall_id INT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (hall_id) REFERENCES halls(id) ON DELETE CASCADE
);

-- Hall amenities table
CREATE TABLE hall_amenities (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hall_id INT NOT NULL,
    amenity_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (hall_id) REFERENCES halls(id) ON DELETE CASCADE
);

-- Hall features table
CREATE TABLE hall_features (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hall_id INT NOT NULL,
    parking BOOLEAN DEFAULT FALSE,
    catering BOOLEAN DEFAULT FALSE,
    decoration BOOLEAN DEFAULT FALSE,
    audio_visual BOOLEAN DEFAULT FALSE,
    wifi BOOLEAN DEFAULT FALSE,
    air_conditioning BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (hall_id) REFERENCES halls(id) ON DELETE CASCADE
);

-- Bookings table
CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hall_id INT NOT NULL,
    customer_id INT NOT NULL,
    event_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    number_of_guests INT NOT NULL,
    event_type ENUM('wedding', 'birthday', 'corporate', 'other') DEFAULT 'wedding',
    total_amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
    payment_status ENUM('pending', 'paid', 'refunded') DEFAULT 'pending',
    payment_method ENUM('stripe', 'paypal', 'cash') DEFAULT 'stripe',
    stripe_payment_intent_id VARCHAR(255),
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(20) NOT NULL,
    special_requests TEXT,
    cancellation_reason TEXT,
    cancelled_at TIMESTAMP NULL,
    cancelled_by INT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (hall_id) REFERENCES halls(id),
    FOREIGN KEY (customer_id) REFERENCES users(id),
    FOREIGN KEY (cancelled_by) REFERENCES users(id)
);

-- Booking services table
CREATE TABLE booking_services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT NOT NULL,
    service_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
);
```

### 3. Insert Sample Data (SQL)

```sql
-- Insert sample users
INSERT INTO users (name, email, password, role, phone) VALUES
('John Doe', 'john@example.com', '$2a$10$hashedpassword', 'customer', '+1234567890'),
('Admin User', 'admin@example.com', '$2a$10$hashedpassword', 'admin', '+1234567891'),
('Vendor User', 'vendor@example.com', '$2a$10$hashedpassword', 'vendor', '+1234567892');

-- Insert sample halls
INSERT INTO halls (name, description, address, city, state, capacity, price, vendor_id) VALUES
('Grand Ballroom', 'A luxurious ballroom perfect for weddings', '123 Main Street', 'New York', 'NY', 500, 5000.00, 3),
('Crystal Garden', 'Beautiful garden venue for outdoor events', '456 Park Avenue', 'Los Angeles', 'CA', 300, 3500.00, 3);

-- Insert hall images
INSERT INTO hall_images (hall_id, image_url, is_primary) VALUES
(1, 'https://example.com/hall1.jpg', TRUE),
(2, 'https://example.com/hall2.jpg', TRUE);

-- Insert hall amenities
INSERT INTO hall_amenities (hall_id, amenity_name) VALUES
(1, 'Parking'),
(1, 'Catering'),
(1, 'Decoration'),
(2, 'Garden'),
(2, 'Outdoor Space'),
(2, 'Catering');

-- Insert hall features
INSERT INTO hall_features (hall_id, parking, catering, decoration, audio_visual, wifi, air_conditioning) VALUES
(1, TRUE, TRUE, TRUE, TRUE, TRUE, TRUE),
(2, TRUE, TRUE, FALSE, FALSE, TRUE, FALSE);

-- Insert sample bookings
INSERT INTO bookings (hall_id, customer_id, event_date, start_time, end_time, number_of_guests, event_type, total_amount, status, payment_status, contact_name, contact_email, contact_phone) VALUES
(1, 1, '2024-06-15', '18:00:00', '23:00:00', 200, 'wedding', 5200.00, 'confirmed', 'paid', 'John Doe', 'john@example.com', '+1234567890');

-- Insert booking services
INSERT INTO booking_services (booking_id, service_name) VALUES
(1, 'Decoration'),
(1, 'Catering');
```

### 4. Useful SQL Queries

```sql
-- Get all available halls
SELECT h.*, u.name as vendor_name 
FROM halls h 
JOIN users u ON h.vendor_id = u.id 
WHERE h.is_active = TRUE AND h.availability = 'available';

-- Get user bookings with hall details
SELECT b.*, h.name as hall_name, h.address as hall_address
FROM bookings b
JOIN halls h ON b.hall_id = h.id
WHERE b.customer_id = 1;

-- Get vendor's halls and bookings
SELECT h.*, COUNT(b.id) as total_bookings
FROM halls h
LEFT JOIN bookings b ON h.id = b.hall_id
WHERE h.vendor_id = 3
GROUP BY h.id;

-- Get booking statistics
SELECT 
    status,
    COUNT(*) as count,
    SUM(total_amount) as total_revenue
FROM bookings
GROUP BY status;

-- Search halls by location and capacity
SELECT * FROM halls 
WHERE city LIKE '%New York%' 
AND capacity >= 200 
AND capacity <= 600
AND is_active = TRUE;
```

## 🔧 Database Connection Setup

### For MongoDB (Current Project)

Update your `server/.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/wedding-hall-booking
# OR for MongoDB Atlas:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding-hall-booking
```

### For SQL Database

If you switch to SQL, you'll need to:
1. Install a SQL database (MySQL, PostgreSQL)
2. Update your backend to use SQL instead of MongoDB
3. Use an ORM like Sequelize or Prisma

## 📊 Database Schema Comparison

| Feature | MongoDB | SQL |
|---------|---------|-----|
| Database Type | NoSQL | Relational |
| Schema | Flexible | Fixed |
| Scalability | Horizontal | Vertical |
| Complex Queries | Aggregation Pipeline | JOINs |
| Current Project | ✅ Used | ❌ Not used |

Your current project is optimized for MongoDB, but you can switch to SQL if needed by updating the backend code. 