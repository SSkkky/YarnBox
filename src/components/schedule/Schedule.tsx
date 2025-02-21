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

type scheduleProps = {
    searchText : string,
    changeSearchInputValue: (newValue:string) => void;
}

const Schedule = (props:scheduleProps) => {

    return(
    <Container>
        <SearchBar {...props}/>
      </Container>
    )
}

export default Schedule;