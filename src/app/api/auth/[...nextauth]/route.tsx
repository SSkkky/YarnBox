// src/app/api/auth/[...nextauth]/route.tsx
import NextAuth from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/authOptions'; // authOptions 가져오기

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// export async function GET(request: Request) {
//   const response = await handler(request);
//   return NextResponse.next(response);
// }

// export async function POST(request: Request) {
//   const response = await handler(request);
//   return NextResponse.next(response);
// }
