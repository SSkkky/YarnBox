// models/Knitbox.ts

import mongoose, { Schema, Document } from 'mongoose';

interface IKnitbox extends Document {
  name: string;
  maker: string;
  brand: string;
  quantity: number;
  color: number;
}

const KnitboxSchema: Schema = new Schema({
  name: { type: String, required: true },
  maker: { type: String, required: true },
  brand: { type: String, required: true },
  quantity: { type: Number, required: true },
  color: { type: Number, required: true },
});

export default mongoose.models.Knitbox || mongoose.model<IKnitbox>('Knitbox', KnitboxSchema);
