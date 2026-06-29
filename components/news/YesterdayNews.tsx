// YesterdayNews.tsx

import React from "react";

interface NewsItem {
  rank: number;
  title: string;
  source: string;
  category: string;
  time: string;
  link: string;
}

const yesterdayNews: NewsItem[] = [
  {
    rank: 11,
    title: "Databricks launches DBRX Instruct for enterprise AI applications",
    source: "databricks.com",
    category: "AI Tools",
    time: "Yesterday",
    link: "https://databricks.com/blog/dbrx",
  },
  {
    rank: 12,
    title: "xAI releases Grok-1.5 with enhanced reasoning capabilities",
    source: "x.ai",
    category: "AI Models",
    time: "Yesterday",
    link: "https://x.ai/blog/grok-1.5",
  },
  {
    rank: 13,
    title: "Pinecone introduces serverless vector database for AI workloads",
    source: "pinecone.io",
    category: "AI Tools",
    time: "Yesterday",
    link: "https://pinecone.io/blog/serverless-ready",
  },
  {
    rank: 14,
    title: "Scale AI announces Scale Data Engine for LLM fine-tuning",
    source: "scale.com",
    category: "AI Tools",
    time: "Yesterday",
    link: "https://scale.com/blog/data-engine-llms",
  },
  {
    rank: 15,
    title: "Runway releases Gen-3 Alpha with cinematic video generation",
    source: "runwayml.com",
    category: "AI Tools",
    time: "Yesterday",
    link: "https://runwayml.com/blog/gen-3-alpha",
  },
  {
    rank: 16,
    title: "Replit introduces AI Agent for autonomous software development",
    source: "replit.com",
    category: "AI Tools",
    time: "Yesterday",
    link: "https://replit.com/blog/replit-agent",
  },
  {
    rank: 17,
    title: "ElevenLabs launches Voice Design v2 with emotion control",
    source: "elevenlabs.io",
    category: "AI Tools",
    time: "Yesterday",
    link: "https://elevenlabs.io/blog/voice-design-v2",
  },
  {
    rank: 18,
    title: "Anyscale releases Ray 2.9 with improved distributed training",
    source: "anyscale.com",
    category: "AI Tools",
    time: "Yesterday",
    link: "https://anyscale.com/blog/ray-2-9",
  },
  {
    rank: 19,
    title: "Weights & Biases launches Weave for LLM evaluation and monitoring",
    source: "wandb.ai",
    category: "AI Tools",
    time: "Yesterday",
    link: "https://wandb.ai/weave",
  },
  {
    rank: 20,
    title: "LangChain releases LangGraph for stateful AI agent workflows",
    source: "langchain.com",
    category: "AI Tools",
    time: "Yesterday",
    link: "https://langchain.com/blog/langgraph",
  },
];

const YesterdayNews: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2 pl-3">
        <span className="w-1 h-5 rounded-full bg-gradient-to-b from-rose-500 to-orange-400" />
        <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">
          ⚡ Yesterday
        </span>
      </div>

      <div className="divide-y divide-gray-100">
        {yesterdayNews.map((item) => (
          <a
            key={item.rank}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <span className="text-[11px] font-bold text-gray-300 w-5 text-right shrink-0 pt-0.5">
              {item.rank}
            </span>

            <img
              src={`https://www.google.com/s2/favicons?domain=${item.source}&sz=32`}
              alt={item.source}
              className="w-8 h-8 rounded-lg bg-gray-50 shrink-0"
            />

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-rose-600 leading-snug transition-colors">
                {item.title}
              </h3>

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
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default YesterdayNews;