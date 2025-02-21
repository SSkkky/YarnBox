// components\Header.tsx
"use client"
import React, { useState, useEffect } from "react";
import { signIn } from 'next-auth/react';
import styled from "styled-components";
import { color } from '@/config/config';
import Link from "next/link";

const HeaderStyle = styled.header`
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    h1 a{
        font-size: 1.5rem;
        font-family: 'LeeSeoyun';
        cursor: pointer;
    }

    .user{
        display: flex;
        justify-content: center;
        gap: 0.5rem;

        .text{
            display: flex;
            flex-direction: column;
            gap: 0;
            
            span{
                color: ${color.gray};
                font-size: 0.8rem;
            }
        }

        .login {
            background: transparent;
            border: 0;
            font-size: 1rem;
            color: ${color.gray};
            border-bottom: 1px solid ${color.gray};

            &:hover{
                color: ${color.darkGray};
                border-bottom: 1px solid ${color.darkGray};
            }
        }
    }

    .profile{
        background: ${color.lightPink};
        width: 40px;
        height: 40px;
        border-radius: 100%;
        border-width: 2px;
        border-color: ${color.gray};
        border-style: solid;
        position: relative;
        background-size: contain;
        box-shadow: 4px 4px ${color.orange};
    }
`
type SessionType = {
    expires?: string;
    user?: {
        image?: string | null;
        name?: string | null;
    };
};

type headerType = {
    initAll: () => void;
    user?: SessionType;
    status?: "authenticated" | "loading" | "unauthenticated" | undefined;
}

const Header = (props: headerType) => {
    const { initAll, user, status } = props;
    const defaultBG = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMThfMTc4%2FMDAxNjk3NjExMjE5NTQ2.LqwskHLr7RFC9cQ8WsxIWOP0JHca7KVHVxNMgpxFg8Ag.C7IbSOn9AGLkJqI1_9kJNAVQablDsHUDopD2MlTQc1Yg.JPEG.0lhxx%2FIMG_9912.JPG&type=sc960_832';

    const clickLogo = () => {
        initAll();
    }

    return (
        <HeaderStyle>
            <h1 onClick={clickLogo}>
                <Link href="/">MY YARN BOX</Link>
            </h1>
            <div className="user">
                {status === "authenticated"
                    ? <>
                        <div className="text">
                            <p>{user?.user?.name || "뜨개인"}</p>
                            <span>#LV_</span>
                        </div>
                        <div className="profile"
                            style={{ backgroundImage: `url(${status === "authenticated" ? user?.user?.image : defaultBG})` }}></div>
                    </>
                    : <button className="login" onClick={() => signIn('kakao')}>로그인</button>
                }
            </div>
        </HeaderStyle>
    )
}

export default Header;