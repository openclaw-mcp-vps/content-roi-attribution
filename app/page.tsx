export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Content Attribution
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track which content drives{" "}
          <span className="text-[#58a6ff]">actual revenue</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect every blog post and content piece to real customer conversions. Stop guessing — know exactly what grows your business.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $16/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">UTM</p>
            <p className="text-xs text-[#8b949e] mt-1">Parameter tracking</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Multi</p>
            <p className="text-xs text-[#8b949e] mt-1">Touch attribution</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Real</p>
            <p className="text-xs text-[#8b949e] mt-1">Revenue data</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$16</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff] font-bold">✓</span> UTM &amp; pixel tracking
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff] font-bold">✓</span> Multi-touch attribution models
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff] font-bold">✓</span> Revenue per content report
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff] font-bold">✓</span> Conversion funnel dashboard
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff] font-bold">✓</span> Unlimited content pieces
            </li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does content attribution work?</h3>
            <p className="text-sm text-[#8b949e]">We use UTM parameters and a lightweight tracking pixel to follow visitors from your content through to conversion. Each sale or sign-up is linked back to the content that influenced it.</p>
          </div>
          <div className="border border-[#21262d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What attribution models are supported?</h3>
            <p className="text-sm text-[#8b949e]">We support first-touch, last-touch, and linear multi-touch attribution so you can see the full customer journey and decide which model fits your business.</p>
          </div>
          <div className="border border-[#21262d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Do I need to change my existing content setup?</h3>
            <p className="text-sm text-[#8b949e]">No major changes needed. Add our tracking snippet to your site and start tagging links with UTM parameters. Setup takes under 10 minutes.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} ContentROI. All rights reserved.
      </footer>
    </main>
  );
}
