"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-gray-400 text-lg"
      >
        I specialize in driving global recruitment strategies, scaling teams,
        and building strong client partnerships across US, Canada, and Mexico.
        With 6+ years of experience, I focus on delivering measurable revenue
        impact through talent.
      </motion.p>
    </section>
  );
}
