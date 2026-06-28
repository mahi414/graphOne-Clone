"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  Cpu,
  Zap,
  Search,
  Play,
  Mic,
  Database,
  Activity,
} from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

// --- DATA CONFIGURATIONS FOR DRIVER MAPS ---
const UNICORNS = [
  { name: "OpenAI", domain: "openai.com", value: "$150B+" },
  { name: "Anthropic", domain: "anthropic.com", value: "$18.4B" },
  { name: "Databricks", domain: "databricks.com", value: "$43B" },
  { name: "Perplexity", domain: "perplexity.ai", value: "$3B" },
  { name: "xAI", domain: "x.ai", value: "$24B" },
];

const FRONTIER_LABS = [
  { name: "OpenAI", domain: "openai.com" },
  { name: "Anthropic", domain: "anthropic.com" },
  { name: "Google DeepMind", domain: "deepmind.google" },
  { name: "xAI", domain: "x.ai" },
  { name: "Meta AI", domain: "meta.com" },
  { name: "SSI", domain: "ssi.inc" },
];

const OPEN_SOURCE = [
  { name: "Hugging Face", domain: "huggingface.co", stars: "160K ★" },
  { name: "Mistral AI", domain: "mistral.ai", stars: "28K ★" },
  { name: "Ollama", domain: "ollama.com", stars: "18K ★" },
  { name: "Together AI", domain: "together.ai", stars: "3K ★" },
  { name: "Databricks", domain: "databricks.com", stars: "8K ★" },
];

const NEW_COMPANIES = [
  { name: "MemGPT", domain: "memgpt.ai", tag: "AI Memory" },
  {
    name: "Bria AI",
    domain: "bria.ai",
    tag: "AI Video",
    customHref: "/companies/brio-ai",
  },
  { name: "CharacterX", domain: "characterx.ai", tag: "AI Chat" },
  { name: "Unify", domain: "unify.ai", tag: "AI Infra" },
  { name: "Palette", domain: "palette.fm", tag: "AI Design" },
];

