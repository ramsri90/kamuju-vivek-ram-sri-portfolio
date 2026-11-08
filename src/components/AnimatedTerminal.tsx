"use client";

import React, { useState, useEffect } from "react";
import { Activity, RefreshCw } from "lucide-react";

interface SnippetTab {
  id: string;
  filename: string;
  badge: string;
  status: string;
  code: string;
}

const SNIPPETS: SnippetTab[] = [
  {
    id: "pipeline",
    filename: "lead-engine.ts",
    badge: "AI_MULTILINGUAL_NLP",
    status: "ACTIVE // 200 OK",
    code: `import { GoogleGemini } from "@google/genai";
import { createClient } from "@supabase/supabase-js";

// Multi-tenant lead qualification & webhook pipeline
export async function qualifyAndSyncLead(rawPayload: LeadEvent) {
  const gemini = new GoogleGemini({ apiKey: process.env.GEMINI_KEY });
  
  // Multilingual classification (Telugu/English code-switching)
  const qualification = await gemini.classify({
    prompt: rawPayload.message,
    context: "Lead intent, budget range & callback priority",
    codeSwitching: true,
  });

  if (qualification.isHighIntent) {
    // Isolated tenant insertion protected by Postgres RLS
    await supabase.from("leads").insert({
      tenant_id: rawPayload.tenantId,
      lead_data: qualification.summary,
      priority: "CRITICAL",
    });

    // Real-time webhook sync to Google Sheets
    await triggerSheetsSyncWebhook(rawPayload);
    return { status: "DISPATCHED_CALLBACK_TRIGGERED" };
  }
}`,
  },
  {
    id: "security",
    filename: "tenant-rls.sql",
    badge: "POSTGRESQL_SECURITY",
    status: "POLICY_ENFORCED",
    code: `-- Enterprise Row-Level Security (RLS) Isolation
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Deterministic tenant boundary isolation
CREATE POLICY tenant_isolation_leadcore ON leads
  FOR ALL
  USING (tenant_id = auth.jwt() ->> 'tenant_id')
  WITH CHECK (tenant_id = auth.jwt() ->> 'tenant_id');

-- Sub-second indexing across hundreds of tenant leads
CREATE INDEX CONCURRENTLY idx_tenant_lead_lookup
  ON leads (tenant_id, created_at DESC);`,
  },
  {
    id: "decentralized",
    filename: "vault-sync.kt",
    badge: "KOTLIN_ANDROID_CORE",
    status: "VAULT_ENCRYPTED",
    code: `// Abyss Cloud: Telegram Bot API Decentralized Vault
class MediaSyncWorker(context: Context, params: WorkerParameters) :
    CoroutineWorker(context, params) {

    private val lruCache = LruCache<String, ByteArray>(50)

    override suspend fun doWork(): Result = withContext(Dispatchers.IO) {
        val encryptedPayload = biometricCipher.encrypt(inputData.toByteArray())
        
        // Zero-cost encrypted distributed chunk routing
        telegramVaultApi.dispatchStream(
            channelId = BuildConfig.VAULT_CHANNEL,
            streamChunk = encryptedPayload
        )
        Result.success()
    }
}`,
  },
];

export default function AnimatedTerminal() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const activeSnippet = SNIPPETS[activeTabIdx];

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const targetCode = activeSnippet.code;
    const interval = setInterval(() => {
      if (currentIndex <= targetCode.length) {
        setDisplayedText(targetCode.slice(0, currentIndex));
        currentIndex += 3; // Ultra-smooth realistic streaming pace
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [activeTabIdx]);

  const handleRestart = () => {
    setDisplayedText("");
    setIsTyping(true);
    let currentIndex = 0;
    const targetCode = activeSnippet.code;
    const interval = setInterval(() => {
      if (currentIndex <= targetCode.length) {
        setDisplayedText(targetCode.slice(0, currentIndex));
        currentIndex += 3;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 18);
  };

  return (
    <div className="ice-backplate p-4 sm:p-6 md:p-8 w-full max-w-lg relative overflow-hidden">
      <div className="ice-code-card p-4 sm:p-6 md:p-8">
        {/* Terminal Tab Bar */}
        <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-sky-200 gap-2 font-mono text-[11px]">
          {/* Traffic lights + Clickable Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <div className="flex items-center gap-1.5 shrink-0 mr-1">
              <span className="w-2.5 h-2.5 bg-rose-400 inline-block" />
              <span className="w-2.5 h-2.5 bg-amber-400 inline-block" />
              <span className="w-2.5 h-2.5 bg-emerald-400 inline-block" />
            </div>

            {SNIPPETS.map((snippet, idx) => (
              <button
                key={snippet.id}
                onClick={() => setActiveTabIdx(idx)}
                className={`px-2.5 py-1 text-[11px] font-semibold transition-all border shrink-0 ${
                  activeTabIdx === idx
                    ? "bg-white text-sky-800 border-sky-300 shadow-sm"
                    : "bg-sky-50/70 text-slate-500 border-transparent hover:text-slate-800"
                }`}
              >
                {snippet.filename}
              </button>
            ))}
          </div>

          {/* Quick replay stream button */}
          <button
            onClick={handleRestart}
            title="Replay Code Stream"
            className="text-slate-400 hover:text-sky-600 transition-colors p-1"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isTyping ? "animate-spin" : ""}`} />
          </button>
        </div>

        {/* Live Code Window with Laser Scanning Overlay */}
        <div className="relative">
          {/* Laser beam sweep animation */}
          <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-60 animate-pulse pointer-events-none" />

          <pre className="font-mono text-[11px] sm:text-[12px] leading-relaxed text-slate-800 whitespace-pre overflow-x-auto min-h-[300px]">
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
            <span>{isTyping ? "COMPILING_AST..." : activeSnippet.status}</span>
          </span>
          <span className="text-slate-600 truncate ml-2">
            TAG: [{activeSnippet.badge}]
          </span>
        </div>
      </div>
    </div>
  );
}
