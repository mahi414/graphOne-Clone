"use client";

import { motion } from "framer-motion";

type Winner = {
  emoji: string;
  company: string;
  investors: string[];
};

const winners: Winner[] = [
  {
    emoji: "⚡",
    company: "OpenAI",
    investors: [
      "a16z",
      "Sequoia",
      "Khosla Ventures",
      "Tiger Global",
      "SoftBank",
    ],
  },
  {
    emoji: "🤖",
    company: "Anthropic",
    investors: [
      "Spark Capital",
      "Google Ventures",
      "Salesforce Ventures",
      "General Catalyst",
    ],
  },
  {
    emoji: "🔍",
    company: "Perplexity",
    investors: [
      "NEA",
      "IVP",
      "Nvidia",
      "Jeff Bezos",
      "Elad Gil",
    ],
  },
];

const themes = [
  {
    name: "AI Agents",
    color: "text-rose-600 bg-rose-50 border-rose-100",
    size: "text-base",
  },
  {
    name: "AI Coding",
    color: "text-blue-600 bg-blue-50 border-blue-100",
    size: "text-sm",
  },
  {
    name: "AI Infrastructure",
    color: "text-purple-600 bg-purple-50 border-purple-100",
    size: "text-lg",
  },
  {
    name: "Developer Tools",
    color: "text-green-600 bg-green-50 border-green-100",
    size: "text-xs",
  },
  {
    name: "Robotics",
    color: "text-orange-600 bg-orange-50 border-orange-100",
    size: "text-base",
  },
  {
    name: "Healthcare AI",
    color: "text-teal-600 bg-teal-50 border-teal-100",
    size: "text-xl",
  },
  {
    name: "Enterprise AI",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    size: "text-sm",
  },
  {
    name: "Video AI",
    color: "text-amber-600 bg-amber-50 border-amber-100",
    size: "text-base",
  },
  {
    name: "Foundation Models",
    color: "text-rose-600 bg-rose-50 border-rose-100",
    size: "text-base",
  },
  {
    name: "AI Security",
    color: "text-blue-600 bg-blue-50 border-blue-100",
    size: "text-sm",
  },
  {
    name: "Edge AI",
    color: "text-purple-600 bg-purple-50 border-purple-100",
    size: "text-lg",
  },
  {
    name: "Autonomous Vehicles",
    color: "text-green-600 bg-green-50 border-green-100",
    size: "text-xs",
  },
];

const stats = [
  {
    value: "24",
    label: "Active Themes",
  },
  {
    value: "$8.4M",
    label: "Avg. Check",
  },
  {
    value: "142",
    label: "New Funds",
  },
];

export default function WinnersAndThemes() {
  return (
    <section className="border-t border-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-baseline gap-3"
          >
            <span className="select-none text-4xl font-black text-gray-100">
              05
            </span>

            <h2 className="text-xl font-black text-gray-900">
              Investors Backing Winners
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {winners.map((winner, index) => (
              <motion.div
                key={winner.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all hover:border-gray-200 hover:bg-white"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-lg">{winner.emoji}</span>

                  <p className="text-sm font-bold text-gray-900">
                    {winner.company}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {winner.investors.map((investor) => (
                    <motion.span
                      key={investor}
                      whileHover={{ scale: 1.08 }}
                      className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-xs font-medium text-gray-600"
                    >
                      {investor}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-baseline gap-3"
          >
            <span className="select-none text-4xl font-black text-gray-100">
              06
            </span>

            <h2 className="text-xl font-black text-gray-900">
              Capital Themes
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {themes.map((theme, index) => (
              <motion.button
                key={theme.name}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className={`rounded-full border px-4 py-2 font-semibold ${theme.size} ${theme.color}`}
              >
                {theme.name}
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
            }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center"
              >
                <p className="text-xl font-black text-gray-900">
                  {stat.value}
                </p>

                <p className="mt-0.5 text-xs text-gray-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}