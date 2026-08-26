"use client";

import { useState } from "react";

type Locale = "en" | "zh-Hant";

const EMAIL = "xiening668@gmail.com";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const copy = {
  en: {
    nav: ["Cases", "How I Review", "About"],
    heroEyebrow: "Independent second opinion on live CRE deals",
    heroLine1: "Before you commit more capital,",
    heroLine2: "get an independent set of eyes on the deal.",
    heroSub:
      "I challenge the seller's numbers, test the underwriting logic, identify what evidence is still missing — and show exactly what would change the current view.",
    ctaPrimary: "Start a Deal Challenge — from $99",
    ctaSecondary: "See a sample review",
    scroll: "Scroll —",

    offerLabel: "Where to start",
    offer1Tag: "Try it first",
    offer1Name: "Micro Deal Check",
    offer1Price: "$99–199",
    offer1Turn: "24–48h",
    offer1Desc: "One specific question, assumption, or red flag. 1–2 pages.",
    offer2Tag: "Most common",
    offer2Name: "Independent Deal Challenge",
    offer2Price: "$350–600",
    offer2Turn: "48–72h",
    offer2Desc:
      "Full FACT / UNKNOWN / CONFLICT map, top underwriting challenges, gating issues, review triggers, and a 30-minute walkthrough.",
    offerCta: "Start this",
    offerNote:
      "Fixed scope, fixed price. If a formal valuation, legal opinion, or investment decision is what you need, this isn't that — see What I Will / Will Not Do below.",

    casesLabel: "Test cases",
    casesNote:
      "These are internal research and validation runs, not paid client engagements. They show how the review process behaves, not a client track record.",
    case1Tag: "Test Case — architecture validation",
    case1Title: "FC-A-01",
    case1Rows: [
      ["Materials", "A frozen real-estate acquisition package, run as an internal test."],
      ["What was tested", "Whether a professional capability request actually gets executed and closed — not just planned."],
      ["What happened", "The model-selection step requested execution from a separate capability. It wasn't satisfied in round one, so the system reopened routing instead of faking a result. Round two closed it."],
      ["Where it stopped", "HUMAN_REQUIRED — a legitimate stop, not a failure."],
    ],
    case1Status: "Confirms the judgment chain is auditable end-to-end. Does not confirm the judgment itself is correct, or that this generalizes to new cases.",
    case2Tag: "Test Case — model audit",
    case2Title: "4045 Post St",
    case2Rows: [
      ["Materials", "Real participant evidence containing a formula that needed independent verification."],
      ["What was tested", "Whether the system notices an unstated verification obligation and actually runs the check."],
      ["What happened", "It ran an independent, deterministic reconciliation — not a language-model guess — and produced a receipt."],
      ["What it found", "The formula didn't tie out. Kept in the record as TIE_OUT_FAIL — not corrected quietly, not removed."],
    ],
    case2Status: "Confirms the process will surface a real discrepancy rather than smooth it over.",

    reviewLabel: "How I review",
    trace: [
      "case / evidence",
      "diagnose first",
      "who's called in",
      "model, or not",
      "challenge",
      "human judgment",
    ],
    boundaryLabel: "What I will / will not do",
    willDo: [
      "Challenge assumptions and trace evidence to its source",
      "Flag conflicts, gaps, and what's still unknown",
      "Run independent calculations where they add real value",
      "Tell you what would change the current view",
    ],
    willNotDo: [
      "Give a valuation opinion",
      "Give a legal opinion or tax advice",
      "Make the final investment decision for you",
    ],

    evidenceLabel: "How this is checked",
    evidenceText:
      "Every review keeps a source-linked record of what's fact, what's assumption, and what's still unknown. The underlying engineering — case freezes, provenance, execution traces — exists and is available to review on request.",

    aboutLabel: "About",
    aboutTitle: "Michael",
    aboutBody:
      "Real estate background in acquisitions, development, and operating assets. Full bio and verified track record on request.",

    stanceLine1: "We don't promise certainty.",
    stanceLine2: "We earn our stance.",
    footerCta: "Start a Deal Challenge",
    footerNote: "Reply goes directly to Michael. Fixed price, fixed scope, agreed before any work starts.",
  },
  "zh-Hant": {
    nav: ["案例", "審查方式", "關於"],
    heroEyebrow: "為進行中的商業地產交易提供獨立第二意見",
    heroLine1: "在投入更多資金之前，",
    heroLine2: "先讓一雙獨立的眼睛看一遍這筆交易。",
    heroSub:
      "我會質疑賣方給出的數字，檢驗承銷邏輯是否站得住腳，指出還缺少哪些證據——並清楚告訴你，什麼新事實會改變現在的判斷。",
    ctaPrimary: "開始一次 Deal Challenge — 低至 $99",
    ctaSecondary: "看一份範例審查",
    scroll: "捲動 —",

    offerLabel: "從這裡開始",
    offer1Tag: "先試一次",
    offer1Name: "單點問題核查",
    offer1Price: "$99–199",
    offer1Turn: "24–48 小時",
    offer1Desc: "一個具體問題、假設或風險點。1–2 頁。",
    offer2Tag: "最常見",
    offer2Name: "獨立交易挑戰審查",
    offer2Price: "$350–600",
    offer2Turn: "48–72 小時",
    offer2Desc:
      "完整的事實／未知／衝突對照表、主要承銷挑戰點、關鍵閘門問題、復核觸發條件，以及 30 分鐘視訊說明。",
    offerCta: "開始這個",
    offerNote:
      "固定範圍、固定價格。如果你需要的是正式估值意見、法律意見或投資決定，這不是那個服務——見下方「我會做／不會做什麼」。",

    casesLabel: "測試案例",
    casesNote:
      "這些是內部研發與驗證測試，不是付費客戶的委託工作。它們展示的是審查流程本身如何運作，不是客戶業績記錄。",
    case1Tag: "測試案例 — 架構驗證",
    case1Title: "FC-A-01",
    case1Rows: [
      ["材料", "一份凍結的房地產收購資料包，作為內部測試執行。"],
      ["測試內容", "一項專業能力請求是否真的被執行並閉環——而不只是紙面設計。"],
      ["發生了什麼", "模型選擇環節向另一個能力提出執行請求；第一輪未被滿足，系統選擇重新開放路由而不是偽造結果；第二輪完成模型工作並閉環。"],
      ["停在哪裡", "HUMAN_REQUIRED——這是一個合法的停止點，不是失敗。"],
    ],
    case1Status: "確認了判斷鏈條從頭到尾可審計；不確認判斷本身正確，也不確認能否推廣到新案例。",
    case2Tag: "測試案例 — 模型核查",
    case2Title: "4045 Post St",
    case2Rows: [
      ["材料", "真實的參與方證據材料，其中包含一個需要獨立核驗的公式。"],
      ["測試內容", "系統是否能發現一項未明說的核驗義務，並真正執行核查。"],
      ["發生了什麼", "系統執行了一次獨立的確定性複算——不是語言模型的猜測——並生成了記錄。"],
      ["發現了什麼", "公式對不上帳。這個結果以 TIE_OUT_FAIL 的形式保留在記錄裡——沒有被悄悄修正，也沒有被刪除。"],
    ],
    case2Status: "確認了這套流程會如實呈現真實的差異，而不是把它抹平。",

    reviewLabel: "我怎麼審查",
    trace: [
      "案例／證據",
      "先診斷",
      "決定誰上場",
      "建模，或不建",
      "挑戰",
      "人的判斷",
    ],
    boundaryLabel: "我會做／不會做什麼",
    willDo: [
      "質疑假設，把證據追溯到來源",
      "標記衝突、缺口，以及仍然未知的部分",
      "在真正有價值的地方做獨立核算",
      "告訴你什麼會改變現在的判斷",
    ],
    willNotDo: [
      "提供正式估值意見",
      "提供法律意見或稅務建議",
      "替你做最終投資決定",
    ],

    evidenceLabel: "如何核實",
    evidenceText:
      "每一次審查都保留一份可溯源的記錄：什麼是事實、什麼是假設、什麼仍然未知。背後的工程實作——案例凍結、來源記錄、執行痕跡——真實存在，可應要求查閱。",

    aboutLabel: "關於",
    aboutTitle: "Michael",
    aboutBody:
      "房地產背景涵蓋收購、開發與資產運營。完整履歷與可核實業績記錄可應要求提供。",

    stanceLine1: "我們不承諾確定，",
    stanceLine2: "我們贏得立場。",
    footerCta: "開始一次 Deal Challenge",
    footerNote: "回覆會直接發給 Michael。固定價格、固定範圍，動工前先確認。",
  },
} as const;

