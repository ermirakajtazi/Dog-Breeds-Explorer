import React from "react";

export const Footer = () => {
  return (
    <footer className="footer border border-t-border border-l-transparent border-r-transparent border-b-transparent text-textPrimary">
      <div className="p-12 flex justify-between">
        <img src="/dog-logo.png" alt="logo" className="h-12 w-12" />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};
