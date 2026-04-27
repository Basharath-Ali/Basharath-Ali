"use client";

import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center">
      
      <ThreeScene />

      <div className="z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Mohammed Basharath Ali
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl text-gray-300"
        >
          Global Talent & Revenue Growth Strategist
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-blue-500 rounded-xl"
        >
          Connect Now
        </motion.button>
      </div>
    </section>
  );
}
