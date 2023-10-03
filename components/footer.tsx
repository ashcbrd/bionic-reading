const Footer = () => {
  return (
    <footer className="text-white w-screen h-20 flex items-center justify-center bg-gradient-to-tr from-red-500 to-yellow-500 text-xs md:text-base">
      © 2023&nbsp;
      <a className="font-semibold flex" href="https://asther.vercel.app">
        Asther&nbsp;<span className="hidden md:block">Louie Cabardo</span>
      </a>
      &nbsp;• BioReader • All Rights Reserved
    </footer>
  );
};

export default Footer;
