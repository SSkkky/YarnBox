"use client"

import React from 'react';
import type { JSX } from 'react'; 
import styled from 'styled-components';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TextComp from './Text';
import { color } from '@/config/config';

type NavigationProps = {
    activeMenu: number;
    clickMenuButton: (id: number) => void;
    posting: () => void;
};

type MenuButtonProps = {
    id: number;
    text: string;
    icon: JSX.Element;
    isActive: boolean;
    onClick: (id: number) => void;
}

const Nav = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    padding: 1rem;
    background: ${color.white};

    .inner{
        width: 100%;
        max-width: 1080px;        
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        position: relative;

        button{
            width: calc((100svw - 2rem) / 4);
            background: transparent;
            border: 0;
            padding: 0.5rem;
            cursor: pointer;
            font-family: 'LeeSeoyun';
            font-size: 1.2rem;

            svg{
                color: ${color.gray};
            }
        }
    }
`

const Navigation = (props:NavigationProps) => {
    const {activeMenu, clickMenuButton, posting} = props;

    const menuItems = [
        { id: 0, text: "뜨케줄", icon: <CalendarMonthRoundedIcon /> },
        { id: 1, text: "실장고", icon: <CardGiftcardRoundedIcon /> },
        { id: 2, text: "뜨개로그", icon: <AccountBalanceWalletRoundedIcon /> },
        { id: 3, text: "설정", icon: <SettingsRoundedIcon /> },
    ];

    const MenuButton = ({ id, text, icon, isActive, onClick }:MenuButtonProps) => (
        <button onClick={() => onClick(id)}>
            {isActive ? <TextComp text={text} /> : icon}
        </button>
    );

    return (
        <Nav>
            <section className='inner'>
                {menuItems.map(item => (
                    <MenuButton
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        icon={item.icon}
                        isActive={activeMenu === item.id}
                        onClick={clickMenuButton}
                    />
                ))}
            </section>
        </Nav>
    )
}

export default Navigation;