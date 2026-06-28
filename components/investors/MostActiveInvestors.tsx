"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Investor = {
  name: string;
  short: string;
  color: string;
  portfolio: string[];
  href: string;
};

const investors: Investor[] = [
  {
    name: "a16z",
    short: "A1",
    color: "bg-black",
    href: "/investors/a16z",
    portfolio: [
      "OpenAI",
      "Mistral",
      "Anyscale",
      "Replit",
      "Cohere",
      "Inflection",
      "Alchemy",
    ],
  },
  {
    name: "Sequoia",
    short: "SE",
    color: "bg-green-600",
    href: "/investors/sequoia",
    portfolio: [
      "Anthropic",
      "Harvey",
      "Perplexity",
      "Writer",
      "Runway",
      "Sierra",
      "Cognition",
    ],
  },
  {
    name: "Lightspeed",
    short: "LI",
    color: "bg-orange-500",
    href: "/investors/lightspeed",
    portfolio: [
      "Stability AI",
      "Tome",
      "ElevenLabs",
      "Together AI",
      "Magic",
      "Gradio",
    ],
  },
  {
    name: "Accel",
    short: "AC",
    color: "bg-blue-700",
    href: "/investors/accel",
    portfolio: [
      "Cohere",
      "Cursor",
      "Lovable",
      "Hugging Face",
      "Weights & Biases",
      "Replicate",
    ],
  },
];

export default function MostActiveInvestors() {
  return (
    <section className="border-t border-gray-100 py-12">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-baseline justify-between"
        >
          <div className="flex items-baseline gap-3">
            <span className="select-none text-4xl font-black text-gray-100">
              04
            </span>

            <h2 className="text-2xl font-black text-gray-900">
              Most Active Investors
            </h2>
          </div>

          <motion.div whileHover={{ x: 5 }}>
            <Link
              href="/investors"
              className="flex items-center gap-1 text-sm font-semibold text-gray-500 transition hover:text-rose-600"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Investors */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {investors.map((investor, index) => (
            <motion.div
              key={investor.name}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
              className="flex flex-col gap-3"
            >
              {/* Investor */}
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-black text-white ${investor.color}`}
                >
                  {investor.short}
                </motion.div>

                <p className="text-sm font-bold text-gray-900">
                  {investor.name}
                </p>
              </div>

              {/* Portfolio */}
              <ul className="flex flex-col gap-1.5">
                {investor.portfolio.map((company, i) => (
                  <motion.li
                    key={company}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.15 + i * 0.05,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="flex cursor-pointer items-center gap-1.5 text-xs text-gray-500 transition hover:text-gray-800"
                  >
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    {company}
                  </motion.li>
                ))}
              </ul>

              {/* Link */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Link
                  href={investor.href}
                  className="mt-1 flex items-center gap-1 text-xs font-semibold text-rose-600 transition hover:text-rose-700"
                >
                  View portfolio
                  <ArrowRight size={12} />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}