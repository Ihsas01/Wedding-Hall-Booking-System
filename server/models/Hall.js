import mongoose from 'mongoose';

const hallSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  capacity: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  pricePerHour: {
    type: Number,
    min: 0
  },
  images: [{
    type: String,
    required: true
  }],
  amenities: [{
    type: String
  }],
  features: {
    parking: {
      type: Boolean,
      default: false
    },
    catering: {
      type: Boolean,
      default: false
    },
    decoration: {
      type: Boolean,
      default: false
    },
    audioVisual: {
      type: Boolean,
      default: false
    },
    wifi: {
      type: Boolean,
      default: false
    },
    airConditioning: {
      type: Boolean,
      default: false
    }
  },
  availability: {
    type: String,
    enum: ['available', 'booked', 'maintenance'],
    default: 'available'
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for search functionality
hallSchema.index({ 
  name: 'text', 
  description: 'text', 
  'location.city': 'text' 
});

export default mongoose.model('Hall', hallSchema); 