const AboutSection = () => {
  return (
    <div
      id="about"
      className="h-max w-screen px-32 py-10 flex flex-col gap-y-10 z-10 "
    >
      <div>
        <h1 className="pb-2 text-5xl font-bold text-transparent bg-gradient-to-tr bg-clip-text from-red-500 to-yellow-500">
          Enhancing Reading with
          <br /> Bionic Intelligence
        </h1>
      </div>
      <div className="flex flex-col w-full gap-y-4 justify-end items-end">
        <p className="text-xl leading-8 text-primary dark:text-stone-200">
          Welcome to BioReader, where we revolutionize the way you interact with
          written content through the power of Bionic Reading. Our mission is to
          significantly enhance your reading experience by improving
          comprehension, speed, and overall cognitive performance.
        </p>
        <p className="text-xl leading-8 text-primary dark:text-stone-200">
          Imagine a world where absorbing vast amounts of information
          effortlessly is not just a dream, but a reality. At BioReader, we
          envision a future where every individual can excel academically and
          professionally by effortlessly navigating the immense sea of written
          knowledge. Bionic Reading is at the core of this vision—it&apos;s an
          innovative approach that merges human cognition with advanced
          algorithms and interactive techniques. This synergy optimizes how you
          read, comprehend, and retain information, mimicking the natural
          patterns of your brain&apos;s processing.
        </p>
        <p className="text-xl leading-8 text-primary dark:text-stone-200">
          Here&apos;s how BioReader works: You paste the text you want to read
          into our{" "}
          <a
            className="underline underline-offset-2 font-semibold text-orange-400"
            href="/bionic-reading"
          >
            user-friendly interface
          </a>
          , and our cutting-edge algorithms analyze the content. We
          strategically highlight phrases and guide your eye movements to
          enhance reading speed and comprehension.
        </p>
        <p className="text-xl leading-8 text-primary dark:text-stone-200">
          The result? A seamless and efficient reading experience, where you
          grasp and retain the material with newfound clarity. BioReader is
          committed to continuously advancing our technology, ensuring you
          unlock the full potential of your intellect. Join us in this exciting
          journey to revolutionize reading and discover the true capabilities of
          your mind with BioReader.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
