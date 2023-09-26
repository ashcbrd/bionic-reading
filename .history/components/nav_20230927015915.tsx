import Link from "next/link";

const Nav = () => {
  const links = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <div className="flex w-screen py-6 px-6">
      <h1 className="text-white">BioReader+</h1>
      <div className="m-auto flex gap-x-10 bg-white/10 backdrop-blur-sm py-4 px-6 rounded-full">
        {links.map((link) => {
          return (
            <Link
              className="text-white font-semi-bold text-sm"
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
