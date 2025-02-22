"use client"
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styled from "styled-components";
import { color } from '@/config/config';
import Image from 'next/image';
import Logo from '@/app/assets/image/logo.png';

const SignIn = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
background: #fff;
width: 100%;
height: 100svh;

  img{
    width: calc(100svw - 6rem);
    height: calc(100svw - 6rem);
    max-width: 400px;
    max-height: 400px;
    object-fit: contain;
  }

  button{
    background: transparent;
    border: 0;
  }

  button{
    transition: 0.2s ease;
    width: calc(100svw - 6rem);
    max-width: 400px;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .back{
    border: 1px solid ${color.gray};

    &:hover{
      background: ${color.lightGray};
    }
  }

  .kakao{
    background: ${color.orange};

    &:hover{
      color: ${color.white};
      background: ${color.darkGray};
    }
  }
`

export default function SignInPage() {{
  const { status } = useSession();
  const router = useRouter();

   useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  return (
    <SignIn>
      <h1>로그인</h1>
      <Image src={Logo} alt="브랜드 로고"/>
      <button className='kakao' onClick={() => signIn('kakao')}>
        카카오로 로그인
      </button>
      <button className="back" onClick={()=> router.back()}>뒤로가기</button>
    </SignIn>
  );
}}