import React from "react";
import { Navbar } from "../components";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="h-[calc(100vh-4rem)] bg-[#f9fafe] p-4">{children}</main>
    </div>
  );
};

export default Layout;
