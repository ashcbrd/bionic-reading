"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";

import { cn } from "@/lib/utils";

const Nav = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      href: "/",
      name: "Home",
      onclick: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
    { href: "//#about", name: "About" },
    { href: "//#guide", name: "User Guide" },
  ];
  const pathname = usePathname();

  return (
    <div className="z-50 fixed flex w-screen py-6 px-12 items-center justify-between">
      <p onClick={() => scrollTo()} className="cursor-pointer flex">
        <Logo size={60} />
        <span className="-ml-5 text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500 text-2xl font-bold">
          BioReader
        </span>
      </p>
      <div
        className={cn(
          "transition-all duration-300",
          isAtTop
            ? "absolute right-0 left-0 m-auto w-max flex gap-x-32 text-md"
            : "absolute right-0 left-0 m-auto w-max flex gap-x-10 dark:bg-white/10 backdrop-blur-sm text-sm py-4 px-6 rounded-full shadow-md border border-slate-200/50 "
        )}
      >
        {links.map((link) => {
          return (
            <Link
              className="dark:text-white font-semi-bold hover:opacity-75 transition"
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-x-3">
        {pathname === "/" ? (
          <div className="bg-gradient-to-tr from-red-500 to-yellow-500 text-white cursor-pointer flex text-sm items-center dark:text-white hover:bg-white hover:opacity-75 transition h-max w-max py-1 px-3 rounded-xl">
            <a href="/bionic-reading">Get Started</a>
          </div>
        ) : (
          ""
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Nav;