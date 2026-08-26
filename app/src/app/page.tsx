"use client";

import { useState } from "react";

type Locale = "en" | "zh-Hant";

const copy = {
  en: {
    nav: ["Cases", "Real Estate", "About", "Notes"],
    heroLine1: "Judgment for real estate",
    heroLine2: "decisions in motion.",
    heroSub1: "We examine. We challenge.",
    heroSub2: "We take a position.",
    scroll: "Scroll —",
    systemLabel: "The system (not software)",
    trace: [
      "case / evidence",
      "diagnosis",
      "specialist capabilities",
      "research + models",
      "challenge",
      "human judgment",
    ],
    caseLabel: "Case in progress",
    caseTitle1: "Mixed-use Development",
    caseTitle2: "Feasibility Challenge",
    findingsLabel: "What we found (T0)",
    findings: [
      "Land assumptions inconsistent",
      "Construction cost underestimated",
      "Exit scenario highly sensitive",
      "Financing not secured",
    ],
    readCase: "Read the case →",
    pause: [
      "The path isn't clear.",
      "The numbers conflict.",
      "The stakes are high.",
      "You need an outside position.",
    ],
    stanceLine1: "We don't promise certainty.",
    stanceLine2: "We earn our stance.",
  },
  "zh-Hant": {
    nav: ["案例", "不動產", "關於", "筆記"],
    heroLine1: "為變動中的地產決策",
    heroLine2: "提供判斷。",
    heroSub1: "我們審視，我們質疑，",
    heroSub2: "我們表態。",
    scroll: "捲動 —",
    systemLabel: "這是系統，不是軟體",
    trace: [
      "案例／證據",
      "診斷",
      "專業能力",
      "研究與模型",
      "挑戰",
      "人的判斷",
    ],
    caseLabel: "進行中的案例",
    caseTitle1: "複合開發",
    caseTitle2: "可行性挑戰",
    findingsLabel: "目前發現（T0）",
    findings: [
      "土地假設前後不一",
      "建築成本被低估",
      "退場情境高度敏感",
      "融資尚未落實",
    ],
    readCase: "閱讀案例 →",
    pause: [
      "方向並不清晰。",
      "數字互相矛盾。",
      "風險極高。",
      "你需要一個外部立場。",
    ],
    stanceLine1: "我們不承諾確定，",
    stanceLine2: "我們贏得立場。",
  },
} as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = copy[locale];

  return (
    <div data-locale={locale}>
      <main>
        {/* 1 — Hero: single full-bleed dark field, headline overlaid, small figure in a light patch */}
        <section className="relative min-h-screen w-full overflow-hidden bg-[var(--near-black)] text-[var(--warm-white)]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, #0b0b0a 0%, #131210 38%, #1c1a16 58%, #2a2620 72%, #35302a 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background:
                "radial-gradient(60% 90% at 82% 55%, rgba(214,196,160,0.55) 0%, rgba(214,196,160,0.16) 32%, rgba(0,0,0,0) 62%)",
            }}
          />
          <div
            className="absolute inset-0 mix-blend-overlay opacity-[0.18]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="absolute right-[16%] bottom-[30%]">
            <div
              className="h-[9vh] w-[1.6vh]"
              style={{
                background: "#0b0b0a",
                clipPath:
                  "polygon(38% 0%, 62% 0%, 68% 22%, 60% 30%, 70% 100%, 55% 100%, 50% 55%, 45% 100%, 30% 100%, 40% 30%, 32% 22%)",
              }}
            />
          </div>

          <nav className="relative z-10 flex items-center justify-between px-8 pt-8 text-[11px] tracking-[0.18em] uppercase sm:px-14">
            <span className="font-[var(--font-serif)] text-sm tracking-normal normal-case">
              Stance &amp; Signal
            </span>
            <div className="flex items-center gap-8 opacity-80">
              {t.nav.map((item) => (
                <span key={item}>{item}</span>
              ))}
              <button
                type="button"
                onClick={() => setLocale(locale === "en" ? "zh-Hant" : "en")}
                className="border border-[var(--line-on-dark)] px-2 py-1 text-[10px] tracking-[0.12em] normal-case opacity-90 hover:opacity-100"
              >
                {locale === "en" ? "繁中" : "EN"}
              </button>
            </div>
          </nav>

          <div className="relative z-10 flex h-[calc(100vh-88px)] max-w-[640px] flex-col justify-center px-8 sm:px-14">
            <h1 className="font-[var(--font-serif)] text-[2.6rem] leading-[1.15] sm:text-[3.4rem]">
              {t.heroLine1}
              <br />
              {t.heroLine2}
            </h1>
            <p className="mt-6 max-w-[360px] text-[13px] leading-relaxed opacity-70">
              {t.heroSub1}
              <br />
              {t.heroSub2}
            </p>
          </div>

          <div className="absolute bottom-8 right-8 text-[10px] tracking-[0.2em] uppercase opacity-50 sm:right-14">
            {t.scroll}
          </div>
        </section>

        {/* 2 — hand-drawn system trace on warm white */}
        <section className="bg-[var(--warm-white)] px-8 py-20 sm:px-14 sm:py-28">
          <p className="mb-14 text-[10px] tracking-[0.2em] uppercase opacity-50">
            {t.systemLabel}
          </p>

          <div className="relative">
            <svg
              className="absolute left-0 top-1/2 hidden w-full -translate-y-1/2 sm:block"
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M10,34 C110,10 150,50 240,28 C330,6 380,46 470,26 C560,8 610,44 700,24 C790,6 840,42 930,22 C1010,6 1060,36 1190,26"
                stroke="var(--ink)"
                strokeOpacity="0.35"
                strokeWidth="1"
                strokeDasharray="1 7"
                strokeLinecap="round"
              />
            </svg>

            <div className="relative flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-4">
              {t.trace.map((step, i) => (
                <div
                  key={step}
                  className="flex flex-col items-start sm:items-center"
                  style={{ transform: i % 2 === 0 ? "translateY(-4px)" : "translateY(10px)" }}
                >
                  <span className="mb-2 h-[5px] w-[5px] rounded-full bg-[var(--ink)] opacity-60 sm:hidden" />
                  <span className="font-[var(--font-hand)] text-[1.4rem] leading-none opacity-80 sm:text-[1.6rem]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 — case split: asymmetric material image + dark case panel */}
        <section className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr]">
          <div
            className="relative min-h-[340px] sm:min-h-[560px]"
            style={{
              background:
                "linear-gradient(100deg, #d8d0bf 0%, #e6e0d2 35%, #cfc6b2 55%, #ddd5c4 78%, #c9c0ac 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.5] mix-blend-multiply"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(23,22,15,0.05) 0px, rgba(23,22,15,0.05) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, rgba(23,22,15,0.03) 0px, rgba(23,22,15,0.03) 1px, transparent 1px, transparent 180px)",
              }}
            />
            <div
              className="absolute left-[8%] top-[12%] h-[70%] w-[55%] -rotate-2 opacity-90"
              style={{
                background: "#eee8db",
                boxShadow: "0 1px 0 rgba(0,0,0,0.08)",
              }}
            />
            <div
              className="absolute left-[30%] top-[24%] h-[62%] w-[50%] rotate-1"
              style={{ background: "#f2ede1" }}
            />
          </div>

          <div className="flex flex-col justify-center bg-[var(--near-black)] px-8 py-16 text-[var(--warm-white)] sm:px-12">
            <p className="mb-6 text-[10px] tracking-[0.2em] uppercase opacity-50">
              {t.caseLabel}
            </p>
            <h3 className="font-[var(--font-serif)] text-[1.6rem] leading-tight sm:text-[1.9rem]">
              {t.caseTitle1}
              <br />
              {t.caseTitle2}
            </h3>

            <p className="mt-8 mb-3 text-[10px] tracking-[0.2em] uppercase opacity-50">
              {t.findingsLabel}
            </p>
            <ul className="space-y-2 text-[13px] opacity-80">
              {t.findings.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <a href="#" className="mt-10 inline-block w-fit text-[12px] tracking-wide underline underline-offset-4 opacity-90">
              {t.readCase}
            </a>
          </div>
        </section>

        {/* 4 — pause: sparse text left, quiet atmosphere image right */}
        <section className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 bg-[var(--warm-white)] px-8 py-20 sm:px-14">
            {t.pause.map((line) => (
              <p
                key={line}
                className="font-[var(--font-serif)] text-[1.5rem] italic leading-snug opacity-90"
              >
                {line}
              </p>
            ))}
          </div>

          <div
            className="min-h-[340px] sm:min-h-[520px]"
            style={{
              background:
                "radial-gradient(70% 70% at 60% 40%, #cdc3ac 0%, #b9ae94 45%, #8f8571 100%)",
            }}
          />
        </section>

        {/* 5 — stance statement: full dark, one line, nothing else */}
        <section className="flex min-h-[70vh] items-center bg-[var(--near-black)] px-8 text-[var(--warm-white)] sm:px-14">
          <p className="max-w-[820px] font-[var(--font-serif)] text-[2.2rem] leading-[1.15] sm:text-[3rem]">
            {t.stanceLine1}
            <br />
            {t.stanceLine2}
          </p>
        </section>
      </main>
    </div>
  );
}
