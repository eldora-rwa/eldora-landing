import { motion } from "motion/react";
import { MoveRight, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { team, investCards, liquidityAccessList, whyEldora } from "@/constants";
import bgOurTeam from "@/assets/imgs/bg_our_team.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ecoSystemImg from "@/assets/imgs/ecosystem.png";
import ecoSystemImgMobile from "@/assets/imgs/ecosystem_mobile.png";
import countryImg from "@/assets/imgs/country.png";
import networksImg from "@/assets/imgs/networks.png";
import networksMobileImg from "@/assets/imgs/networks_mobile.png";
import PrimaryButton from "@/components/PrimaryButton";
import SectionBadge from "@/components/SectionBadge";
import FaqSection from "@/components/FaqSection";
// import whyEldora from "@/assets/imgs/why_eldora.png";
// import whyEldoraMobile from "@/assets/imgs/why_eldora_mobile.png";
import linkedin from "@/assets/icons/linkedin.png";
import substack from "@/assets/icons/substack.png";
import bgHero from "@/assets/imgs/hero_img.jpg";

import x from "@/assets/icons/x.svg";
import discord from "@/assets/icons/discord.svg";
import telegram from "@/assets/icons/telegram.svg";
import youtube from "@/assets/icons/youtube.svg";
import { useNavigate } from "react-router";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  url?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
} as const;

const desktopInvestContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
} as const;

const desktopInvestItemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
} as const;

