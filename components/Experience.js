"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    role: "Lead Sales Recruiter",
    company: "3R",
    desc: "Leading US recruitment operations and managing teams."
  },
  {
    role: "Lead Recruiter",
    company: "Denken Solutions",
    desc: "Handled USA, Canada, Mexico hiring pipelines."
  },
  {
    role: "Sr Technical Recruiter",
    company: "Sparity",
    desc: "Full-cycle recruitment and team scaling."
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Experience</h2>

      {jobs.map((job, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-8 border-l-2 border-blue-500 pl-6"
        >
          <h3 className="text-2xl font-semibold">{job.role}</h3>
          <p className="text-blue-400">{job.company}</p>
          <p className="text-gray-400">{job.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
