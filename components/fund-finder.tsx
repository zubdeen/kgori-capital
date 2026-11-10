"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "@/components/icons";
import { RiskMeter } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";

type Answers = {
  horizon?: "short" | "medium" | "long";
  reaction?: "sleep" | "calm";
  currency?: "bwp" | "usd";
};

const questions = [
  {
    key: "horizon" as const,
    options: [{ value: "short" as const }, { value: "medium" as const }, { value: "long" as const }],
  },
  {
    key: "reaction" as const,
    options: [{ value: "sleep" as const }, { value: "calm" as const }],
  },
  {
    key: "currency" as const,
    options: [{ value: "bwp" as const }, { value: "usd" as const }],
  },
];

export function FundFinder() {
  const { copy, data } = useLocale();
  const c = copy.funds.finder.ui;
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<string | null>(null);
  const complete = Boolean(answers.horizon && answers.reaction && answers.currency);

  const recommend = () => {
    if (!complete) return;
    if (answers.currency === "usd") setResult("usd-money-market");
    else if (answers.horizon === "short" || answers.reaction === "sleep") setResult("enhanced-cash");
    else if (answers.horizon === "long") setResult("global-balanced");
    else setResult("enhanced-cash");
  };

  const reset = () => {
    setAnswers({});
    setResult(null);
  };

  const fund = data.funds.find((item) => item.slug === result);

  return (
    <div className="border border-line bg-paper">
      <div className="grid lg:grid-cols-12">
        <div className="border-b border-line px-6 py-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:px-9 lg:py-10">
          <p className="eyebrow text-rust">{c.eyebrow}</p>
          <h3 className="display mt-4 text-[clamp(1.6rem,2.6vw,2.1rem)]">{c.title}</h3>
          <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-muted">{c.body}</p>
          <div className="mt-8 hidden border-t border-line pt-5 lg:block">
            <p className="label">{c.needPerson}</p>
            <a
              href="tel:+2673915990"
              className="link-line mt-2 inline-block text-[13px] text-ink"
            >
              +267 3915990
            </a>
          </div>
        </div>

        <div className="px-6 py-8 lg:col-span-7 lg:px-9 lg:py-10">
          {!fund ? (
            <div className="space-y-8">
              {questions.map((question, questionIndex) => (
                <fieldset key={question.key}>
                  <legend className="text-[14px] font-medium text-ink">
                    {c.questions[questionIndex].legend}
                  </legend>
                  <p className="mt-1 text-[11.5px] text-muted">
                    {c.questions[questionIndex].hint}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {question.options.map((option, optionIndex) => {
                      const selected = answers[question.key] === option.value;
                      return (
                        <label
                          key={option.value}
                          className={`flex min-h-11 cursor-pointer items-center gap-2 border px-3.5 py-2.5 text-[12.5px] transition-colors duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 ${
                            selected
                              ? "border-rust bg-rust text-white has-[:focus-visible]:outline-ink"
                              : "border-line text-ink-3 hover:border-ink/40 has-[:focus-visible]:outline-rust"
                          }`}
                        >
                          <input
                            type="radio"
                            name={question.key}
                            value={option.value}
                            checked={selected}
                            onChange={() =>
                              setAnswers((current) => ({ ...current, [question.key]: option.value }))
                            }
                            className="sr-only"
                          />
                          <span
                            aria-hidden
                            className={`flex h-3.5 w-3.5 items-center justify-center border ${
                              selected ? "border-white/60" : "border-ink/25"
                            }`}
                          >
                            {selected && <Check className="h-2.5 w-2.5" />}
                          </span>
                          {c.questions[questionIndex].options[optionIndex]}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
              <div className="flex flex-wrap items-center gap-4 border-t border-line pt-6">
                <button
                  type="button"
                  onClick={recommend}
                  disabled={!complete}
                  className="btn btn-rust disabled:cursor-not-allowed disabled:bg-line disabled:text-muted"
                >
                  {c.submit}
                </button>
                <p aria-live="polite" className="text-[11.5px] text-muted">
                  {complete ? c.ready : c.incomplete}
                </p>
              </div>
            </div>
          ) : (
            <div className="animate-rise">
              <p className="eyebrow text-rust">{c.resultEyebrow}</p>
              <h3 className="display mt-4 text-[clamp(1.9rem,3vw,2.5rem)]">{fund.name}</h3>
              <div className="mt-4">
                <RiskMeter
                  score={fund.riskScore}
                  label={fund.risk === "Low" ? copy.funds.riskLow : copy.funds.riskModerate}
                />
              </div>
              <p className="mt-5 max-w-md text-[13.5px] leading-relaxed text-ink-3">
                {fund.summary}
                {result === "enhanced-cash" && answers.horizon === "medium" && (
                  <>
                    {" "}
                    {c.mediumNote}
                  </>
                )}
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
                <div>
                  <dt className="label">{c.horizon}</dt>
                  <dd className="mt-1 text-[13px] text-ink">{fund.horizon}</dd>
                </div>
                <div>
                  <dt className="label">{c.access}</dt>
                  <dd className="mt-1 text-[13px] text-ink">{c.accessValue}</dd>
                </div>
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={`/funds/${fund.slug}`} className="btn btn-rust">
                  {c.details}
                </Link>
                <button type="button" onClick={reset} className="btn btn-outline">
                  {c.again}
                </button>
              </div>
              <p className="mt-5 text-[10.5px] leading-relaxed text-muted">{c.disclaimer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
