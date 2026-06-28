import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function GrowthAndEmerging() {
  return (
    <>
      {/* SECTION 02 */}
      <section>
        <SectionHeader
          number="02"
          title="Fastest Growing AI Companies"
          subtitle="Companies showing strong momentum across key growth signals."
          href="/companies"
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 flex flex-col items-center text-center relative overflow-hidden min-h-[170px] justify-between shadow-sm">
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-rose-50 via-orange-50 to-transparent"></div>
              <div className="flex flex-col items-center gap-2.5 z-10">
                <div className="h-10 w-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shadow-sm">
                  <img
                    src="https://www.google.com/s2/favicons?domain=lovable.dev&sz=128"
                    alt="Lovable"
                    className="h-full w-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-gray-800 hover:text-rose-500 transition-colors line-clamp-1">
                    <a href="/companies/lovable">Lovable</a>
                  </h4>
                  <span className="text-[9px] text-gray-400 block mt-0.5 line-clamp-1">
                    AI App Builder
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-black px-2.5 py-1 rounded-full border bg-rose-50 border-rose-200 text-rose-600 z-10 shadow-sm">
                +78% Growth
              </span>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 flex flex-col items-center text-center relative overflow-hidden min-h-[170px] justify-between shadow-sm">
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 via-indigo-50 to-transparent"></div>
              <div className="flex flex-col items-center gap-2.5 z-10">
                <div className="h-10 w-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shadow-sm">
                  <img
                    src="https://www.google.com/s2/favicons?domain=calico.com&sz=128"
                    alt="Calico"
                    className="h-full w-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-gray-800 hover:text-rose-500 transition-colors line-clamp-1">
                    <a href="/companies/calico">Calico</a>
                  </h4>
                  <span className="text-[9px] text-gray-400 block mt-0.5 line-clamp-1">
                    AI Infrastructure
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-black px-2.5 py-1 rounded-full border bg-blue-50 border-blue-200 text-blue-600 z-10 shadow-sm">
                +90% Growth
              </span>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 flex flex-col items-center text-center relative overflow-hidden min-h-[170px] justify-between shadow-sm">
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-50 via-teal-50 to-transparent"></div>
              <div className="flex flex-col items-center gap-2.5 z-10">
                <div className="h-10 w-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shadow-sm">
                  <img
                    src="https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=128"
                    alt="ElevenLabs"
                    className="h-full w-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-gray-800 hover:text-rose-500 transition-colors line-clamp-1">
                    <a href="/companies/elevenlabs">ElevenLabs</a>
                  </h4>
                  <span className="text-[9px] text-gray-400 block mt-0.5 line-clamp-1">
                    AI Voice
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-black px-2.5 py-1 rounded-full border bg-emerald-50 border-emerald-200 text-emerald-600 z-10 shadow-sm">
                +92% Growth
              </span>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 flex flex-col items-center text-center relative overflow-hidden min-h-[170px] justify-between shadow-sm">
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-50 via-violet-50 to-transparent"></div>
              <div className="flex flex-col items-center gap-2.5 z-10">
                <div className="h-10 w-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shadow-sm">
                  <img
                    src="https://www.google.com/s2/favicons?domain=pika.art&sz=128"
                    alt="Pika"
                    className="h-full w-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-gray-800 hover:text-rose-500 transition-colors line-clamp-1">
                    <a href="/companies/pika">Pika</a>
                  </h4>
                  <span className="text-[9px] text-gray-400 block mt-0.5 line-clamp-1">
                    AI Video
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-black px-2.5 py-1 rounded-full border bg-purple-50 border-purple-200 text-purple-600 z-10 shadow-sm">
                +71% Growth
              </span>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 flex flex-col items-center text-center relative overflow-hidden min-h-[170px] justify-between shadow-sm">
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 via-yellow-50 to-transparent"></div>
              <div className="flex flex-col items-center gap-2.5 z-10">
                <div className="h-10 w-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shadow-sm">
                  <img
                    src="https://www.google.com/s2/favicons?domain=mistral.ai&sz=128"
                    alt="Mistral AI"
                    className="h-full w-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-gray-800 hover:text-rose-500 transition-colors line-clamp-1">
                    <a href="/companies/mistral-ai">Mistral AI</a>
                  </h4>
                  <span className="text-[9px] text-gray-400 block mt-0.5 line-clamp-1">
                    AI Models
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-black px-2.5 py-1 rounded-full border bg-amber-50 border-amber-200 text-amber-700 z-10 shadow-sm">
                +71% Growth
              </span>
            </div>
          </div>

          <div className="lg:col-span-1 rounded-2xl bg-gray-950 text-white p-5 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <h4 className="text-sm font-black leading-snug mb-2.5">
                Explore tomorrow's market leaders today.
              </h4>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                Discover companies with the highest growth potential across the
                AI landscape.
              </p>
            </div>
            <div className="mt-4">
              <svg
                className="w-full h-10 text-rose-500 mb-4"
                viewBox="0 0 100 30"
                fill="none"
              >
                <path
                  d="M0,25 Q15,20 30,12 T60,18 T85,3 T100,5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M0,25 Q15,20 30,12 T60,18 T85,3 T100,5 L100,30 L0,30Z"
                  fill="currentColor"
                  opacity="0.08"
                />
                <circle cx="85" cy="3" r="2.5" fill="#f43f5e" />
              </svg>
              <button className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-[11px] font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                Explore Growth Leaders{" "}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 */}
      <section>
        <SectionHeader
          number="03"
          title="Emerging AI Startups to Watch"
          subtitle="Promising early-stage companies gaining real traction."
          href="/companies"
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between relative overflow-hidden shadow-sm group">
            <div className="absolute right-6 top-1/2 -translate-y-1/2 h-28 w-28 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center select-none shadow-sm pointer-events-none group-hover:scale-105 transition-transform">
              <span className="text-6xl font-black text-indigo-400">G</span>
            </div>
            <div className="z-10">
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="h-10 w-10 rounded-xl border border-gray-200 p-1.5 flex items-center justify-center shadow-sm">
                  <img
                    src="https://www.google.com/s2/favicons?domain=glean.com&sz=128"
                    alt="Glean"
                    className="h-full w-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 leading-none group-hover:text-rose-500 transition-colors">
                    Glean
                  </h3>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full mt-1.5 inline-block">
                    AI Search
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed mt-4">
                Enterprise search engine for all your workplace data. Finds
                information across your company in seconds.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-gray-400 pt-5 mt-6 border-t border-gray-100 z-10 font-semibold">
              <span>Founded: 2022</span>
              <span>·</span>
              <span>51-200 employees</span>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 flex flex-col justify-between shadow-sm hover:border-rose-300 hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shadow-sm">
                    <img
                      src="https://www.google.com/s2/favicons?domain=reka.com&sz=128"
                      alt="Reka"
                      className="h-full w-full object-contain rounded-md"
                    />
                  </div>
                  <ChevronRight
                    className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-xs font-black text-gray-800 leading-snug group-hover:text-rose-500 transition-colors">
                  <a href="/companies/reka">Reka</a>
                </h4>
                <span className="text-[9px] text-gray-400 block mt-0.5">
                  AI Research
                </span>
              </div>
              <div className="text-[9px] text-gray-400 font-semibold pt-3 mt-4 border-t border-gray-100 space-y-0.5">
                <div>Founded: 2023</div>
                <div>Size: 11-50</div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 flex flex-col justify-between shadow-sm hover:border-rose-300 hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shadow-sm">
                    <img
                      src="https://www.google.com/s2/favicons?domain=huggingface.co&sz=128"
                      alt="Hugging Face"
                      className="h-full w-full object-contain rounded-md"
                    />
                  </div>
                  <ChevronRight
                    className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-xs font-black text-gray-800 leading-snug group-hover:text-rose-500 transition-colors">
                  <a href="/companies/hugging-face">Hugging Face</a>
                </h4>
                <span className="text-[9px] text-gray-400 block mt-0.5">
                  AI Infrastructure
                </span>
              </div>
              <div className="text-[9px] text-gray-400 font-semibold pt-3 mt-4 border-t border-gray-100 space-y-0.5">
                <div>Founded: 2016</div>
                <div>Size: 201-500</div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 flex flex-col justify-between shadow-sm hover:border-rose-300 hover:shadow-md transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shadow-sm">
                    <img
                      src="https://www.google.com/s2/favicons?domain=mistral.ai&sz=128"
                      alt="Mistral AI"
                      className="h-full w-full object-contain rounded-md"
                    />
                  </div>
                  <ChevronRight
                    className="h-3.5 w-3.5 text-gray-300 group-hover:text-rose-500 transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-xs font-black text-gray-800 leading-snug group-hover:text-rose-500 transition-colors">
                  <a href="/companies/mistral-ai">Mistral AI</a>
                </h4>
                <span className="text-[9px] text-gray-400 block mt-0.5">
                  AI Models
                </span>
              </div>
              <div className="text-[9px] text-gray-400 font-semibold pt-3 mt-4 border-t border-gray-100 space-y-0.5">
                <div>Founded: 2023</div>
                <div>Size: 51-200</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
