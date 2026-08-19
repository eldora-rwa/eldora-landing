import type { NavigateFunction } from "react-router";
import SocialList from "@/components/SocialList";

type LandingFooterProps = {
  navigate: NavigateFunction;
  onScrollToSection: (id: string) => void;
};

const LandingFooter = ({ navigate, onScrollToSection }: LandingFooterProps) => {
  return (
    <footer className="bg-navi-dark py-12 text-white lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col gap-6 lg:w-[40%] lg:gap-10">
            <img src="/logo.png" alt="" className="w-40 lg:w-46" />
            <p className="text-sm opacity-80 lg:text-base lg:opacity-100">
              Access global markets.
              <br /> No borders. No middlemen.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-10 text-sm lg:w-auto lg:grid-cols-3 lg:gap-20">
            <div>
              <h4 className="mb-6 text-lg font-bold lg:mb-10">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-base text-white/70">
                <li
                  onClick={() => onScrollToSection("about")}
                  className="cursor-pointer transition-colors hover:text-white"
                >
                  About Us
                </li>
                <li
                  onClick={() => onScrollToSection("product")}
                  className="cursor-pointer transition-colors hover:text-white"
                >
                  How It Works
                </li>
                <li
                  onClick={() => onScrollToSection("ecosystem")}
                  className="cursor-pointer transition-colors hover:text-white"
                >
                  Ecosystem
                </li>
                <li
                  onClick={() => navigate("/eldora#table-of-contents")}
                  className="cursor-pointer transition-colors hover:text-white"
                >
                  Documentation
                </li>
                <li
                  onClick={() => onScrollToSection("about")}
                  className="cursor-pointer transition-colors hover:text-white"
                >
                  Team
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold lg:mb-10">
                Terms & Policies
              </h4>
              <ul className="flex flex-col gap-3 text-base text-white/70">
                <li
                  onClick={() => navigate("/eldora#terms")}
                  className="cursor-pointer transition-colors hover:text-white"
                >
                  Term of Use
                </li>
                <li
                  onClick={() => navigate("/eldora#policy")}
                  className="cursor-pointer transition-colors hover:text-white"
                >
                  Privacy Policy
                </li>
                <li
                  onClick={() => navigate("/eldora#legal")}
                  className="cursor-pointer transition-colors hover:text-white"
                >
                  Risk Disclosure Statement
                </li>
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <h4 className="mb-6 text-lg font-bold lg:mb-10">Community</h4>
              <SocialList />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 text-sm text-white/70 lg:mt-16">
          <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <p>WeWorld Development AG</p>
            <p>DUNS: 480614187</p>
            <p>Address: Bahnhofstrasse 11, Wollerau</p>
            <p>
              Contact Us:{" "}
              <a
                href="mailto:contact@eldora.do"
                className="underline decoration-white/30 transition-colors hover:text-white hover:decoration-white"
              >
                contact@eldora.do
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
