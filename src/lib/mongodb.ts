// src\lib\mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_APP_MONGO_URI as string;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI 환경 변수가 설정되지 않았습니다.');
}

let cachedConn: typeof mongoose | null = null;
let cachedPromise: Promise<typeof mongoose> | null = null;

async function connectToDatabase() {
  if (cachedConn) {
    console.log('Using cached database connection');
    return cachedConn;
  }

  if (!cachedPromise) {
    cachedPromise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('New database connection established');
      cachedConn = mongoose;
      return mongoose;
    });
  }
  cachedConn = await cachedPromise;
  return cachedConn;
}

export default connectToDatabase;
