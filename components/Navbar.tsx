"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface LinkItem {
  name: string;
  path: string;
}

const links: LinkItem[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${
            pathname === link.path ? "text-accent border-b-2 border-accent" : ""
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
