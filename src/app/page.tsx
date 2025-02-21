"use client"

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import styled from "styled-components";
import { color } from '@/config/config';
import Navigation from "@/components/nav/Navigation";
import Header from "@/components/Header";
import Schedule from "@/components/schedule/Schedule";
import YarnBox from "@/components/yarnBox/YarnBox";
import Setting from "@/components/setting/Setting";
import Loading from "@/components/common/Loading";

const App = styled.section`
    width: 100%;
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${color.white};
`

const Contents = styled.section`
    width: 100%;
    height: calc(100svh - 160px);
`

type SessionType = {
  expires?: string;
  user?: {
    image?: string | null;
    name?: string | null;
  };
};

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<SessionType>({});
  const { data: session, status } = useSession();
  const [activeMenu, setActiveMenu] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (status !== 'loading') setLoading(false);
    if (status === "authenticated" && session) {
      setIsLogin(true);
      setUser({
        user: {
          name: session.user?.name ?? undefined,
          image: session.user?.image ?? undefined,
        },
      });
    } else{
      setIsLogin(false);
    }
  }, [status, session]);

  useEffect(() => {
    // 비로그인 상태로 설정메뉴 진입시
    if (activeMenu === 3 && status === "unauthenticated") {
      setActiveMenu(0);
      router.push('/auth/signin');
    }
  }, [activeMenu, status]);


  useEffect(() => {
    // activeMenu 변경시 검색어 초기화
    setSearchText("");
  }, [activeMenu])

  const clickMenuButton = (i: number) => {
    setActiveMenu(i);
  }

  const changeSearchInputValue = (newValue: string) => {
    setSearchText(newValue);
  }

  const initAll = () => {
    setActiveMenu(0);
    setSearchText("");
  }

  const renderComponent = () => {
    const props = { activeMenu, searchText, changeSearchInputValue, initAll };

    switch (activeMenu) {
      case 0:
        return <Schedule {...props} />;
      case 1:
        return <YarnBox {...props} />;
      case 3:
        if(status === "authenticated") return <Setting {...props} />;
      default:
        return <YarnBox {...props} />
    }
  };

  const posting = () => {
    if(status === "unauthenticated"){
      router.push('/auth/signin');
      return;
    }

    console.log(activeMenu);
  }

  const navProps = { activeMenu, clickMenuButton, posting };
  const headerProps = { initAll, user, status };

  return (
    <App>
      <Header {...headerProps} />
      <Contents>
        {loading ? <Loading /> : renderComponent()}
      </Contents>
      <Navigation {...navProps} />
    </App>
  );
}
