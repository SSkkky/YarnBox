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

const Schedule = (props) => {
    const {searchText} = props;

    return(
    <Container>
        <SearchBar
            searchText={searchText}
        />
      </Container>
    )
}

export default Schedule;