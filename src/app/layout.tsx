import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import "./globals.css";

// ✅ Noto_Sans_KR 불러오기
const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  display: "swap",
  preload: false,
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "YARN BOX",
  description: "뜨케줄과 실장고를 기록해보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={notoSansKR.className}>
        <SessionProviderWrapper>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
