"use client"

import React from 'react';
import styled from 'styled-components';
import { color } from '@/config/config';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    .header{
        width: 100%;
        position: relative;
        text-align: center;
        font-size: 1.5rem;

        .backButton{
            width: 40px;
            height: 40px;
            position: absolute;
            top: 0;
            left: 1rem;
        }
    }
`

const PostForm = styled.form`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .cont{
        width: 100%;
        border: 2px solid ${color.text};
        padding: 1rem;
        border-radius: 1rem;

        box-shadow: 4px 4px ${color.orange};

        b{
            display: inline-block;
            width: 80px;
        }
    }

`

type scheduleProps = {
    backButton: () => void;
    activeMenu: number;
}

const Schedule = (props: scheduleProps) => {
    const { backButton, activeMenu } = props;

    return (
        <Container>
            <section className='header'>
                <button onClick={backButton} className='backButton'>
                    <ArrowBackIosIcon />
                </button>
                <b>{activeMenu === 0 ? '뜨케줄' : (activeMenu === 1 ? '실장고' : '뜨개로그')} 작성</b>
            </section>
            <PostForm action="">
                <section className='cont'>
                    <h3>기본 정보</h3>
                    <ul>
                        <li>
                            <b>제목</b>
                            <input type="text" />
                        </li>
                        <li>
                            <b>사용도구</b>
                            <select name="" id="">
                                <option value="">대바늘</option>
                                <option value="">코바늘</option>
                                <option value="">니팅룸ㅁ</option>
                                <option value="">니팅룸ㅇ</option>
                            </select>
                        </li>
                    </ul>
                </section>

                <section className='cont'>
                    <h3>사용할 실</h3>
                    <section>
                        <p>사용자의 실장고를 불러옴</p>
                    </section>
                </section>

                {/* 대바늘일때 */}
                <section className='cont'>
                    <h3>게이지(*대바늘일때)</h3>
                    <section>
                        <input type="file" />
                    </section>
                </section>

                <section className='cont'>
                    <h3>기간</h3>
                    <input type="date" />
                    <span>~</span>
                    <input type="date" />
                </section>
            </PostForm>
        </Container>
    )
}

export default Schedule;