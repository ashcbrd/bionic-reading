import Image from "next/image";

const Card = () => {
  return (
    <div className="relative">
      <Image
        alt="bionic reading"
        src="/page.jpeg"
        width={700}
        height={40}
        className="rounded-xl z-20 relative"
      />
      <div className="z-0 absolute top-0 left-0 bg-gradient-to-r from-red-500 to-yellow-500 h-full w-full rounded-xl -translate-x-[100px] rotate-[-10deg] translate-y-20" />
      <div className="z-0 absolute top-0 left-0 bg-gradient-to-r from-red-500 to-yellow-500  h-full w-full rounded-xl translate-x-[100px] rotate-[10deg] translate-y-20" />
    </div>
  );
};

export default Card;
