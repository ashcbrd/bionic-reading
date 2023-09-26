const Nav = () => {
  const links = [
    { href: "", name: "Home" },
    { href: "", name: "about" },
    { href: "", name: "contact" },
  ];

  return (
    <div className="flex">
      <div className="flex gap-z-2">
        {links.map((link) => {
          return <p key={link.name}>{link.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Nav;
