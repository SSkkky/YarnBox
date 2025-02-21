// src\app\api\user\route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import {withAuth} from '@/middleware/authMiddleware';

async function getHandler(request: NextRequest) {
  try{
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    await connectToDatabase();
    const user = await User.findOne({id : id});

    if(user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  } catch(error){
    console.log(error);
  }
}

async function deleteAccountHandler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    await connectToDatabase();
    const user = await User.findOneAndDelete({ id: id });

    if (user) {
      return NextResponse.json({ message: 'User account deleted successfully' });
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 }); }
    } catch (error) {
      console.error('Error in deleteAccountHandler:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
  

export const GET = await withAuth(getHandler);
export const DELETE = await withAuth(deleteAccountHandler);