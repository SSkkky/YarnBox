"use client"

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color } from '@/config/config';
import Navigation from "@/components/nav/Navigation";
import Header from "@/components/Header";
import Schedule from "@/components/schedule/Schedule";
import YarnBox from "@/components/yarnBox/YarnBox";

const App = styled.section`
    width: 100%;
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${color.white};
`

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [searchText, setSearchText] = useState("");

  const init = () => {
    setSearchText("")
  }

  useEffect(()=>{
    init();
  },[activeMenu])
  
  const clickMenuButton = (i: number) => {
      setActiveMenu(i);
  }

  const renderComponent = () => {
    const props = {activeMenu, searchText};

    switch (activeMenu) {
      case 0:
        return <Schedule {...props}/>;
      default:
        return <YarnBox {...props}/>
    }
  };

  const navProps = {activeMenu, clickMenuButton};

  return (
    <App>
      <Header/>
      {renderComponent()}
      <Navigation {...navProps} />
    </App>
  );
}
