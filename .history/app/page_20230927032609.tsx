"use client";

import Card from "@/components/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-screen h-full overflow-hidden flex items-center justify-center flex-col gap-y-10 mt-12">
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
          className="font-bold text-5xl "
        >
          Bionic Reading for a Digital Age
        </motion.p>
      </div>
      <div className="gap-y-4 flex flex-col">
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-white/50"
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
            className="w-full bg-white/10 backdrop-blur-md rounded-md p-2"
          />
          <button className="bg-gradient-to-tr from-red-500 to-yellow-500 px-3 rounded-md">
            Subscribe
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        {" "}
        <Card />
      </motion.div>
    </div>
  );
}
