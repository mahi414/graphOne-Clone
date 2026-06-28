"use client";

import { Heart, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  logo: string;
  name: string;
  description: string;
  category: string;
  likes: number;
  comments: number;
};

export default function ProductCard({
  logo,
  name,
  description,
  category,
  likes,
  comments,
}: Props) {
  return (
    <motion.article
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-2xl">
          {logo}
        </div>

        <div>
          <h3 className="font-semibold">{name}</h3>

          <span className="mt-1 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
            {category}
          </span>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-gray-600">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <Heart size={16} />
            {likes}
          </span>

          <span className="flex items-center gap-2">
            <MessageCircle size={16} />
            {comments}
          </span>
        </div>

        <button className="rounded-xl border border-gray-200 p-2 hover:bg-gray-50">
          <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.article>
  );
}