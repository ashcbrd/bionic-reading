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
      <div />
    </div>
  );
};

export default Card;
