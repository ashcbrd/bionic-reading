"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const links = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Contact" },
  ];

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex w-screen py-6 px-12 items-center justify-between">
      <a
        href="/"
        className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500 text-2xl font-black"
      >
        BioReader+
      </a>
      <div className="absolute right-0 left-0 m-auto w-max flex gap-x-10 bg-white/10 backdrop-blur-sm py-4 px-6 rounded-full">
        {links.map((link) => {
          return (
            <Link
              className="text-white font-semi-bold text-sm hover:opacity-75 transition"
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {pathname === "/" ? (
        <div className=" cursor-pointer flex text-sm items-center text-white hover:bg-white hover:text-black transition h-max w-max py-1 px-3 border border-white rounded-xl">
          <a href="/bionic-reading">Get Started</a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
