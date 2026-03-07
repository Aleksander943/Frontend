type NavBarProps = {
  activeTab: string;
  onNavigate: (tab: string) => void;
};

export function NavBar({ activeTab, onNavigate }: NavBarProps) {
  const tabs = [
    {
      id: "inicio",
      label: "Início",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
    {
      id: "extrato",
      label: "Extrato",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"/>
          <line x1="8" y1="12" x2="21" y2="12"/>
          <line x1="8" y1="18" x2="21" y2="18"/>
          <line x1="3" y1="6" x2="3.01" y2="6"/>
          <line x1="3" y1="12" x2="3.01" y2="12"/>
          <line x1="3" y1="18" x2="3.01" y2="18"/>
        </svg>
      ),
    },
    {
      id: "analises",
      label: "Análises",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"/>
          <path d="m7 16 4-4 4 4 4-4"/>
        </svg>
      ),
    },
    {
      id: "metas",
      label: "Metas",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="border-t border-[#e5ebe7] bg-[#f7faf8] px-4 pb-4 pt-3">
      <div className="grid grid-cols-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center gap-[3px] py-1 ${isActive ? "text-[#1e6a43]" : "text-[#8ca596]"}`}
            >
              {isActive ? (
                <div className="relative rounded-[12px] bg-[#d7efe2] p-2">
                  {tab.icon}
                </div>
              ) : (
                tab.icon
              )}
              <span className={`text-[10px] tracking-wide ${isActive ? "font-semibold" : "font-medium"}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}