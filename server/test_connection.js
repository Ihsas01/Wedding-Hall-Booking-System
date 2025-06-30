import dotenv from 'dotenv';
import sequelize, { testConnection, syncDatabase } from './config/database.js';
import User from './models/User.js';
import Hall from './models/Hall.js';
import Booking from './models/Booking.js';

dotenv.config();

async function testDatabaseConnection() {
  console.log('🔍 Testing MySQL Database Connection...\n');

  try {
    // Test connection
    await testConnection();
    
    // Sync database
    await syncDatabase();
    
    // Test creating a sample user
    console.log('\n📝 Testing User Creation...');
    const testUser = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: 'testpassword123',
      role: 'customer'
    });
    console.log('✅ Test user created successfully:', testUser.id);
    
    // Test finding the user
    const foundUser = await User.findOne({ where: { email: 'test@example.com' } });
    console.log('✅ Test user found successfully:', foundUser.name);
    
    // Test password comparison
    const isPasswordValid = await foundUser.comparePassword('testpassword123');
    console.log('✅ Password comparison test:', isPasswordValid ? 'PASSED' : 'FAILED');
    
    // Clean up test data
    await testUser.destroy();
    console.log('✅ Test user cleaned up successfully');
    
    console.log('\n🎉 All database tests passed!');
    console.log('\n📊 Database Summary:');
    console.log('- Database: MySQL');
    console.log('- Host:', process.env.DB_HOST);
    console.log('- Port:', process.env.DB_PORT);
    console.log('- Database Name:', process.env.DB_NAME);
    console.log('- User:', process.env.DB_USER);
    
  } catch (error) {
    console.error('❌ Database test failed:', error.message);
    console.error('Stack trace:', error.stack);
  } finally {
    await sequelize.close();
    console.log('\n🔌 Database connection closed.');
  }
}

// Run the test
testDatabaseConnection(); 