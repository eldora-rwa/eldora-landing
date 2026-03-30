import { motion } from "motion/react";
import { MoveRight, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

import { team, faqs, investCards, liquidityAccessList } from "@/constants";
import bgOurTeam from "@/assets/imgs/bg_our_team.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bgFaq from "@/assets/imgs/bg_faq.png";
import ecoSystemImg from "@/assets/imgs/ecosystem.png";
import ecoSystemImgMobile from "@/assets/imgs/ecosystem_mobile.png";
import PrimaryButton from "@/components/PrimaryButton";
import whyEldora from "@/assets/imgs/why_eldora.png";
import linkedin from "@/assets/icons/linkedin.png";
import substack from "@/assets/icons/substack.png";
import bgHero from "@/assets/imgs/hero_img.jpg";

import x from "@/assets/icons/x.svg";
import discord from "@/assets/icons/discord.svg";
import telegram from "@/assets/icons/telegram.svg";
import medium from "@/assets/icons/medium.svg";
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
              <img src={"/logo.png"} alt="Eldora" className="h-10 w-auto object-contain" />
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
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
                  <h4 className="text-[32px] leading-[1.2] text-[#182740]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-base leading-7 text-[#475569]">
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

      {/* FAQ Section */}
      <section className="relative overflow-hidden rounded-t-4xl py-[120px] text-white">
        <img
          src={bgFaq}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 grid lg:grid-cols-2 gap-24 max-w-7xl px-4 mx-auto">
          <div>
            <h3 className="font-eiko text-[60px] leading-[1.1]">
              Your RWA Journey Starts Here!
            </h3>
            <SocialList className="mt-10" />
          </div>

          <div>
            <SectionBadge invertColor text="FAQ" />
            <Accordion type="single" collapsible defaultValue="0">
              {faqs.map((item, index) => {
                return (
                  <AccordionItem
                    key={item.title}
                    value={`${index}`}
                    className="border-b border-cream-light py-2 lg:py-4"
                  >
                    <AccordionTrigger
                      className="flex items-center justify-between gap-6 py-4 hover:no-underline 
                        group [&[data-state=open]>span]:text-gold-base 
                        [&[data-state=open]>div>span]:text-gold-base
                        [&_svg]:size-8 [&_svg]:text-white! [&_svg]:shrink-0"
                    >
                      <div className="flex items-center gap-[70px]">
                        <span
                          className="font-eiko text-xl lg:text-2xl leading-8 text-white
                           transition-colors duration-200"
                        >
                          ({String(index + 1).padStart(2, "0")})
                        </span>
                        <span
                          className="font-eiko text-xl lg:text-2xl leading-8 text-white
                           transition-colors duration-200"
                        >
                          {item.title.split(". ")[1] || item.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className="pl-[110px] pt-3 text-base text-white
                       whitespace-pre-line"
                    >
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-navi-dark py-12 lg:py-20 text-white">
        <div className="mx-auto flex flex-col lg:flex-row w-full max-w-7xl px-4 items-start justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-[40%] space-y-6 lg:space-y-10">
            <img src={"/logo.png"} alt="" className="w-40 lg:w-46" />
            <p className="text-sm lg:text-base opacity-80 lg:opacity-100">
              Where Real-World Assets on-chain: Seamless tokenization,
              investment and life cycle management in one trusted hub.
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
                {/* <li className="hover:text-white cursor-pointer transition-colors">
                  Business Model
                </li> */}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 lg:mb-10 text-lg font-bold">Legal</h4>
              <ul className="space-y-3 text-base text-white/70">
                <li
                  onClick={() => navigate(`/eldora/#term`)}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  Term of Services
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
                  Disclaimer
                </li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h4 className="mb-6 lg:mb-10 text-lg font-bold">Community</h4>
              <SocialList />
            </div>
          </div>
        </div>
      </footer>
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
    <p className="mt-1 text-xs font-bold text-navi-light lg:text-base">
      {member.position}
    </p>
  </div>
);

const SocialList = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className || ""}`}>
      {[
        { icon: x, link: "https://x.com/eldora_rwa" },
        { icon: discord, link: "https://discord.gg/YhbyU5g64Y" },
        { icon: telegram, link: "https://t.me/Eldoracommunity" },
        { icon: medium, link: "https://medium.com/@eldora_do" },
        { icon: substack, link: "https://substack.com/@eldora3" },
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
            className="size-6 object-contain shrink-0"
          />
        </div>
      ))}
    </div>
  );
};
