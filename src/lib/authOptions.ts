import { NextAuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_APP_KAKAO_LOGIN_CLIENT_ID as string,
      clientSecret: process.env.NEXT_APP_KAKAO_LOGIN_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: 'profile_nickname',
        },
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXT_APP_AUTH_SECRET,
  jwt: {
    secret: process.env.NEXT_APP_AUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      console.log('account', account)
      if (user) {
        token.id = user.id as string;
        token.name = user.name as string;
        token.picture = user.image as string;
      }
      if(account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.image = token.picture as string;
      }
      session.accessToken = token.accessToken as string;
      return session;
    },
    async signIn({ user }) {
      try {
        await connectToDatabase();

        const existingUser = await User.findOne({ id: user.id });
        if (!existingUser) {
          console.log('/lib/authOptions/ 사용자 신규 생성');
          const newUser = new User({
            id: user.id!,
            name: user.name!,
            image: user.image!,
            data: {
              level: 1,
              exp: 0,
            },
            setting: {
              theme: 'light',
              originName: false,
              setName: '',
            },
          });
          await newUser.save();
        } else {
          console.log('/lib/authOptions/ 기존 사용자');
          if (user.name) {
            existingUser.name = user.name;
          }
          if (user.image) {
            existingUser.image = user.image;
          }
          await existingUser.save();
        }
        return true;
      } catch (error) {
        console.error('Sign in error:', error);
        return false;
      }
    },
  }
}