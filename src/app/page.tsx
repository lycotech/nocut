import Image from "next/image";

export default function Home() {
  return (
    <div className="page flex flex-col min-h-screen">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-12 h-[68px] border-b border-[var(--border)] bg-[rgba(8,11,18,0.85)] backdrop-blur-[20px] sticky top-0 z-[100]">
        <div className="flex items-center gap-3">
          <span className="font-serif font-black text-2xl md:text-3xl tracking-tight">NOCUT<span className="text-[var(--green)] text-3xl md:text-4xl">.NG</span></span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(13,184,127,0.3)] bg-[rgba(13,184,127,0.10)] text-[12px] md:text-[13px] text-[var(--green)] font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-[blink_1.6s_ease-in-out_infinite]" style={{ animation: "blink 1.6s ease-in-out infinite" }}></span>
            COMING SOON
          </div>
        </div>
      </nav>

      {/* HERO */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-20 max-w-[1360px] mx-auto w-full text-center">
        {/* BIG CENTERED LOGO */}
        <div className="relative w-[320px] h-[110px] md:w-[460px] md:h-[160px] mb-8">
          <Image
            src="/logo.jpeg"
            alt="NoCut.NG Logo"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(13,184,127,0.3)] bg-[rgba(13,184,127,0.08)] text-[13px] md:text-[14px] text-[var(--green)] font-semibold tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" style={{ animation: "blink 1.6s ease-in-out infinite" }}></span>
          Nigeria's Prediction Market
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-black leading-[1.04] tracking-[-1.5px] md:tracking-[-2.5px] mb-4">
          Nigeria already talks about everything.<br className="hidden md:block" />
          <span className="text-[var(--green)]">Now there’s a place to stake on it.</span>
        </h1>
        
        <p className="font-mono text-sm md:text-base font-medium tracking-[2px] uppercase text-white mb-8">
          Pick a Side. YES or NO
        </p>
        
        <p className="text-[15px] md:text-[16px] text-white leading-[1.75] max-w-[560px] mx-auto mb-10">
          Predict Freely. No Cuts. Stake <strong>YES</strong> or <strong>NO</strong> on politics, sports, entertainment, finance and more. Every market comes with a fixed reward pool. Be among the first to enter.
        </p>
        
        {/* WAITLIST FORM */}
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-[520px] mx-auto mb-16">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-4 py-3.5 rounded-xl border border-[var(--border2)] bg-[rgba(255,255,255,0.03)] text-[15px] text-[var(--t1)] outline-none focus:border-[var(--green)] transition-colors"
            required
          />
          <button type="submit" className="px-8 py-3.5 rounded-xl border-none bg-[var(--green)] text-[#08090F] text-[15px] font-bold font-serif tracking-wide transition-all shadow-[0_6px_32px_rgba(13,184,127,0.35)] hover:bg-[var(--green2)] hover:shadow-[0_8px_44px_rgba(13,184,127,0.55)] hover:-translate-y-[2px]">
            Claim Your Spot
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-[860px] mx-auto text-left">
          <div className="flex items-start gap-3 p-4 rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)]">
            <span className="text-2xl">✅</span>
            <div>
              <div className="font-semibold text-white">Fixed Reward Pools</div>
              <div className="text-[12px] text-[var(--t2)]">Every market shares a stable payout pool.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)]">
            <span className="text-2xl">🔍</span>
            <div>
              <div className="font-semibold text-white">Transparent Payout</div>
              <div className="text-[12px] text-[var(--t2)]">Clear rules, visible results, no surprise cuts.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)]">
            <span className="text-2xl">✂️</span>
            <div>
              <div className="font-semibold text-[var(--green)]">No Hidden Cuts</div>
              <div className="text-[12px] text-[var(--t2)]">Stake confidently with predictable rewards.</div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[var(--border)] relative z-10">
        <span className="font-serif text-sm text-white">
          © {new Date().getFullYear()} <em className="text-[var(--green)] not-italic">nocut.ng</em> · Lagos, Nigeria
        </span>
        <div className="flex gap-5">
          <a href="https://x.com/nocutng" target="_blank" rel="noreferrer" className="text-[11px] text-white transition-colors hover:text-gray-300 border-none bg-transparent">X</a>
          <a href="https://www.instagram.com/nocutng" target="_blank" rel="noreferrer" className="text-[11px] text-white transition-colors hover:text-gray-300 border-none bg-transparent">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
