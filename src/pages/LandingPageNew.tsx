import { ChevronDown, ChevronUp, MoveRight, Linkedin } from "lucide-react";
import { team } from "@/constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ecoSystemImg from "@/assets/imgs/ecosystem.png";
import ecoSystemImgMobile from "@/assets/imgs/ecosystem_mobile.png";
import PrimaryButton from "@/components/PrimaryButton";
import whyEldora from "@/assets/imgs/why_eldora.png";
import invest1 from "@/assets/imgs/tokenized_01.png";
import invest2 from "@/assets/imgs/tokenized_02.png";
import invest3 from "@/assets/imgs/tokenized_03.png";

import golbeIcon from "@/assets/icons/globe.svg";
import trackingIcon from "@/assets/icons/tracking.svg";
import layerIcon from "@/assets/icons/layer.svg";

import liquid01 from "@/assets/imgs/liquid_01.png";
import liquid02 from "@/assets/imgs/liquid_02.png";
import liquid03 from "@/assets/imgs/liquid_03.png";

const assets = {
  heroBg:
    "https://www.figma.com/api/mcp/asset/92c282fc-aae8-4bb3-a906-c6a058c8c5cb",
  logoMask:
    "https://www.figma.com/api/mcp/asset/2267d20b-b942-463f-b6e0-cffd4427e1b7",
  logoFill:
    "https://www.figma.com/api/mcp/asset/e22e7a8c-9ecc-4bec-9d05-f890121f532d",

  chartFrame:
    "https://www.figma.com/api/mcp/asset/f9a6217c-b8f8-4023-8847-3a55880b7b99",
  globe:
    "https://www.figma.com/api/mcp/asset/b70e031e-2c7c-4e49-9d27-64ceacbd1ae7",
  tracking:
    "https://www.figma.com/api/mcp/asset/a4b04ca4-634b-4487-8dc3-e29f1725ff27",
  layer:
    "https://www.figma.com/api/mcp/asset/9559ee2b-b1ce-4b0a-96e4-9d75a8c3a59d",
  whyLaptop:
    "https://www.figma.com/api/mcp/asset/8a38d58c-80fd-4544-aa11-bcf62ca05094",
  liquidityIcon:
    "https://www.figma.com/api/mcp/asset/35ee2cf2-f3ca-4ebb-9f42-c01777619771",
  portfolioBg:
    "https://www.figma.com/api/mcp/asset/a4912247-3b21-448d-8f64-b2d9e7593804",
  teamBg:
    "https://www.figma.com/api/mcp/asset/ed03ea27-6a6a-4403-96d8-93e71ed5dacd",
  ctaFaqBg:
    "https://www.figma.com/api/mcp/asset/99489293-9ee1-4345-81d0-8d5a0bef7777",
  footerLogo1:
    "https://www.figma.com/api/mcp/asset/cea10526-5090-4ce4-97b0-7ffb4ce98719",
  footerLogo2:
    "https://www.figma.com/api/mcp/asset/33bbcc8e-9a80-4ea2-8eaa-bfaaf587aa79",
  footerLogo3:
    "https://www.figma.com/api/mcp/asset/11a00044-fcc2-4389-b2ea-fd1fc29038da",
};

const investCards = [
  {
    index: "01.",
    title: "Discover RWA Opportunities",
    desc: "Access tokenized assets across real estate, credit markets, and treasury-backed pools.",
    img: invest1,
    icon: golbeIcon,
  },
  {
    index: "02.",
    title: "Track Yield and Exposure",
    desc: "Monitor performance and risk from one consolidated interface.",
    img: invest2,
    icon: trackingIcon,
  },
  {
    index: "03.",
    title: "Set Intent and Re-balance",
    desc: "Adjust allocations dynamically as market conditions evolve.",
    img: invest3,
    icon: layerIcon,
  },
];

const faqList = [
  "What is Eldora?",
  "How does Eldora work?",
  "What can I do on Eldora?",
  "Which RWA protocols are integrated?",
  "Are real assets involved?",
  "Do I need a wallet to use Eldora?",
  "Can I trade or unlock liquidity from my assets?",
  "Is Eldora custodial?",
  "How can I share feedback?",
  "What makes Eldora different from other RWA platforms?",
];

