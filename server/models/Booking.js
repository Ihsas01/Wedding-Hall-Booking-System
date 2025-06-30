import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Hall from './Hall.js';

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hallId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'halls',
      key: 'id'
    }
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  eventDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  numberOfGuests: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  eventType: {
    type: DataTypes.ENUM('wedding', 'birthday', 'corporate', 'other'),
    defaultValue: 'wedding'
  },
  additionalServices: {
    type: DataTypes.JSON,
    allowNull: true
  },
  specialRequests: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0
    }
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'cancelled', 'completed'),
    defaultValue: 'pending'
  },
  paymentStatus: {
    type: DataTypes.ENUM('pending', 'paid', 'refunded'),
    defaultValue: 'pending'
  },
  paymentMethod: {
    type: DataTypes.ENUM('stripe', 'paypal', 'cash'),
    defaultValue: 'stripe'
  },
  stripePaymentIntentId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  contactName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  contactPhone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cancellationReason: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  cancelledAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  cancelledById: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id'
    }
  }
}, {
  tableName: 'bookings',
  timestamps: true
});

// Define associations
Booking.belongsTo(Hall, { foreignKey: 'hallId', as: 'hall' });
Booking.belongsTo(User, { foreignKey: 'customerId', as: 'customer' });
Booking.belongsTo(User, { foreignKey: 'cancelledById', as: 'cancelledBy' });

Hall.hasMany(Booking, { foreignKey: 'hallId', as: 'bookings' });
User.hasMany(Booking, { foreignKey: 'customerId', as: 'customerBookings' });
User.hasMany(Booking, { foreignKey: 'cancelledById', as: 'cancelledBookings' });

export default Booking; 