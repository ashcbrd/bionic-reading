import Image from "next/image";

const GuideSection = () => {
  return (
    <div
      id="guide"
      className="h-max w-screen px-32 py-10 flex flex-col gap-y-10"
    >
      <div>
        <h1 className="text-5xl font-bold text-transparent bg-gradient-to-tr bg-clip-text from-red-500 to-yellow-500">
          BioReader User Guide
        </h1>
      </div>
      <div className="flex flex-col w-full gap-y-4 items-start relative">
        <p className="text-xl leading-8 text-primary dark:text-stone-200">
          1. On the top-right corner of the screen, click the{" "}
          <span className="font-semibold text-orange-400">Get Started</span>{" "}
          button to go to the bionic reading page.
        </p>
        <p className="text-xl leading-8 text-primary dark:text-stone-200">
          2. Copy any paragraph of your choice and paste or input it into the
          textarea input field.
        </p>
        <GuideImage src={"/guide.png"} />
        <p className="text-xl leading-8 text-primary dark:text-stone-200">
          3. Click the{" "}
          <span className="font-semibold text-orange-400">Convert</span> button
          and application will display the bionic texts.
        </p>
        <GuideImage src={"/guide2.png"} />
      </div>
    </div>
  );
};

const GuideImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="Guide Image"
      width={1000}
      height={600}
      className="border border-orange-400/50 mx-auto mb-6"
    />
  );
};

export default GuideSection;
