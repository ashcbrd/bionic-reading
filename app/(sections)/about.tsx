const AboutSection = () => {
  return (
    <div
      id="about"
      className="h-max w-screen px-10 md:px-32 py-10 flex flex-col md:gap-y-10 z-10 "
    >
      <div>
        <h1 className="pb-2 text-xl md:text-5xl font-bold text-transparent bg-gradient-to-tr bg-clip-text from-red-500 to-yellow-500">
          About Bioreader
        </h1>
      </div>
      <div className="flex flex-col w-full gap-y-2 md:gap-y-4 items-start">
        <p className="text-sm md:text-xl md:leading-8 text-primary dark:text-stone-200">
          Welcome to Bioreader, a cutting-edge web application that
          revolutionizes how you read and experience texts. Bioreader transforms
          ordinary text into a bionic reading format, allowing you to engage
          with content in an entirely new and exciting way.
        </p>
        <h1 className="pt-2 text-md md:text-3xl font-bold">
          Embrace Bionic Reading
        </h1>
        <p className="text-sm md:text-xl md:leading-8 text-primary dark:text-stone-200">
          Bioreader leverages advanced technology to infuse a bionic touch into
          your reading experience. Bionic reading involves merging the
          efficiency of technology with the natural fluency of reading. Our
          platform utilizes state-of-the-art algorithms to enhance the reading
          process, making it more intuitive and efficient.
        </p>
        <h1 className="pt-2 text-md md:text-3xl font-bold">
          Customize Your Bionic Reading Experience
        </h1>
        <p className="text-sm md:text-xl md:leading-8 text-primary dark:text-stone-200">
          <b>• Font Size:</b> Adjust the font size to suit your comfort and
          preferences, ensuring an effortless reading experience. <br />
          <b>• Font Color:</b> Tailor the color of the bionic text to enhance
          visibility and create a visually appealing reading environment.
          <br /> <b>• Background Color:</b> Personalize the background color to
          complement the bionic text and optimize readability based on your
          preferences.
        </p>
        <h1 className="pt-2 text-md md:text-3xl font-bold">
          Join the Bionic Reading Revolution
        </h1>
        <p className="text-sm md:text-xl md:leading-8 text-primary dark:text-stone-200">
          Bioreader is on a mission to redefine how we interact with text. We
          envision a future where reading is not just a passive activity but an
          engaging, dynamic experience. With Bioreader, you can be part of this
          exciting journey into the future of reading.
        </p>
        <p className="text-sm md:text-xl md:leading-8 text-primary dark:text-stone-200">
          We invite you to dive into the world of bionic reading and let
          Bioreader be your guide to a captivating reading adventure!
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
