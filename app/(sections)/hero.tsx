import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="h-screen md:h-max pb-32">
      <section
        id="hero"
        className="w-full h-max flex items-center justify-center flex-col gap-y-10 mt-12 z-10 relative"
      >
        <div className="flex flex-col justify-center items-center gap-y-2">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-bold text-3xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500"
          >
            Empower Your Mind
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-md md:text-4xl text-primary dark:text-stone-100 tracking-wide font-semibold"
          >
            Bionic Reading for a Digital Age
          </motion.p>
        </div>
        <div className="gap-y-4 flex flex-col">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex w-full items-center justify-center"
          >
            <a href="/bionic-reading" className="flex items-center">
              <Button
                variant="primary"
                className="text-white rounded-full flex gap-x-2 group transition-all duration-200 justify-start"
              >
                Get Started
                <ArrowRight
                  size="20"
                  className="hidden md:block group-hover:ml-4 transition-all duration-200"
                />
              </Button>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 2,
            duration: 0.05,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Card />
        </motion.div>
      </section>
    </div>
  );
};

const Card = () => {
  return (
    <div className="relative px-4 md:px-0">
      <div className="md:h-[340px] md:w-[640px] z-40 rounded-3xl bg-white border shadow-xl border-orange-400  relative flex items-center justify-center flex-col gap-y-5 p-10">
        <p className="md:text-2xl tracking-wide text-center text-black font-semibold">
          &quot;Th<R>e</R> hab<R>it</R> o<R>f</R> read<R>ing</R> i<R>s</R> th
          <R>e</R> onl<R>y</R> enjoyme<R>nt</R> i<R>n</R> whi<R>ch</R> the
          <R>re</R> i<R>s</R> n<R>o</R> all<R>oy;</R> i<R>t</R> las<R>ts</R> whe
          <R>n</R> al<R>l</R> oth<R>er</R> pleas<R>ures</R> fa<R>de.&quot;</R>
        </p>
        <i className="text-black text-xs md:text-base"> - Anthony Trollope</i>
      </div>

      <div className="z-0 absolute top-0 left-0 bg-gradient-to-r from-red-500 to-yellow-500 shadow-lg h-[80%] w-[80%] rounded-xl -translate-x-[100px] rotate-[-10deg] translate-y-20" />
      <div className="z-0 absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-yellow-500  shadow-lg h-[80%] w-[80%] rounded-xl translate-x-[100px] rotate-[10deg] translate-y-20" />
    </div>
  );
};

const R = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-[300] opacity-70">{children}</span>;
};

export default HeroSection;
