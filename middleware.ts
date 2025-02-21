import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/auth/signin', // 로그인 페이지 경로 설정
  },
});

export const config = {
  matcher: ['/'], // 보호할 경로 설정
};
