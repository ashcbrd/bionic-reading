import Link from "next/link";

const Nav = () => {
  const links = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <div className="flex w-screen py-6 px-12 items-center">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500 text-2xl font-bold">
        BioReader+
      </h1>
      <div className="m-auto flex gap-x-10 bg-white/10 backdrop-blur-sm py-4 px-6 rounded-full">
        {links.map((link) => {
          return (
            <Link
              className="text-white font-semi-bold text-sm hover:-translate-y-1 transition"
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex text-sm items-center text-white hover:bg-white hover:text-black transition h-max w-max py-1 px-3 border border-white rounded-xl">
        <p>Get Started</p>
      </div>
    </div>
  );
};

export default Nav;
