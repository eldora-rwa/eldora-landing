import PrimaryButton from "@/components/PrimaryButton";

type LandingNavProps = {
  isScrolled: boolean;
  onLaunchApp: () => void;
  onScrollToSection: (id: string) => void;
};

const navItems = ["Ecosystem", "Learn", "Product", "About"];

const LandingNav = ({
  isScrolled,
  onLaunchApp,
  onScrollToSection,
}: LandingNavProps) => {
  return (
    <header
      className={`pointer-events-none fixed left-0 right-0 top-0 z-50 transition-all duration-300
           ${isScrolled ? "bg-navi-dark/80 shadow-lg backdrop-blur-sm" : ""}`}
    >
      <div
        className={`pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-5 md:px-8 lg:px-4 ${isScrolled ? "py-2" : "py-4"}`}
      >
        <div className="hidden shrink-0 cursor-pointer lg:block">
          <img
            src="/logo.png"
            alt="Eldora"
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-12!" : "h-18!"}`}
          />
        </div>

        <div
          className="flex w-full items-center justify-between rounded-full bg-navi-base px-5 py-2
             text-white shadow-lg md:px-6 md:py-3 lg:w-fit lg:gap-4 lg:p-2"
        >
          {navItems.map((item) => (
            <div
              key={item}
              className="group hidden rounded-full p-px transition-all duration-300
                  hover:bg-[linear-gradient(to_bottom_right,#fff_0%,transparent_38%,transparent_62%,#ccc_100%)] lg:block"
            >
              <button
                onClick={() => onScrollToSection(item.toLowerCase())}
                className="relative flex h-full w-full cursor-pointer items-center justify-center gap-[10px] 
                  overflow-hidden rounded-full bg-navi-base px-3 py-1"
              >
                <div className="absolute inset-0 transition-colors duration-300 group-hover:bg-[#243c5f]/20" />
                <span className="relative z-10">{item}</span>
              </button>
            </div>
          ))}

          <div className="ml-2 block shrink-0 cursor-pointer lg:hidden">
            <img
              src="/logo.png"
              alt="Eldora"
              className="h-9 w-auto object-contain md:h-11"
            />
          </div>
          <PrimaryButton
            onClick={onLaunchApp}
            className="min-h-11 px-5 text-[15px] font-medium md:min-h-13 md:px-8 md:text-[22px]
               lg:min-h-0 lg:px-3 lg:text-base"
          >
            <span className="lg:hidden">Launch App</span>
            <span className="hidden lg:inline">Launch App</span>
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
};

export default LandingNav;
