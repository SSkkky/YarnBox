// components\Header.tsx
"use client"
import React from "react";
import styled from "styled-components";
import { color } from '@/config/config';

const HeaderStyle = styled.header`
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    h1{
        font-size: 1.5rem;
        font-family: 'LeeSeoyun';
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
    }

    .profile{
        background: ${color.lightPink};
        background-image: url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMThfMTc4%2FMDAxNjk3NjExMjE5NTQ2.LqwskHLr7RFC9cQ8WsxIWOP0JHca7KVHVxNMgpxFg8Ag.C7IbSOn9AGLkJqI1_9kJNAVQablDsHUDopD2MlTQc1Yg.JPEG.0lhxx%2FIMG_9912.JPG&type=sc960_832');
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

const Header = () => {
    return(
        <HeaderStyle>
            <h1>MY YARN BOX</h1>
            <div className="user">
                <div className="text">
                    <p>수박부스딱스</p>
                    <span>#LV.1_초보뜨개인</span>
                </div>
                <div className="profile"></div>
            </div>
        </HeaderStyle>
    )
}

export default Header;