"use client";

import { motion } from "framer-motion";

const skills = [
  "Talent Acquisition",
  "Bench Sales",
  "Client Management",
  "Leadership",
  "Negotiation",
  "Revenue Growth"
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10">Core Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-gray-800 rounded-xl text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
