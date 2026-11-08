"use client";

import React, { useState, useEffect } from "react";
import { Activity, RefreshCw } from "lucide-react";

const aboutMeText = `$ vivek --profile --telemetry

[IDENTITY]
  Name      : Kamuju Vivek Ram Sri
  Role      : AI-Native Full-Stack Architect & Freelance Engineer
  Location  : Visakhapatnam, AP, India
  Education : B.Tech in Data Science (Gayatri Vidya Parishad / AU)

[EXPERIENCE & IMPACT]
  • Ex-Full-Stack & AI Developer Intern @ WebbHeads
  • Shipped 5+ production AI and full-stack web platforms
  • Worked directly with CEO on product roadmap & AI workflows

[PROVEN DEPLOYMENTS]
  • drsaisekharphysician.com : Pitched, won, & deployed healthcare platform
  • mydiyas.com             : React 19 + Gemini API EdTech platform
  • LeadCore CRM            : Next.js 14 + Supabase Postgres RLS
  • Abyss Cloud             : Decentralized Android vault via Telegram API

[CORE STACK]
  Next.js 14/15 | React 19 | TypeScript | Supabase (RLS) | Gemini LLM
  Kotlin (Compose) | PostgreSQL | Tailwind CSS | Python | REST Webhooks

[STATUS]
  Bandwidth : OPEN FOR SELECT FREELANCE BUILDS & HIGH-IMPACT ROLES
  Contact   : ramsri.sri2004@gmail.com // +91 6304050076`;

export default function AnimatedTerminal() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      if (currentIndex <= aboutMeText.length) {
        setDisplayedText(aboutMeText.slice(0, currentIndex));
        currentIndex += 3;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);
  }, []);

  const handleRestart = () => {
    setDisplayedText("");
    setIsTyping(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= aboutMeText.length) {
        setDisplayedText(aboutMeText.slice(0, currentIndex));
        currentIndex += 3;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 12);
  };

  return (
    <div className="ice-backplate p-4 sm:p-6 md:p-8 w-full max-w-lg relative overflow-hidden">
      <div className="ice-code-card p-4 sm:p-6 md:p-8">
        {/* Terminal Window Header (Clean, only about-vivek.sh) */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-sky-200 font-mono text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-rose-400 inline-block" />
            <span className="w-2.5 h-2.5 bg-amber-400 inline-block" />
            <span className="w-2.5 h-2.5 bg-emerald-400 inline-block" />
          </div>
          <span className="font-semibold text-slate-800 tracking-wider">
            about-vivek.sh // {isTyping ? "EXECUTING..." : "SYS_READY"}
          </span>
          <button
            onClick={handleRestart}
            title="Re-run terminal"
            className="text-slate-400 hover:text-sky-600 transition-colors p-1"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isTyping ? "animate-spin" : ""}`} />
          </button>
        </div>

        {/* Live About Me Typewriter Window */}
        <div className="relative">
          <pre className="font-mono text-[11px] sm:text-[11.5px] leading-relaxed text-slate-800 whitespace-pre overflow-x-auto min-h-[360px] max-h-[440px]">
            <code>
              {displayedText}
              {/* Blinking ice-blue cursor */}
              <span className="inline-block w-2 h-3.5 bg-sky-600 ml-0.5 align-middle animate-pulse" />
            </code>
          </pre>
        </div>

        {/* Terminal Telemetry Footer */}
        <div className="mt-4 pt-3 border-t border-sky-200 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-500">
          <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 shrink-0" />
            <span>{isTyping ? "STREAMING_TELEMETRY..." : "PROFILE_VERIFIED // 200 OK"}</span>
          </span>
          <span className="text-slate-600">
            PID: 4096 // EXIT_CODE: 0
          </span>
        </div>
      </div>
    </div>
  );
}
