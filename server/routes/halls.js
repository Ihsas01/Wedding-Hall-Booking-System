import express from 'express';
import { body, validationResult } from 'express-validator';
import Hall from '../models/Hall.js';
import { auth, vendorAuth, adminAuth } from '../middleware/auth.js';

const router = express.Router();

// Get all halls with filtering and pagination
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      city,
      minCapacity,
      maxCapacity,
      minPrice,
      maxPrice,
      amenities
    } = req.query;

    const query = { isActive: true };

    // Search functionality
    if (search) {
      query.$text = { $search: search };
    }

    // Filter by city
    if (city) {
      query['location.city'] = { $regex: city, $options: 'i' };
    }

    // Filter by capacity
    if (minCapacity || maxCapacity) {
      query.capacity = {};
      if (minCapacity) query.capacity.$gte = parseInt(minCapacity);
      if (maxCapacity) query.capacity.$lte = parseInt(maxCapacity);
    }

    // Filter by price
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseInt(minPrice);
      if (maxPrice) query.price.$lte = parseInt(maxPrice);
    }

    // Filter by amenities
    if (amenities) {
      const amenitiesArray = amenities.split(',');
      query.amenities = { $all: amenitiesArray };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const halls = await Hall.find(query)
      .populate('vendor', 'name email')
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Hall.countDocuments(query);

    res.json({
      halls,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalHalls: total,
        hasNext: skip + halls.length < total,
        hasPrev: parseInt(page) > 1
      }
    });
  } catch (error) {
    console.error('Get halls error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get hall by ID
router.get('/:id', async (req, res) => {
  try {
    const hall = await Hall.findById(req.params.id)
      .populate('vendor', 'name email phone');

    if (!hall) {
      return res.status(404).json({ message: 'Hall not found' });
    }

    res.json({ hall });
  } catch (error) {
    console.error('Get hall error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new hall (Vendor/Admin only)
router.post('/', [
  vendorAuth,
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('location.address').notEmpty().withMessage('Address is required'),
  body('location.city').notEmpty().withMessage('City is required'),
  body('location.state').notEmpty().withMessage('State is required'),
  body('capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be non-negative'),
  body('images').isArray({ min: 1 }).withMessage('At least one image is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const hallData = {
      ...req.body,
      vendor: req.user._id
    };

    const hall = new Hall(hallData);
    await hall.save();

    res.status(201).json({
      message: 'Hall created successfully',
      hall
    });
  } catch (error) {
    console.error('Create hall error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update hall (Owner/Admin only)
router.put('/:id', [
  auth,
  body('name').optional().trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('description').optional().trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('capacity').optional().isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
  body('price').optional().isFloat({ min: 0 }).withMessage('Price must be non-negative')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const hall = await Hall.findById(req.params.id);
    if (!hall) {
      return res.status(404).json({ message: 'Hall not found' });
    }

    // Check if user is owner or admin
    if (hall.vendor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this hall' });
    }

    const updatedHall = await Hall.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      message: 'Hall updated successfully',
      hall: updatedHall
    });
  } catch (error) {
    console.error('Update hall error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete hall (Owner/Admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const hall = await Hall.findById(req.params.id);
    if (!hall) {
      return res.status(404).json({ message: 'Hall not found' });
    }

    // Check if user is owner or admin
    if (hall.vendor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this hall' });
    }

    await Hall.findByIdAndDelete(req.params.id);

    res.json({ message: 'Hall deleted successfully' });
  } catch (error) {
    console.error('Delete hall error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 