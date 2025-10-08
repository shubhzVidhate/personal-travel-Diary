import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err.message);
  });


const app = express();

app.listen(3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

