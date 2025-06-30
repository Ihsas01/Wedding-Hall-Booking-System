# MySQL Database Setup for Wedding Hall Booking System

## Prerequisites

1. **MySQL Server** - Make sure MySQL is installed and running on your system
2. **MySQL Workbench** - For database management (optional but recommended)
3. **Node.js** - For running the server

## Setup Instructions

### 1. Install MySQL Dependencies

The required packages are already installed:
- `mysql2` - MySQL driver for Node.js
- `sequelize` - ORM for database operations

### 2. Configure Environment Variables

Copy the example environment file and update it with your MySQL credentials:

```bash
cp env.example env.local
```

Update `env.local` with your MySQL settings:

```env
# Backend Environment Variables
PORT=5000

# MySQL Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=wedding_hall_booking
DB_USER=root
DB_PASSWORD=your_mysql_password_here

# JWT Configuration
JWT_SECRET=your_jwt_secret_here

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key_here

# Environment
NODE_ENV=development
```

### 3. Create Database

#### Option A: Using MySQL Workbench

1. Open MySQL Workbench
2. Connect to your MySQL server
3. Open the `database_setup.sql` file
4. Execute the script to create the database and tables

#### Option B: Using MySQL Command Line

```bash
mysql -u root -p < database_setup.sql
```

#### Option C: Manual Setup

1. Connect to MySQL:
```bash
mysql -u root -p
```

2. Create database:
```sql
CREATE DATABASE wedding_hall_booking;
USE wedding_hall_booking;
```

3. Run the SQL commands from `database_setup.sql`

### 4. Test the Connection

Start the server:

```bash
npm run dev
```

You should see:
```
✅ MySQL connection has been established successfully.
✅ Database synchronized successfully.
Server is running on port 5000
Environment: development
Database: MySQL
```

### 5. Sample Data

The setup script includes sample users:

- **Admin**: admin@weddinghall.com / admin123
- **Vendor**: vendor@weddinghall.com / vendor123  
- **Customer**: customer@weddinghall.com / customer123

## Database Schema

### Users Table
- `id` - Primary key
- `name` - User's full name
- `email` - Unique email address
- `password` - Hashed password
- `role` - User role (customer, admin, vendor)
- `phone` - Contact phone number
- `street`, `city`, `state`, `zip_code`, `country` - Address fields
- `is_active` - Account status
- `created_at`, `updated_at` - Timestamps

### Halls Table
- `id` - Primary key
- `name` - Hall name
- `description` - Hall description
- `address`, `city`, `state`, `zip_code` - Location
- `latitude`, `longitude` - GPS coordinates
- `capacity` - Maximum number of guests
- `price` - Base price
- `price_per_hour` - Hourly rate (optional)
- `images` - JSON array of image URLs
- `amenities` - JSON array of amenities
- `parking`, `catering`, `decoration`, etc. - Boolean features
- `availability` - Current status
- `vendor_id` - Foreign key to users table
- `created_at`, `updated_at` - Timestamps

### Bookings Table
- `id` - Primary key
- `hall_id` - Foreign key to halls table
- `customer_id` - Foreign key to users table
- `event_date` - Date of the event
- `start_time`, `end_time` - Event timing
- `number_of_guests` - Number of attendees
- `event_type` - Type of event
- `additional_services` - JSON array of services
- `special_requests` - Additional requirements
- `total_amount` - Total cost
- `status` - Booking status
- `payment_status` - Payment status
- `payment_method` - Payment method used
- `stripe_payment_intent_id` - Stripe payment ID
- `contact_name`, `contact_email`, `contact_phone` - Contact info
- `cancellation_reason` - Reason for cancellation
- `cancelled_at`, `cancelled_by_id` - Cancellation details
- `created_at`, `updated_at` - Timestamps

## Troubleshooting

### Connection Issues
- Verify MySQL server is running
- Check database credentials in `env.local`
- Ensure database exists: `SHOW DATABASES;`

### Permission Issues
- Make sure your MySQL user has proper permissions
- Grant privileges if needed:
```sql
GRANT ALL PRIVILEGES ON wedding_hall_booking.* TO 'your_user'@'localhost';
FLUSH PRIVILEGES;
```

### Port Issues
- Default MySQL port is 3306
- Check if port is available: `netstat -an | grep 3306`

## API Endpoints

Once connected, the following endpoints will be available:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `GET /api/halls` - Get all halls
- `POST /api/halls` - Create new hall (vendor only)
- `GET /api/bookings` - Get bookings
- `POST /api/bookings` - Create new booking
- `POST /api/payments` - Process payments

## Migration from MongoDB

If you were previously using MongoDB:
1. Export your data from MongoDB
2. Transform the data to match the new MySQL schema
3. Import the data using MySQL Workbench or command line tools
4. Update your frontend to work with the new API responses 