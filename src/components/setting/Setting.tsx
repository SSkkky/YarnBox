"use client"

import React from 'react';
import styled from 'styled-components';
import { color } from '@/config/config';
import { signOut, getSession } from 'next-auth/react';
import axios from 'axios';
import { unlinkKakaoAccount } from '@/lib/unlink';

const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;

    ul{
        width: 100%;
        padding: 2rem;

        li{
            transition: 0.2s ease;
            padding: 1rem;
            border: 1px solid ${color.darkGray};
            border-radius: 1rem;
            margin-bottom: 1rem;
            box-shadow: 4px 4px ${color.gray};
            cursor: pointer;
        }

        li:hover{
            font-weight: 700;
            transform: translateX(10px);
            box-shadow: 4px 4px ${color.blue};

            &::before{
                content: "> "
            }
        }
    }
`

type scheduleProps = {
    initAll: () => void;
}

const Setting = (props: scheduleProps) => {
    const { initAll } = props;

    const disable = () => {
        window.alert('개발중인 기능입니다.')
    }

    const handleDeleteAccount = async () => {
        console.log('start handleDeleteAccount -----')
        const session = await getSession();
        console.log('~~~~~~~~~~~    session    ~~~~~~~~~~~~~~~');
        console.log(session);

        if (session) {
            const { id } = session.user;
            console.log('id : ', id)

            try {
                console.log('1) 데이터베이스 삭제')
                await axios.delete('/api/user', {
                    params: { id },
                })
                    .then((response) => {
                        console.log('delete 통신 성공:', response.data);
                    })
                    .catch((error) => {
                        console.error('delete 통신 실패:', error);
                    })

                console.log('2) 카카오 연결 끊기')
                console.log(session)
                const accessToken = session.accessToken as string;
                console.log('accessToken = ', accessToken)
                await unlinkKakaoAccount(accessToken);

                // 3) 로그아웃 처리
                console.log('3) 로그아웃 처리')
                await signOut();

                // 4) state 초기화, 초기화면으로 이동
                console.log('4) state 초기화, 초기화면으로 이동')
                initAll();
            } catch (error) {
                console.error('Account deletion failed:', error);
            }
        }
    }

    return (
        <Container>
            <ul>
                <li onClick={disable}>테마 설정</li>
                <li onClick={disable}>닉네임 변경</li>
                <li onClick={() => signOut()}>로그아웃</li>
                <li onClick={handleDeleteAccount}>탈퇴</li>
            </ul>
        </Container>
    )
}

export default Setting;