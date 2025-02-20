"use client"

import React from 'react';
import styled from 'styled-components';
import SearchBar from "@/components/SearchBar";

const Container = styled.section`
    padding: 2rem;
    width: 100%;
    height: calc(100svh - 160px);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const YarnBox = (props) => {
    const {searchText} = props;

    return(
    <Container>
        <p>관리자에게 문의해주세요.</p>
      </Container>
    )
}

export default YarnBox;