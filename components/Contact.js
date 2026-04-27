"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold mb-6"
      >
        Let’s Work Together
      </motion.h2>

      <p className="text-gray-400 mb-6">
        Build high-performing teams and scale your business.
      </p>

      <motion.a
        whileHover={{ scale: 1.1 }}
        href="mailto:your@email.com"
        className="px-6 py-3 bg-blue-500 rounded-xl"
      >
        Contact Me
      </motion.a>
    </section>
  );
}