export function CategoriesAndLists() {
  const fallbackSrc =
    "https://www.google.com/s2/favicons?domain=characterx.ai&sz=128";

  // Reusable component wrapper to safely isolate individual image error boundaries
  const SafeFavicon = ({
    domain,
    alt,
    size = 40,
  }: {
    domain: string;
    alt: string;
    size?: number;
  }) => {
    const [imgSrc, setImgSrc] = useState(
      `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    );
    return (
      <Image
        src={imgSrc}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-contain rounded-md"
        onError={() => setImgSrc(fallbackSrc)}
      />
    );
  };

  return (
    <>
      {/* --- SECTION 04: BROWSE BY CATEGORY --- */}
      <section>
        <div className="flex items-baseline gap-2.5 mb-8">
          <span className="text-4xl font-black text-gray-100 select-none">
            04
          </span>
          <div>
            <h2 className="text-xl font-black text-gray-900 leading-tight">
              Browse by Category
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Explore companies by what they&apos;re building.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button className="rounded-2xl border border-gray-200 bg-white p-5 flex items-center justify-between hover:border-rose-400 hover:shadow-md transition-all group text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors shrink-0">
                <Cpu className="h-5 w-5 text-purple-500" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-black text-gray-800 group-hover:text-rose-600 transition-colors">
                  AI Agents
                </h3>
                <span className="text-[10px] text-gray-500 block mt-0.5 font-semibold">
                  1,248 companies
                </span>
              </div>
            </div>
            <ChevronRight
              className="h-4 w-4 text-gray-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          </button>

          <button className="rounded-2xl border border-gray-200 bg-white p-5 flex items-center justify-between hover:border-rose-400 hover:shadow-md transition-all group text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors shrink-0">
                <Zap className="h-5 w-5 text-amber-500" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-black text-gray-800 group-hover:text-rose-600 transition-colors">
                  AI Coding
                </h3>
                <span className="text-[10px] text-gray-500 block mt-0.5 font-semibold">
                  860 companies
                </span>
              </div>
            </div>
            <ChevronRight
              className="h-4 w-4 text-gray-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          </button>

          <button className="rounded-2xl border border-gray-200 bg-white p-5 flex items-center justify-between hover:border-rose-400 hover:shadow-md transition-all group text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors shrink-0">
                <Search className="h-5 w-5 text-blue-500" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-black text-gray-800 group-hover:text-rose-600 transition-colors">
                  AI Search
                </h3>
                <span className="text-[10px] text-gray-500 block mt-0.5 font-semibold">
                  324 companies
                </span>
              </div>
            </div>
            <ChevronRight
              className="h-4 w-4 text-gray-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          </button>

          <button className="rounded-2xl border border-gray-200 bg-white p-5 flex items-center justify-between hover:border-rose-400 hover:shadow-md transition-all group text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors shrink-0">
                <Play className="h-5 w-5 text-rose-500" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-black text-gray-800 group-hover:text-rose-600 transition-colors">
                  AI Video
                </h3>
                <span className="text-[10px] text-gray-500 block mt-0.5 font-semibold">
                  682 companies
                </span>
              </div>
            </div>
            <ChevronRight
              className="h-4 w-4 text-gray-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          </button>

          <button className="rounded-2xl border border-gray-200 bg-white p-5 flex items-center justify-between hover:border-rose-400 hover:shadow-md transition-all group text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors shrink-0">
                <Mic className="h-5 w-5 text-emerald-500" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-black text-gray-800 group-hover:text-rose-600 transition-colors">
                  AI Voice
                </h3>
                <span className="text-[10px] text-gray-500 block mt-0.5 font-semibold">
                  412 companies
                </span>
              </div>
            </div>
            <ChevronRight
              className="h-4 w-4 text-gray-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          </button>

          <button className="rounded-2xl border border-gray-200 bg-white p-5 flex items-center justify-between hover:border-rose-400 hover:shadow-md transition-all group text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors shrink-0">
                <Database
                  className="h-5 w-5 text-indigo-500"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-xs font-black text-gray-800 group-hover:text-rose-600 transition-colors">
                  AI Infrastructure
                </h3>
                <span className="text-[10px] text-gray-500 block mt-0.5 font-semibold">
                  972 companies
                </span>
              </div>
            </div>
            <ChevronRight
              className="h-4 w-4 text-gray-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          </button>

          <button className="rounded-2xl border border-gray-200 bg-white p-5 flex items-center justify-between hover:border-rose-400 hover:shadow-md transition-all group text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors shrink-0">
                <Activity
                  className="h-5 w-5 text-teal-500"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-xs font-black text-gray-800 group-hover:text-rose-600 transition-colors">
                  Healthcare AI
                </h3>
                <span className="text-[10px] text-gray-500 block mt-0.5 font-semibold">
                  687 companies
                </span>
              </div>
            </div>
            <ChevronRight
              className="h-4 w-4 text-gray-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          </button>

          <button className="rounded-2xl border border-gray-200 bg-white p-5 flex items-center justify-between hover:border-rose-400 hover:shadow-md transition-all group text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-rose-50 group-hover:border-rose-100 transition-colors shrink-0">
                <Cpu className="h-5 w-5 text-orange-500" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-black text-gray-800 group-hover:text-rose-600 transition-colors">
                  Robotics
                </h3>
                <span className="text-[10px] text-gray-500 block mt-0.5 font-semibold">
                  396 companies
                </span>
              </div>
            </div>
            <ChevronRight
              className="h-4 w-4 text-gray-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          </button>
        </div>
      </section>

      {/* --- SECTIONS 05, 06, 07: BREAKOUTS, FUNDED, TO WATCH --- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Breakout Companies */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
            <span className="h-5 w-5 rounded-full bg-rose-50 text-rose-500 text-[10px] font-black flex items-center justify-center select-none">
              6
            </span>
            <h3 className="text-xs font-black text-gray-800 uppercase tracking-wider">
              Breakout Companies
            </h3>
          </div>
          <div className="space-y-4">
            {/* Pika */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-sm">
                  <SafeFavicon domain="pika.art" alt="Pika" size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    <a href="/companies/pika">Pika</a>
                  </h4>
                  <span className="text-[10px] text-gray-400">
                    Launched new 1.0 video model
                  </span>
                </div>
              </div>
              <ChevronRight
                className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors shrink-0"
                aria-hidden="true"
              />
            </div>
            {/* Cognition */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-sm">
                  <SafeFavicon
                    domain="cognition.ai"
                    alt="Cognition"
                    size={32}
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    <a href="/companies/cognition">Cognition</a>
                  </h4>
                  <span className="text-[10px] text-gray-400">
                    Closed $175M Series B
                  </span>
                </div>
              </div>
              <ChevronRight
                className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors shrink-0"
                aria-hidden="true"
              />
            </div>
            {/* Adept */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-sm">
                  <SafeFavicon domain="adept.ai" alt="Adept" size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    <a href="/companies/adept">Adept</a>
                  </h4>
                  <span className="text-[10px] text-gray-400">
                    Enterprise adoption surged 200%
                  </span>
                </div>
              </div>
              <ChevronRight
                className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors shrink-0"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Recently Funded Startups */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
            <span className="h-5 w-5 rounded-full bg-rose-50 text-rose-500 text-[10px] font-black flex items-center justify-center select-none">
              6
            </span>
            <h3 className="text-xs font-black text-gray-800 uppercase tracking-wider">
              Recently Funded Startups
            </h3>
          </div>
          <div className="space-y-4">
            {/* xAI */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-sm">
                  <SafeFavicon domain="x.ai" alt="xAI" size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    <a href="/companies/xai">xAI</a> ·{" "}
                    <span className="font-semibold text-rose-500 text-[10px]">
                      $6B Series B
                    </span>
                  </h4>
                  <span className="text-[10px] text-gray-400">
                    May 26, 2026 · a16z
                  </span>
                </div>
              </div>
              <ChevronRight
                className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors shrink-0"
                aria-hidden="true"
              />
            </div>
            {/* Databricks */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-sm">
                  <SafeFavicon
                    domain="databricks.com"
                    alt="Databricks"
                    size={32}
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    <a href="/companies/databricks">Databricks</a> ·{" "}
                    <span className="font-semibold text-rose-500 text-[10px]">
                      $500M Series J
                    </span>
                  </h4>
                  <span className="text-[10px] text-gray-400">
                    May 21, 2026 · Microsoft
                  </span>
                </div>
              </div>
              <ChevronRight
                className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors shrink-0"
                aria-hidden="true"
              />
            </div>
            {/* Mistral AI */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-sm">
                  <SafeFavicon domain="mistral.ai" alt="Mistral AI" size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    <a href="/companies/mistral-ai">Mistral AI</a> ·{" "}
                    <span className="font-semibold text-rose-500 text-[10px]">
                      $640M Series B
                    </span>
                  </h4>
                  <span className="text-[10px] text-gray-400">
                    BNRX Series · Lightspeed
                  </span>
                </div>
              </div>
              <ChevronRight
                className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors shrink-0"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Startups to Watch */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
            <span className="h-5 w-5 rounded-full bg-rose-50 text-rose-500 text-[10px] font-black flex items-center justify-center select-none">
              7
            </span>
            <h3 className="text-xs font-black text-gray-800 uppercase tracking-wider">
              Startups to Watch
            </h3>
          </div>
          <div className="space-y-4">
            {/* Deci */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-sm">
                  <SafeFavicon domain="deci.ai" alt="Deci" size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    <a href="/companies/deci">Deci</a>
                  </h4>
                  <span className="text-[10px] text-gray-400 line-clamp-1">
                    AI inference platform. High performance.
                  </span>
                </div>
              </div>
              <ChevronRight
                className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors shrink-0"
                aria-hidden="true"
              />
            </div>
            {/* Typeface */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-sm">
                  <SafeFavicon domain="typeface.ai" alt="Typeface" size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    <a href="/companies/typeface">Typeface</a>
                  </h4>
                  <span className="text-[10px] text-gray-400 line-clamp-1">
                    AI marketing platform. Generative content.
                  </span>
                </div>
              </div>
              <ChevronRight
                className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors shrink-0"
                aria-hidden="true"
              />
            </div>
            {/* Granola */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-sm">
                  <SafeFavicon domain="granola.so" alt="Granola" size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    <a href="/companies/granola">Granola</a>
                  </h4>
                  <span className="text-[10px] text-gray-400 line-clamp-1">
                    AI Notetaker for team productivity.
                  </span>
                </div>
              </div>
              <ChevronRight
                className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors shrink-0"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 08: AI UNICORNS --- */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[9px] font-black text-rose-500 uppercase tracking-widest bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full w-fit">
              08 AI Unicorns
            </div>
            <div className="text-[10px] text-gray-400 mt-1 font-semibold">
              Private companies valued at $1B+
            </div>
          </div>
          <button className="h-7 w-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-rose-500 hover:border-rose-200 transition-all shadow-sm">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-8 pt-2">
          {UNICORNS.map((unicorn) => (
            <a
              key={unicorn.name}
              className="flex items-center gap-3 hover:opacity-75 transition-opacity group"
              href={`/companies/${unicorn.name.toLowerCase()}`}
            >
              <div className="h-9 w-9 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center p-1.5 shrink-0 shadow-sm">
                <SafeFavicon
                  domain={unicorn.domain}
                  alt={unicorn.name}
                  size={36}
                />
              </div>
              <div>
                <div className="text-xs font-black text-gray-800 group-hover:text-rose-500 transition-colors">
                  {unicorn.name}
                </div>
                <div className="text-[10px] text-rose-500 font-extrabold">
                  {unicorn.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* --- SECTION 09: FRONTIER LABS --- */}
      <section className="rounded-3xl bg-gray-950 p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden border border-gray-900">
        <div className="absolute top-0 left-0 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl"></div>
        <div className="text-center sm:text-left z-10">
          <div className="text-[9px] font-black text-rose-400 uppercase tracking-widest">
            09 Frontier AI Labs
          </div>
          <div className="text-xs text-gray-400 mt-1.5 font-semibold">
            Organizations advancing the state of the art.
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center z-10">
          {FRONTIER_LABS.map((lab) => (
            <span
              key={lab.name}
              className="flex items-center gap-2 text-xs font-black text-white opacity-80 hover:opacity-100 hover:text-rose-400 transition-all cursor-pointer group"
            >
              <div className="h-5 w-5 object-contain opacity-80 group-hover:opacity-100 shrink-0 bg-white/10 rounded p-0.5">
                <SafeFavicon domain={lab.domain} alt={lab.name} size={20} />
              </div>
              {lab.name}
            </span>
          ))}
        </div>
        <button className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors z-10 shadow-sm shrink-0">
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </section>

      {/* --- SECTION 10: OPEN SOURCE LEADERS --- */}
      <section className="rounded-3xl bg-gray-950 p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-gray-900">
        <div className="text-center sm:text-left">
          <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">
            10 Open Source AI Leaders
          </div>
          <div className="text-xs text-gray-400 mt-1.5 font-semibold">
            Leading the open source movement.
          </div>
        </div>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {OPEN_SOURCE.map((os) => (
            <div key={os.name} className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-white/10 p-1 flex items-center justify-center shrink-0 border border-white/10">
                <SafeFavicon domain={os.domain} alt={os.name} size={28} />
              </div>
              <div>
                <span className="text-xs font-black text-white block">
                  {os.name}
                </span>
                <span className="text-[9px] text-emerald-400 font-extrabold">
                  {os.stars}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors shadow-sm shrink-0">
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </section>

      {/* --- SECTION 11: CURATED COLLECTIONS --- */}
      <section>
        <div className="flex items-baseline gap-2.5 mb-8">
          <span className="text-4xl font-black text-gray-100 select-none">
            11
          </span>
          <div>
            <h2 className="text-xl font-black text-gray-900 leading-tight">
              Curated Collections
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Handpicked lists for faster discovery.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 border-indigo-900/50 border p-5 flex flex-col justify-between min-h-[120px] cursor-pointer hover:scale-[1.02] transition-transform shadow-md group">
            <h4 className="text-xs font-black text-white leading-tight group-hover:text-rose-400 transition-colors">
              OpenAI Alumni Startups
            </h4>
            <span className="text-[9px] text-white/50 font-black uppercase tracking-wider">
              42 companies
            </span>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-orange-950 to-red-950 border-orange-900/50 border p-5 flex flex-col justify-between min-h-[120px] cursor-pointer hover:scale-[1.02] transition-transform shadow-md group">
            <h4 className="text-xs font-black text-white leading-tight group-hover:text-rose-400 transition-colors">
              YC AI Startups
            </h4>
            <span className="text-[9px] text-white/50 font-black uppercase tracking-wider">
              256 companies
            </span>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-violet-950 to-purple-950 border-purple-900/50 border p-5 flex flex-col justify-between min-h-[120px] cursor-pointer hover:scale-[1.02] transition-transform shadow-md group">
            <h4 className="text-xs font-black text-white leading-tight group-hover:text-rose-400 transition-colors">
              AI Agent Leaders
            </h4>
            <span className="text-[9px] text-white/50 font-black uppercase tracking-wider">
              121 companies
            </span>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-950 to-sky-950 border-sky-900/50 border p-5 flex flex-col justify-between min-h-[120px] cursor-pointer hover:scale-[1.02] transition-transform shadow-md group">
            <h4 className="text-xs font-black text-white leading-tight group-hover:text-rose-400 transition-colors">
              AI Infrastructure Leaders
            </h4>
            <span className="text-[9px] text-white/50 font-black uppercase tracking-wider">
              186 companies
            </span>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-emerald-950 to-teal-950 border-emerald-900/50 border p-5 flex flex-col justify-between min-h-[120px] cursor-pointer hover:scale-[1.02] transition-transform shadow-md group">
            <h4 className="text-xs font-black text-white leading-tight group-hover:text-rose-400 transition-colors">
              Most Funded AI Startups
            </h4>
            <span className="text-[9px] text-white/50 font-black uppercase tracking-wider">
              154 companies
            </span>
          </div>
        </div>
      </section>

      {/* --- SECTION 12: NEW ON GRAPHONE --- */}
      <section>
        <SectionHeader
          number="12"
          title="New on GraphOne"
          subtitle="Recently added companies."
          href="/companies/new"
        />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {NEW_COMPANIES.map((company) => (
            <div
              key={company.name}
              className="rounded-2xl border border-gray-200 bg-white p-4 flex flex-col items-center gap-2.5 text-center shadow-sm hover:border-rose-400 hover:shadow-md transition-all group"
            >
              <div className="h-10 w-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shadow-sm">
                <SafeFavicon
                  domain={company.domain}
                  alt={company.name}
                  size={40}
                />
              </div>
              <div>
                <h4 className="text-[11px] font-black text-gray-800 group-hover:text-rose-500 transition-colors truncate max-w-[120px]">
                  <a
                    href={
                      company.customHref ||
                      `/companies/${company.name.toLowerCase()}`
                    }
                  >
                    {company.name}
                  </a>
                </h4>
                <span className="text-[9px] text-gray-400 block mt-0.5 font-bold uppercase tracking-wider">
                  {company.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
