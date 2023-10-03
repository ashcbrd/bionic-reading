"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { GithubIcon, Menu, MenuIcon } from "lucide-react";

import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "./ui/sheet";

const Nav = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

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

  return (
    <div className="z-50 absolute flex w-screen py-2 md:py-6 px-6 md:px-12 items-center justify-between">
      <p
        onClick={() => {
          if (pathname !== "/") {
            router.push("/");
          }
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="cursor-pointer flex"
      >
        <Logo size={60} className="mt-6 md:mt-0" />
        <span className="hidden md:block -ml-5 text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500 text-2xl font-bold">
          BioReader
        </span>
      </p>
      <div
        className={cn(
          "transition-all duration-300 absolute hidden md:flex right-0 left-0 m-auto w-max ",
          isAtTop
            ? "gap-x-32 text-md"
            : "gap-x-10 bg-white/10 backdrop-blur-sm text-sm py-4 px-6 rounded-full shadow-md border border-orange-400/50 dark:border-slate-200/50 dark:from-transparent dark:to-transparent fixed"
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
      <div className="hidden md:flex items-center gap-x-3">
        <Button variant="primary" className="hover:opacity-75 rounded-full">
          <a
            className="flex text-white items-center"
            href="https://github.com/ashcbrd/bionic-reading"
          >
            Star on <GithubIcon fill="white" className="ml-1" size="16" />
          </a>
        </Button>
        <ModeToggle />
      </div>

      <div className="flex md:hidden gap-x-4">
        <ModeToggle />
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center" side={"top"}>
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
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Nav;
