import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

const Hall = sequelize.define('Hall', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: true
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: true
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0
    }
  },
  pricePerHour: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      min: 0
    }
  },
  images: {
    type: DataTypes.JSON,
    allowNull: true
  },
  amenities: {
    type: DataTypes.JSON,
    allowNull: true
  },
  parking: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  catering: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  decoration: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  audioVisual: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  wifi: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  airConditioning: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  availability: {
    type: DataTypes.ENUM('available', 'booked', 'maintenance'),
    defaultValue: 'available'
  },
  vendorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'halls',
  timestamps: true
});

// Define associations
Hall.belongsTo(User, { foreignKey: 'vendorId', as: 'vendor' });
User.hasMany(Hall, { foreignKey: 'vendorId', as: 'halls' });

export default Hall; 