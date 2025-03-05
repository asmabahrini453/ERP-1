import React from "react";
import "../globals.css";
import { Sidebar } from "@/components/default/Sidebar";
import { Header } from "@/components/default/Header";
import { Footer } from "@/components/default/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  return (
    <div className="min-h-screen flex bg-light-gray">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">{children}</main>
        <Footer/>
      </div>
      
    </div>
  );
};

export default Layout;
