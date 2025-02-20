import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

// ✅ Noto_Sans_KR 불러오기
const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  display: "swap",      
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
        {children}
      </body>
    </html>
  );
}
