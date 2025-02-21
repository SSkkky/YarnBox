"use client"

import React from 'react';
import styled from 'styled-components';
import SearchBar from "@/components/SearchBar";

const Container = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

type yarnboxProps = {
    searchText : string
}

const YarnBox = (props: yarnboxProps) => {
    const {searchText} = props;

    return(
    <Container>
        <p>관리자에게 문의해주세요.</p>
        {searchText}
      </Container>
    )
}

export default YarnBox;