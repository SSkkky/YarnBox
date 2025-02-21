// src/app/api/knitbox/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Knitbox from '@/models/Knitbox';
import { withAuth } from '@/middleware/authMiddleware';

async function getHandler(request: NextRequest) {
  await connectToDatabase();
  const knitboxes = await Knitbox.find({});
  return NextResponse.json(knitboxes);
}

async function postHandler(request: NextRequest) {
  await connectToDatabase();
  const { name, maker, brand, quantity, color } = await request.json();
  const newKnitbox = new Knitbox({ name, maker, brand, quantity, color });
  await newKnitbox.save();
  return NextResponse.json(newKnitbox);
}

async function putHandler(request: NextRequest) {
  await connectToDatabase();
  const { id, name, maker, brand, quantity, color } = await request.json();
  const updatedKnitbox = await Knitbox.findByIdAndUpdate(id, { name, maker, brand, quantity, color }, { new: true });
  return NextResponse.json(updatedKnitbox);
}

async function deleteHandler(request: NextRequest) {
  await connectToDatabase();
  const { id } = await request.json();
  await Knitbox.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Knitbox deleted' });
}

export const GET = withAuth(getHandler);
export const POST = withAuth(postHandler);
export const PUT = withAuth(putHandler);
export const DELETE = withAuth(deleteHandler);
