import mongoose, { Schema, Document } from 'mongoose';

interface ServiceType {
  level: number;
  exp: number;
}

interface SettingType {
  theme: string;
  originName: boolean;
  setName: string;
}

interface UserDocument extends Document {
  id: string;
  name: string;
  image: string | null;
  data: ServiceType;
  setting: SettingType;
  provider: string,
  createdAt: Date;
}

const userSchema = new Schema<UserDocument>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, default: null,  required: false },
  data: {
    level: { type: Number, default: 1 },
    exp: { type: Number, default: 0 },
  },
  setting: {
    theme: { type: String, default: 'light' },
    originName: { type: Boolean, default: false },
    setName: { type: String, default: '' },
  },
  provider: { type: String, default: 'google' },
  createdAt: { type: Date, default: Date.now },
}, {collection: 'users'});

const User = mongoose.models.users || mongoose.model<UserDocument>('users', userSchema);
export default User;
