import Image from "next/image";

export default function Home() {
  return (
    <div className="page flex flex-col min-h-screen">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-12 h-[68px] border-b border-[var(--border)] bg-[rgba(8,11,18,0.85)] backdrop-blur-[20px] sticky top-0 z-[100]">
        <div className="flex items-center gap-3">
          <span className="font-serif font-black text-xl tracking-tight">NOCUT<span className="text-[var(--gold)]">.NG</span></span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-[rgba(13,184,127,0.3)] bg-[rgba(13,184,127,0.07)] text-[10px] md:text-[11px] text-[var(--green)] font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-[blink_1.6s_ease-in-out_infinite]" style={{ animation: "blink 1.6s ease-in-out infinite" }}></span>
            <style>{`
              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
              }
            `}</style>
            COMING SOON
          </div>
        </div>
      </nav>

      {/* HERO */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-20 max-w-[1360px] mx-auto w-full text-center">
        {/* BIG CENTERED LOGO */}
        <div className="relative w-[280px] h-[90px] md:w-[400px] md:h-[130px] mb-8">
          <Image
            src="/logo.jpeg"
            alt="NoCut.NG Logo"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(232,160,32,0.3)] bg-[rgba(232,160,32,0.07)] font-mono text-[11px] text-[var(--gold)] font-medium tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" style={{ animation: "blink 1.6s ease-in-out infinite" }}></span>
          Nigeria's Prediction Market
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-black leading-[1.04] tracking-[-1.5px] md:tracking-[-2.5px] mb-4">
          Trade the future.<br className="hidden md:block" />
          <span className="text-[var(--gold)]">Turn insight</span><br className="hidden md:block" />
          <span className="text-[var(--t3)]">into cash.</span>
        </h1>
        
        <p className="font-mono text-xs md:text-sm font-medium tracking-[2px] uppercase text-[rgba(232,160,32,0.6)] mb-8">
          Don't Guess. Take Position.
        </p>
        
        <p className="text-[15px] text-white leading-[1.75] max-w-[500px] mx-auto mb-10">
          Stake <strong>YES</strong> or <strong>NO</strong>{" "}on real-world events. 
          Every market has a fixed reward pool &mdash; <strong>early stakers earn more</strong>. 
          Get notified the moment we go live.
        </p>
        
        {/* WAITLIST FORM */}
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-[480px] mx-auto mb-16">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-4 py-3.5 rounded-xl border border-[var(--border2)] bg-[rgba(255,255,255,0.03)] text-[15px] text-[var(--t1)] outline-none focus:border-[var(--gold)] transition-colors"
            required
          />
          <button type="submit" className="px-8 py-3.5 rounded-xl border-none bg-[var(--gold)] text-[#08090F] text-[15px] font-bold font-serif tracking-wide transition-all shadow-[0_6px_32px_rgba(232,160,32,0.35)] hover:bg-[var(--gold2)] hover:shadow-[0_8px_44px_rgba(232,160,32,0.55)] hover:-translate-y-[2px]">
            Join Waitlist
          </button>
        </form>

        {/* TRUST ROW */}
        <div className="flex flex-col sm:flex-row justify-center gap-0 border border-[var(--border)] rounded-2xl overflow-hidden max-w-[800px] mx-auto w-full">
          <div className="flex-1 p-4 border-b sm:border-b-0 sm:border-r border-[var(--border)] flex flex-col gap-1 items-center">
            <div className="font-serif text-lg md:text-xl font-bold text-white">Fixed Pool</div>
            <div className="text-[10px] text-white tracking-wider uppercase">Reward Model</div>
          </div>
          <div className="flex-1 p-4 border-b sm:border-b-0 sm:border-r border-[var(--border)] flex flex-col gap-1 items-center">
            <div className="font-serif text-lg md:text-xl font-bold text-white">Transparent</div>
            <div className="text-[10px] text-white tracking-wider uppercase">Payouts & Odds</div>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-1 items-center">
            <div className="font-serif text-lg md:text-xl font-bold text-[var(--green2)]">₦ Native</div>
            <div className="text-[10px] text-white tracking-wider uppercase">Zero FX Fees</div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[var(--border)] relative z-10">
        <span className="font-serif text-sm text-white">
          © {new Date().getFullYear()} <em className="text-[var(--gold)] not-italic">nocut.ng</em> · Lagos, Nigeria
        </span>
        <div className="flex gap-5">
          <a href="#" className="text-[11px] text-white transition-colors hover:text-gray-300 border-none bg-transparent">Twitter</a>
          <a href="#" className="text-[11px] text-white transition-colors hover:text-gray-300 border-none bg-transparent">Telegram</a>
        </div>
      </footer>
    </div>
  );
}
