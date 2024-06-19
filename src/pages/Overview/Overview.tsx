import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Header/Navbar";
import { Footer } from "../../components/Footer/Footer";

export const Overview = () => (
  <main className="flex min-h-screen flex-col bg-bgOverview">
    <Navbar />
    <div className="container mx-auto px-12 py-4 mt-24">
      <Outlet />
    </div>
    <Footer />
  </main>
);
