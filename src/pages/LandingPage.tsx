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
    desc: "Launch proposals and receive funds gradually through on-chain milestone payouts",
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

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="w-full h-full bg-black overflow-hidden">
      {/* Hero */}
      <section className="min-h-[30vh] md:min-h-[120vh] relative z-1">
        {/* Video background */}
        <video
          autoPlay={true}
          loop
          muted
          src={videoHero}
          className="rounded-md absolute object-cover inset-0 w-full 
          h-full z-2 lg:rounded-br-[6rem] lg:rounded-bl-[6rem] rounded-br-[1rem] rounded-bl-[1rem]"
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
          <img src={logo} alt="logo-image" className="object-cover absolute" />

          {/* Navigation */}
          <div className="flex-center lg:gap-10!">
            {map(["ecosystem", "learn", "product", "about"], (item, index) => (
              <div
                className="uppercase lg:text-lg text-white font-semibold 
                    hover:text-primary cursor-pointer duration-150"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          className="absolute inset-0 z-3 p-12 flex flex-col text-white
        justify-center items-start w-4/6 xl:w-3/6"
        >
          <p className="lg:text-5xl xl:text-[77px] leading-tight font-eiko">
            Connects blockchain with the real world.
          </p>
          <p className="lg:text-md xl:text-[28px] w-4/5 mt-4">
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
      <section className="bg-[#182740] -mt-[20vh]">
        {/* Containter */}
        <div className="grid grid-cols-12 h-full px-12">
          {/* Title */}
          <div
            className="text-primary border-l border-r border-primary/50 
          col-span-2 h-full pt-[20vh]"
          >
            <div className="p-10 flex flex-col justify-between h-full">
              <p>Why Eldora</p>
              <p className="mt-100">Trusted Partners</p>
            </div>
          </div>

          {/* Slogan */}
          <div className="col-span-10 pt-[20vh]">
            <div className="p-10 text-white">
              <p className="font-eiko text-[76px] leading-none flex items-center gap-6">
                <p>Neutral</p> <img src={lineHorizon} alt="" /> <p>Moduler</p>{" "}
                <img src={lineHorizon} alt="" /> <p>Scalable</p>
              </p>

              <p className="font-eiko text-[44px] mt-16">
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
          className="py-10 border-t border-primary/50 min-h-[250px]"
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
            <p className="text-[44px] font-eiko col-span-6 leading-none flex items-start justify-start">
              {item.slot02}
            </p>

            <p className="text-[25px] col-span-5 flex-start whitespace-pre-line">
              {item.slot03}
            </p>

            <img
              src={landingInvest}
              alt="landing"
              className="absolute top-0 right-30 hidden xl:block"
            />
          </div>
        ))}
        <div
          data-aos="fade-up"
          className="flex-center p-12 min-h-[250px] 
          relative gap-10 bg-[#C6A46E]"
        >
          <div
            className="rounded-full bg-[#152640] flex-between 
          gap-10 py-6 px-15 cursor-pointer hover:opacity-95"
          >
            <p className="text-white font-eiko text-[32px]">Lauch the App</p>{" "}
            <img src={arrrowRightNoLine} alt="arrow" />
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="bg-[#EDEBE7]">
        {/* Title */}
        <div className="flex-start p-12 gap-50">
          <p className="font-semibold text-[#9E640A] text-[18px]">Funding</p>
          <p className="text-5xl xl:text-[76px] font-eiko whitespace-pre-line leading-tight">
            {`Raise with confidence, \ndeliever with proof`}
          </p>
        </div>

        <div className="border-t border-b border-primary/50 px-12 grid xl:grid-cols-4">
          {map(funding, (item, index) => (
            <div
              key={index}
              className={`p-4 border-l border-primary/50 ${
                index === funding.length - 1 && "border-r"
              } flex flex-col gap-10 justify-between`}
            >
              <div className="flex justify-between items-start h-2/6">
                <p className="text-[44px] font-eiko whitespace-pre-line">
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
                className="text-[24px] border-t border-primary/50 h-2/6 flex
              justify-center items-start pt-10"
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Network & Insitutional */}
      <section className="bg-[#EDEBE7]">
        {/* Title */}
        <div className="p-12 flex justify-start gap-30 border-b border-primary/50">
          <p className="text-[#9E640A] font-semibold text-[18px]">Network</p>
          <p className="text-[#9E640A] font-semibold text-[18px]">
            Insitutional sevices
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex px-12 max-h-[800px]">
            <div className="w-1/2 py-12 flex flex-col justify-between">
              <p className="font-eiko text-[56px] ">
                {`
              Connecting Capital & \nOpportunities 
              \nthrough a trusted RWA network
              `}
              </p>

              <div
                className="flex items-center cursor-pointer py-4 px-8 bg-[#152640] 
              w-fit text-white rounded-full gap-10 hover:opacity-90"
              >
                <p className="text-[32px] font-eiko">Learn more</p>
                <img src={arrrowRightNoLine} alt="arrow" />
              </div>
            </div>
            <img src={network01} alt="network01" className="w-1/2" />
          </div>

          <div className="flex px-12 max-h-[800px]">
            <img src={network02} alt="network02" className="w-1/2" />

            <div className="w-1/2 py-12 pl-12 flex flex-col justify-between">
              <div>
                <p className="font-eiko text-[56px] ">
                  {`Institutional RWA acesss, \nmanaged with compliance.`}
                </p>

                <div className="text-[24px] mt-10 flex flex-col">
                  <p>
                    Enterprise-grade solution designed for insitutional
                    investors
                  </p>
                  <p>and large-scale operations</p>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-10">
                  {map(institutional, (item, index) => (
                    <div
                      key={index}
                      className="text-[#666666] flex gap-2 max-h-[26px]"
                    >
                      <img src={landingInvest} alt="" className="h-1/2" />
                      <p className="text-[18px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="flex items-center cursor-pointer py-4 px-8 bg-[#152640] 
              w-fit text-white rounded-full gap-10 hover:opacity-90"
              >
                <p className="text-[32px] font-eiko">Learn more</p>
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
          <div className="border-t border-primary/50 pt-10" />
          <p
            className="text-primary font-semibold max-w-5xl mx-auto
           border-l border-r border-primary/50 text-center min-h-10"
          >
            Our Membership
          </p>
        </div>

        <div
          className="text-[84px] uppercase flex flex-col relative 
        text-white font-eiko justify-center items-center"
        >
          <p>Premium membership</p>
          <p>Exclusive deals</p>
          <p>maximum potential</p>

          <img src={membership} alt="membership" className="absolute inset-0" />
        </div>

        <div className="py-10">
          <div className="max-w-5xl mx-auto border-l border-r border-primary/50 min-h-10" />
        </div>

        <div className="flex items-center">
          <div className="h-px bg-primary/50 flex-1" />
          <div
            className="text-[primary/500] bg-white rounded-full 
          flex-between px-12 py-4 gap-10 cursor-pointer hover:opacity-90"
          >
            <p className="text-[32px] font-eiko">Explore Premium Access</p>
            <img src={arrrowRightNoLine02} alt="arrow" />
          </div>
          <div className="h-px bg-primary/50 flex-1" />
        </div>
      </section>

      {/* Utility */}
      <section className="bg-[#0E1723] pt-10">
        {/* Title */}
        <div className="p-12 flex items-start gap-30">
          <p className="text-primary font-semibold whitespace-nowrap">
            ELD Token Utility
          </p>

          <div>
            <p className="font-eiko text-[44px] text-white whitespace-pre-line leading-snug">
              Using ELD
              <span className="text-primary"> (The Protocol Token) </span>{" "}
              grants participation across all three engines. Stake, vote, learn
              and earn your way through the protocol.
            </p>

            <div
              className="text-[primary/500] bg-white rounded-full w-fit
          flex-between px-8 py-4 gap-10 cursor-pointer hover:opacity-90 mt-20"
            >
              <p className="text-[22px]">More about ELD</p>
              <img src={arrrowRightNoLine02} alt="arrow" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 px-12 gap-10 mb-10">
          {map(utility, (item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              data-aos-delay={index * 200}
              className="text-white rounded-4xl
            flex flex-col gap-10 p-8 bg-[#182740] min-h-[700px]"
            >
              <p className="text-[44px] font-eiko h-1/6">{item.title}</p>
              <img
                src={item.image}
                alt="utility"
                className="object-contain h-3/3 mx-auto"
              />
              <p className="text-[24px] h-2/6 items-start">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
