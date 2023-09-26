import Link from "next/link";

const Nav = () => {
  const links = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <div className="flex w-screen">
      <div className="m-auto flex gap-x-4 bg-white/10 py-4 px-6 rounded-full">
        {links.map((link) => {
          return (
            <Link className="text-white" href={link.href} key={link.name}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
