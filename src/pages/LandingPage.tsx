import videoHero from "@/assets/videos/video-hero.mp4";
import logo from "@/assets/images/logo.svg";
import { map } from "lodash";
import border from "@/assets/images/bg.png";
import borderMobile from "@/assets/images/bg-mobile.png";
import arrrowRightWhite from "@/assets/icons/arrow-right-white.svg";
import arrrowRightBlack from "@/assets/icons/arrow-right-black.svg";
// import arrrowRightWhiteNoLine from "@/assets/icons/arrow-right-white-noline.svg";
// import arrrowRightBlackNoLine from "@/assets/icons/arrow-right-black-noline.svg";
// import arrrowRightNoLine02 from "@/assets/icons/arrow_right__noline02.png";
// import lineHorizon from "@/assets/icons/line-horizon.png";
import Marquee from "react-fast-marquee";
import slideImg from "@/assets/images/slide.svg";
import landingInvest from "@/assets/images/landing_invest__01.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import funding01 from "@/assets/images/funding-01.svg";
import funding02 from "@/assets/images/funding-02.svg";
// import funding03 from "@/assets/images/funding-03.svg";
import funding04 from "@/assets/images/funding-04.svg";
// import network01 from "@/assets/images/network_01.png";
// import network02 from "@/assets/images/network_02.png";
import membership from "@/assets/images/membership.png";
// import utility01 from "@/assets/images/utility-01.svg";
// import utility02 from "@/assets/images/utility-02.svg";
// import utility03 from "@/assets/images/utility-03.svg";
// import news01 from "@/assets/images/news_01.jpg";
// import news02 from "@/assets/images/news_02.jpg";
// import news03 from "@/assets/images/news_03.jpg";
// import news04 from "@/assets/images/news_04.jpg";
// import news05 from "@/assets/images/news_05.jpg";
import footer from "@/assets/images/footer.png";
import x from "@/assets/icons/x.png";
import discord from "@/assets/icons/discord.png";
import telegram from "@/assets/icons/telegram.png";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import arrowRightAccent from "@/assets/icons/arrow-right-accent.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import menuIcon from "@/assets/icons/menu.png";
// import lineHaftVertical from "@/assets/icons/line-haft-vertical.svg";

const invest = [
  {
    slot01: "Invest",
    slot02: "Discover Diverse Assets",
    slot03: `From real estate to bonds and credit markets, \naccess a variety of on-chain RWA pools in one place`,
    backgroundColor: "#EFEBE6",
  },
  {
    slot01: "",
    slot02: "Earn Competitive Yields",
    slot03: `Find returns that match your goals and risk appetite`,
    backgroundColor: "#E5E2DF",
  },
  {
    slot01: "",
    slot02: "Invest with Confidence",
    slot03: `Join verified pools with enterprise-grade \n security & compliance`,
    backgroundColor: "#D6D2CC",
  },
];

const funding = [
  {
    id: 1,
    title: `Swap instantly`,
    image: funding01,
    desc: "Across integrated DEXs (Uniswap, etc.)",
  },
  {
    id: 2,
    title: `Lend & borrow`,
    image: funding02,
    desc: "Using your RWA-backed tokens",
  },
  // {
  //   id: 3,
  //   title: `Grow \nCommunity`,
  //   image: funding03,
  //   desc: "Onboard, educate, and incentivize your RWA supporters",
  // },
  {
    id: 3,
    title: `Stake or reinvest`,
    image: funding04,
    desc: "To compound your yields",
  },
];

// const institutional = [
//   "Compliance (KYC/AML)",
//   "Custody & Escrow services",
//   "API acess & Data licensing",
//   "Analytics dashboard",
// ];

// const utility = [
//   {
//     title: "Staking",
//     image: utility01,
//     desc: "Stake ELD tokens to earn rewards and participate in platform governance while supporting network security",
//   },
//   {
//     title: "Governance",
//     image: utility02,
//     desc: "Vote on protocol upgrades, new integrations, and community proposals to shape the future of Eldora",
//   },
//   {
//     title: "Learn & Earn",
//     image: utility03,
//     desc: "Participate in educational programs and earn ELD tokens while expanding your knowledge of RWA markets",
//   },
// ];

