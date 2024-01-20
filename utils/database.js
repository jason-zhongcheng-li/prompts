import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
   mongoose.set('strictQuery', true);

   if (isConnected) {
      console.info('MongoDB is already connected');
   }

   try {
      await mongoose.connect(process.env.MONGODB_URI, {
         dbName: 'share_prompt',
      });
      isConnected = true;
      console.info('MongoDB connected');
   } catch (error) {
      console.error(error);
   }
};

export const disconnectToDB = async () => {
   try {
      if (isConnected) {
         await mongoose.disconnect();
      }
      isConnected = false;
      console.info('MongoDB disconnected');
   } catch (error) {
      console.error(error);
   }
};
