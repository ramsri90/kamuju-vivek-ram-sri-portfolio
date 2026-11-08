"use client";

import React, { useState } from "react";
import {
  Cpu,
  Terminal,
  Activity,
  Layers,
  ShieldAlert,
  ArrowUpRight,
  Send,
  Workflow,
  Radio,
  FileCode2,
  HardDrive,
  Compass,
  CornerDownRight,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
} from "lucide-react";
import NeuralConstellationCanvas from "@/components/NeuralConstellationCanvas";
import AnimatedTerminal from "@/components/AnimatedTerminal";

export default function PortfolioPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "[SYS_INIT] VIVEK_AI_CORE_ONLINE. Ready to query production telemetry, client deployments, or multi-tenant architecture specifications.",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "client" | "agency" | "systems">("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userQuery = inputVal.trim();
    const newMessages = [...messages, { sender: "user", text: userQuery }];
    setMessages(newMessages);
    setInputVal("");

    setTimeout(() => {
      let reply =
        "[TELEMETRY_LOG] Kamuju Vivek Ram Sri: AI-Native Full-Stack Architect & Data Science Student (Former Developer Intern at WebbHeads). Core engine: Next.js 14, Supabase (PostgreSQL RLS), and Google Gemini LLM API.";
      const lower = userQuery.toLowerCase();

      if (lower.includes("client") || lower.includes("doctor") || lower.includes("sai") || lower.includes("physician")) {
        reply =
          "[CLIENT_RECORD: DR_SAI_SEKHAR] Pitched, closed, and architected drsaisekharphysician.com. Stack: Next.js 14, JSON-LD clinical schemas, automated appointment webhook pipelines direct to Google Sheets.";
      } else if (lower.includes("mydiyas") || lower.includes("edtech")) {
        reply =
          "[DEPLOYMENT_RECORD: MYDIYAS] 21st-century skills EdTech platform. Built with React 19, TypeScript, and Google Gemini API integration with zero-latency generative prompts.";
      } else if (lower.includes("leadcore") || lower.includes("crm") || lower.includes("webbheads")) {
        reply =
          "[AGENCY_SYSTEM: LEADCORE] Enterprise multi-tenant CRM engineered at WebbHeads. Enforces PostgreSQL Row-Level Security (RLS) data isolation with automated Google Sheets bidirectional sync.";
      } else if (lower.includes("hire") || lower.includes("freelance") || lower.includes("contact")) {
        reply =
          "[AVAILABILITY: OPEN] Currently allocating bandwidth for select contract builds & AI architectures. Direct channel: ramsri.sri2004@gmail.com // +91 6304050076.";
      } else if (lower.includes("abyss") || lower.includes("cloud") || lower.includes("android")) {
        reply =
          "[SYSTEMS_RECORD: ABYSS_CLOUD] Decentralized media vault Android app. Utilizes Telegram Bot API as encrypted distributed cloud storage with a 50-entry LRU in-memory cache.";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 450);
  };

  const projects = [
    {
      id: "01",
      code: "SYS-01",
      title: "Dr. Sai Sekhar Physician",
      subtitle: "Healthcare Platform & Lead Automation",
      category: "client",
      role: "DIRECT CLIENT WIN",
      status: "LIVE PRODUCTION",
      url: "https://drsaisekharphysician.com",
      urlDisplay: "drsaisekharphysician.com",
      description:
        "Pitched the physician directly, won client contract, and built the digital medical ecosystem. Configured appointment booking webhooks into Google Sheets and full JSON-LD schema SEO.",
      tags: ["REACT", "NEXT.JS 14", "GOOGLE SHEETS API", "JSON-LD SEO", "SERVERLESS"],
      metrics: "100% AUTOMATED LEAD PIPELINE",
      latency: "42ms",
    },
    {
      id: "02",
      code: "SYS-02",
      title: "MyDiyas.com",
      subtitle: "21st Century Skills EdTech Platform",
      category: "client",
      role: "PERSONAL CLIENT",
      status: "LIVE PRODUCTION",
      url: "https://mydiyas.com",
      urlDisplay: "mydiyas.com",
      description:
        "Shipped an interactive platform for critical thinking, digital literacy, and leadership. Engineered with React 19, Vite, Tailwind CSS, and Google Gemini LLM API integration.",
      tags: ["REACT 19", "TYPESCRIPT", "GEMINI LLM API", "TAILWIND CSS", "FRAMER MOTION"],
      metrics: "ZERO-LATENCY AI PROMPTS",
      latency: "38ms",
    },
    {
      id: "03",
      code: "SYS-03",
      title: "LeadCore CRM",
      subtitle: "Enterprise Lead Management Dashboard",
      category: "agency",
      role: "WEBBHEADS CORE PRODUCT",
      status: "PRODUCTION SAAS",
      description:
        "Full-stack CRM dashboard built on Next.js 14 and Supabase. Implemented Postgres Row-Level Security (RLS) for tenant isolation, Google Sheets import engine, and sub-second lead search.",
      tags: ["NEXT.JS 14", "SUPABASE", "POSTGRESQL RLS", "SHEETS SYNC", "TYPESCRIPT"],
      metrics: "SUB-SECOND SEARCH // TENANT RLS",
      latency: "19ms",
    },
    {
      id: "04",
      code: "SYS-04",
      title: "WebbHeads Appointment SaaS",
      subtitle: "Multi-Tenant White-Label Booking",
      category: "agency",
      role: "WEBBHEADS PRODUCT",
      status: "PRODUCTION SAAS",
      description:
        "Engineered multi-tenant booking engine with Postgres-enforced isolation, deterministic time-slot calculation, and automated SMS/email webhook sequences.",
      tags: ["NEXT.JS 14", "POSTGRESQL", "DETERMINISTIC SLOTS", "MULTI-TENANT", "REST API"],
      metrics: "DETERMINISTIC SLOT MATRIX",
      latency: "24ms",
    },
    {
      id: "05",
      code: "SYS-05",
      title: "Abyss Cloud",
      subtitle: "Decentralized Media Vault Android App",
      category: "systems",
      role: "PERSONAL ARCHITECTURE",
      status: "SHIPPED APP",
      description:
        "Decentralized cloud architecture utilizing Telegram channels as private encrypted storage. Implemented biometric auth, WorkManager background sync, and an in-memory LRU cache.",
      tags: ["KOTLIN", "JETPACK COMPOSE", "TELEGRAM BOT API", "LRU CACHE", "MATERIAL 3"],
      metrics: "ENCRYPTED TELEGRAM STORAGE",
      latency: "65ms",
    },
  ];

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <div className="relative min-h-screen ice-canvas selection:bg-sky-200 overflow-x-hidden">
      {/* 1. SHARP FROSTED GLASS NAVIGATION BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-sky-200">
        <div className="px-4 sm:px-6 md:px-12 py-3 flex items-center justify-between font-mono text-[13px]">
          {/* Logo / Home trigger */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity truncate max-w-[70%] sm:max-w-none"
          >
            <span className="w-2.5 h-2.5 bg-sky-600 shrink-0 inline-block" />
            <span className="font-bold tracking-wider text-slate-900 truncate">
              KAMUJU VIVEK RAM SRI // SYS_01
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-slate-700">
            <a href="#projects" className="hover:text-sky-600 transition-colors">
              [01] BUILDS
            </a>
            <a href="#experience" className="hover:text-sky-600 transition-colors">
              [02] EXPERIENCE
            </a>
            <a href="#ai-assistant" className="hover:text-sky-600 transition-colors">
              [03] AI_COPILOT
            </a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">
              [04] CONNECT
            </a>
          </nav>

          {/* Right Action / Mobile Trigger */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:ramsri.sri2004@gmail.com"
              className="px-4 sm:px-6 py-1.5 sm:py-2 bg-sky-600 hover:bg-sky-700 text-white font-mono font-semibold text-xs tracking-wider transition-all"
            >
              EMAIL
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-700 hover:bg-sky-100 transition-colors border border-sky-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 py-4 bg-white/95 border-b border-sky-200 font-mono text-xs flex flex-col gap-3 shadow-lg">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sky-100 text-slate-800"
            >
              [01] BUILDS
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sky-100 text-slate-800"
            >
              [02] EXPERIENCE
            </a>
            <a
              href="#ai-assistant"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-sky-100 text-slate-800"
            >
              [03] AI_COPILOT
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-slate-800"
            >
              [04] CONNECT
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        {/* Effect 02: 3D Interactive AI Neural Constellation & Polyhedral Mesh */}
        <NeuralConstellationCanvas />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Overline, Syne Headline, Sharp Buttons */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-7">
            {/* Telemetry Overline in JetBrains Mono */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-semibold text-slate-800 tracking-wider">
              <span className="w-2 h-2 bg-sky-500 animate-ping inline-block shrink-0" />
              <span className="truncate">KAMUJU VIVEK RAM SRI // SYS_STATUS: ONLINE</span>
            </div>

            {/* Syne Ultra-Wide Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] sm:leading-[1.08]">
              AI-Native Full-Stack
              <br />
              Engineer
            </h1>

            {/* Sharp Flat Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-3">
              <a
                href="#projects"
                className="btn-cyan-primary px-6 sm:px-8 py-3 sm:py-3.5 font-mono font-semibold text-xs sm:text-[14px] tracking-wider cursor-pointer inline-block text-center flex-1 sm:flex-initial"
              >
                PROJECTS
              </a>
              <a
                href="#ai-assistant"
                className="btn-ice-secondary px-6 sm:px-8 py-3 sm:py-3.5 font-mono font-semibold text-xs sm:text-[14px] tracking-wider cursor-pointer inline-block text-center flex-1 sm:flex-initial"
              >
                AI ASSISTANT
              </a>
            </div>

            {/* Space Grotesk Body Copy */}
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed pt-1 max-w-lg font-body">
              Former Full-Stack &amp; AI Developer Intern at <strong className="text-slate-900">WebbHeads</strong> &amp; B.Tech Data Science student.
              Shipped 5+ live production platforms, specializing in multilingual conversational LLMs,
              Postgres Row-Level Security, and high-velocity web engineering.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 font-mono text-[10px] sm:text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" /> VISAKHAPATNAM, AP
              </span>
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-sky-600 shrink-0" /> LATENCY: 22ms
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-sky-600 shrink-0" /> ENGINE: GEMINI // NEXT14
              </span>
            </div>
          </div>

          {/* Right Column: Animated Typewriter Terminal Card (Effect 01) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <AnimatedTerminal />
          </div>
        </div>
      </section>

      {/* 3. "PRODUCTION BUILDS & LIVE DEPLOYMENTS" */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="text-sky-600 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              [TELEMETRY_LOG] DEPLOYED_CALLSETS
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Production Builds &amp; Live Deployments
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2 font-body">
              Production client contracts, internal agency SaaS, and autonomous systems.
            </p>
          </div>

          {/* Responsive Scrollable Filter Tabs */}
          <div className="flex items-center overflow-x-auto border border-sky-300 font-mono text-xs bg-white/70 max-w-full">
            {(["all", "client", "agency", "systems"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-2 font-semibold uppercase tracking-wider whitespace-nowrap transition-all border-r last:border-r-0 border-sky-200 text-[11px] sm:text-xs ${
                  activeTab === tab
                    ? "bg-sky-600 text-white"
                    : "text-slate-700 hover:bg-sky-50"
                }`}
              >
                {tab === "all" ? "[ALL]" : `[${tab.toUpperCase()}]`}
              </button>
            ))}
          </div>
        </div>

        {/* Sharp Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="ice-project-card p-5 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tags */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4 font-mono text-[10px] sm:text-[11px]">
                  <span className="text-sky-800 bg-sky-100/90 px-2 py-0.5 border border-sky-300 font-semibold truncate max-w-[65%]">
                    {project.role}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-300 shrink-0">
                    <span className="w-1.5 h-1.5 bg-emerald-600 inline-block" />
                    {project.status}
                  </span>
                </div>

                {/* Syne Card Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-[11px] sm:text-xs font-mono text-slate-500 mb-3 sm:mb-4">{project.subtitle}</p>

                {/* Space Grotesk Body */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6 font-body">
                  {project.description}
                </p>

                {/* Telemetry Metric Box */}
                <div className="mb-4 sm:mb-6 p-2.5 sm:p-3 bg-sky-50/90 border border-sky-200 font-mono text-[11px] sm:text-xs text-sky-950 font-medium flex items-center justify-between">
                  <div className="flex items-center gap-2 truncate">
                    <Cpu className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </div>
                  <span className="text-slate-400 text-[10px] shrink-0 ml-2">{project.latency}</span>
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] font-mono bg-white text-slate-700 px-2 py-0.5 border border-sky-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 sm:py-3 btn-ice-secondary font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <span className="truncate">CONNECT: {project.urlDisplay}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                ) : (
                  <div className="font-mono text-[10px] sm:text-[11px] text-slate-400 text-center py-2 border border-dashed border-sky-200">
                    [STATUS: INTERNAL_PRODUCTION_SAAS]
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WORK EXPERIENCE */}
      <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="ice-project-card p-6 sm:p-10">
          <div className="max-w-3xl">
            <div className="text-sky-600 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              [CAREER_TIMELINE] WORK_HISTORY
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
              Former Web Development Intern
              <br />
              (Full-Stack &amp; AI) at WebbHeads
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 font-body">
              Visakhapatnam Digital Automation Agency • Ex-Developer Intern. Worked directly with the
              CEO and Technical Lead on product roadmap, client prioritization, and full-cycle
              delivery using AI-accelerated workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 font-body">
            <div className="p-5 sm:p-6 bg-white/80 border border-sky-200">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-sky-100 flex items-center justify-center text-sky-700 mb-3 sm:mb-4 font-mono font-bold">
                <Workflow className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-1.5 sm:mb-2">
                Multilingual Conversational AI
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-body">
                Automates lead qualification with Telugu/English code-switching NLP via Google
                Gemini API and routes qualified callbacks to CRM.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white/80 border border-sky-200">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-sky-100 flex items-center justify-center text-sky-700 mb-3 sm:mb-4 font-mono font-bold">
                <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-1.5 sm:mb-2">
                Postgres RLS Multi-Tenant Architecture
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-body">
                Enforced strict Row-Level Security for tenant isolation in LeadCore CRM and the
                WebbHeads booking portal.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white/80 border border-sky-200">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-sky-100 flex items-center justify-center text-sky-700 mb-3 sm:mb-4 font-mono font-bold">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-1.5 sm:mb-2">
                AI-Native Development Velocity
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-body">
                Leverages Claude, Gemini, and Antigravity for architectural planning, code
                generation, and rapid client shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE VIVEK AI ASSISTANT */}
      <section id="ai-assistant" className="py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-20">
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 text-[11px] sm:text-xs font-mono font-bold mb-2 sm:mb-3 border border-sky-200">
            <Radio className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>[AI_COPILOT] INTERACTIVE_TERMINAL</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            Query Vivek&apos;s AI Assistant
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1 sm:mt-2 max-w-md mx-auto font-body">
            Test the live chatbot embedded below. It has full knowledge of Vivek&apos;s builds,
            skills, and availability.
          </p>
        </div>

        {/* Sharp Chat Console */}
        <div className="ice-project-card overflow-hidden flex flex-col h-[450px] sm:h-[500px]">
          {/* Header */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white/95 border-b border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-sky-600 flex items-center justify-center text-white font-mono font-bold text-xs shrink-0">
                AI
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm">VIVEK_CORE_AI // v2.4</div>
                <div className="text-[10px] text-emerald-600 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 bg-emerald-500 inline-block" />
                  ONLINE // LATENCY: 14ms
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-xs">
              <button
                onClick={() => setInputVal("Explain Dr. Sai Sekhar client architecture")}
                className="px-2 py-0.5 bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 transition-colors"
              >
                DR_SAI_SEKHAR?
              </button>
              <button
                onClick={() => setInputVal("Explain LeadCore CRM with Supabase RLS")}
                className="px-2 py-0.5 bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 transition-colors"
              >
                LEADCORE_CRM?
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3 sm:space-y-4 font-mono text-[11px] sm:text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 sm:gap-3 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "bot" && (
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-sky-600 text-white flex items-center justify-center shrink-0 text-[9px] sm:text-[10px] font-mono">
                    SYS
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[80%] p-3 sm:p-3.5 leading-relaxed shadow-sm break-words ${
                    m.sender === "user"
                      ? "btn-cyan-primary text-white font-mono"
                      : "bg-white text-slate-800 border border-sky-200 font-mono"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 sm:p-4 bg-white/95 border-t border-sky-200 flex gap-2 font-mono">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Query tech stack, client pitch experience..."
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-sky-300 bg-sky-50/50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-600 font-mono min-w-0"
            />
            <button
              type="submit"
              className="btn-cyan-primary px-4 sm:px-6 py-2 sm:py-3 text-xs font-mono font-semibold flex items-center gap-1.5 shrink-0"
            >
              <span>EXEC</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </section>

      {/* 6. CONTACT & FOOTER */}
      <footer id="contact" className="py-10 sm:py-12 border-t border-sky-200 bg-white/70 backdrop-blur-md font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-heading font-extrabold text-slate-900 text-base sm:text-lg">KAMUJU VIVEK RAM SRI</div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 font-mono">
              [ROLE] AI-Native Full-Stack Architect // Ex-WebbHeads Developer Intern • Visakhapatnam, AP
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-700 font-mono font-medium">
            <a
              href="mailto:ramsri.sri2004@gmail.com"
              className="hover:text-sky-600 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-sky-600" /> ramsri.sri2004@gmail.com
            </a>
            <a
              href="tel:+916304050076"
              className="hover:text-sky-600 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" /> +91 6304050076
            </a>
            <a
              href="https://www.linkedin.com/in/kamujuvivekramsri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 transition-colors"
            >
              [LINKEDIN]
            </a>
            <a
              href="https://github.com/ramsri90"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 transition-colors"
            >
              [GITHUB]
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
