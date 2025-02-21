import { useEffect, useState } from 'react';
import { getSession, signIn } from 'next-auth/react';

export const useSessionCheck = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (!session) {
        signIn(); // 로그인 페이지로 리다이렉트
      } else {
        setSession(null); // 세션을 상태로 설정
      }
    };
    checkSession();
  }, []);

  return session;
};
