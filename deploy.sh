#!/bin/bash

echo "🚀 Wedding Hall Booking System - Deployment Script"
echo "=================================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Check if .env files exist
if [ ! -f "server/.env" ]; then
    echo "⚠️  Warning: server/.env file not found"
    echo "   Please create server/.env with the following variables:"
    echo "   MONGODB_URI=your_mongodb_connection_string"
    echo "   JWT_SECRET=your_jwt_secret"
    echo "   STRIPE_SECRET_KEY=your_stripe_secret_key"
    echo "   NODE_ENV=production"
    echo "   FRONTEND_URL=your_frontend_url"
fi

if [ ! -f "client/.env" ]; then
    echo "⚠️  Warning: client/.env file not found"
    echo "   Please create client/.env with the following variables:"
    echo "   VITE_API_URL=your_backend_url"
    echo "   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key"
fi

echo ""
echo "📋 Deployment Steps:"
echo "==================="
echo ""
echo "1. 🗄️  Set up MongoDB Atlas:"
echo "   - Go to https://www.mongodb.com/atlas"
echo "   - Create free account and cluster"
echo "   - Get connection string"
echo ""
echo "2. 💳 Set up Stripe:"
echo "   - Go to https://stripe.com"
echo "   - Create account and get API keys"
echo ""
echo "3. 🌐 Deploy Backend (Render):"
echo "   - Go to https://render.com"
echo "   - Connect GitHub repository"
echo "   - Create new Web Service"
echo "   - Set environment variables"
echo ""
echo "4. 🎨 Deploy Frontend (Vercel):"
echo "   - Go to https://vercel.com"
echo "   - Connect GitHub repository"
echo "   - Import project"
echo "   - Set environment variables"
echo ""
echo "5. 🔗 Update CORS settings:"
echo "   - Update FRONTEND_URL in backend environment"
echo "   - Update VITE_API_URL in frontend environment"
echo ""

# Test build locally
echo "🧪 Testing build locally..."
echo ""

# Test backend build
echo "Testing backend..."
cd server
npm install
if [ $? -eq 0 ]; then
    echo "✅ Backend dependencies installed successfully"
else
    echo "❌ Backend dependencies installation failed"
    exit 1
fi
cd ..

# Test frontend build
echo "Testing frontend..."
cd client
npm install
if [ $? -eq 0 ]; then
    echo "✅ Frontend dependencies installed successfully"
else
    echo "❌ Frontend dependencies installation failed"
    exit 1
fi

npm run build
if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful"
else
    echo "❌ Frontend build failed"
    exit 1
fi
cd ..

echo ""
echo "🎉 Local build test completed successfully!"
echo ""
echo "📖 Next Steps:"
echo "=============="
echo "1. Push your code to GitHub"
echo "2. Follow the deployment steps above"
echo "3. Check DEPLOYMENT.md for detailed instructions"
echo ""
echo "🔗 Useful Links:"
echo "================"
echo "• MongoDB Atlas: https://www.mongodb.com/atlas"
echo "• Stripe: https://stripe.com"
echo "• Render: https://render.com"
echo "• Vercel: https://vercel.com"
echo "• Netlify: https://netlify.com"
echo ""
echo "📞 Need Help?"
echo "============="
echo "• Check DEPLOYMENT.md for troubleshooting"
echo "• Review environment variables"
echo "• Test locally first"
echo "• Check deployment logs"
echo ""
echo "✨ Good luck with your deployment!" 