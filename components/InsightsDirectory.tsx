"use client";

import { useState } from "react";
import { InsightCard } from "./InsightCard";
import type { Insight } from "@/lib/content";

export function InsightsDirectory({ insights, topics }: { insights: Insight[]; topics: string[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  const filtered = insights.filter(insight => selected.every(topic => insight.topics.includes(topic)));
  function toggle(topic: string) {
    setSelected(current => current.includes(topic) ? current.filter(item => item !== topic) : [...current, topic]);
  }
  return (
    <>
      <div className="directory-heading"><div><p className="insight-kicker">Explore our thinking</p><h2>Ideas for what’s next.</h2></div><p>Browse perspectives by topic. Select more than one to narrow your results.</p></div>
      <div className="filters" aria-label="Filter insights by topic">
        <button className={!selected.length ? "active" : ""} type="button" onClick={() => setSelected([])} aria-pressed={!selected.length}>All insights</button>
        {topics.map(topic => <button className={selected.includes(topic) ? "active" : ""} type="button" key={topic} onClick={() => toggle(topic)} aria-pressed={selected.includes(topic)}>{topic}</button>)}
      </div>
      <p className="filter-status" aria-live="polite">Showing {filtered.length} insight{filtered.length === 1 ? "" : "s"}</p>
      {filtered.length === 0 && <p className="insight-empty">No insights match those topics. Try another combination or select All insights.</p>}
      <div className="insights-grid">{filtered.map(insight => <InsightCard key={insight.slug} insight={insight} />)}</div>
    </>
  );
}