const liquidityAccessList = [
  {
    title: "Swap Across Liquidity",
    desc: "Trade RWA-backed tokens across integrated DEXs.",
    icon: liquid01,
  },
  {
    title: "Borrow Against Assets",
    desc: "Use tokenized assets as collateral to unlock liquidity.",
    icon: liquid02,
  },
  {
    title: "Redeem and Rebalance",
    desc: "Redeem underlying assets or rebalance allocations based on your goals.",
    icon: liquid03,
  },
];

const Footer = () => (
  <footer className="bg-[#0e1927] px-20 py-20 text-white">
    <div className="mx-auto flex w-full max-w-[1280px] items-start justify-between gap-20">
      <div className="max-w-[412px] space-y-10">
        <div className="relative h-[84px] w-[146px] overflow-hidden">
          <div className="absolute inset-[80.5%_13.84%_-0.03%_13.83%]">
            <div className="absolute inset-[84.71%_13.84%_4.45%_79.96%]">
              <img src={assets.footerLogo1} alt="" className="size-full" />
            </div>
            <div className="absolute inset-[80.5%_19.55%_-0.03%_13.83%]">
              <img src={assets.footerLogo2} alt="" className="size-full" />
            </div>
          </div>
          <div className="absolute inset-[0_0_25.66%_0]">
            <img src={assets.footerLogo3} alt="Eldora" className="size-full" />
          </div>
        </div>
        <p className="text-lg leading-relaxed text-white">
          Where Real-World Assets on-chain: Seamless tokenization, investment
          and life cycle management in one trusted hub.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-24 text-sm">
        <div>
          <h4 className="mb-10 text-lg font-bold">Quick Links</h4>
          <ul className="space-y-3 text-base text-white/70">
            <li>About Us</li>
            <li>How It Works</li>
            <li>Business Model</li>
            <li>ELD Token</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-10 text-lg font-bold">Legal</h4>
          <ul className="space-y-3 text-base text-white/70">
            <li>Privacy Policy</li>
            <li>Term of Services</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-10 text-lg font-bold">Community</h4>
          <div className="flex gap-3">
            {["𝕏", "D", "T", "M"].map((s) => (
              <div
                key={s}
                className="flex size-10 items-center justify-center rounded-full bg-[#243c5f] text-sm"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

interface TeamMember {
  name: string;
  position: string;
  image: string;
  url?: string;
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="text-center group mx-auto w-full max-w-[180px] lg:max-w-[240px]">
    <div className="relative mx-auto w-full aspect-square overflow-hidden rounded-[40px]">
      <img
        src={member.image}
        alt={member.name}
        className="size-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
      />
      <div className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-xl bg-[#3a5a8c] text-white">
        <Linkedin size={20} fill="white" strokeWidth={0} />
      </div>
      {member.url && (
        <a
          href={member.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`${member.name} Linkedin`}
        />
      )}
    </div>
    <h4 className="mt-6 font-eiko text-2xl lg:text-3xl leading-tight text-[#0e1927]">
      {member.name}
    </h4>
    <p className="mt-1 text-sm lg:text-base font-bold text-[#3a5a8c] uppercase tracking-wider">
      {member.position}
    </p>
  </div>
);

const LandingPageNew = () => {
  const handleOpenApp = () => {
    window.open("https://app.eldora.do", "_self");
  };

  return (
    <div className="w-full h-full">
      {/* Hero */}
      <section className="relative h-screen overflow-hidden bg-navi-dark">
        <img
          src={assets.heroBg}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute z-10 inset-0">
          {/* Nav */}
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6">
            <div className="relative h-16 w-28 overflow-hidden cursor-pointer hidden lg:block">
              <img src={"/logo.png"} alt="Eldora" className="h-full w-full" />
            </div>

            <div
              className="flex items-center gap-4 rounded-full shadow-lg
             bg-navi-base p-2 text-white w-full lg:w-fit justify-between"
            >
              {["Ecosystem", "Learn", "Product", "About"].map((item) => (
                <div
                  key={item}
                  className="group rounded-full p-px transition-all duration-300 hidden lg:block
                  hover:bg-[linear-gradient(to_bottom_right,#fff_0%,transparent_38%,transparent_62%,#ccc_100%)]"
                >
                  <button
                    onClick={() => {
                      document
                        .getElementById(item.toLowerCase())
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    className="relative flex h-full w-full cursor-pointer items-center justify-center gap-[10px] 
                  overflow-hidden rounded-full bg-navi-base px-3 py-1"
                  >
                    <div className="absolute inset-0 transition-colors duration-300 group-hover:bg-[#243c5f]/20" />
                    <span className="relative z-10">{item}</span>
                  </button>
                </div>
              ))}

              <div className="relative h-10 w-16 overflow-hidden cursor-pointer block ml-2 lg:hidden">
                <img src={"/logo.png"} alt="Eldora" className="h-full w-full" />
              </div>
              <PrimaryButton onClick={handleOpenApp}>Launch App</PrimaryButton>
            </div>
          </div>

          {/* Slogan */}
          <div
            className="mx-auto flex w-full max-w-7xl flex-col items-center
           gap-10 text-center absolute bottom-24 left-0 right-0"
          >
            <div>
              <h1 className="font-eiko text-4xl lg:text-7xl text-cream-light">
                Access. Invest. Grow.
              </h1>
              <p className="mt-3 text-base lg:text-xl text-cream-light">
                Unlocking Next-Generation Investments of Real Assets
              </p>
            </div>
            <PrimaryButton
              withEffect
              onClick={handleOpenApp}
              className="py-2 px-6 flex gap-2 items-center"
            >
              Launch App <MoveRight size={16} />
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section
        id="ecosystem"
        className="rounded-b-4xl bg-navi-dark px-4 py-[120px]"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-[60px]">
          <h2 className="font-eiko text-center text-3xl md:text-5xl  text-white">
            Integrated Ecosystem
          </h2>

          <img src={ecoSystemImg} alt="" className="hidden lg:block" />
          <img src={ecoSystemImgMobile} alt="" className="lg:hidden" />
          <PrimaryButton
            withEffect
            onClick={handleOpenApp}
            className="py-2 px-6 flex gap-2 items-center"
          >
            Contact for Integration
          </PrimaryButton>
        </div>
      </section>

      {/* Why? */}
      <section id="learn" className="pt-20">
        <div className="mx-auto max-w-7xl text-center px-4">
          <SectionBadge text="WHY ELDORA" />
          <p className="mx-auto mt-10 max-w-4xl font-eiko text-lg md:text-2xl lg:text-4xl text-navi-dark">
            Real-world assets are emerging across multiple protocols, but
            managing them remains fragmented. Eldora aggregates these ecosystems
            into one intelligent portfolio hub, allowing users to monitor yield,
            liquidity, and exposure across tokenized assets in a single place
          </p>
        </div>
        <img
          src={whyEldora}
          alt="why eldo"
          className="mx-auto w-full object-contain mt-6"
        />
      </section>

      {/* Invest */}
      <section id="product" className="px-4 bg-slate-200 py-30">
        <h2 className="text-center font-eiko text-5xl">
          Access Tokenized Real-World Assets
        </h2>
        {/* Desktop View */}
        <div className="mt-10 hidden lg:grid grid-cols-3 gap-6 max-w-7xl mx-auto">
          {investCards.map((card) => {
            return (
              <article
                key={card.index}
                className="group relative flex h-[480px] flex-col overflow-hidden
                 rounded-4xl bg-white p-2"
              >
                <div className="flex h-full w-full flex-col">
                  {/* Index number */}
                  <span className="absolute top-6 left-6 text-slate-200 text-6xl font-bold">
                    {card.index}
                  </span>

                  {/* Hover Image */}
                  <div
                    className="opacity-0 transition-all duration-300
                     group-hover:opacity-100 relative"
                  >
                    <img
                      src={card.img}
                      className="h-[250px] object-cover rounded-3xl w-full"
                      alt={card.title}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white" />
                  </div>

                  {/* Tile & desc */}
                  <div className="flex flex-col absolute bottom-0 left-0 right-0 p-6">
                    {/* Icon */}
                    <div className="mb-6 grid size-[60px] shrink-0 place-items-center rounded-2xl bg-slate-200">
                      <img src={card.icon} className="size-8" />
                    </div>

                    {/* Title */}
                    <h3 className="font-eiko text-3xl text-navi-dark">
                      {card.title}
                    </h3>

                    {/* Description wrapper (expands on hover) */}
                    <div
                      className="grid grid-rows-[0fr] opacity-0 transition-all duration-300
                     group-hover:mt-6 group-hover:grid-rows-[1fr] group-hover:opacity-100"
                    >
                      <div className="overflow-hidden">
                        <p className="text-lg text-[#182740]">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile View with Carousel */}
        <div className="mx-auto mt-10 block w-full lg:hidden">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {investCards.map((card) => {
                return (
                  <CarouselItem
                    key={card.index}
                    className="first:pl-0 pl-4 basis-[85%] sm:basis-[70%]"
                  >
                    <article className="relative flex h-[540px] flex-col overflow-hidden rounded-4xl bg-white p-2">
                      <div className="flex h-full w-full flex-col">
                        {/* Index number */}
                        <span className="absolute left-6 top-6 text-6xl font-bold text-slate-200">
                          {card.index}
                        </span>

                        {/* Image (Always visible on mobile) */}
                        <div className="relative">
                          <img
                            src={card.img}
                            className="h-[250px] w-full rounded-3xl object-cover"
                            alt={card.title}
                          />
                          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white" />
                        </div>

                        {/* Title & desc */}
                        <div className="absolute bottom-0 left-0 right-0 flex flex-col p-6">
                          {/* Icon */}
                          <div className="mb-6 grid size-[60px] shrink-0 place-items-center rounded-2xl bg-slate-200">
                            <img src={card.icon} className="size-8" />
                          </div>

                          {/* Title */}
                          <h3 className="font-eiko text-3xl text-navi-dark">
                            {card.title}
                          </h3>

                          {/* Description (Always visible on mobile) */}
                          <div className="mt-6 flex">
                            <p className="text-lg text-[#182740]">
                              {card.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-center gap-4 px-4">
              <CarouselPrevious className="static bg-transparent size-12 border border-navi-dark text-navi-dark hover:bg-white cursor-pointer" />
              <CarouselNext className="static bg-navi-light size-12 border border-navi-light text-white! hover:bg-navi-base cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Liquidity Access */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <SectionBadge text="LIQUIDITY ACCESS" />
            <h3 className="mt-10 font-eiko text-4xl lg:text-6xl">
              Unlock Liquidity From Your RWA Positions
            </h3>
            <p className="mt-6 lg:text-xl">
              Trade, collateralize, or redeploy capital across integrated DeFi
              rails directly from your portfolio
            </p>
          </div>

          <div className="space-y-6">
            {liquidityAccessList.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-6 border-b border-slate-300 pb-6"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-30 w-30 object-contain"
                />
                <div>
                  <h4 className="text-[32px] leading-[1.2] text-[#182740]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-base leading-7 text-[#475569]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Intelligence */}
      <section className="px-4 py-0">
        <div
          className="relative overflow-hidden rounded-4xl px-6 py-30 text-center text-white"
          style={{
            backgroundImage: `linear-gradient(180deg, #94C4FF 0%, #1D43A8 39.9%, #0B1F75 70.67%, #010425 100%)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <SectionBadge invertColor text="PORTFOLIO INTELLIGENCE" />
          <h3 className="mx-auto mt-10 max-w-4xl font-eiko text-4xl lg:text-6xl lg:leading-16">
            Track. Analyze. Optimize.
            <br /> Your
            <span className="text-gold-pale"> RWA Portfolio</span> From
            <br />
            <span className="text-gold-pale">One Dashboard</span>
          </h3>
          <p className="mx-auto mt-6 max-w-2xl lg:text-xl">
            Monitor yield, liquidity, and exposure across tokenized assets
            aggregated from multiple RWA protocols
          </p>

          <PrimaryButton
            withEffect
            onClick={handleOpenApp}
            className="py-2 px-6 flex gap-2 items-center mx-auto mt-12"
          >
            Open portfolio
            <MoveRight size={16} />
          </PrimaryButton>
        </div>
      </section>

      {/* Team */}
      <section
        id="about"
        className="relative px-4 py-[120px] overflow-hidden bg-white"
      >
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#00264d 1px, transparent 1px), linear-gradient(90deg, #00264d 1px, transparent 1px)`,
            backgroundSize: "160px 160px",
          }}
        />

        <div className="relative z-10 px-4">
          <div className="text-center">
            <SectionBadge text="OUR TEAM" />
            <h2 className="mt-8 font-eiko text-5xl text-[#0e1927]">
              Meet Our Team
            </h2>
          </div>

          {/* Desktop View: Grid */}
          <div className="mt-20 hidden lg:flex flex-col gap-20">
            {/* Row 1: 4 members */}
            <div className="grid grid-cols-4 gap-12 max-w-5xl mx-auto">
              {team.slice(0, 4).map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>

            {/* Row 2: 5 members */}
            <div className="grid grid-cols-5 gap-12 max-w-7xl mx-auto">
              {team.slice(4, 9).map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>

            {/* Row 3: 4 members */}
            <div className="grid grid-cols-4 gap-12 max-w-5xl mx-auto">
              {team.slice(9, 13).map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>

          {/* Mobile/Tablet View: Carousel */}
          <div className="mt-12 block lg:hidden">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {team.map((member) => (
                  <CarouselItem
                    key={member.name}
                    className="basis-[50%] pl-4 first:pl-0"
                  >
                    <TeamMemberCard member={member} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-8 flex items-center justify-center gap-4 px-4">
                <CarouselPrevious className="static size-12 border border-navi-dark bg-transparent text-navi-dark hover:bg-white cursor-pointer" />
                <CarouselNext className="static size-12 border border-navi-light bg-navi-light text-white! hover:bg-navi-base cursor-pointer" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-t-[40px] px-20 py-[120px] text-white">
        <img
          src={assets.ctaFaqBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10" />

        <div className="relative z-10 grid grid-cols-[519px_1fr] gap-24">
          <div>
            <h3 className="font-eiko text-[60px] leading-[1.1]">
              Your RWA Journey Starts Here!
            </h3>
            <div className="mt-10 flex gap-4">
              {[assets.layer, assets.globe, assets.tracking, assets.layer].map(
                (icon, index) => (
                  <div
                    key={`${icon}-${index}`}
                    className="grid size-10 place-items-center rounded-full bg-[#243c5f]"
                  >
                    <img src={icon} alt="" className="size-4 object-contain" />
                  </div>
                ),
              )}
            </div>
          </div>

          <div>
            <SectionBadge text="FAQ" />
            <div className="mt-8 border-t border-[#8c8c8c]">
              {faqList.map((item, index) => {
                const opened = index === 1;

                return (
                  <div key={item} className="border-b border-[#8c8c8c] py-8">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-[70px]">
                        <span
                          className={`font-eiko text-2xl leading-8 ${opened ? "text-[#d4b07a]" : "text-white"}`}
                        >
                          ({String(index + 1).padStart(2, "0")})
                        </span>
                        <span
                          className={`font-eiko text-2xl leading-8 ${opened ? "text-[#d4b07a]" : "text-white"}`}
                        >
                          {item}
                        </span>
                      </div>
                      {opened ? (
                        <ChevronUp className="size-8" />
                      ) : (
                        <ChevronDown className="size-8" />
                      )}
                    </div>
                    {opened ? (
                      <p className="pl-[110px] pt-3 text-base leading-7 text-white">
                        Each project is led by a Swiss-based mandate lead and
                        supported by a dedicated team, following a clear
                        execution plan with defined milestones to ensure
                        structured and reliable delivery.
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPageNew;

const SectionBadge = ({
  text,
  invertColor,
}: {
  text: string;
  invertColor?: boolean;
}) => (
  <div
    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 ${invertColor ? "bg-navi-light" : "bg-slate-200"}`}
  >
    <span
      className={`size-[11px] rounded-full ${invertColor ? "bg-white" : "bg-navi-light"}`}
    />
    <span
      className={`text-xl font-extrabold ${invertColor ? "text-white" : "text-navi-light"}`}
    >
      {text}
    </span>
  </div>
);
