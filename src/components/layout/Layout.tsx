import React from "react";
import Wrapper from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;
