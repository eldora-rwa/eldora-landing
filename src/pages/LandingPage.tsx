import videoHero from "@/assets/videos/video-hero.mp4";
import logo from "@/assets/images/logo.png";
import { map } from "lodash";
import border from "@/assets/images/bg.png";
import arrrowRight from "@/assets/icons/arrow_right.png";
import arrrowRightBlack from "@/assets/icons/arrow_right__black.png";
import lineHorizon from "@/assets/icons/line-horizon.png";
import Marquee from "react-fast-marquee";

import ondo from "@/assets/images/ondo.png";
import coingecko from "@/assets/images/coingecko.png";
import uniswap from "@/assets/images/uniswap.png";
import securitize from "@/assets/images/securitize.png";
import morpho from "@/assets/images/morpho.png";
import centrifure from "@/assets/images/centrifure.png";
import slideImg from "@/assets/images/slide.png";

const slide = [ondo, coingecko, uniswap, morpho, centrifure, securitize];

const LandingPage = () => {
  return (
    <main className="w-full h-full bg-black">
      {/* Hero */}
      <section className="min-h-[120vh] relative z-1">
        {/* Video background */}
        <video
          autoPlay={true}
          loop
          muted
          src={videoHero}
          className="rounded-md absolute object-cover inset-0 w-full 
          h-full z-2 rounded-br-[6rem] rounded-bl-[6rem]"
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
          <div className="flex-center gap-10!">
            {map(["ecosystem", "learn", "product", "about"], (item, index) => (
              <div
                className="uppercase text-lg text-white font-semibold 
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
        justify-center items-start w-3/6"
        >
          <p className="text-[77px] leading-tight font-eiko">
            Connects blockchain with the real world.
          </p>
          <p className="text-[28px] w-4/5 mt-4">
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

      <section className="bg-[#182740] relative -top-[20vh] z-0">
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

        <div className="border-t border-primary/50">
          <Marquee pauseOnHover autoFill className="py-10">
            <img alt={"slicde"} src={slideImg} className="pl-14" />
          </Marquee>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
