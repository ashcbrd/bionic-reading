const Nav = () => {
  const links = [
    { href: "", name: "Home" },
    { href: "", name: "about" },
    { href: "", name: "contact" },
  ];

  return (
    <div className="flex">
      <div className="flex gap-x-6 bg-white/10">
        {links.map((link) => {
          return <p key={link.name}>{link.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Nav;
