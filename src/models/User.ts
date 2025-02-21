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
  image: string;
  data: ServiceType;
  setting: SettingType;
}

const userSchema = new Schema<UserDocument>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  data: {
    level: { type: Number, default: 1 },
    exp: { type: Number, default: 0 },
  },
  setting: {
    theme: { type: String, default: 'light' },
    originName: { type: Boolean, default: false },
    setName: { type: String, default: '' },
  },
}, {collection: 'users'});

const User = mongoose.models.users || mongoose.model<UserDocument>('users', userSchema);
export default User;
