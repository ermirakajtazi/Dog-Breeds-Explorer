import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
  id: string;
}
export default function NavLink({ href, title, id }: NavLinkProps) {
  return (
    <a
      key={id}
      href={href}
      className="block py-2 pl-3 pr-4 text-textColor sm:text-xl rounded md:p-0 hover:text-textPrimary"
    >
      {title}
    </a>
  );
}
