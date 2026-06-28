import ProductCard from "./ProductCard";

const products = [
  {
    logo: "🤖",
    name: "OpenAI Chat",
    category: "Chat",
    likes: 2340,
    comments: 145,
    description:
      "A conversational AI assistant for writing, coding, brainstorming, and productivity.",
  },
  {
    logo: "🧠",
    name: "Claude",
    category: "Assistant",
    likes: 1870,
    comments: 120,
    description:
      "Advanced reasoning assistant built for long-form conversations and document analysis.",
  },
  {
    logo: "🎨",
    name: "Midjourney",
    category: "Image",
    likes: 3201,
    comments: 212,
    description:
      "Create stunning AI-generated artwork and illustrations from text prompts.",
  },
  {
    logo: "💻",
    name: "Cursor",
    category: "Developer",
    likes: 1760,
    comments: 88,
    description:
      "AI-powered code editor designed to supercharge software development.",
  },
];

export default function ProductSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">
          Trending AI Products
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Discover the fastest-growing AI tools across different categories.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}