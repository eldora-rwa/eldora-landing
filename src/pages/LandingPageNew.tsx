import {
  ChevronDown,
  ChevronUp,
  Globe,
  LineChart,
  MoveRight,
  Repeat,
} from "lucide-react";
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
    icon: Globe,
  },
  {
    index: "02.",
    title: "Track Yield and Exposure",
    desc: "Monitor performance and risk from one consolidated interface.",
    img: invest2,
    icon: LineChart,
  },
  {
    index: "03.",
    title: "Set Intent and Re-balance",
    desc: "Adjust allocations dynamically as market conditions evolve.",
    img: invest3,
    icon: Repeat,
  },
];

const teamMembers = [
  [
    "Jayce",
    "CEO",
    "https://www.figma.com/api/mcp/asset/ae816e55-5eb7-4599-a864-67552a9013b8",
  ],
  [
    "Katie",
    "Lead PM",
    "https://www.figma.com/api/mcp/asset/ec69ff08-41fc-401c-ab44-2a92687d259c",
  ],
  [
    "Max",
    "Operations",
    "https://www.figma.com/api/mcp/asset/ade22783-c7bf-47f3-81e9-af51afe06277",
  ],
  [
    "Neil",
    "Advisor",
    "https://www.figma.com/api/mcp/asset/b9d69aa0-6455-4037-b7f5-50f8d5fc3996",
  ],
  [
    "Emily",
    "Strategy",
    "https://www.figma.com/api/mcp/asset/57a49a7a-e450-4213-b67e-95f7dd5f47a2",
  ],
  [
    "Loki",
    "Finance",
    "https://www.figma.com/api/mcp/asset/9b005dd4-8562-49b9-8275-3690c4f8383b",
  ],
  [
    "Garry",
    "Design",
    "https://www.figma.com/api/mcp/asset/9189f985-07b2-4c93-b5a3-1cd79ea811c5",
  ],
  [
    "Kevin",
    "Tech Lead",
    "https://www.figma.com/api/mcp/asset/991a0e8e-b1b0-409f-9cdb-73d01faf5b42",
  ],
  [
    "Tomas",
    "Engineer",
    "https://www.figma.com/api/mcp/asset/2c1e9b1f-eea1-4ef4-924f-4631a82480ef",
  ],
  [
    "Jason",
    "Developer",
    "https://www.figma.com/api/mcp/asset/54d96da6-479a-45ad-a887-d33b3e4a0383",
  ],
  [
    "Lynn",
    "Content",
    "https://www.figma.com/api/mcp/asset/3aba8d8b-2490-496e-98f2-93525cd2f631",
  ],
  [
    "Rose",
    "Community",
    "https://www.figma.com/api/mcp/asset/5eb03180-2a2f-4ba7-a78e-17a2fc6620eb",
  ],
] as const;

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
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 xl:px-0 py-6">
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
      <section className="rounded-b-4xl bg-navi-dark px-8 py-[120px]">
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
      <section className="pt-20">
        <div className="mx-auto max-w-7xl text-center px-8 lg:px-0 ">
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
      <section className="px-8 lg:px-0 bg-slate-200 py-30">
        <h2 className="text-center font-eiko text-5xl">
          Access Tokenized Real-World Assets
        </h2>
        {/* Desktop View */}
        <div className="mt-10 hidden lg:grid grid-cols-3 gap-6 max-w-7xl mx-auto">
          {investCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.index}
                className="group relative flex h-[480px] flex-col overflow-hidden
                 rounded-[32px] bg-white p-2"
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
                      className="h-[250px] object-cover rounded-[24px] w-full"
                      alt={card.title}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white" />
                  </div>

                  {/* Tile & desc */}
                  <div className="flex flex-col absolute bottom-0 left-0 right-0 p-6">
                    {/* Icon */}
                    <div className="mb-6 grid size-[60px] shrink-0 place-items-center rounded-2xl bg-slate-200">
                      <Icon size={32} className="text-navi-light" />
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
                const Icon = card.icon;
                return (
                  <CarouselItem
                    key={card.index}
                    className="pl-4 basis-[85%] sm:basis-[70%]"
                  >
                    <article className="relative flex h-[540px] flex-col overflow-hidden rounded-[32px] bg-white p-2">
                      <div className="flex h-full w-full flex-col">
                        {/* Index number */}
                        <span className="absolute left-6 top-6 text-6xl font-bold text-slate-200">
                          {card.index}
                        </span>

                        {/* Image (Always visible on mobile) */}
                        <div className="relative">
                          <img
                            src={card.img}
                            className="h-[250px] w-full rounded-[24px] object-cover"
                            alt={card.title}
                          />
                          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white" />
                        </div>

                        {/* Title & desc */}
                        <div className="absolute bottom-0 left-0 right-0 flex flex-col p-6">
                          {/* Icon */}
                          <div className="mb-6 grid size-[60px] shrink-0 place-items-center rounded-2xl bg-slate-200">
                            <Icon size={32} className="text-navi-light" />
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
              <CarouselPrevious className="static size-12 translate-y-0 border-2 border-[#243c5f] text-[#243c5f] hover:bg-[#243c5f]/10" />
              <CarouselNext className="static size-12 translate-y-0 border-2 border-transparent bg-[#243c5f] text-white hover:bg-[#243c5f]/90" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="px-20 py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[568px_1fr] gap-14">
          <div>
            <SectionBadge text="LIQUIDITY ACCESS" />
            <h3 className="mt-10 font-eiko text-6xl leading-[1.1]">
              Unlock Liquidity From Your RWA Positions
            </h3>
            <p className="mt-6 text-xl leading-7 text-[#475569]">
              Trade, collateralize, or redeploy capital across integrated DeFi
              rails directly from your portfolio.
            </p>
          </div>

          <div className="space-y-6">
            {[
              [
                "Swap Across Liquidity",
                "Trade RWA-backed tokens across integrated DEXs.",
                assets.liquidityIcon,
              ],
              [
                "Borrow Against Assets",
                "Use tokenized assets as collateral to unlock liquidity.",
                assets.globe,
              ],
              [
                "Reallocate Capital",
                "Move funds across pools to optimize yield and exposure.",
                assets.tracking,
              ],
            ].map(([title, desc, icon]) => (
              <div key={title} className="flex items-center gap-6">
                <div className="grid size-[120px] place-items-center rounded-[24px] bg-[#e2e8f0]">
                  <img src={icon} alt="" className="h-14 w-14 object-contain" />
                </div>
                <div>
                  <h4 className="text-[32px] leading-[1.2] text-[#182740]">
                    {title}
                  </h4>
                  <p className="mt-2 text-base leading-7 text-[#475569]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-10 pb-0 pt-0">
        <div
          className="relative overflow-hidden rounded-[40px] px-6 py-34 text-center text-white"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(12,40,120,0.65), rgba(4,12,38,0.95)), url(${assets.portfolioBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <SectionBadge text="PORTFOLIO INTELLIGENCE" />
          <h3 className="mx-auto mt-10 max-w-[900px] font-eiko text-6xl leading-[1.1]">
            Track. Analyze. Optimize. Your RWA Portfolio From One Dashboard
          </h3>
          <p className="mx-auto mt-6 max-w-[652px] text-xl leading-7 text-[#e2e8f0]">
            Monitor yield, liquidity, and exposure across tokenized assets
            aggregated from multiple RWA protocols.
          </p>
          <button className="mt-10 inline-flex rounded-full bg-[#ddd5c8] px-6 py-2 text-[#182740]">
            Explore Dashboard
          </button>
        </div>
      </section>

      <section className="bg-[#f1f5f9] px-20 py-[120px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <SectionBadge text="TEAM" />
            <h2 className="mt-8 font-eiko text-5xl leading-[48px] text-[#182740]">
              Meet Our Team
            </h2>
          </div>

          <div
            className="mt-12 grid grid-cols-6 gap-x-6 gap-y-10"
            style={{
              backgroundImage: `url(${assets.teamBg})`,
              backgroundSize: "cover",
            }}
          >
            {teamMembers.map(([name, role, avatar]) => (
              <div key={name} className="text-center">
                <div className="relative mx-auto size-[193px] overflow-hidden rounded-3xl">
                  <img
                    src={avatar}
                    alt={name}
                    className="size-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-xl bg-[#3a5a8c] text-white">
                    in
                  </div>
                </div>
                <h4 className="mt-4 font-eiko text-2xl leading-8 text-[#0e1927]">
                  {name}
                </h4>
                <p className="text-base font-bold leading-6 text-[#3a5a8c]">
                  {role}
                </p>
              </div>
            ))}
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

const SectionBadge = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-6 py-3">
    <span className="size-[11px] rounded-full bg-navi-light" />
    <span className="text-xl font-extrabold text-navi-light">{text}</span>
  </div>
);
