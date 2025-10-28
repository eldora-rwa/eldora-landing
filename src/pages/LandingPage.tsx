import videoHero from "@/assets/videos/video-hero.mp4";
import logo from "@/assets/images/logo.png";
import { map } from "lodash";
import border from "@/assets/images/bg.png";
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
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <main
        className="flex flex-col gap-20 flex-center lg:hidden bg-black 
      min-h-screen text-white p-12 text-center"
      >
        <img src={logo} alt="logo" className="" />
        <p>
          Oops! We’re not ready for mobile or tablet yet. Please visit us from a
          desktop for the best experience.
        </p>
      </main>

      <main className="w-full h-full bg-black overflow-hidden hidden lg:block">
        {/* Hero */}
        <section className="min-h-[30vh] md:min-h-[120vh] relative z-1">
          {/* Video background */}
          <video
            autoPlay={true}
            loop
            muted
            src={videoHero}
            className="rounded-md absolute object-cover inset-0 w-full 
          h-full z-2 lg:rounded-br-[6rem] lg:rounded-bl-[6rem] rounded-br-2xl rounded-bl-2xl"
          />

          {/* Overlay */}
          <img
            src={border}
            alt=""
            className="absolute inset-0 w-full h-full z-3"
          />

          {/* Navbar */}
          <div className="absolute top-0 left-0 right-0 z-4 p-12">
            {/* Logo */}
            <img
              src={logo}
              alt="logo-image"
              className="object-cover absolute"
            />

            {/* Navigation */}
            <div className="flex-center lg:gap-10!">
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
          </div>

          {/* Content */}
          <div
            className="absolute inset-0 z-3 p-12 flex flex-col text-white
        justify-center items-start w-4/6 xl:w-3/6"
          >
            <p className="lg:text-5xl xl:text-6xl 2xl:text-[77px] leading-tight font-eiko">
              Connects blockchain with the real world.
            </p>
            <p className="lg:text-md xl:text-xl  2xl:text-[28px] w-4/5 mt-4">
              Eldora brings real-world assets on-chain: seamless tokenization,
              investment, and life cycle management in one trusted hub.
            </p>

            <div className="flex-start mt-18 gap-6!">
              <div
                className="flex-center border-white border rounded-full py-4 
            px-8 cursor-pointer hover:opacity-90 duration-150"
              >
                Learn more
                <img src={arrrowRight} alt="" />
              </div>
              <div
                className="flex-center bg-white border rounded-full py-4 px-8
             text-black cursor-pointer hover:opacity-90 duration-150"
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
          <div className="grid grid-cols-12 h-full px-12">
            {/* Title */}
            <div
              className="text-accent border-l border-r border-accent/50 
          col-span-2 h-full pt-[20vh]"
            >
              <div className="p-10 flex flex-col justify-between h-full">
                <p>Why Eldora</p>
                <p className="lg:mt-60 2xl:mt-100">Trusted Partners</p>
              </div>
            </div>

            {/* Slogan */}
            <div className="col-span-10 pt-[20vh]">
              <div className="p-10 text-neutral-base">
                <div
                  className="font-eiko lg:text-4xl xl:text-5xl 2xl:text-[76px] 
                leading-none flex items-center gap-6"
                >
                  <p>Neutral</p> <img src={lineHorizon} alt="" /> <p>Moduler</p>{" "}
                  <img src={lineHorizon} alt="" /> <p>Scalable</p>
                </div>

                <p className="font-eiko lg:text-2xl xl:text-3xl 2xl:text-[44px] mt-16">
                  Eldora is a neutral RWA hub where every integration compounds
                  liquidity, expands deal flow, and plugs seamlessly into your
                  stack.
                </p>
              </div>
            </div>
          </div>

          <Marquee
            pauseOnHover
            autoFill
            className="py-10 border-t border-accent/50 min-h-[250px]"
          >
            <img alt={"slicde"} src={slideImg} className="pl-14" />
          </Marquee>
        </section>

        {/* Invest */}
        <section>
          {map(invest, (item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="grid grid-cols-12 items-center p-12 min-h-[250px] relative gap-10"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <p className="text-[#9E640A] col-span-1 font-semibold text-[18px]">
                {item.slot01}
              </p>
              <p
                className="lg:text-3xl xl:text-[44px] font-eiko col-span-6 
            leading-none flex items-start justify-start text-primary-700"
              >
                {item.slot02}
              </p>

              <p
                className="lg:text-xl xl:text-[25px] col-span-5 flex-start 
              whitespace-pre-line text-primary-500"
              >
                {item.slot03}
              </p>

              <img
                src={landingInvest}
                alt="landing"
                className="absolute top-0 right-30 hidden 2xl:block"
              />
            </div>
          ))}
          <div
            data-aos="fade-up"
            className="flex-center p-12 min-h-[250px] 
          relative gap-10 bg-[#C6A46E]"
          >
            <div
              className="rounded-full bg-primary-500 flex-between 
          gap-10 py-6 px-15 cursor-pointer hover:opacity-95"
            >
              <p className="text-white font-eiko text-[32px]">Lauch the App</p>{" "}
              <img src={arrrowRightNoLine} alt="arrow" />
            </div>
          </div>
        </section>

        {/* Funding */}
        <section className="bg-neutral-base">
          {/* Title */}
          <div className="flex-start p-12 gap-50">
            <p className="font-semibold text-[#9E640A] text-[18px]">Funding</p>
            <p
              className="lg:text-4xl xl:text-5xl 2xl:text-[76px] font-eiko
            whitespace-pre-line leading-tight text-primary-700"
            >
              {`Raise with confidence, \ndeliever with proof`}
            </p>
          </div>

          <div className="border-t border-b border-accent/50 px-12 grid xl:grid-cols-4">
            {map(funding, (item, index) => (
              <div
                key={index}
                className={`p-4 border-l border-accent/50 lg:border-r xl:border-r-0 ${
                  index === funding.length - 1 && "border-r!"
                } flex flex-col gap-10 justify-between`}
              >
                <div className="flex justify-between items-start h-2/6">
                  <p className="text-3xl 2xl:text-[44px] font-eiko whitespace-pre-line text-primary-500">
                    {item.title}
                  </p>
                  <p>{item.id}</p>
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
          <div className="p-12 flex justify-start gap-30 border-b border-accent/50">
            <p className="text-[#9E640A] font-semibold text-[18px]">Network</p>
            <p className="text-[#9E640A] font-semibold text-[18px]">
              Insitutional sevices
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex px-12 max-h-[800px]">
              <div className="w-1/2 py-12 flex flex-col justify-between">
                <p
                  className="font-eiko lg:text-4xl xl:text-5xl 2xl:text-[56px] 
                text-primary-500 leading-snug"
                >
                  {`
              Connecting Capital & \nOpportunities 
              \nthrough a trusted RWA network
              `}
                </p>

                <div
                  className="flex items-center cursor-pointer py-4 px-8 bg-primary-500 
              w-fit text-white rounded-full gap-10 hover:opacity-90"
                >
                  <p className="lg:text-xl xl:text-2xl 2xl:text-[32px] font-eiko">
                    Learn more
                  </p>
                  <img src={arrrowRightNoLine} alt="arrow" />
                </div>
              </div>
              <img
                src={network01}
                alt="network01"
                className="w-1/2 object-cover"
              />
            </div>

            <div className="flex px-12 max-h-[800px]">
              <img
                src={network02}
                alt="network02"
                className="w-1/2 object-cover"
              />

              <div className="w-1/2 py-12 pl-12 flex flex-col justify-between">
                <div>
                  <p
                    className="font-eiko lg:text-4xl xl:text-5xl 2xl:text-[56px] 
                  text-primary-500 leading-snug"
                  >
                    {`Institutional RWA acesss, \nmanaged with compliance.`}
                  </p>

                  <div className="2xl:text-[24px] mt-5 xl:mt-10 flex flex-col">
                    <p>
                      Enterprise-grade solution designed for insitutional
                      investors
                    </p>
                    <p>and large-scale operations</p>
                  </div>

                  <div className="grid grid-cols-2 lg:gap-2 2xl:gap-5 mt-10">
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
                </div>

                <div
                  className="flex items-center cursor-pointer py-4 px-8 bg-primary-500 
              w-fit text-white rounded-full gap-10 hover:opacity-90"
                >
                  <p className="text-xl xl:text-2xl 2xl:text-[32px] font-eiko">
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
              className="text-accent font-semibold max-w-5xl mx-auto
           border-l border-r border-accent/50 text-center min-h-10"
            >
              Our Membership
            </p>
          </div>

          <div
            className="lg:text-5xl 2xl:text-[84px] uppercase flex flex-col relative 
        text-white font-eiko justify-center items-center"
          >
            <div className="absolute inset-0 flex-col-center gap-4!">
              <p>Premium membership</p>
              <p>Exclusive deals</p>
              <p>maximum potential</p>
            </div>

            <img src={membership} alt="membership" />
          </div>

          <div className="py-10">
            <div className="max-w-5xl mx-auto border-l border-r border-accent/50 min-h-10" />
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
          <div className="p-12 flex items-start gap-30">
            <p className="text-accent font-semibold whitespace-nowrap">
              ELD Token Utility
            </p>

            <div>
              <p
                className="font-eiko lg:text-2xl xl:text-3xl 2xl:text-[44px] text-white 
              whitespace-pre-line leading-snug"
              >
                Using ELD
                <span className="text-accent"> (The Protocol Token) </span>{" "}
                grants participation across all three engines. Stake, vote,
                learn and earn your way through the protocol.
              </p>

              <div
                className="text-primary-500 bg-white rounded-full w-fit
          flex-between px-8 py-4 gap-10 cursor-pointer hover:opacity-90 mt-20"
              >
                <p className="lg:text-xl 2xl:text-[22px]">More about ELD</p>
                <img src={arrrowRightNoLine02} alt="arrow" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid xl:grid-cols-3 px-12 gap-10 items-stretch">
            {map(utility, (item, index) => (
              <div
                data-aos="fade-up"
                key={index}
                data-aos-delay={index * 200}
                className="text-white rounded-4xl flex flex-col justify-between 
                gap-10 p-8 bg-primary min-h-[700px]"
              >
                <p className="text-[44px] font-eiko">{item.title}</p>

                {/* <div className="flex-1 flex-center"> */}
                <img
                  src={item.image}
                  alt="utility"
                  className="object-fill h-80 w-[320px] mx-auto"
                />
                {/* </div> */}
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
        <section className="bg-[#0E1723] pt-10 pb-60">
          <p className="p-12 font-eiko text-[44px] text-white">
            See the latest with Eldora
          </p>

          <Carousel className="w-full flex flex-col items-center px-12">
            <CarouselContent className="-ml-1">
              {map(latestNews, (item, index) => (
                <CarouselItem
                  key={index}
                  className="xl:basis-1/5 lg:basis-1/4 2xl:basis-1/7"
                >
                  <div
                    className="flex flex-col 
                rounded-4xl overflow-hidden text-white h-full bg-primary"
                  >
                    <img src={item.image} alt="news" className="h-2/3" />

                    <p className="p-4">{item.date}</p>

                    <p className="font-eiko text-xl p-4">{item.title}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-4 mt-6 relative z-10 w-full">
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
        </section>

        {/* Pre-footer */}
        <section className="relative bg-[#0E1723] lg:min-h-[500px] xl:min-h-[800px] overflow-hidden!">
          <img
            src={footer}
            alt="footer background"
            className="absolute lg:-top-40 2xl:-top-80 -left-50 w-full 
          object-contain lg:scale-120 xl:scale-150 "
          />

          {/* Text */}
          <div
            className="absolute flex items-end 
        text-white right-50 text-right leading-tight flex-col justify-start"
          >
            <h2 className="lg:text-4xl 2xl:text-[76px] font-eiko">
              Start your journey <br /> Building the next-generation <br />{" "}
              digital finance
            </h2>

            <div className="flex-center mt-10">
              <div
                onClick={() =>
                  window.open("https://x.com/eldora_rwa", "_blank")
                }
                className="rounded-full border hover:opacity-80 cursor-pointer border-accent lg:p-3 xl:p-4"
              >
                <img src={x} alt="x" />
              </div>
              <div
                onClick={() =>
                  window.open("https://discord.gg/tdVpFutZ", "_blank")
                }
                className="rounded-full border hover:opacity-80 cursor-pointer border-accent lg:p-3 xl:p-4"
              >
                <img src={discord} alt="x" />
              </div>
              <div
                onClick={() =>
                  window.open("https://t.me/Eldoracommunity", "_blank")
                }
                className="rounded-full border hover:opacity-80 cursor-pointer border-accent lg:p-3 xl:p-4"
              >
                <img src={telegram} alt="x" />
              </div>
            </div>
          </div>
        </section>

        <footer className="relative bg-[#0E1723] py-10 ">
          <div className="px-12 2xl:px-0 max-w-7xl grid grid-cols-5 mx-auto text-white gap-20">
            <div className="col-span-2">
              <img src={logo} alt="logo" />
              <p className="mt-10">
                Where Real-World Assets on-chain: Seamless tokenization,
                investment and life cycle management in one trusted hub.
              </p>
            </div>

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

            <div className="flex flex-col justify-start items-start">
              <p className="text-[18px] font-semibold">Community</p>

              <div className="flex-center mt-10">
                <div
                  onClick={() =>
                    window.open("https://x.com/eldora_rwa", "_blank")
                  }
                  className="rounded-full border border-accent lg:p-2 xl:p-3 hover:opacity-80 cursor-pointer"
                >
                  <img className="w-4 h-4 object-contain" src={x} alt="x" />
                </div>
                <div
                  onClick={() =>
                    window.open("https://discord.gg/tdVpFutZ", "_blank")
                  }
                  className="rounded-full border border-accent lg:p-2 xl:p-3 hover:opacity-80 cursor-pointer"
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
                  className="rounded-full border border-accent lg:p-2 xl:p-3 hover:opacity-80 cursor-pointer"
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
