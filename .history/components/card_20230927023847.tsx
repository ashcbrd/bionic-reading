import Image from "next/image";

const Card = () => {
  return (
    <div className="relative">
      <Image
        alt="bionic reading"
        src="/page.jpeg"
        width={700}
        height={40}
        className="rounded-xl"
      />
      <div className="absolute top-0 left-0 bg-red-500 h-full w-full rounded-xl -translate-x-[100px] -rotate-10" />
    </div>
  );
};

export default Card;
