// models/ItemCategory.ts

import mongoose, { Schema, Document } from 'mongoose';

interface IItemCategory extends Document {
  main: string;     // ex. '바늘'
  sub: string;      // ex. '코바늘'
}

const ItemCategorySchema = new Schema({
  main: { type: String, required: true },
  sub: { type: String, required: true },
});