"use client";
import React from "react";
import styled from "styled-components";
import { color } from '@/config/config';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchBarComp = styled.section`
    width: calc(100% - 4rem);
    max-width: 480px;
    border: 2px;
    border-color: ${color.text};
    border-style: solid;
    border-radius: 2rem;
    display: flex;
    padding: 0.5rem 1rem;
    background: ${color.white};
    position: relative;
    z-index: 2;
    box-shadow: 4px 4px ${color.blue};

    input{
        width: 100%;
        background: transparent;
        border: 0;
        outline: none;
        font-size: 1rem;
    }

    .searchButton{
        width: 36px;
        height: 36px;
        background: transparent;
        border: 0;
        outline: none;
        transition: 0.3s ease;

        svg{
            color: ${color.text};
        }

        &:hover{
            background: ${color.lightGray};
            border-radius: 10rem;
        }
    }
`

const SearchBar = (props) => {
    
    return(
        <SearchBarComp>
            <input type="text" />
            <button className="searchButton">
                <SearchRoundedIcon/>
            </button>
        </SearchBarComp>
    )
}

export default SearchBar;