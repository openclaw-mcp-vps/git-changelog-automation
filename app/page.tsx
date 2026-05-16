export default function Home() {
  const faqs = [
    {
      q: "How does GitChangelog categorize commits?",
      a: "It parses conventional commit prefixes (feat, fix, BREAKING CHANGE) and groups them automatically into features, bug fixes, and breaking changes."
    },
    {
      q: "Which repositories can I connect?",
      a: "Any public or private GitHub repository you have access to. Connect via GitHub OAuth and select repos from your account or organization."
    },
    {
      q: "Can I publish changelogs automatically?",
      a: "Yes. GitChangelog can auto-publish to your repo's CHANGELOG.md or post to GitHub Releases on every tagged commit."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate beautiful changelogs{" "}
          <span className="text-[#58a6ff]">from git commits</span>{" "}
          automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect GitHub, analyze commit history, and publish categorized changelogs — features, fixes, and breaking changes — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $15/mo
        </a>
        <div className="mt-12 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left font-mono text-sm text-[#8b949e] overflow-x-auto">
          <div className="mb-1"><span className="text-[#3fb950]">## [1.4.0]</span> — 2024-06-01</div>
          <div className="mb-1"><span className="text-[#58a6ff]">### Features</span></div>
          <div className="mb-1 pl-4">- Add OAuth GitHub integration <span className="text-[#6e7681]">(#42)</span></div>
          <div className="mb-1"><span className="text-[#f85149]">### Breaking Changes</span></div>
          <div className="pl-4">- Remove legacy XML export format</div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited repositories",
              "Auto-categorization (feat / fix / breaking)",
              "GitHub Releases auto-publish",
              "Custom changelog templates",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GitChangelog. All rights reserved.
      </footer>
    </main>
  );
}
