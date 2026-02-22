export function NavBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#ebebeb] bg-white/95 backdrop-blur-xl">
      <div className="grid grid-cols-4 px-2 pb-6 pt-2">

        {/* Início — active */}
        <button className="flex flex-col items-center gap-[3px] py-1 text-[#2d6a4f]">
          <div className="relative">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span className="absolute -bottom-[5px] left-1/2 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-[#2d6a4f]" />
          </div>
          <span className="text-[10px] font-semibold tracking-wide">Início</span>
        </button>

        {/* Extrato — inactive */}
        <button className="flex flex-col items-center gap-[3px] py-1 text-[#c4c4bc]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"/>
            <line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/>
            <line x1="3" y1="12" x2="3.01" y2="12"/>
            <line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
          <span className="text-[10px] font-normal tracking-wide">Extrato</span>
        </button>

        {/* Análises — inactive */}
        <button className="flex flex-col items-center gap-[3px] py-1 text-[#c4c4bc]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"/>
            <path d="m7 16 4-4 4 4 4-4"/>
          </svg>
          <span className="text-[10px] font-normal tracking-wide">Análises</span>
        </button>

        {/* Metas — inactive */}
        <button className="flex flex-col items-center gap-[3px] py-1 text-[#c4c4bc]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
          <span className="text-[10px] font-normal tracking-wide">Metas</span>
        </button>

      </div>
    </div>
  );
}