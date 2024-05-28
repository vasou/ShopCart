import React from "react";
import HeaderNav from "../navigation/HeaderNav";
import FooterNav from "../navigation/FooterNav";

interface PageLayoutProps {
  children: React.ReactNode;
}
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <HeaderNav />
      {children}
      <FooterNav />
    </>
  );
}
