export interface NewsItem {
  id: number;
  title: string;
  time: string;
  website: string;
  favicon: string;
  category: string;
  comments: number;
  url: string;
}

export const todayNews: NewsItem[] = [
  {
    id: 1,
    title:
      "OpenAI launches GPT-4o with multimodal capabilities and native reasoning",
    time: "2h ago",
    website: "openai.com",
    favicon: "https://www.google.com/s2/favicons?domain=openai.com&sz=64",
    category: "AI Models",
    comments: 2,
    url: "https://openai.com/gpt-4o",
  },
  {
    id: 2,
    title:
      "Anthropic releases Claude 3.5 Sonnet with expanded context window",
    time: "5h ago",
    website: "anthropic.com",
    favicon: "https://www.google.com/s2/favicons?domain=anthropic.com&sz=64",
    category: "AI Models",
    comments: 3,
    url: "https://anthropic.com/news/claude-3-5-sonnet",
  },
  {
    id: 3,
    title:
      "Google DeepMind introduces Gemini 1.5 Pro with long-context understanding",
    time: "8h ago",
    website: "deepmind.google",
    favicon:
      "https://www.google.com/s2/favicons?domain=deepmind.google&sz=64",
    category: "AI Models",
    comments: 4,
    url: "https://deepmind.google/technologies/gemini",
  },
  {
    id: 4,
    title:
      "Meta open-sources Llama 3 with state-of-the-art performance",
    time: "10h ago",
    website: "ai.meta.com",
    favicon: "https://www.google.com/s2/favicons?domain=ai.meta.com&sz=64",
    category: "Research",
    comments: 5,
    url: "https://ai.meta.com/blog/meta-llama-3",
  },
  {
    id: 5,
    title:
      "NVIDIA unveils new Blackwell B200 AI chips for real-time inference at scale",
    time: "12h ago",
    website: "nvidia.com",
    favicon: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=64",
    category: "AI Tools",
    comments: 6,
    url: "https://nvidia.com/blackwell",
  },
  {
    id: 6,
    title:
      "Mistral AI launches Mistral 8x22B, a new sparse Mixture-of-Experts model",
    time: "16h ago",
    website: "mistral.ai",
    favicon: "https://www.google.com/s2/favicons?domain=mistral.ai&sz=64",
    category: "AI Models",
    comments: 7,
    url: "https://mistral.ai/news/mixtral-8x22b",
  },
  {
    id: 7,
    title:
      "Cohere introduces Command R+ with improved reasoning and tool use",
    time: "18h ago",
    website: "cohere.com",
    favicon: "https://www.google.com/s2/favicons?domain=cohere.com&sz=64",
    category: "AI Models",
    comments: 8,
    url: "https://cohere.com/blog/command-r-plus",
  },
  {
    id: 8,
    title:
      "Hugging Face releases Transformers v5 with major performance boosts",
    time: "20h ago",
    website: "huggingface.co",
    favicon:
      "https://www.google.com/s2/favicons?domain=huggingface.co&sz=64",
    category: "AI Tools",
    comments: 9,
    url: "https://huggingface.co/blog/transformers-v5",
  },
  {
    id: 9,
    title:
      "Lightning AI launches Lightning Studio 2.0 for end-to-end model deployment",
    time: "22h ago",
    website: "lightning.ai",
    favicon: "https://www.google.com/s2/favicons?domain=lightning.ai&sz=64",
    category: "AI Tools",
    comments: 10,
    url: "https://lightning.ai/blog/lightning-studio-2",
  },
  {
    id: 10,
    title:
      "Stability AI releases Stable Diffusion 3 with improved quality and speed",
    time: "23h ago",
    website: "stability.ai",
    favicon: "https://www.google.com/s2/favicons?domain=stability.ai&sz=64",
    category: "AI Models",
    comments: 11,
    url: "https://stability.ai/news/stable-diffusion-3",
  },
];

export const yesterdayNews: NewsItem[] = [
  {
    id: 11,
    title:
      "Databricks launches DBRX Instruct for enterprise AI applications",
    time: "Yesterday",
    website: "databricks.com",
    favicon:
      "https://www.google.com/s2/favicons?domain=databricks.com&sz=64",
    category: "AI Tools",
    comments: 12,
    url: "https://databricks.com/blog/dbrx",
  },
  {
    id: 12,
    title:
      "xAI releases Grok-1.5 with enhanced reasoning capabilities",
    time: "Yesterday",
    website: "x.ai",
    favicon: "https://www.google.com/s2/favicons?domain=x.ai&sz=64",
    category: "AI Models",
    comments: 13,
    url: "https://x.ai/blog/grok-1.5",
  },
  {
    id: 13,
    title:
      "Pinecone introduces serverless vector database for AI workloads",
    time: "Yesterday",
    website: "pinecone.io",
    favicon: "https://www.google.com/s2/favicons?domain=pinecone.io&sz=64",
    category: "AI Tools",
    comments: 14,
    url: "https://pinecone.io/blog/serverless-ready",
  },
  {
    id: 14,
    title:
      "Scale AI announces Scale Data Engine for LLM fine-tuning",
    time: "Yesterday",
    website: "scale.com",
    favicon: "https://www.google.com/s2/favicons?domain=scale.com&sz=64",
    category: "AI Tools",
    comments: 15,
    url: "https://scale.com/blog/data-engine-llms",
  },
  {
    id: 15,
    title:
      "Runway releases Gen-3 Alpha with cinematic video generation",
    time: "Yesterday",
    website: "runwayml.com",
    favicon: "https://www.google.com/s2/favicons?domain=runwayml.com&sz=64",
    category: "AI Tools",
    comments: 16,
    url: "https://runwayml.com/blog/gen-3-alpha",
  },
  {
    id: 16,
    title:
      "Replit introduces AI Agent for autonomous software development",
    time: "Yesterday",
    website: "replit.com",
    favicon: "https://www.google.com/s2/favicons?domain=replit.com&sz=64",
    category: "AI Tools",
    comments: 18,
    url: "https://replit.com/blog/replit-agent",
  },
  {
    id: 17,
    title:
      "ElevenLabs launches Voice Design v2 with emotion control",
    time: "Yesterday",
    website: "elevenlabs.io",
    favicon:
      "https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=64",
    category: "AI Tools",
    comments: 17,
    url: "https://elevenlabs.io/blog/voice-design-v2",
  },
  {
    id: 18,
    title:
      "Anyscale releases Ray 2.9 with improved distributed training",
    time: "Yesterday",
    website: "anyscale.com",
    favicon: "https://www.google.com/s2/favicons?domain=anyscale.com&sz=64",
    category: "AI Tools",
    comments: 19,
    url: "https://anyscale.com/blog/ray-2-9",
  },
  {
    id: 19,
    title:
      "Weights & Biases launches Weave for LLM evaluation and monitoring",
    time: "Yesterday",
    website: "wandb.ai",
    favicon: "https://www.google.com/s2/favicons?domain=wandb.ai&sz=64",
    category: "AI Tools",
    comments: 20,
    url: "https://wandb.ai/weave",
  },
  {
    id: 20,
    title:
      "LangChain releases LangGraph for stateful AI agent workflows",
    time: "Yesterday",
    website: "langchain.com",
    favicon:
      "https://www.google.com/s2/favicons?domain=langchain.com&sz=64",
    category: "AI Tools",
    comments: 21,
    url: "https://langchain.com/blog/langgraph",
  },
];