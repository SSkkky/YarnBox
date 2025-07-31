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
  user: { type: mongoose.Schema.Types.ObjectId, ref:'users', required: true },
  name: { type: String, required: true },
  maker: { type: String, required: true },
  brand: { type: String, required: true },
  quantity: { type: Number, required: true },
  color: { type: Number, required: true },
  type: {
    type: String,
    enum: ['yarn', 'needle', 'hook', 'scissors'],
    required: true
  }
});

export default mongoose.models.Knitbox || mongoose.model<IKnitbox>('Knitbox', KnitboxSchema);
