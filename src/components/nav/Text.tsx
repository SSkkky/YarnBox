"use client"

import React from "react";
import styled from "styled-components";
import { color } from '@/config/config';

const TextComp = styled.div`
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    color: ${color.text};

    .dot{
        width: 6px;
        height: 6px;
        border-radius: 10px;
        background: ${color.text};
    }
`

const Text = (props) => {
    return(
        <TextComp>
            <p>{props.text}</p>
            <div className="dot"></div>
        </TextComp>
    )
}

export default Text;