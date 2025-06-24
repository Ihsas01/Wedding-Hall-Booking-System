# 🚀 Quick Start Guide

## Step 1: Set Up MongoDB

### Option A: MongoDB Atlas (Recommended - Free)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (M0 Free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Replace `<dbname>` with `wedding-hall-booking`

### Option B: Local MongoDB
1. Download MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Install and start MongoDB service

## Step 2: Create Environment Files

### Create `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding-hall-booking
JWT_SECRET=your_super_secret_jwt_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Create `client/.env`:
```env
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

## Step 3: Install Dependencies

```bash
# Install all dependencies
npm run install-all
```

## Step 4: Start the Application

### Start Backend:
```bash
cd server
npm start
```

### Start Frontend (in new terminal):
```bash
cd client
npm run dev
```

## Step 5: Test the Application

1. **Backend**: Visit `http://localhost:5000`
   - Should see: `{"message": "Welcome to Wedding Hall Booking API"}`

2. **Frontend**: Visit `http://localhost:5173`
   - Should see your wedding hall booking website

## Step 6: Test API Endpoints

### Test Authentication:
```bash
# Register a user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "role": "customer"
  }'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Test Halls API:
```bash
# Get all halls
curl http://localhost:5000/api/halls

# Get hall by ID
curl http://localhost:5000/api/halls/[hall_id]
```

## Step 7: Deploy (Optional)

Follow the deployment guide in `DEPLOYMENT.md` to deploy for free on:
- **Frontend**: Vercel or Netlify
- **Backend**: Render or Railway
- **Database**: MongoDB Atlas

## 🚨 Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**
   - Check your MongoDB URI in `server/.env`
   - Make sure MongoDB is running
   - For Atlas: Check network access settings

2. **Port Already in Use**
   - Change PORT in `server/.env`
   - Kill existing processes: `npx kill-port 5000`

3. **CORS Errors**
   - Check FRONTEND_URL in backend environment
   - Make sure frontend is running on correct port

4. **Build Errors**
   - Delete `node_modules` and reinstall
   - Check Node.js version (should be 14+)

### Debug Commands:
```bash
# Check if MongoDB is running
mongosh

# Check environment variables
echo $MONGODB_URI

# Test backend connection
curl http://localhost:5000/health

# Check logs
cd server && npm start
```

## 📞 Need Help?

1. Check the `DEPLOYMENT.md` file for detailed instructions
2. Review the `database-setup.md` file for database setup
3. Check the console logs for error messages
4. Make sure all environment variables are set correctly

## 🎉 Success!

Once everything is running:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000 (shows available endpoints)

Your Wedding Hall Booking System is now running locally! 🎊 