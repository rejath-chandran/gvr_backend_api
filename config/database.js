import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();





const connectDB = async () => {
    
 const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

  try {
    await mongoose.connect(process.env.MONGO_URI,clientOptions);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;