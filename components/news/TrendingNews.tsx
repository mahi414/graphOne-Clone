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
    id: 1,
    title:
      "OpenAI launches GPT-4o with multimodal capabilities and native reasoning",
    url: "https://openai.com/gpt-4o",
    logo: "https://www.google.com/s2/favicons?domain=openai.com&sz=64",
    source: "openai.com",
    category: "AI Models",
    time: "2h ago",
    comments: 2,
  },
  {
    id: 2,
    title:
      "Anthropic releases Claude 3.5 Sonnet with expanded context window",
    url: "https://anthropic.com/news/claude-3-5-sonnet",
    logo: "https://www.google.com/s2/favicons?domain=anthropic.com&sz=64",
    source: "anthropic.com",
    category: "AI Models",
    time: "5h ago",
    comments: 3,
  },
  {
    id: 3,
    title:
      "Google DeepMind introduces Gemini 1.5 Pro with long-context understanding",
    url: "https://deepmind.google/technologies/gemini",
    logo: "https://www.google.com/s2/favicons?domain=deepmind.google&sz=64",
    source: "deepmind.google",
    category: "AI Models",
    time: "8h ago",
    comments: 4,
  },
  {
    id: 4,
    title: "Meta open-sources Llama 3 with state-of-the-art performance",
    url: "https://ai.meta.com/blog/meta-llama-3",
    logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=64",
    source: "meta.com",
    category: "Research",
    time: "10h ago",
    comments: 5,
  },
  {
    id: 5,
    title: "NVIDIA unveils Blackwell B200 AI chips",
    url: "https://nvidia.com/blackwell",
    logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=64",
    source: "nvidia.com",
    category: "AI Tools",
    time: "12h ago",
    comments: 6,
  },
  {
    id: 6,
    title: "Mistral AI launches Mixtral 8x22B",
    url: "https://mistral.ai",
    logo: "https://www.google.com/s2/favicons?domain=mistral.ai&sz=64",
    source: "mistral.ai",
    category: "AI Models",
    time: "16h ago",
    comments: 7,
  },
  {
    id: 7,
    title: "Cohere introduces Command R+",
    url: "https://cohere.com",
    logo: "https://www.google.com/s2/favicons?domain=cohere.com&sz=64",
    source: "cohere.com",
    category: "AI Models",
    time: "18h ago",
    comments: 8,
  },
  {
    id: 8,
    title: "Hugging Face releases Transformers v5",
    url: "https://huggingface.co",
    logo: "https://www.google.com/s2/favicons?domain=huggingface.co&sz=64",
    source: "huggingface.co",
    category: "AI Tools",
    time: "20h ago",
    comments: 9,
  },
  {
    id: 9,
    title: "Lightning AI launches Lightning Studio 2.0",
    url: "https://lightning.ai",
    logo: "https://www.google.com/s2/favicons?domain=lightning.ai&sz=64",
    source: "lightning.ai",
    category: "AI Tools",
    time: "22h ago",
    comments: 10,
  },
  {
    id: 10,
    title: "Stability AI releases Stable Diffusion 3",
    url: "https://stability.ai",
    logo: "https://www.google.com/s2/favicons?domain=stability.ai&sz=64",
    source: "stability.ai",
    category: "AI Models",
    time: "23h ago",
    comments: 11,
  },
];

export default function TrendingNews() {
  return (
    <section className="mb-6">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-2 pl-3">
        <span className="w-1 h-5 rounded-full bg-gradient-to-b from-rose-500 to-orange-400 shrink-0" />
        <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">
          ⚡ TODAY
        </span>
      </div>

      {/* News List */}
      <div className="divide-y divide-gray-50">
        {news.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.05,
            }}
            whileHover={{ x: 6 }}
            className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            {/* Number */}
            <span className="text-[11px] font-bold text-gray-300 w-5 shrink-0 pt-0.5 text-right">
              {item.id}
            </span>

            {/* Logo */}
            <img
              src={item.logo}
              alt={item.source}
              className="w-8 h-8 rounded-lg object-contain bg-gray-50 shrink-0"
            />

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-rose-600 transition-colors">
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

                <div className="ml-auto flex items-center gap-0.5 text-[11px] text-gray-400">
                  <MessageCircle className="h-3 w-3" />
                  {item.comments}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}