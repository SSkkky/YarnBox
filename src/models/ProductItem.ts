// models/ProductItem.ts

import mongoose, { Types, Schema, Document } from 'mongoose';

interface IProductItem extends Document {
  name: string;
  categoryId: Types.ObjectId;  // → ItemCategory 참조
  brandId: Types.ObjectId;     // → Brand 참조
  quantity: number;
  colorCode?: string;
  customBrandName?: string;    // "직접 입력" 시 저장됨
  userId: string;              // 등록한 사용자
}

const ProductItemSchema = new Schema({
  name: { type: String, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: 'ItemCategory', required: true },
  brandId: { type: Schema.Types.ObjectId, ref: 'Brand', required: false },
  customBrandName: { type: String, required: false },
  quantity: { type: Number, required: true },
  colorCode: { type: String },
  userId: { type: String, required: true },
});