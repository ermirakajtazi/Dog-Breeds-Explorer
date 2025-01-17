import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
    id: "1",
  },
  {
    title: "Breeds",
    path: "#breeds",
    id: "2",
  },
  {
    title: "Contact",
    path: "#contact",
    id: "3",
  },
];
export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-bgSecondary bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-4">
        <Link
          to="/"
          className="text-2xl md:text-5xl text-textPrimary font-semibold"
        >
          <img
            src="/dog-logo.png"
            alt="logo"
            className="h-12 w-12 md:h-16 md:w-16"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              type="button"
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border border-slate-200 text-slate-200 hover:text-textPrimary hover:border-white rounded"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border border-slate-200 text-slate-200 hover:text-textPrimary hover:border-white rounded"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink href={link.path} title={link.title} id={link.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <ul className="flex flex-col py-4 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink href={link.path} title={link.title} id={link.id} />
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};