function mailtoHref(subject: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = copy[locale];

  return (
    <div data-locale={locale}>
      <main>
        {/* 1 — Hero: pain point + CTA, real photo, dark editorial overlay */}
        <section className="relative min-h-screen w-full overflow-hidden bg-[var(--near-black)] text-[var(--warm-white)]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${BASE_PATH}/hero-silhouette.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "62% center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(8,8,7,0.92) 0%, rgba(8,8,7,0.7) 32%, rgba(8,8,7,0.22) 60%, rgba(8,8,7,0.08) 100%)",
            }}
          />

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
            <p className="mb-5 text-[11px] tracking-[0.18em] uppercase opacity-70">
              {t.heroEyebrow}
            </p>
            <h1 className="font-[var(--font-serif)] text-[2.3rem] leading-[1.2] sm:text-[2.9rem]">
              {t.heroLine1}
              <br />
              {t.heroLine2}
            </h1>
            <p className="mt-6 max-w-[420px] text-[13px] leading-relaxed opacity-70">
              {t.heroSub}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href={mailtoHref(t.ctaPrimary)}
                className="border border-[var(--warm-white)] px-5 py-3 text-[12px] tracking-[0.08em] uppercase hover:bg-[var(--warm-white)] hover:text-[var(--near-black)]"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#cases"
                className="text-[12px] tracking-wide underline underline-offset-4 opacity-80"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 text-[10px] tracking-[0.2em] uppercase opacity-50 sm:right-14">
            {t.scroll}
          </div>
        </section>

        {/* 2 — Offer: two-tier pricing ladder */}
        <section className="bg-[var(--warm-white)] px-8 py-20 sm:px-14 sm:py-28">
          <p className="mb-14 text-[10px] tracking-[0.2em] uppercase opacity-50">
            {t.offerLabel}
          </p>

          <div className="grid grid-cols-1 gap-px bg-[var(--line)] sm:grid-cols-2">
            {[
              {
                tag: t.offer1Tag,
                name: t.offer1Name,
                price: t.offer1Price,
                turn: t.offer1Turn,
                desc: t.offer1Desc,
              },
              {
                tag: t.offer2Tag,
                name: t.offer2Name,
                price: t.offer2Price,
                turn: t.offer2Turn,
                desc: t.offer2Desc,
              },
            ].map((offer) => (
              <div key={offer.name} className="flex flex-col bg-[var(--warm-white)] p-8 sm:p-10">
                <span className="mb-4 w-fit text-[10px] tracking-[0.16em] uppercase opacity-50">
                  {offer.tag}
                </span>
                <h3 className="font-[var(--font-serif)] text-[1.4rem]">{offer.name}</h3>
                <p className="mt-2 text-[1.6rem] font-[var(--font-serif)]">{offer.price}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] opacity-50">
                  {offer.turn}
                </p>
                <p className="mt-4 max-w-[380px] text-[13px] leading-relaxed opacity-75">
                  {offer.desc}
                </p>
                <a
                  href={mailtoHref(`${offer.name} (${offer.price})`)}
                  className="mt-8 w-fit border border-[var(--ink)] px-5 py-2.5 text-[11px] tracking-[0.08em] uppercase hover:bg-[var(--ink)] hover:text-[var(--warm-white)]"
                >
                  {t.offerCta}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-[560px] text-[12px] leading-relaxed opacity-55">
            {t.offerNote}
          </p>
        </section>

        {/* 3 — Case notes: two labeled test cases */}
        <section id="cases" className="bg-[var(--warm-white)] px-8 pb-20 sm:px-14 sm:pb-28">
          <p className="mb-3 text-[10px] tracking-[0.2em] uppercase opacity-50">
            {t.casesLabel}
          </p>
          <p className="mb-14 max-w-[560px] text-[12px] leading-relaxed opacity-55">
            {t.casesNote}
          </p>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {[
              { tag: t.case1Tag, title: t.case1Title, rows: t.case1Rows, status: t.case1Status },
              { tag: t.case2Tag, title: t.case2Title, rows: t.case2Rows, status: t.case2Status },
            ].map((c) => (
              <div
                key={c.title}
                className="flex flex-col bg-[var(--near-black)] px-7 py-9 text-[var(--warm-white)] sm:px-9 sm:py-10"
              >
                <span className="mb-4 w-fit border border-[var(--line-on-dark)] px-2 py-1 text-[10px] tracking-[0.1em] uppercase opacity-70">
                  {c.tag}
                </span>
                <h3 className="font-[var(--font-serif)] text-[1.5rem]">{c.title}</h3>

                <dl className="mt-6 space-y-4">
                  {c.rows.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-[10px] tracking-[0.14em] uppercase opacity-50">
                        {label}
                      </dt>
                      <dd className="mt-1 text-[13px] leading-relaxed opacity-85">{value}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 border-t border-[var(--line-on-dark)] pt-5 text-[12px] leading-relaxed opacity-60">
                  {c.status}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4 — How I review: hand-drawn trace + explicit do/don't boundary */}
        <section className="bg-[var(--warm-white)] px-8 py-20 sm:px-14 sm:py-28">
          <p className="mb-14 text-[10px] tracking-[0.2em] uppercase opacity-50">
            {t.reviewLabel}
          </p>

          <div className="relative mb-20">
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

          <p className="mb-6 text-[10px] tracking-[0.2em] uppercase opacity-50">
            {t.boundaryLabel}
          </p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <ul className="space-y-2 text-[13px] leading-relaxed">
              {t.willDo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="opacity-40">+</span>
                  <span className="opacity-85">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-[13px] leading-relaxed">
              {t.willNotDo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="opacity-40">–</span>
                  <span className="opacity-85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5 — Evidence: brief, low-density */}
        <section className="bg-[var(--near-black)] px-8 py-14 text-[var(--warm-white)] sm:px-14">
          <p className="mb-3 text-[10px] tracking-[0.2em] uppercase opacity-50">
            {t.evidenceLabel}
          </p>
          <p className="max-w-[640px] text-[13px] leading-relaxed opacity-75">
            {t.evidenceText}
          </p>
        </section>

        {/* 6 — About */}
        <section
          className="relative px-8 py-20 sm:px-14 sm:py-28"
          style={{
            backgroundImage: `url(${BASE_PATH}/pause-table.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[var(--warm-white)] opacity-90" />
          <div className="relative max-w-[520px]">
            <p className="mb-3 text-[10px] tracking-[0.2em] uppercase opacity-50">
              {t.aboutLabel}
            </p>
            <h3 className="font-[var(--font-serif)] text-[1.6rem]">{t.aboutTitle}</h3>
            <p className="mt-4 text-[13px] leading-relaxed opacity-80">{t.aboutBody}</p>
          </div>
        </section>

        {/* 7 — stance statement: full dark, one line */}
        <section className="flex min-h-[50vh] items-center bg-[var(--near-black)] px-8 text-[var(--warm-white)] sm:px-14">
          <p className="max-w-[820px] font-[var(--font-serif)] text-[2rem] leading-[1.15] sm:text-[2.6rem]">
            {t.stanceLine1}
            <br />
            {t.stanceLine2}
          </p>
        </section>

        {/* 8 — footer CTA */}
        <footer className="flex flex-col items-start gap-4 bg-[var(--warm-white)] px-8 py-16 sm:px-14">
          <a
            href={mailtoHref(t.footerCta)}
            className="border border-[var(--ink)] px-6 py-3 text-[12px] tracking-[0.08em] uppercase hover:bg-[var(--ink)] hover:text-[var(--warm-white)]"
          >
            {t.footerCta}
          </a>
          <p className="max-w-[420px] text-[12px] leading-relaxed opacity-55">{t.footerNote}</p>
        </footer>
      </main>
    </div>
  );
}
