export function VictoryGameShowcase() {
  return (
    <div className="relative w-full h-full bg-black rounded-[30px] border border-green-500/30 overflow-hidden p-8 md:p-12 flex items-center justify-center">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-green-500"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Stick figure */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-20 h-40 opacity-30">
        <svg viewBox="0 0 40 100" className="w-full h-full stroke-white stroke-2 fill-none">
          {/* Head */}
          <circle cx="20" cy="15" r="8" />
          {/* Body */}
          <line x1="20" y1="23" x2="20" y2="50" />
          {/* Arms */}
          <line x1="20" y1="30" x2="8" y2="40" />
          <line x1="20" y1="30" x2="32" y2="40" />
          {/* Legs */}
          <line x1="20" y1="50" x2="12" y2="70" />
          <line x1="20" y1="50" x2="28" y2="70" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <p className="text-green-500 font-bold text-sm tracking-[0.25em] uppercase mb-2">
            Level 1
          </p>
          <h3 className="text-green-500 font-black text-5xl md:text-6xl drop-shadow-lg" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.8)' }}>
            VICTORY
          </h3>
        </div>
        
        <p className="text-white font-medium text-2xl md:text-3xl drop-shadow-lg">
          harsh
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-2 border border-green-500/50 text-green-500 hover:bg-green-500/10 transition-all rounded">
            A
          </button>
          <button className="px-6 py-2 border border-green-500/50 text-green-500 hover:bg-green-500/10 transition-all rounded">
            B
          </button>
          <button className="px-6 py-2 border border-green-500/50 text-green-500 hover:bg-green-500/10 transition-all rounded">
            CONTINUE
          </button>
        </div>
      </div>

      {/* Line decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-1 h-20 bg-gradient-to-b from-white/30 to-transparent" />
        <div className="absolute right-20 top-0 w-1 h-full bg-gradient-to-b from-white/20 to-transparent opacity-50" />
      </div>
    </div>
  );
}
