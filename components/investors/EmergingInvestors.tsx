"use client";

import { motion } from "framer-motion";

type Investor = {
  short: string;
  name: string;
  type: string;
  stage: string;
  color: string;
};

const investors: Investor[] = [
  {
    short: "TH",
    name: "Theory",
    type: "Micro VC",
    stage: "Seed to A",
    color: "bg-slate-700",
  },
  {
    short: "CV",
    name: "Conviction",
    type: "Micro VC",
    stage: "Pre-Seed to Seed",
    color: "bg-indigo-700",
  },
  {
    short: "XF",
    name: "xFactor",
    type: "Angel Fund",
    stage: "Seed",
    color: "bg-rose-700",
  },
  {
    short: "NT",
    name: "NTDG",
    type: "Operator Fund",
    stage: "Seed to A",
    color: "bg-teal-700",
  },
  {
    short: "SP",
    name: "Sauce Park",
    type: "Emerging Manager",
    stage: "Pre-Seed",
    color: "bg-orange-700",
  },
];

export default function EmergingInvestors() {
  return (
    <section className="border-t border-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-baseline gap-3"
        >
          <span className="select-none text-4xl font-black text-gray-100">
            07
          </span>

          <h2 className="text-2xl font-black text-gray-900">
            Emerging Investors
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {investors.map((investor, index) => (
            <motion.div
              key={investor.name}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="flex cursor-pointer flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:border-gray-200 hover:shadow-lg"
            >
              {/* Logo */}
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black text-white ${investor.color}`}
              >
                {investor.short}
              </motion.div>

              {/* Info */}
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  {investor.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {investor.type}
                </p>
              </div>

              {/* Stage */}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="w-fit rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600"
              >
                {investor.stage}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}