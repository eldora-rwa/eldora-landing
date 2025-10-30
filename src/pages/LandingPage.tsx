import videoHero from "@/assets/videos/video-hero.mp4";
import logo from "@/assets/images/logo.png";
import { map } from "lodash";
import border from "@/assets/images/bg.png";
import borderMobile from "@/assets/images/bg-mobile.png";
import arrrowRight from "@/assets/icons/arrow_right.png";
import arrrowRightBlack from "@/assets/icons/arrow_right__black.png";
import arrrowRightNoLine from "@/assets/icons/arrow_right__noline.png";
import arrrowRightNoLine02 from "@/assets/icons/arrow_right__noline02.png";
import lineHorizon from "@/assets/icons/line-horizon.png";
import Marquee from "react-fast-marquee";
import slideImg from "@/assets/images/slide.png";
import landingInvest from "@/assets/images/landing_invest__01.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import funding01 from "@/assets/images/funding_01.png";
import funding02 from "@/assets/images/funding_02.png";
import funding03 from "@/assets/images/funding_03.png";
import funding04 from "@/assets/images/funding_04.png";
import network01 from "@/assets/images/network_01.png";
import network02 from "@/assets/images/network_02.png";
import membership from "@/assets/images/membership.png";
import utility01 from "@/assets/images/utility_01.png";
import utility02 from "@/assets/images/utility_02.png";
import utility03 from "@/assets/images/utility_03.png";
import news01 from "@/assets/images/news_01.jpg";
import news02 from "@/assets/images/news_02.jpg";
import news03 from "@/assets/images/news_03.jpg";
import news04 from "@/assets/images/news_04.jpg";
import news05 from "@/assets/images/news_05.jpg";
import footer from "@/assets/images/footer.png";
import x from "@/assets/icons/x.png";
import discord from "@/assets/icons/discord.png";
import telegram from "@/assets/icons/telegram.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import arrowRight from "@/assets/icons/arrow-right.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import menuIcon from "@/assets/icons/menu.png";

const invest = [
  {
    slot01: "Invest",
    slot02: "Invest smarter, more securely",
    slot03: `Discover vetted deals & \ninvest with milestoneprotection`,
    backgroundColor: "#EFEBE6",
  },
  {
    slot01: "",
    slot02: "Stay in control, anytime, anywhere",
    slot03: `Track your multichain portfolio in real \ntime with the dashboard`,
    backgroundColor: "#E5E2DF",
  },
  {
    slot01: "",
    slot02: "Learn by doing, earn while you grow",
    slot03: `Learn through quests and connect \nwith the right counterparties`,
    backgroundColor: "#D6D2CC",
  },
];

const funding = [
  {
    id: 1,
    title: `Raise \nCapital`,
    image: funding01,
    desc: "Launch proposals and receive funds gradually through onchain milestone payouts",
  },
  {
    id: 2,
    title: `Tokenize \nAssets`,
    image: funding02,
    desc: "Issue compliant tokens backed by your RWA with legal & technical infrastructure.",
  },
  {
    id: 3,
    title: `Grow \nCommunity`,
    image: funding03,
    desc: "Onboard, educate, and incentivize your RWA supporters.",
  },
  {
    id: 4,
    title: `Get \nVisibility`,
    image: funding04,
    desc: "Bring investors and institutions to you through AI-powered networking and dashboards.",
  },
];

const institutional = [
  "Compliance (KYC/AML)",
  "Custody & Escrow Services",
  "API acess & Data Licensing",
  "Analytics dashboard",
];

const utility = [
  {
    title: "Staking",
    image: utility01,
    desc: "Stake ELD tokens to earn rewards and participate in platform governance while supporting network security.",
  },
  {
    title: "Governance",
    image: utility02,
    desc: "Vote on protocol upgrades, new integrations, and community proposals to shape the future of Eldora.",
  },
  {
    title: "Learn & Earn",
    image: utility03,
    desc: "Participate in educational programs and earn ELD tokens while expanding your knowledge of RWA markets.",
  },
];