// const latestNews = [
//   {
//     title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
//     date: "August 22 , 2008",
//     image: news01,
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
//     date: "August 22 , 2008",
//     image: news02,
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
//     date: "August 22 , 2008",
//     image: news03,
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
//     date: "August 22 , 2008",
//     image: news04,
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
//     date: "August 22 , 2008",
//     image: news05,
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
//     date: "August 22 , 2008",
//     image: news05,
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
//     date: "August 22 , 2008",
//     image: news05,
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
//     date: "August 22 , 2008",
//     image: news05,
//   },
// ];

// const links = ["About Us", "How It Works", "Business", "Model", "ELD Token"];
// const legal = ["Privacy Policy", "Term of Services", "Cookie Policy"];

import { EarlyAccessModal } from "@/components/EarlyAccessModal";

// ... (existing imports)

const LandingPage = () => {
  const [clicked, setClicked] = useState<boolean>();
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <EarlyAccessModal open={isEarlyAccessOpen} onOpenChange={setIsEarlyAccessOpen} />
      <main className="w-full h-full bg-black overflow-hidden">
        {/* Hero */}
        <section className="min-h-[105vh] lg:min-h-[120vh] relative z-1">
          {/* Video background */}
          <video
            autoPlay={true}
            loop
            muted
            playsInline
            src={videoHero}
            controls={false}
            className="rounded-md absolute object-cover inset-0 w-full 
          h-full z-2 rounded-br-[6rem] rounded-bl-[6rem]"
          />

          {/* Overlay */}
          <img
            src={border}
            alt=""
            draggable="false"
            className="absolute inset-0 w-full h-full z-3 hidden lg:block"
          />

          <img
            src={borderMobile}
            alt=""
            draggable="false"
            className="absolute inset-0 w-full h-full z-3 lg:hidden"
          />

          {/* Navbar */}
          <div className="absolute top-0 left-0 right-0 z-4 p-4 lg:p-12">
            {/* Logo */}
            <img
              src={logo}
              alt="logo-image"
              draggable="false"
              className="object-cover absolute h-18 lg:h-auto"
            />

            {/* Navigation */}
            <div className="flex-center lg:gap-10! hidden lg:flex">
              {map(
                // ["ecosystem", "learn", "product", "about"],
                ["about", "ecosystem", "use cases"],
                (item, index) => (
                  <div
                    onClick={() => {
                      document.getElementById(item)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="uppercase lg:text-lg text-white font-semibold 
                    hover:text-accent cursor-pointer duration-150"
                    key={index}
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <div className="flex justify-end lg:hidden">
                  <img src={menuIcon} alt="menu-icon" />
                </div>
              </SheetTrigger>
              <SheetContent
                className="backdrop-blur-md bg-black/10 border-accent/50"
                side="right"
              >
                <SheetHeader>
                  <SheetTitle className="text-accent">Menu</SheetTitle>
                </SheetHeader>

                <nav className="mt-4 flex flex-col space-y-6 px-6">
                  {map(
                    // ["ecosystem", "learn", "product", "about"],
                    ["about", "ecosystem", "use cases"],
                    (item, index) => (
                      <SheetClose asChild key={index}>
                        <div
                          onClick={() => {
                            const isMobile =
                              window.innerWidth < 768 && item === "ecosystem";
                            document
                              .getElementById(
                                isMobile ? `${item}-mobile` : item
                              )
                              ?.scrollIntoView({
                                behavior: "smooth",
                              });
                          }}
                          className="uppercase lg:text-lg text-white font-semibold 
                    hover:text-accent cursor-pointer duration-150"
                        >
                          {item}
                        </div>
                      </SheetClose>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Content */}
          <div
            className="absolute inset-0 z-3 p-3 lg:p-12 flex flex-col text-white justify-end
        lg:justify-center! items-center lg:items-start w-full lg:w-4/6 xl:w-3/6 pb-12 lg:pb-10 lg:pt-30!"
          >
            {/* <p
              className="hidden lg:text-5xl xl:text-6xl 2xl:text-[77px]
            leading-tight font-eiko lg:text-left lg:inline"
            >
              All your assets. One connected hub
            </p> */}

            <div
              className="text-[40px] lg:text-5xl leading-tight font-eiko
            flex flex-col items-center lg:items-start"
            >
              <p>All your assets</p>
              <p>One connected hub</p>
            </div>
            <p
              className="text-[16px] lg:text-md xl:text-xl 2xl:text-[28px] 
            w-full lg:w-4/5 mt-4 text-center lg:text-left"
            >
              Eldora connects every integration into one intelligent portfolio,
              simplifying how you invest, transfer, and grow your assets
              on-chain
            </p>

            <div className="flex-start mt-10 lg:mt-18 gap-6!">
              {/* <div
                className="flex-center border-white border rounded-full py-3 lg:py-4 
            lg:px-8 px-6 cursor-pointer hover:opacity-70 duration-200 active:bg-white
             active:text-black group"
              >
                Learn more
                <img
                  src={arrrowRightWhite}
                  alt=""
                  className="group-active:hidden block"
                />
                <img
                  src={arrrowRightBlack}
                  alt=""
                  className="group-active:block hidden"
                />
              </div> */}
              <div
                onMouseEnter={() => !clicked && setClicked(true)}
                onMouseLeave={() => clicked && setClicked(false)}
                className="flex-center bg-white border rounded-full py-3 lg:py-4 
                lg:px-8 px-6 text-black cursor-pointer hover:opacity-70 duration-150
                group active:bg-black active:text-white"
              >
                {clicked ? "Coming Soon!" : "Launch app"}
                {!clicked && (
                  <>
                    <img
                      src={arrrowRightBlack}
                      alt=""
                      className="group-active:hidden block"
                    />
                    <img
                      src={arrrowRightWhite}
                      alt=""
                      className="group-active:block hidden"
                    />
                  </>
                )}
              </div>

              <div
                onClick={() => setIsEarlyAccessOpen(true)}
                className="flex-center border border-white rounded-full py-3 lg:py-4 
                lg:px-8 px-6 text-white cursor-pointer hover:bg-white/10 duration-150"
              >
                Early Access
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-primary -mt-[20vh]">
          {/* Containter */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 h-full lg:px-6">
            {/* Title */}
            <div
              className="text-accent border-l lg:border-r border-accent/50 
          col-span-2 h-full pt-[20vh] ml-3 lg:ml-0"
            >
              <div className="p-3 pt-10 lg:p-10 flex flex-col justify-between h-full">
                <p id="about" className="">
                  Why Eldora
                </p>
                {/* <p
                  id="ecosystem"
                  className="lg:mt-60 2xl:mt-100 hidden lg:inline"
                >
                  Trusted Partners
                </p> */}
              </div>
            </div>

            <div className="border-b border-accent/50 lg:hidden" />

            {/* Slogan */}
            <div className="col-span-10 lg:pt-[20vh]">
              <div
                className="p-3 lg:p-10 text-neutral-base border-l lg:border-l-0 
              ml-3 lg:ml-0 border-accent/50"
              >
                <div
                  className="font-eiko text-[40px] lg:text-4xl xl:text-5xl 2xl:text-[76px] 
                leading-snug lex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6"
                >
                  {/* <p>Neutral</p>{" "}
                  <img src={lineHorizon} className="hidden lg:inline" alt="" />{" "}
                  <p>Modular</p>{" "}
                  <img src={lineHorizon} className="hidden lg:inline" alt="" />{" "}
                  <p>Scalable</p> */}
                  Invest, manage, and move your real-world assets. All in one
                  platform
                </div>

                {/* <p className="font-eiko text-[28px] lg:text-2xl xl:text-3xl 2xl:text-[44px] mt-10 lg:mt-16">
                  Invest, manage, and move your real-world assets. All in one
                  platform.
                </p> */}
              </div>
            </div>
          </div>

          {/* <div className="lg:hidden">
            <p
              id="ecosystem-mobile"
              className="ml-3 pb-3 pt-6 border-l border-accent/50 pl-3 text-accent"
            >
              Trusted Partners
            </p>
          </div> */}

          <Marquee
            autoFill
            className="py-3 lg:py-10 border-t border-accent/50 min-h-[250px] relative"
          >
            <img
              id="ecosystem"
              alt={"slicde"}
              src={slideImg}
              className="pl-14 select-none pointer-events-none no-select"
            />
          </Marquee>
        </section>

        {/* Invest */}
        <section id="use cases" className="bg-white">
          <div className="bg-white lg:hidden">
            <p
              className="text-accent font-semibold text-[16px] 
            border-l border-accent/50 pl-3 ml-3 py-3"
            >
              Invest
            </p>
          </div>
          {map(invest, (item, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
              className="flex flex-col items-start lg:grid lg:grid-cols-12 lg:items-center 
              lg:p-12 lg:min-h-[250px] relative gap-6 lg:gap-10 p-8"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <p className="text-[#9E640A] col-span-1 font-semibold text-[18px] hidden lg:inline">
                {item.slot01}
              </p>
              <p
                className="text-[32px] lg:text-3xl xl:text-[44px] font-eiko col-span-6 
            leading-none flex items-start justify-start text-primary-700"
              >
                {item.slot02}
              </p>

              <p
                className="text-[16px] lg:text-xl xl:text-[25px] col-span-5 flex-start 
              whitespace-pre-line text-primary-500"
              >
                {item.slot03}
              </p>

              <img
                src={landingInvest}
                alt="landing"
                className="absolute top-0 right-6 2xl:right-30 block lg:hidden 2xl:block"
              />
            </div>
          ))}
          {/* <div
            data-aos="fade-up"
            data-aos-delay={4 * 200}
            className="flex-center p-12 lg:min-h-[250px] 
          relative gap-10 bg-[#C6A46E]"
          >
            <div
              className="rounded-full bg-primary-500 flex-between duration-200
              gap-10 py-6 lg:py-6 px-6 lg:px-15 cursor-pointer hover:opacity-80 
              active:opacity-80"
            >
              <p className="text-white font-eiko text-[18px] lg:text-[32px]">
                Coming Soon!
              </p>{" "}
              <img src={arrrowRightWhiteNoLine} alt="arrow" />
            </div>
          </div> */}
        </section>

        {/* Funding */}
        <section className="bg-neutral-base pb-20">
          {/* Title */}
          <div className="flex flex-col lg:flex-row items-start p-3 lg:p-12 lg:gap-50 pt-18!">
            <p className="font-semibold text-[#9E640A] text-[18px]">
              Liquidity access
            </p>
            <p
              className="text-[40px] lg:text-4xl xl:text-5xl 2xl:text-[76px] font-eiko
            whitespace-pre-line leading-tight text-primary-700 mt-6 lg:mt-0"
            >
              {`Unlock the power of liquidity: trade, stake, or borrow against your RWA holdings`}
            </p>
          </div>

          <div className="border-t border-b border-accent/50 px-3 lg:px-6 grid xl:grid-cols-3">
            {map(funding, (item, index) => (
              <div
                key={index}
                className={`p-4 border-l border-accent/50 border-r xl:border-r-0 border-b ${
                  index === funding.length - 1 && "border-r! border-b-0!"
                } flex flex-col lg:gap-10! justify-between xl:border-b-0!`}
              >
                <div className="flex justify-between items-start lg:h-2/6">
                  <div>
                    <p className="text-[32px] text-3xl 2xl:text-[44px] font-eiko whitespace-pre-line text-primary-500">
                      {item.title}
                    </p>
                    <p className="mt-2">{item.desc}</p>
                  </div>

                  <p className="text-[20px]">{item.id}</p>
                </div>

                <img
                  src={item.image}
                  alt="image-funding"
                  className="lg:h-4/6 w-[300px] object-contain mx-auto p-10 lg:p-0"
                />

                {/* <p
                  className="lg:text-lg 2xl:text-[24px] border-t border-accent/50  lg:h-2/6 flex
              justify-center items-start pt-4 lg:pt-10"
                >
                  {item.desc}
                </p> */}
              </div>
            ))}
          </div>
        </section>

        {/* Network & Insitutional */}
        {/* <section className="bg-neutral-base">
          <div
            className="p-3 lg:p-12 flex justify-start gap-8 
          lg:gap-30 border-b border-accent/50 pt-12"
          >
            <p className="text-[#9E640A] font-semibold text-[16px] lg:text-[18px]">
              Network
            </p>
            <p className="text-[#9E640A] font-semibold text-[16px] lg:text-[18px]">
              Institutional services
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row lg:px-12 lg:max-h-[800px]">
              <div className="w-full lg:w-1/2 py-6 px-3 lg:px-0 lg:py-12 flex flex-col justify-between">
                <p
                  className="font-eiko text-[40px] lg:text-4xl xl:text-5xl 2xl:text-[56px] 
                text-primary-500 leading-snug"
                >
                  {`
              Connecting Capital & \nOpportunities 
              \nthrough a trusted RWA network
              `}
                </p>

                <div
                  className="flex items-center cursor-pointer py-4 px-8 bg-primary-500 
                  duration-200 w-fit text-white rounded-full gap-10 hover:opacity-90 
                  mt-20 lg:mt-0 hover:bg-accent active:bg-accent"
                >
                  <p className="text-[18px] lg:text-xl xl:text-2xl 2xl:text-[32px] font-eiko">
                    Learn more
                  </p>
                  <img src={arrrowRightWhiteNoLine} alt="arrow" />
                </div>
              </div>
              <img
                src={network01}
                alt="network01"
                className="w-full lg:w-1/2 object-cover object-bottom-right "
              />
            </div>

            <div className="w-4 h-4 rounded-full bg-accent mx-auto hidden lg:block" />

            <div className="flex gap-6 lg:gap-12 flex-col-reverse lg:flex-row lg:px-12 lg:max-h-[800px]">
              <img
                src={network02}
                alt="network02"
                className="w-full lg:w-1/2 object-cover object-top-left"
              />

              <div
                className="w-full lg:w-1/2 lg:py-12 px-3  
              flex flex-col justify-between lg:justify-start pt-6 lg:pt-0"
              >
                <>
                  <p
                    className="font-eiko text-[40px] lg:text-4xl xl:text-5xl 2xl:text-[56px] 
                  text-primary-500 leading-snug"
                  >
                    {`Institutional RWA access, \nmanaged with compliance`}
                  </p>

                  <div className="text-[16px] 2xl:text-[24px] mt-5 flex flex-col">
                    <p>
                      Enterprise-grade solution designed for institutional
                      investors
                    </p>
                    <p>and large-scale operations</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-2 2xl:gap-5 mt-10">
                    {map(institutional, (item, index) => (
                      <div
                        key={index}
                        className="text-[#666666] flex gap-2 max-h-[26px]"
                      >
                        <img src={lineHaftVertical} alt="" className="h-1/2" />
                        <p className="text-sm 2xl:text-[18px]">{item}</p>
                      </div>
                    ))}
                  </div>
                </>

                <div
                  className="flex items-center cursor-pointer py-4 px-8 bg-primary-500 
                  w-fit text-white rounded-full gap-10 hover:opacity-90 mt-20
                  hover:bg-accent active:bg-accent duration-200"
                >
                  <p className="text-[18px] lg:text-xl xl:text-2xl 2xl:text-[32px] font-eiko">
                    Learn more
                  </p>
                  <img src={arrrowRightWhiteNoLine} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Membership */}
        {/* <section className="bg-[#0E1723]">
          <div className="py-10">
            <div className="border-t border-accent/50 pt-10" />
            <p
              className="text-accent font-semibold lg:max-w-5xl lg:mx-auto
           border-l border-r border-accent/50 text-center min-h-10 mx-3"
            >
              Our Membership
            </p>
          </div>

          <div
            className="text-[40px] lg:text-5xl 2xl:text-[84px] 
            uppercase flex flex-col relative text-white font-eiko 
            justify-center items-center"
          >
            <div className="relative lg:absolute px-3 lg:px-0 text-center inset-0 flex-col-center gap-4!">
              <p>Premium membership</p>
              <p>Exclusive deals</p>
              <p>maximum potential</p>
            </div>

            <img
              src={membership}
              alt="membership"
              className="absolute lg:relative"
            />
          </div>

          <div className="py-10">
            <div className="max-w-5xl mx-3 lg:mx-auto border-l border-r border-accent/50 min-h-10" />
          </div>

          <div className="flex items-center">
            <div className="h-px bg-accent/50 flex-1" />
            <div
              className="text-primary-500 bg-white rounded-full hover:bg-accent duration-200
              active:bg-accent flex-center px-12 py-4 gap-10 cursor-pointer hover:opacity-90"
            >
              <p className="lg:text-xl 2xl:text-[32px] font-eiko">
                Coming Soon!
              </p>
              <img src={arrrowRightBlackNoLine} alt="arrow" />
            </div>
            <div className="h-px bg-accent/50 flex-1" />
          </div>
        </section> */}

        {/* Utility -- Remove pb when add latest news */}
        {/* <section className="bg-primary-500 pt-10 pb-10">
          <div className="px-3 lg:p-12 flex flex-col lg:flex-row items-start gap-6 lg:gap-30">
            <p className="text-accent font-semibold whitespace-nowrap">
              Manage portfolio
            </p>

            <div>
              <p
                className="font-eiko text-[28px] lg:text-2xl xl:text-3xl 2xl:text-[44px] text-white 
              whitespace-pre-line leading-snug"
              >
                Using ELD
                <span className="text-accent"> (The Protocol Token) </span>{" "}
                grants participation across all three engines. Stake, vote,
                learn and earn your way through the protocol
               
              </p>

              <div
                className="text-primary-500 bg-white rounded-full w-fit
                flex-between lg:px-8 px-6 py-3 lg:py-4 gap-10 cursor-pointer 
                duration-200 mt-6 lg:mt-20 hover:bg-accent active:bg-accent"
              >
                <p className="text-[16px] lg:text-xl 2xl:text-[22px]">
                  More about ELD
                </p>
                <img src={arrrowRightBlackNoLine} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-3 px-3 lg:px-12 gap-10 items-stretch mt-10 lg:mt-0">
            {map(utility, (item, index) => (
              <div
                data-aos="fade-up"
                key={index}
                data-aos-delay={index * 200}
                className="text-white rounded-4xl flex flex-col justify-between 
                gap-10 p-8 bg-primary lg:min-h-[700px]"
              >
                <p className="text-[32px] lg:text-[44px] font-eiko">
                  {item.title}
                </p>

                <img
                  src={item.image}
                  alt="utility"
                  className="object-fill h-80 w-[320px] mx-auto p-2"
                />

                <p
                  className="lg:text-3xl xl:text-xl 2xl:text-[24px] 
                flex items-start max-h-1/3"
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section> */}

        <section className="bg-primary-500">
          <div className="py-10">
            <p
              className="text-accent font-semibold lg:max-w-5xl lg:mx-auto
           border-l border-r border-accent/50 text-center min-h-10 mx-3"
            >
              Manage portfolio
            </p>
          </div>

          <div
            className="text-[30px] lg:text-5xl 2xl:text-[84px] 
            uppercase flex flex-col relative text-white font-eiko 
            justify-center items-center"
          >
            <div className="relative lg:absolute px-3 lg:px-0 text-center inset-0 flex-col-center gap-4!">
              <p>Track, analyze and</p>
              <p>rebalance your portfolio</p>
              <p>one dashboard</p>
            </div>

            <img
              src={membership}
              alt="membership"
              className="absolute lg:relative"
            />
          </div>

          <div className="py-10">
            <div
              className="text-accent font-semibold lg:max-w-5xl lg:mx-auto
           border-l border-r border-accent/50 text-center min-h-10 mx-3 flex-center"
            >
              <div
                onClick={() => setIsEarlyAccessOpen(true)}
                className="text-primary-500 bg-white rounded-full hover:bg-accent duration-200
              active:bg-accent flex-center px-20 py-4 gap-4 cursor-pointer hover:opacity-90 w-fit!"
              >
                <p className="lg:text-xl 2xl:text-[32px] font-eiko">
                  Early Access
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest news */}
        {/* <section className="bg-[#0E1723] pt-18 pb-10 lg:pb-60">
          <p className="hidden lg:block lg:p-12 font-eiko text-[28px] lg:text-[44px] text-white">
            See the latest with Eldora
          </p>

          <Carousel className="w-full flex lg:flex-col items-center px-3 lg:px-12">
            <div className="lg:hidden absolute top-0 right-0 left-0 flex w-full justify-between p-3">
              <div className="font-eiko text-[28px] w-1/2 text-white">
                See the latest with Eldora
              </div>
              <div className="flex items-center justify-end gap-2 w-1/2">
                <CarouselPrevious
                  className="static translate-y-0 w-10 h-10 border-accent
                active:text-black! active:bg-accent! cursor-pointer! text-accent! bg-[#0E1723]!"
                />
                <CarouselNext
                  className="static translate-y-0 w-10 h-10 border-accent
                active:text-black! active:bg-accent! cursor-pointer! text-accent! bg-[#0E1723]!"
                />
              </div>
            </div>

            <CarouselContent className="lg:-ml-4 mt-28 lg:mt-0">
              {map(latestNews, (item, index) => (
                <CarouselItem
                  key={index}
                  className="xl:basis-1/5 lg:basis-1/4 2xl:basis-1/7"
                >
                  <div
                    className="flex flex-col
                rounded-4xl overflow-hidden text-white h-full bg-primary"
                  >
                    <img
                      src={item.image}
                      alt="news"
                      className="max-h-[200px] lg:h-2/3 w-fit object-cover"
                    />

                    <p className="p-4">{item.date}</p>

                    <p className="font-eiko text-xl p-4">{item.title}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="lg:flex justify-center gap-4 mt-6 relative z-10 w-full hidden">
              <CarouselPrevious
                className="static translate-y-0 w-14 h-14 border-accent
                hover:text-black! hover:bg-accent! cursor-pointer! text-accent! bg-[#0E1723]!"
              />
              <CarouselNext
                className="static translate-y-0 w-14 h-14 border-accent
                hover:text-black! hover:bg-accent! cursor-pointer! text-accent! bg-[#0E1723]!"
              />

              <div
                className="rounded-full px-8 py-4 h-14 flex-between cursor-pointer
                text-accent border group hover:opacity-80 absolute top-0 right-0 duration-200
                border-accent bg-[#0E1723] hover:text-black hover:bg-accent"
              >
                <p>Read more</p>
                <img
                  src={arrowRightAccent}
                  alt=""
                  className="group-hover:hidden block duration-200 w-3 h-3"
                />
                <img
                  src={arrrowRightBlackNoLine}
                  alt=""
                  className="hidden group-hover:block duration-200 w-3 h-3"
                />
              </div>
            </div>
          </Carousel>

          <div
            className="rounded-full px-6 py-3 h-14 flex-between cursor-pointer  
            text-accent border active:opacity-80 border-accent bg-[#0E1723] group
            active:text-black active:bg-accent w-fit mx-auto mt-6 lg:hidden"
          >
            <p>Read more</p>
            <img
              src={arrowRightAccent}
              alt=""
              className="group-active:hidden block duration-200 w-3 h-3"
            />
            <img
              src={arrrowRightBlackNoLine}
              alt=""
              className="hidden group-active:block duration-200 w-3 h-3"
            />
          </div>
        </section> */}

        {/* Pre-footer */}
        <section
          className="relative bg-[#0E1723] min-h-[500px] pt-10
        xl:min-h-[800px] overflow-hidden! flex flex-col-reverse lg:block"
        >
          <img
            src={footer}
            alt="footer background"
            className="lg:absolute lg:-top-40 2xl:-top-80 -left-50 w-full 
          object-contain scale-150 lg:scale-120 xl:scale-150"
          />

          {/* Text */}
          <div
            className="lg:absolute flex items-end px-3 lg:px-0 z-100
        text-white lg:right-20 2xl:right-50 text-right leading-tight flex-col justify-start"
          >
            <h2 className="text-[40px] lg:text-5xl 2xl:text-[76px] font-eiko">
              Start your journey <br /> Building the next-generation <br />{" "}
              digital finance
            </h2>

            <div className="flex-center mt-10">
              <div
                onClick={() =>
                  window.open("https://x.com/eldora_rwa", "_blank")
                }
                className="rounded-full border hover:bg-accent active:bg-accent cursor-pointer
                 border-accent p-4 lg:p-3 xl:p-4 duration-200"
              >
                <img className="w-6 h-6 object-contain" src={x} alt="x" />
              </div>
              <div
                onClick={() =>
                  window.open("https://discord.gg/YhbyU5g64Y", "_blank")
                }
                className="rounded-full border hover:bg-accent active:bg-accent cursor-pointer
                 border-accent p-4 lg:p-3 xl:p-4 duration-200"
              >
                <img className="w-6 h-6 object-contain" src={discord} alt="x" />
              </div>
              <div
                onClick={() =>
                  window.open("https://t.me/Eldoracommunity", "_blank")
                }
                className="rounded-full border hover:bg-accent active:bg-accent cursor-pointer
                 border-accent p-4 lg:p-3 xl:p-4 duration-200"
              >
                <img
                  className="w-6 h-6 object-contain"
                  src={telegram}
                  alt="x"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="relative bg-[#0E1723] py-10">
          <div
            className="px-3 lg:px-12 2xl:px-0 max-w-7xl flex flex-col
          lg:grid lg:grid-cols-5 mx-auto text-white gap-20"
          >
            <div className="lg:col-span-2 border-b border-accent/50 pb-6 lg:pb-0 lg:border-b-0">
              <img src={logo} alt="logo" />
              <p className="mt-10">
                Where Real-World Assets on-chain: Seamless tokenization,
                investment and life cycle management in one trusted hub
              </p>
            </div>

            {/* <div className="flex justify-between lg:justify-around items-start lg:col-span-2">
              <div className="flex flex-col justify-start items-start">
                <p className="text-[18px] font-semibold mb-6">Quick Links</p>

                <div>
                  {map(links, (item, index) => (
                    <div key={index} className="text-[#FFFFFFB2]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-start items-start">
                <p className="text-[18px] font-semibold  mb-6">Legal</p>

                <div>
                  {map(legal, (item, index) => (
                    <div key={index} className="text-[#FFFFFFB2]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            <div className="flex flex-col justify-start items-start">
              <p className="text-[18px] font-semibold">Community</p>

              <div className="flex-center mt-4 lg:mt-10">
                <div
                  onClick={() =>
                    window.open("https://x.com/eldora_rwa", "_blank")
                  }
                  className="rounded-full border border-accent lg:p-2 xl:p-3 
                  p-3 hover:bg-accent active:bg-accent duration-200 cursor-pointer"
                >
                  <img className="w-4 h-4 object-contain" src={x} alt="x" />
                </div>
                <div
                  onClick={() =>
                    window.open("https://discord.gg/YhbyU5g64Y", "_blank")
                  }
                  className="rounded-full border border-accent lg:p-2 xl:p-3 
                  p-3 hover:bg-accent active:bg-accent duration-200 cursor-pointer"
                >
                  <img
                    className="w-4 h-4 object-contain"
                    src={discord}
                    alt="x"
                  />
                </div>
                <div
                  onClick={() =>
                    window.open("https://t.me/Eldoracommunity", "_blank")
                  }
                  className="rounded-full border border-accent lg:p-2 xl:p-3 
                  p-3 hover:bg-accent active:bg-accent duration-200 cursor-pointer"
                >
                  <img
                    className="w-4 h-4 object-contain"
                    src={telegram}
                    alt="x"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default LandingPage;
