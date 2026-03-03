export function NavBar() {
  return (
    <div className="border-t border-[#e5ebe7] bg-[#f7faf8] px-4 pb-4 pt-3">
      <div className="grid grid-cols-4">

        {/* Início — active */}
        <button className="flex flex-col items-center gap-[3px] py-1 text-[#1e6a43]">
          <div className="relative rounded-[12px] bg-[#d7efe2] p-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <span className="text-[10px] font-semibold tracking-wide">Início</span>
        </button>

        {/* Extrato — inactive */}
        <button className="flex flex-col items-center gap-[3px] py-1 text-[#8ca596]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"/>
            <line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/>
            <line x1="3" y1="12" x2="3.01" y2="12"/>
            <line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
          <span className="text-[10px] font-medium tracking-wide">Extrato</span>
        </button>

        {/* Análises — inactive */}
        <button className="flex flex-col items-center gap-[3px] py-1 text-[#8ca596]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"/>
            <path d="m7 16 4-4 4 4 4-4"/>
          </svg>
          <span className="text-[10px] font-medium tracking-wide">Análises</span>
        </button>

        {/* Metas — inactive */}
        <button className="flex flex-col items-center gap-[3px] py-1 text-[#8ca596]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
          <span className="text-[10px] font-medium tracking-wide">Metas</span>
        </button>

      </div>
    </div>
  );
}