const latestNews = [
  {
    title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
    date: "August 22 , 2008",
    image: news01,
  },
  {
    title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
    date: "August 22 , 2008",
    image: news02,
  },
  {
    title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
    date: "August 22 , 2008",
    image: news03,
  },
  {
    title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
    date: "August 22 , 2008",
    image: news04,
  },
  {
    title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
    date: "August 22 , 2008",
    image: news05,
  },
  {
    title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
    date: "August 22 , 2008",
    image: news05,
  },
  {
    title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
    date: "August 22 , 2008",
    image: news05,
  },
  {
    title: "Lorem ipsum dolor sit amet, ctetuer adipissa teskura",
    date: "August 22 , 2008",
    image: news05,
  },
];

const links = ["About Us", "How It Works", "Business", "Model", "ELD Token"];
const legal = ["Privacy Policy", "Term of Services", "Cookie Policy"];

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <main className="w-full h-full bg-black overflow-hidden">
        {/* Hero */}
        <section className="h-[1000px] min-h-[120vh] relative z-1">
          {/* Video background */}
          <video
            autoPlay={true}
            loop
            muted
            playsInline
            src={videoHero}
            controls={false}
            className="rounded-md absolute object-cover inset-0 w-full 
          h-full z-2 lg:rounded-br-[6rem] lg:rounded-bl-[6rem] rounded-br-full rounded-bl-full"
          />

          {/* Overlay */}
          <img
            src={border}
            alt=""
            className="absolute inset-0 w-full h-full z-3 hidden lg:block"
          />

          <img
            src={borderMobile}
            alt=""
            className="absolute inset-0 w-full h-full z-3 lg:hidden"
          />

          {/* Navbar */}
          <div className="absolute top-0 left-0 right-0 z-4 p-4 lg:p-12">
            {/* Logo */}
            <img
              src={logo}
              alt="logo-image"
              className="object-cover absolute h-18 lg:h-auto"
            />

            {/* Navigation */}
            <div className="flex-center lg:gap-10! hidden lg:flex">
              {map(
                ["ecosystem", "learn", "product", "about"],
                (item, index) => (
                  <div
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
                    ["ecosystem", "learn", "product", "about"],
                    (item, index) => (
                      <div
                        className="uppercase lg:text-lg text-white font-semibold 
                    hover:text-accent cursor-pointer duration-150"
                        key={index}
                      >
                        {item}
                      </div>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Content */}
          <div
            className="absolute inset-0 z-3 p-3 lg:p-12 flex flex-col text-white justify-end
        lg:justify-center items-center lg:items-start w-full lg:w-4/6 xl:w-3/6 pb-[23vh]"
          >
            <p
              className="hidden lg:text-5xl xl:text-6xl 2xl:text-[77px] 
            leading-tight font-eiko lg:text-left lg:inline"
            >
              Connects blockchain with the real world.
            </p>

            <div className="text-[40px] lg:hidden leading-tight font-eiko text-center flex-col-center">
              <p>Connects</p>
              <p>blockchain</p>
              <p>with the real world.</p>
            </div>
            <p
              className="text-[16px] lg:text-md xl:text-xl 2xl:text-[28px] 
            w-full lg:w-4/5 mt-4 text-center lg:text-left"
            >
              Eldora brings real-world assets on-chain: seamless tokenization,
              investment, and life cycle management in one trusted hub.
            </p>

            <div className="flex-start mt-10 lg:mt-18 gap-6!">
              <div
                className="flex-center border-white border rounded-full py-3 lg:py-4 
            lg:px-8 px-6 cursor-pointer hover:opacity-80 duration-150"
              >
                Learn more
                <img src={arrrowRight} alt="" />
              </div>
              <div
                className="flex-center bg-white border rounded-full py-3 lg:py-4 
            lg:px-8 px-6 text-black cursor-pointer hover:opacity-80 duration-150"
              >
                Launch app
                <img src={arrrowRightBlack} alt="" />
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
                <p className="font-semibold">Why Eldora</p>
                <p className="lg:mt-60 2xl:mt-100 hidden lg:inline">
                  Trusted Partners
                </p>
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
                leading-none flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6"
                >
                  <p>Neutral</p>{" "}
                  <img src={lineHorizon} className="hidden lg:inline" alt="" />{" "}
                  <p>Moduler</p>{" "}
                  <img src={lineHorizon} className="hidden lg:inline" alt="" />{" "}
                  <p>Scalable</p>
                </div>

                <p className="font-eiko text-[28px] lg:text-2xl xl:text-3xl 2xl:text-[44px] mt-10 lg:mt-16">
                  Eldora is a neutral RWA hub where every integration compounds
                  liquidity, expands deal flow, and plugs seamlessly into your
                  stack.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t lg:hidden border-accent/50">
            <p
              className="ml-3 pb-3 pt-6 border-l border-accent/50 pl-3 text-accent
            font-semibold"
            >
              Trusted Partners
            </p>
          </div>

          <Marquee
            pauseOnHover
            autoFill
            className="py-3 lg:py-10 border-t border-accent/50 min-h-[250px]"
          >
            <img alt={"slicde"} src={slideImg} className="pl-14" />
          </Marquee>
        </section>

        {/* Invest */}
        <section className="bg-white">
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
          <div
            data-aos="fade-up"
            data-aos-delay={4 * 200}
            className="flex-center p-12 lg:min-h-[250px] 
          relative gap-10 bg-[#C6A46E]"
          >
            <div
              className="rounded-full bg-primary-500 flex-between 
          gap-10 py-6 lg:py-6 px-6 lg:px-15 cursor-pointer hover:opacity-95"
            >
              <p className="text-white font-eiko text-[18px] lg:text-[32px]">
                Lauch the App
              </p>{" "}
              <img src={arrrowRightNoLine} alt="arrow" />
            </div>
          </div>
        </section>

        {/* Funding */}
        <section className="bg-neutral-base">
          {/* Title */}
          <div className="flex flex-col lg:flex-row items-start p-3 lg:p-12 lg:gap-50 pt-10">
            <p className="font-semibold text-[#9E640A] text-[18px]">Funding</p>
            <p
              className="text-[40px] lg:text-4xl xl:text-5xl 2xl:text-[76px] font-eiko
            whitespace-pre-line leading-tight text-primary-700 mt-6 lg:mt-0"
            >
              {`Raise with confidence, \ndeliever with proof`}
            </p>
          </div>

          <div className="border-t lg:border-b border-accent/50 px-3 lg:px-6 grid xl:grid-cols-4">
            {map(funding, (item, index) => (
              <div
                key={index}
                className={`p-4 border-l border-accent/50 border-r xl:border-r-0 border-b ${
                  index === funding.length - 1 && "border-r! border-b-0!"
                } flex flex-col gap-10 justify-between xl:border-b-0!`}
              >
                <div className="flex justify-between items-start h-2/6">
                  <p className="text-[32px] text-3xl 2xl:text-[44px] font-eiko whitespace-pre-line text-primary-500">
                    {item.title}
                  </p>
                  <p className="text-[20px]">{item.id}</p>
                </div>

                <img
                  src={item.image}
                  alt="image-funding"
                  className="h-2/6 w-[300px] object-contain mx-auto"
                />

                <p
                  className="lg:text-lg 2xl:text-[24px] border-t border-accent/50 h-2/6 flex
              justify-center items-start pt-10"
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Network & Insitutional */}
        <section className="bg-neutral-base">
          {/* Title */}
          <div
            className="p-3 lg:p-12 flex justify-start gap-8 
          lg:gap-30 border-b border-accent/50 pt-12"
          >
            <p className="text-[#9E640A] font-semibold text-[16px] lg:text-[18px]">
              Network
            </p>
            <p className="text-[#9E640A] font-semibold text-[16px] lg:text-[18px]">
              Insitutional sevices
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
              w-fit text-white rounded-full gap-10 hover:opacity-90 mt-20 lg:mt-0"
                >
                  <p className="text-[18px] lg:text-xl xl:text-2xl 2xl:text-[32px] font-eiko">
                    Learn more
                  </p>
                  <img src={arrrowRightNoLine} alt="arrow" />
                </div>
              </div>
              <img
                src={network01}
                alt="network01"
                className="w-full lg:w-1/2 object-cover object-bottom-right"
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
                    {`Institutional RWA acesss, \nmanaged with compliance.`}
                  </p>

                  <div className="text-[16px] 2xl:text-[24px] mt-5 flex flex-col">
                    <p>
                      Enterprise-grade solution designed for insitutional
                      investors
                    </p>
                    <p>and large-scale operations</p>
                  </div>

                  <div className="grid grid-cols-2 gap-5 lg:gap-2 2xl:gap-5 mt-10">
                    {map(institutional, (item, index) => (
                      <div
                        key={index}
                        className="text-[#666666] flex gap-2 max-h-[26px]"
                      >
                        <img src={landingInvest} alt="" className="h-1/2" />
                        <p className="text-sm 2xl:text-[18px]">{item}</p>
                      </div>
                    ))}
                  </div>
                </>

                <div
                  className="flex items-center cursor-pointer py-4 px-8 bg-primary-500 
              w-fit text-white rounded-full gap-10 hover:opacity-90 mt-20"
                >
                  <p className="text-[18px] lg:text-xl xl:text-2xl 2xl:text-[32px] font-eiko">
                    Learn more
                  </p>
                  <img src={arrrowRightNoLine} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership */}
        <section className="bg-[#0E1723]">
          {/* Title */}
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
              className="text-primary-500 bg-white rounded-full 
          flex-center px-12 py-4 gap-10 cursor-pointer hover:opacity-90"
            >
              <p className="lg:text-xl 2xl:text-[32px] font-eiko">
                Explore Premium Access
              </p>
              <img src={arrrowRightNoLine02} alt="arrow" />
            </div>
            <div className="h-px bg-accent/50 flex-1" />
          </div>
        </section>

        {/* Utility */}
        <section className="bg-[#0E1723] pt-10">
          {/* Title */}
          <div className="px-3 lg:p-12 flex flex-col lg:flex-row items-start gap-6 lg:gap-30">
            <p className="text-accent font-semibold whitespace-nowrap">
              ELD Token Utility
            </p>

            <div>
              <p
                className="font-eiko text-[28px] lg:text-2xl xl:text-3xl 2xl:text-[44px] text-white 
              whitespace-pre-line leading-snug"
              >
                Using ELD
                <span className="text-accent"> (The Protocol Token) </span>{" "}
                grants participation across all three engines. Stake, vote,
                learn and earn your way through the protocol.
              </p>

              <div
                className="text-primary-500 bg-white rounded-full w-fit
                flex-between lg:px-8 px-6 py-3 lg:py-4 gap-10 cursor-pointer 
                hover:opacity-90 mt-6 lg:mt-20"
              >
                <p className="text-[16px] lg:text-xl 2xl:text-[22px]">
                  More about ELD
                </p>
                <img src={arrrowRightNoLine02} alt="arrow" />
              </div>
            </div>
          </div>

          {/* Content */}
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
                  className="object-fill h-80 w-[320px] mx-auto"
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
        </section>

        {/* Latest news */}
        <section className="bg-[#0E1723] pt-18 pb-10 lg:pb-60">
          <p className="hidden lg:block lg:p-12 font-eiko text-[28px] lg:text-[44px] text-white">
            See the latest with Eldora
          </p>

          <Carousel className="w-full flex lg:flex-col items-center px-3 lg:px-12">
            {/* Nav mobile */}
            <div className="lg:hidden absolute top-0 right-0 left-0 flex w-full justify-between p-3">
              <div className="font-eiko text-[28px] w-1/2 text-white">
                See the latest with Eldora
              </div>
              <div className="flex items-center justify-end gap-2 w-1/2">
                <CarouselPrevious
                  className="static translate-y-0 w-10 h-10 border-accent
                hover:text-white! hover:bg-accent! cursor-pointer! text-accent! bg-[#0E1723]!"
                />
                <CarouselNext
                  className="static translate-y-0 w-10 h-10 border-accent
                hover:text-white! hover:bg-accent! cursor-pointer! text-accent! bg-[#0E1723]!"
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
                      className="h-2/3 w-fit object-cover"
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
                hover:text-white! hover:bg-accent! cursor-pointer! text-accent! bg-[#0E1723]!"
              />
              <CarouselNext
                className="static translate-y-0 w-14 h-14 border-accent
                hover:text-white! hover:bg-accent! cursor-pointer! text-accent! bg-[#0E1723]!"
              />

              <div
                className="rounded-full px-8 py-4 h-14 flex-between cursor-pointer text-accent border
                hover:opacity-80 absolute top-0 right-0 border-accent bg-[#0E1723] hover:text-white hover:bg-accent"
              >
                <p>Read more</p>
                <img src={arrowRight} alt="" />
              </div>
            </div>
          </Carousel>

          <div
            className="rounded-full px-6 py-3 h-14 flex-between cursor-pointer 
            text-accent border hover:opacity-80 border-accent bg-[#0E1723]\
            hover:text-white hover:bg-accent w-fit mx-auto mt-6 lg:hidden"
          >
            <p>Read more</p>
            <img src={arrowRight} alt="" />
          </div>
        </section>

        {/* Pre-footer */}
        <section
          className="relative bg-[#0E1723] min-h-[500px] 
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
            className="lg:absolute flex items-end px-3 lg:px-0
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
                className="rounded-full border hover:opacity-80 cursor-pointer
                 border-accent p-4 lg:p-3 xl:p-4"
              >
                <img className="w-6 h-6 object-contain" src={x} alt="x" />
              </div>
              <div
                onClick={() =>
                  window.open("https://discord.gg/tdVpFutZ", "_blank")
                }
                className="rounded-full border hover:opacity-80 cursor-pointer
                 border-accent p-4 lg:p-3 xl:p-4"
              >
                <img className="w-6 h-6 object-contain" src={discord} alt="x" />
              </div>
              <div
                onClick={() =>
                  window.open("https://t.me/Eldoracommunity", "_blank")
                }
                className="rounded-full border hover:opacity-80 cursor-pointer
                 border-accent p-4 lg:p-3 xl:p-4"
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
                investment and life cycle management in one trusted hub.
              </p>
            </div>

            <div className="flex justify-between lg:justify-around items-start lg:col-span-2">
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
            </div>

            <div className="flex flex-col justify-start items-start">
              <p className="text-[18px] font-semibold">Community</p>

              <div className="flex-center mt-4 lg:mt-10">
                <div
                  onClick={() =>
                    window.open("https://x.com/eldora_rwa", "_blank")
                  }
                  className="rounded-full border border-accent lg:p-2 xl:p-3 
                  p-3 hover:opacity-80 cursor-pointer"
                >
                  <img className="w-4 h-4 object-contain" src={x} alt="x" />
                </div>
                <div
                  onClick={() =>
                    window.open("https://discord.gg/tdVpFutZ", "_blank")
                  }
                  className="rounded-full border border-accent lg:p-2 xl:p-3 
                  p-3 hover:opacity-80 cursor-pointer"
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
                  p-3 hover:opacity-80 cursor-pointer"
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
