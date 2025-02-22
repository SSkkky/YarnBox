"use client"

import React from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { color } from '@/config/config';
import styled from 'styled-components';

type postType = {
    posting: () => void;
}

const Button = styled.button`
            width: 48px;
            height: 48px;
            position: absolute;
            z-index: 100;
            right: 0;
            bottom: 80px;
            transition: 0.3s ease;
            transform: translateX(-50%);
            border-width: 1px;
            border-color: ${color.text};
            border-style: solid;
            border-radius: 1rem;
            background: ${color.blue};

            svg{
                color: ${color.white};
            }

        &:hover{
            border-radius: 10rem;
            color: ${color.white};
            background: ${color.text};
        }
`

const PostButton = (props: postType) => {
    const { posting } = props;

    return (
        <Button onClick={posting}>
            <AddRoundedIcon />
        </Button>
    )
}

export default PostButton;