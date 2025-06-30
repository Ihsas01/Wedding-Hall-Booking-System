-- Wedding Hall Booking System Database Setup
-- Run this script in MySQL Workbench to create the database and tables

-- Create database
CREATE DATABASE IF NOT EXISTS wedding_hall_booking;
USE wedding_hall_booking;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
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

-- Create halls table
CREATE TABLE IF NOT EXISTS halls (
  id INT AUTO_INCREMENT PRIMARY KEY,
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
  images JSON,
  amenities JSON,
  parking BOOLEAN DEFAULT FALSE,
  catering BOOLEAN DEFAULT FALSE,
  decoration BOOLEAN DEFAULT FALSE,
  audio_visual BOOLEAN DEFAULT FALSE,
  wifi BOOLEAN DEFAULT FALSE,
  air_conditioning BOOLEAN DEFAULT FALSE,
  availability ENUM('available', 'booked', 'maintenance') DEFAULT 'available',
  vendor_id INT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (vendor_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hall_id INT NOT NULL,
  customer_id INT NOT NULL,
  event_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  number_of_guests INT NOT NULL,
  event_type ENUM('wedding', 'birthday', 'corporate', 'other') DEFAULT 'wedding',
  additional_services JSON,
  special_requests TEXT,
  total_amount DECIMAL(10, 2) NOT NULL,
  status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
  payment_status ENUM('pending', 'paid', 'refunded') DEFAULT 'pending',
  payment_method ENUM('stripe', 'paypal', 'cash') DEFAULT 'stripe',
  stripe_payment_intent_id VARCHAR(255),
  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(20) NOT NULL,
  cancellation_reason TEXT,
  cancelled_at TIMESTAMP NULL,
  cancelled_by_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (hall_id) REFERENCES halls(id) ON DELETE CASCADE,
  FOREIGN KEY (customer_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (cancelled_by_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_halls_vendor ON halls(vendor_id);
CREATE INDEX idx_halls_city ON halls(city);
CREATE INDEX idx_bookings_customer ON bookings(customer_id);
CREATE INDEX idx_bookings_hall ON bookings(hall_id);
CREATE INDEX idx_bookings_date ON bookings(event_date);
CREATE INDEX idx_bookings_status ON bookings(status);

-- Insert sample admin user (password: admin123)
INSERT INTO users (name, email, password, role) VALUES 
('Admin User', 'admin@weddinghall.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');

-- Insert sample vendor user (password: vendor123)
INSERT INTO users (name, email, password, role) VALUES 
('Vendor User', 'vendor@weddinghall.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'vendor');

-- Insert sample customer user (password: customer123)
INSERT INTO users (name, email, password, role) VALUES 
('Customer User', 'customer@weddinghall.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'customer'); 