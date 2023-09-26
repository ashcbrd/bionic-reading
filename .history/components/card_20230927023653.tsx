import Image from "next/image";

const Card = () => {
  return (
    <div>
      <Image
        alt="bionic reading"
        src="/page.jpeg"
        width={700}
        height={40}
        className="rounded-xl"
      />
      <div className="absolute top-0 left-0 bg-red-500" />
    </div>
  );
};

export default Card;
