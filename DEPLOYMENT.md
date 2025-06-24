# 🚀 Free Deployment Guide for Wedding Hall Booking System

## Overview
This guide will help you deploy your Wedding Hall Booking System for free using:
- **Frontend**: Vercel or Netlify
- **Backend**: Render or Railway
- **Database**: MongoDB Atlas (Free Tier)

## 📋 Prerequisites
1. GitHub account
2. MongoDB Atlas account (free)
3. Stripe account (for payments)
4. Vercel/Netlify account (free)
5. Render/Railway account (free)

## 🗄️ Step 1: Set up MongoDB Atlas (Database)

### 1.1 Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new cluster (M0 Free tier)
4. Set up database access (username/password)
5. Set up network access (allow all IPs: 0.0.0.0/0)

### 1.2 Get Connection String
1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database password
5. Replace `<dbname>` with `wedding-hall-booking`

## 🔧 Step 2: Set up Stripe (Payments)

### 2.1 Create Stripe Account
1. Go to [Stripe](https://stripe.com)
2. Sign up for a free account
3. Get your API keys from the dashboard

### 2.2 Get API Keys
- **Publishable Key**: For frontend
- **Secret Key**: For backend

## 🌐 Step 3: Deploy Backend (Render)

### 3.1 Prepare Backend
1. Push your code to GitHub
2. Make sure `server/package.json` has the correct start script

### 3.2 Deploy on Render
1. Go to [Render](https://render.com)
2. Sign up with GitHub
3. Click "New Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `wedding-hall-booking-api`
   - **Environment**: `Node`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Root Directory**: Leave empty

### 3.3 Set Environment Variables
Add these environment variables in Render:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding-hall-booking
JWT_SECRET=your_super_secret_jwt_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NODE_ENV=production
```

## 🎨 Step 4: Deploy Frontend (Vercel)

### 4.1 Prepare Frontend
1. Update API URL in your frontend code to use the Render backend URL
2. Make sure all environment variables are prefixed with `VITE_`

### 4.2 Deploy on Vercel
1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 4.3 Set Environment Variables
Add these environment variables in Vercel:
```
VITE_API_URL=https://your-render-backend-url.onrender.com
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

## 🔄 Alternative: Deploy on Netlify

### 4.4 Deploy on Netlify
1. Go to [Netlify](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Configure:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

## 🧪 Step 5: Test Your Deployment

### 5.1 Test Backend
- Visit your Render backend URL
- Should see: `{"message": "Welcome to Wedding Hall Booking API"}`

### 5.2 Test Frontend
- Visit your Vercel/Netlify frontend URL
- Test all functionality
- Check if API calls work

## 🔧 Step 6: Update CORS (if needed)

If you get CORS errors, update your backend:

```javascript
// In server/server.js
app.use(cors({
  origin: ['https://your-frontend-url.vercel.app', 'https://your-frontend-url.netlify.app'],
  credentials: true
}));
```

## 📝 Step 7: Custom Domain (Optional)

### 7.1 Vercel Custom Domain
1. Go to your Vercel project settings
2. Add custom domain
3. Update DNS records

### 7.2 Netlify Custom Domain
1. Go to your Netlify site settings
2. Add custom domain
3. Update DNS records

## 🚨 Troubleshooting

### Common Issues:
1. **CORS Errors**: Update CORS configuration
2. **Environment Variables**: Double-check all variables are set
3. **Build Failures**: Check package.json scripts
4. **Database Connection**: Verify MongoDB URI format

### Debug Commands:
```bash
# Test backend locally
cd server && npm start

# Test frontend locally
cd client && npm run dev

# Check environment variables
echo $MONGODB_URI
```

## 📊 Monitoring

### Vercel Analytics
- Built-in analytics for frontend
- Performance monitoring

### Render Monitoring
- Built-in logs
- Performance metrics

### MongoDB Atlas
- Database performance
- Connection monitoring

## 🔒 Security Notes

1. **Never commit `.env` files**
2. **Use strong JWT secrets**
3. **Enable HTTPS everywhere**
4. **Regular security updates**

## 💰 Cost Breakdown

- **Vercel**: Free tier (unlimited)
- **Netlify**: Free tier (unlimited)
- **Render**: Free tier (750 hours/month)
- **MongoDB Atlas**: Free tier (512MB)
- **Stripe**: Free (pay per transaction)

## 🎉 Success!

Your Wedding Hall Booking System is now deployed for free! 

**Frontend URL**: https://your-app.vercel.app
**Backend URL**: https://your-api.onrender.com
**Database**: MongoDB Atlas (Free)

---

**Need Help?**
- Check the troubleshooting section
- Review environment variables
- Test locally first
- Check deployment logs 