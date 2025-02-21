// src/middleware/authMiddleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function verifyJwt(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXT_APP_AUTH_SECRET });
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  console.log('verifyJwt 인증 성공')
  return null; // 인증 성공
}

export async function withAuth(handler: Function) {
  return async function(request: NextRequest) {
    const authError = await verifyJwt(request);
    if (authError) return authError;
    return handler(request);
  };
}