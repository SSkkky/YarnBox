import connectToDatabase from '@/lib/mongodb';
import Post from '@/models/Post';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET() {
  await connectToDatabase();
  try {
    const posts = await Post.find({});
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: '게시물 불러오기 실패', error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  try {
    const body = await req.json();
    const { title, content } = body;
    const post = new Post({ title, content });
    await post.save();
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: '게시물 저장 실패', error }, { status: 500 });
  }
}
