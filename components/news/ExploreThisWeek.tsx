"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

type News = {
  id: number;
  title: string;
  url: string;
  logo: string;
  source: string;
  category: string;
  time: string;
  comments: number;
};

const news: News[] = [
  {
    id: 21,
    title:
      "Foundation Models Forum releases best practices for AI transparency",
    url: "https://fmforum.org/transparency",
    logo: "https://www.google.com/s2/favicons?domain=fmforum.org&sz=32",
    source: "fmforum.org",
    category: "Research",
    time: "2d ago",
    comments: 22,
  },
  {
    id: 22,
    title:
      "IBM unveils Granite 3.0 foundation models for enterprise scale",
    url: "https://ibm.com/granite-3",
    logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=32",
    source: "ibm.com",
    category: "AI Models",
    time: "2d ago",
    comments: 23,
  },
  {
    id: 23,
    title:
      "Amazon launches Bedrock Guardrails for AI safety and compliance",
    url: "https://aws.amazon.com/bedrock/guardrails",
    logo: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=32",
    source: "aws.amazon.com",
    category: "AI Tools",
    time: "3d ago",
    comments: 24,
  },
  {
    id: 24,
    title:
      "Microsoft introduces Phi-3-mini for on-device AI applications",
    url: "https://microsoft.com/phi-3",
    logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=32",
    source: "microsoft.com",
    category: "AI Models",
    time: "3d ago",
    comments: 25,
  },
  {
    id: 25,
    title:
      "OpenRouter hits 100M requests milestone for open model aggregation",
    url: "https://openrouter.ai/milestone-100m",
    logo: "https://www.google.com/s2/favicons?domain=openrouter.ai&sz=32",
    source: "openrouter.ai",
    category: "AI Tools",
    time: "3d ago",
    comments: 26,
  },
    {
    id: 26,
    title:
      "Aleph Alpha releases Luminous-Base with advanced multilingual support",
    url: "https://aleph-alpha.com/luminous",
    logo: "https://www.google.com/s2/favicons?domain=aleph-alpha.com&sz=32",
    source: "aleph-alpha.com",
    category: "AI Models",
    time: "4d ago",
    comments: 27,
  },
  {
    id: 27,
    title:
      "TII launches Falcon 180B with improved open-access efficiency",
    url: "https://tii.ae/falcon-180b",
    logo: "https://www.google.com/s2/favicons?domain=tii.ae&sz=32",
    source: "tii.ae",
    category: "AI Models",
    time: "4d ago",
    comments: 28,
  },
  {
    id: 28,
    title:
      "SambaNova releases SN40L chip for enterprise AI inference acceleration",
    url: "https://sambanova.ai/sn40l",
    logo: "https://www.google.com/s2/favicons?domain=sambanova.ai&sz=32",
    source: "sambanova.ai",
    category: "AI Hardware",
    time: "5d ago",
    comments: 29,
  },
  {
    id: 29,
    title:
      "Graphcore launches IPU-M2000 for large-scale AI training scale",
    url: "https://graphcore.ai/ipu-m2000",
    logo: "https://www.google.com/s2/favicons?domain=graphcore.ai&sz=32",
    source: "graphcore.ai",
    category: "AI Hardware",
    time: "5d ago",
    comments: 30,
  },
  {
    id: 30,
    title:
      "Together AI raises $102M Series B to democratize AI compute services",
    url: "https://together.ai/blog/series-b-102m",
    logo: "https://www.google.com/s2/favicons?domain=together.ai&sz=32",
    source: "together.ai",
    category: "Funding",
    time: "5d ago",
    comments: 31,
  },
];

export default function ExploreThisWeek() {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2 pl-3">
        <span className="w-1 h-5 rounded-full bg-gradient-to-b from-rose-500 to-orange-400 shrink-0" />
        <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">
          🔍 EXPLORE THIS WEEK
        </span>
      </div>

      <div className="divide-y divide-gray-50">
        {news.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.04,
            }}
            whileHover={{ x: 3 }}
            className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <span className="text-[11px] font-bold text-gray-300 w-5 shrink-0 pt-0.5 text-right">
              {item.id}
            </span>

            <img
              src={item.logo}
              alt={item.source}
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg object-contain bg-gray-50 shrink-0"
            />

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 group-hover:text-rose-600 transition-colors leading-snug">
                {item.title}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-[11px] text-gray-400">
                  {item.time}
                </span>

                <span className="text-[10px] font-semibold bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-md">
                  {item.source}
                </span>

                <span className="text-[10px] font-semibold bg-rose-50 text-rose-500 px-1.5 py-0.5 rounded-md">
                  🏷 {item.category}
                </span>

                <span className="flex items-center gap-0.5 text-[11px] text-gray-400 ml-auto">
                  <MessageCircle className="h-3 w-3" />
                  {item.comments}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}