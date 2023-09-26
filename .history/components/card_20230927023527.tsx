import Image from "next/image";

const Card = () => {
  return (
    <>
      <Image
        alt="bionic reading"
        src="/page.jpeg"
        width={700}
        height={40}
        className="rounded-xl border-white border ring-slate-400 ring ring-offset-100"
      />
    </>
  );
};

export default Card;