const LandingPageNew = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenApp = () => {
    window.open("https://app.eldora.do", "_self");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = useNavigate();

  return (
    <div className="w-full h-full">
      {/* Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300
           ${isScrolled ? "bg-navi-dark/80 backdrop-blur-sm shadow-lg" : ""}`}
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 ${isScrolled ? "py-2" : "py-4"} pointer-events-auto`}
        >
          <div className="hidden shrink-0 cursor-pointer lg:block">
            <img
              src={"/logo.png"}
              alt="Eldora"
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-12!" : "h-18!"}`}
            />
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
                  onClick={() => scrollToSection(item.toLowerCase())}
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
                src={"/logo.png"}
                alt="Eldora"
                className="h-10 w-auto object-contain"
              />
            </div>
            <PrimaryButton onClick={handleOpenApp}>Launch App</PrimaryButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden bg-navi-dark">
        <img
          src={bgHero}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute z-10 inset-0">
          {/* Slogan */}
          <div
            className="mx-auto flex w-full max-w-7xl flex-col items-center
           gap-10 text-center absolute bottom-24 left-0 right-0"
          >
            <div>
              {/* <h1 className="font-eiko text-4xl lg:text-7xl text-cream-light">
                From APAC to Wall <br className="md:hidden" /> Street.{" "}
                <br className="hidden md:block" />
                In <span className="text-[#619EFF]">one</span> click.
              </h1>
              <p className="mt-3 text-base lg:text-xl text-cream-light">
                Access U.S. stocks and global markets{" "}
                <br className="md:hidden" /> from anywhere.{" "}
                <br className="hidden md:block" />
                No borders. No <br className="md:hidden" /> gatekeepers. No
                friction.
              </p> */}
              <h1 className="font-eiko text-[32px] lg:text-5xl text-cream-light leading-tight">
                Own $NVDA, $AAPL, <br className="md:hidden" /> and T-Bills from
                any crypto wallet. <br className="hidden md:block" />
                <span className="text-[#619EFF]">24/7. From $1.</span>
                <br className="md:hidden" /> No broker account.
              </h1>
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

      {/* Why? */}
      <section id="learn" className="px-4 py-20 lg:py-28 bg-navi-light/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <SectionBadge text="WHY ELDORA" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="max-w-xl">
              {/* <h2 className="font-eiko text-left text-5xl leading-tight text-navi-dark lg:text-5xl lg:leading-[1.08]">
                Global markets are open.
                <br className="hidden md:block" /> Access isn&apos;t.
                <br className="hidden md:block" /> Banks add friction.
              </h2> */}

              <div className="space-y-4 md:space-y-8  text-left text-2xl text-navi-dark/90 lg:text-3xl font-eiko">
                <p>
                  Global markets are open. Access isn't.
                  <br className="hidden lg:block" /> Banks add friction. Brokers
                  add fees.
                  <br className="hidden lg:block" /> Platforms add complexity.
                </p>

                <p>Eldora removes all of it.</p>

                <p>
                  One account. One KYC. $NVDA, $AAPL,
                  <br className="hidden lg:block" /> Gold, T-Bills - from your
                  crypto wallet, <br className="hidden lg:block" />
                  <span className="text-[#3B82F6]">24/7, from $1.</span>
                </p>
              </div>
            </div>

            <div className="w-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
                className="w-full"
              >
                <CarouselContent className="ml-0">
                  {whyEldora.map((item, index) => (
                    <CarouselItem
                      key={item.title}
                      className="pl-4 first:pl-0 lg:basis-[72%] xl:basis-[68%]"
                    >
                      <article className="flex flex-col">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-auto w-full rounded-[22px] object-cover p-2"
                        />
                        <h3
                          className={`${index === 0 ? "mt-2" : "mt-4"} text-center md:text-left font-eiko text-2xl text-navi-dark lg:text-[2rem]`}
                        >
                          {item.title}
                        </h3>
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
                  <CarouselPrevious className="static size-12 cursor-pointer border border-navi-dark bg-transparent text-navi-dark hover:bg-white" />
                  <CarouselNext className="static size-12 cursor-pointer border border-navi-light bg-navi-light text-white! hover:bg-navi-base" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Invest */}
      {/* <section id="product" className="px-4 bg-slate-200 py-30">
        <h2 className="text-center font-eiko text-5xl">
          Access Global Markets
        </h2>
        <div className="mt-10 hidden lg:grid grid-cols-3 gap-6 max-w-7xl mx-auto">
          {investCards.map((card) => {
            return (
              <article
                key={card.index}
                className="group relative flex h-[480px] flex-col overflow-hidden
                 rounded-4xl bg-white p-2"
              >
                <div className="flex h-full w-full flex-col">
                  <span className="absolute top-6 left-6 text-slate-200 text-6xl font-bold">
                    {card.index}
                  </span>

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

                  <div className="flex flex-col absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-6 grid size-[60px] shrink-0 place-items-center rounded-2xl bg-slate-200">
                      <img src={card.icon} className="size-8" />
                    </div>

                    <h3 className="font-eiko text-3xl text-navi-dark">
                      {card.title}
                    </h3>

                    <div
                      className="grid grid-rows-[0fr] opacity-0 transition-all duration-300
                     group-hover:mt-6 group-hover:grid-rows-[1fr] group-hover:opacity-100"
                    >
                      <div className="overflow-hidden">
                        <p className="text-lg text-[#182740] whitespace-pre-line">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

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
                        <span className="absolute left-6 top-6 text-6xl font-bold text-slate-200">
                          {card.index}
                        </span>

                        <div className="relative">
                          <img
                            src={card.img}
                            className="h-[250px] w-full rounded-3xl object-cover"
                            alt={card.title}
                          />
                          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 flex flex-col p-6">
                          <div className="mb-6 grid size-[60px] shrink-0 place-items-center rounded-2xl bg-slate-200">
                            <img src={card.icon} className="size-8" />
                          </div>

                          <h3 className="font-eiko text-3xl text-navi-dark">
                            {card.title}
                          </h3>

                          <div className="mt-6 flex">
                            <p className="text-lg text-[#182740] whitespace-pre-line">
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
      </section> */}

      {/* Invest */}
      <section
        id="product"
        className="bg-linear-to-b from-navi-light/5 via-navi-light/50 to-navi-light px-4 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-eiko text-4xl text-navi-dark lg:text-6xl">
            Access Global Markets
          </h2>

          <motion.div
            variants={desktopInvestContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-12 hidden grid-cols-3 gap-6 lg:grid"
          >
            {investCards.map((card) => (
              <motion.article
                key={card.index}
                variants={desktopInvestItemVariants}
                className="flex flex-col rounded-[28px] bg-white p-6"
              >
                {/* <div className="overflow-hidden rounded-[24px] border border-[#DCE5F3] bg-[#EDF3FF] p-3 shadow-[inset_0_0_20px_rgba(255,255,255,0.65)]"> */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-[240px] w-full rounded-[18px] object-cover"
                />
                {/* </div> */}

                <div className="mt-10">
                  <h3 className="font-eiko text-4xl leading-tight text-navi-dark">
                    {card.title}
                  </h3>
                  <p className="mt-6 whitespace-pre-line text-lg leading-[1.45] text-navi-dark/90">
                    {card.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mx-auto mt-10 block w-full lg:hidden">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {investCards.map((card) => (
                  <CarouselItem
                    key={card.index}
                    className="pl-4 first:pl-0 basis-[88%] sm:basis-[72%]"
                  >
                    <article className="flex min-h-[460px] flex-col rounded-[28px] bg-white p-5 shadow-[0_18px_60px_rgba(24,39,64,0.10)]">
                      <div className="overflow-hidden rounded-[22px] border border-[#DCE5F3] bg-[#EDF3FF] p-3 shadow-[inset_0_0_20px_rgba(255,255,255,0.65)]">
                        <img
                          src={card.img}
                          alt={card.title}
                          className="h-[220px] w-full rounded-[16px] object-cover"
                        />
                      </div>

                      <div className="mt-8">
                        <h3 className="font-eiko text-3xl leading-tight text-navi-dark">
                          {card.title}
                        </h3>
                        <p className="mt-5 text-lg leading-relaxed text-navi-dark/90">
                          {card.desc}
                        </p>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-8 flex items-center justify-center gap-4 px-4">
                <CarouselPrevious className="static size-12 cursor-pointer border border-navi-dark bg-transparent text-navi-dark hover:bg-white" />
                <CarouselNext className="static size-12 cursor-pointer border border-navi-light bg-navi-light text-white! hover:bg-navi-base" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Liquidity Access */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <SectionBadge text="YOUR MONEY, YOUR RULES" />
            <h3 className="mt-10 font-eiko text-4xl lg:text-5xl">
              Your Money Doesn’t <br className="lg:hidden" />
              Sleep. Neither Does Eldora
            </h3>
            <p className="mt-6 lg:text-xl">
              Trade at midnight. Exit on a Sunday. Earn yield while you sleep.
              <br className="hidden md:block" /> No business hours. No broker
              required.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {liquidityAccessList.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex items-center gap-6 border-b border-slate-300 pb-6"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-30 w-30 object-contain"
                />
                <div>
                  <h4 className="text-[32px] font-eiko leading-[1.2] text-[#182740]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-base leading-7 text-[#475569] whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          <h3 className="mx-auto mt-10 max-w-4xl font-eiko text-3xl lg:text-6xl lg:leading-16">
            {/* Track. Analyze. Optimize.
            <br /> Your
            <span className="text-gold-pale"> RWA Portfolio</span> From
            <br />
            <span className="text-gold-pale">One Dashboard</span> */}
            From Data to Decisions
          </h3>
          <p className="mx-auto mt-6 max-w-2xl lg:text-xl">
            Turn complex portfolios into clear,{" "}
            <br className="block lg:hidden" /> actionable insights.
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
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${bgOurTeam})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
            <div className="grid grid-cols-3 gap-12 max-w-5xl mx-auto">
              {team.slice(4, 7).map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>

            {/* Row 3: 4 members */}
            <div className="grid grid-cols-4 gap-12 max-w-5xl mx-auto">
              {team.slice(7, 11).map((member) => (
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
                    className="basis-[65%] sm:basis-[45%] md:basis-[33%] pl-4 first:pl-0"
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

      {/* Ecosystem */}
      <section
        id="ecosystem"
        className="rounded-t-4xl bg-navi-dark px-4 py-[120px]"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-[60px]">
          <h2 className="font-eiko text-center text-3xl md:text-5xl  text-white">
            Integrated Ecosystem
          </h2>

          <img src={ecoSystemImg} alt="" className="hidden lg:block" />
          <img src={ecoSystemImgMobile} alt="" className="lg:hidden" />

          <div className="flex w-full max-w-4xl flex-col items-center gap-8 lg:gap-10">
            <div className="flex items-center justify-center">
              <img
                src={countryImg}
                alt="85+ countries"
                className="h-auto w-full max-w-[520px] object-contain lg:max-w-[620px]"
              />
            </div>

            <p className="text-center text-xl font-semibold text-white">
              Live on 5 networks
            </p>

            <img
              src={networksImg}
              alt="Networks"
              className="hidden h-auto w-full max-w-5xl object-contain lg:block"
            />
            <img
              src={networksMobileImg}
              alt="Networks"
              className="h-auto w-full max-w-md object-contain lg:hidden"
            />
          </div>

          <PrimaryButton
            withEffect
            onClick={() => (window.location.href = "mailto:tracy@eldora.do")}
            className="py-2 px-6 flex gap-2 items-center"
          >
            Become a partner
          </PrimaryButton>
        </div>
      </section>

      <FaqSection />

      <footer className="bg-navi-dark py-12 lg:py-20 text-white">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:gap-20">
            <div className="w-full lg:w-[40%] space-y-6 lg:space-y-10">
              <img src={"/logo.png"} alt="" className="w-40 lg:w-46" />
              <p className="text-sm lg:text-base opacity-80 lg:opacity-100">
                Access global markets.
                <br /> No borders. No middlemen.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 text-sm w-full lg:w-auto">
              <div>
                <h4 className="mb-6 lg:mb-10 text-lg font-bold">Quick Links</h4>
                <ul className="space-y-3 text-base text-white/70">
                  <li
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    About Us
                  </li>
                  <li
                    onClick={() => scrollToSection("product")}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    How It Works
                  </li>
                  <li
                    onClick={() => scrollToSection("ecosystem")}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    Ecosystem
                  </li>
                  <li
                    onClick={() => navigate("/document")}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    Document
                  </li>
                  <li
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    Team
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-6 lg:mb-10 text-lg font-bold">
                  Terms & Policies
                </h4>
                <ul className="space-y-3 text-base text-white/70">
                  <li
                    onClick={() => navigate(`/eldora/#term`)}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    Term of Use
                  </li>
                  <li
                    onClick={() => navigate(`/eldora/#policy`)}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    Privacy Policy
                  </li>
                  <li
                    onClick={() => navigate(`/eldora/#disclaimer`)}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    Risk Disclosure Statement
                  </li>
                </ul>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <h4 className="mb-6 lg:mb-10 text-lg font-bold">Community</h4>
                <SocialList />
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/15 pt-6 text-sm lg:text-center text-white/70 lg:mt-16">
            © 2025 Eldora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageNew;

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="group mx-auto flex w-full max-w-[200px] flex-col items-center text-center lg:max-w-[240px]">
    <div className="relative aspect-square w-full overflow-hidden rounded-[32px] lg:rounded-[40px]">
      <img
        src={member.image}
        alt={member.name}
        className="size-full object-cover object-top transition-all duration-500 grayscale
         group-hover:grayscale-0 scale-100 group-hover:scale-105"
      />
      {member.url && (
        <div
          onClick={() => {
            window.open(member.url, "_blank");
          }}
          className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-lg bg-navi-light text-white cursor-pointer lg:bottom-4 lg:right-4 lg:size-10 lg:rounded-xl"
        >
          <Linkedin
            size={18}
            fill="white"
            strokeWidth={0}
            className="lg:size-5"
          />
        </div>
      )}
    </div>
    <h4 className="mt-4 font-eiko text-xl leading-tight text-[#0e1927] lg:mt-6 lg:text-2xl">
      {member.name}
    </h4>
    <p className="mt-1 text-xs font-bold text-navi-light lg:text-base whitespace-pre-line">
      {member.position}
    </p>
  </div>
);

const SocialList = ({ className }: { className?: string }) => {
  return (
    <div
      className={`grid grid-cols-3 gap-3 justify-start w-fit ${className || ""}`}
    >
      {[
        { icon: x, link: "https://x.com/eldoraglobal" },
        { icon: discord, link: "https://discord.gg/YhbyU5g64Y" },
        { icon: telegram, link: "https://t.me/Eldoracommunity" },
        { icon: youtube, link: "https://www.youtube.com/@eldoraglobal" },
        { icon: substack, link: "https://substack.com/@eldoraglobal" },
        {
          icon: linkedin,
          link: "https://www.linkedin.com/company/eldora-rwa/",
        },
      ].map((item, index) => (
        <div
          key={index}
          onClick={() => window.open(item.link, "_blank")}
          className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full
                   bg-navi-base transition-all duration-300 hover:bg-navi-mid hover:scale-110 shadow-lg"
        >
          <img
            src={item.icon}
            alt={item.link}
            className="size-6 object-contain"
          />
        </div>
      ))}
    </div>
  );
};
