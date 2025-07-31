// models/Brand.ts

import mongoose, { Schema, Document } from 'mongoose';

interface IBrand extends Document {
  name: string;
  approved: boolean; // false면 사용자 요청 등록 브랜드 (관리자 승인 필요)
}

const BrandSchema = new Schema({
  name: { type: String, required: true, unique: true },
  approved: { type: Boolean, default: false },
});