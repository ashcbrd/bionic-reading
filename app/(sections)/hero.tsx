import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-max pb-32">
      <section
        id="hero"
        className="w-full h-max flex items-center justify-center flex-col gap-y-10 mt-12"
      >
        <div className="flex flex-col justify-center items-center gap-y-2">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-black text-8xl text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500"
          >
            Empower Your Mind
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-5xl text-primary dark:text-stone-100 tracking-wide font-semibold"
          >
            {/* Bio<span className="font-[300] opacity-60">nic</span> Read
            <span className="font-[300] opacity-60">ing</span> f
            <span className="font-[300] opacity-60">or</span> a Dig
            <span className="font-[300] opacity-60">ital</span> A
            <span className="font-[300] opacity-60">ge</span> */}
            Bionic Reading for a Digital Age
          </motion.p>
        </div>
        <div className="gap-y-4 flex flex-col">
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-white/70"
          >
            Stay In the Loop: Subscribe for Exclusive Updates and New Features!
          </motion.p>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex gap-x-2 px-4"
          >
            <input
              type="text"
              placeholder="Enter email"
              className="w-full border border-orange-500 dark:border-none dark:bg-white/10 backdrop-blur-md rounded-md p-2"
            />
            <button className="text-white bg-gradient-to-tr from-red-500 to-yellow-500 px-3 rounded-md">
              Subscribe
            </button>
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
    <div className="relative">
      <div className="h-[340px] w-[640px] z-40 rounded-3xl bg-[#555]/10 relative flex items-center justify-center flex-col gap-y-5 p-10">
        <p className="text-2xl tracking-wide text-center font-semibold">
          &quot;Th<R>e</R> hab<R>it</R> o<R>f</R> read<R>ing</R> i<R>s</R> th
          <R>e</R> onl<R>y</R> enjoyme<R>nt</R> i<R>n</R> whi<R>ch</R> the
          <R>re</R> i<R>s</R> n<R>o</R> all<R>oy;</R> i<R>t</R> las<R>ts</R> whe
          <R>n</R> al<R>l</R> oth<R>er</R> pleas<R>ures</R> fa<R>de.&quot;</R>
        </p>
        <i> - Anthony Trollope</i>
      </div>
      <div className="h-[340px] w-[640px] z-30 border border-orange-500/30 rounded-3xl bg-[#555]/30 backdrop-blur-xl absolute top-0" />
      <div className="z-0 absolute top-0 left-0 bg-gradient-to-r from-red-500 to-yellow-500 h-[80%] w-[80%] rounded-xl -translate-x-[100px] rotate-[-10deg] translate-y-20" />
      <div className="z-0 absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-yellow-500  h-[80%] w-[80%] rounded-xl translate-x-[100px] rotate-[10deg] translate-y-20" />
    </div>
  );
};

const R = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-[300] opacity-70">{children}</span>;
};

export default HeroSection;
