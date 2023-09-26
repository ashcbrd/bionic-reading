import Image from "next/image";

const Card = () => {
  return (
    <>
      <Image
        alt="bionic reading"
        src="/page.jpeg"
        width={700}
        height={40}
        className="rounded-xl opacity-50"
      />
    </>
  );
};

export default Card;
