"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";



type Investor = {
  name: string;
  short: string;
  stage: string;
  category: string;
  portfolio: string[];
  gradient: string;
  badge: string;
  href: string;
};

const investors: Investor[] = [
  {
    name: "a16z",
    short: "A16",
    stage: "Seed",
    category: "AI Infrastructure · AI Agents",
    portfolio: ["OpenAI", "Mistral", "Anyscale", "Replit"],
    gradient: "from-indigo-950 to-indigo-900",
    badge: "bg-black",
    href: "/investors/a16z",
  },
  {
    name: "Sequoia",
    short: "SEQ",
    stage: "Seed",
    category: "AI Infrastructure · Enterprise AI",
    portfolio: ["Anthropic", "Harvey", "Perplexity", "Writer"],
    gradient: "from-green-950 to-green-900",
    badge: "bg-green-600",
    href: "/investors/sequoia",
  },
  {
    name: "Lightspeed",
    short: "LIG",
    stage: "Seed",
    category: "AI Agents · Developer Tools",
    portfolio: ["Stability AI", "Tome", "ElevenLabs", "Together AI"],
    gradient: "from-orange-950 to-orange-900",
    badge: "bg-orange-500",
    href: "/investors/lightspeed",
  },
  {
    name: "Khosla Ventures",
    short: "KHO",
    stage: "Seed",
    category: "AI Models · Healthcare AI",
    portfolio: ["OpenAI", "Suno", "Cognition", "Physical Intelligence"],
    gradient: "from-purple-950 to-purple-900",
    badge: "bg-purple-700",
    href: "/investors/khosla-ventures",
  },
  {
    name: "Accel",
    short: "ACC",
    stage: "Seed",
    category: "AI Infrastructure · Enterprise AI",
    portfolio: ["Cohere", "Cursor", "Lovable", "Hugging Face"],
    gradient: "from-blue-950 to-blue-900",
    badge: "bg-blue-700",
    href: "/investors/accel",
  },
  {
    name: "General Catalyst",
    short: "GEN",
    stage: "Seed",
    category: "Healthcare AI · Enterprise AI",
    portfolio: ["Mistral", "Inflection AI", "Rad AI", "Alto"],
    gradient: "from-teal-950 to-teal-900",
    badge: "bg-teal-600",
    href: "/investors/general-catalyst",
  },
];

export default function TrendingInvestors() {
  return (
    <section className="border-t border-gray-100 py-12">
        <div className="container mx-auto px-6">
            {/* Heading */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-baseline justify-between"
            >
            <div className="flex items-baseline gap-3">
                <span className="select-none text-4xl font-black text-gray-100">
                01
                </span>

                <h2 className="text-2xl font-black text-gray-900">
                Trending Investors
                </h2>
            </div>

            <motion.div whileHover={{ x: 5 }}>
                <Link
                href="/investors/trending"
                className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-rose-600"
                >
                View all
                <ArrowRight size={16} />
                </Link>
            </motion.div>
            </motion.div>

            {/* Cards */}
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {investors.map((investor, index) => (
                <motion.div
                key={investor.name}
                initial={{
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                }}
                whileHover={{
                    y: -10,
                    scale: 1.03,
                }}
                className={`min-w-[230px] rounded-2xl bg-gradient-to-b ${investor.gradient} p-5 flex flex-col gap-4 flex-shrink-0 shadow-lg`}
                >
                {/* Header */}
                <div className="flex items-center gap-3">
                    <motion.div
                    whileHover={{
                        rotate: 8,
                        scale: 1.1,
                    }}
                    className={`h-10 w-10 rounded-xl ${investor.badge} flex items-center justify-center text-xs font-black text-white`}
                    >
                    {investor.short}
                    </motion.div>

                    <div>
                    <h3 className="text-sm font-bold text-white">
                        {investor.name}
                    </h3>

                    <p className="text-xs text-white/60">
                        {investor.stage}
                    </p>
                    </div>
                </div>

                {/* Category */}
                <p className="text-xs font-medium text-white/70">
                    {investor.category}
                </p>

                {/* Portfolio */}
                <ul className="space-y-1">
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
                        delay: index * 0.15 + i * 0.08,
                        }}
                        whileHover={{
                        x: 6,
                        }}
                        className="flex items-center gap-2 text-xs text-white/70"
                    >
                        <span className="h-1 w-1 rounded-full bg-white/40" />
                        {company}
                    </motion.li>
                    ))}
                </ul>

                {/* Button */}
                <motion.div
                    whileHover={{
                    scale: 1.05,
                    }}
                    whileTap={{
                    scale: 0.95,
                    }}
                    className="mt-auto"
                >
                    <Link
                    href={investor.href}
                    className="flex w-fit items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                    >
                    View portfolio
                    <ArrowRight size={14} />
                    </Link>
                </motion.div>
                </motion.div>
            ))}
            </div>
        </div>
    </section>
  );
}