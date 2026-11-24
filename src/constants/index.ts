import theo from "@/assets/images/team/theo.jpg";
import ledo from "@/assets/images/team/ledo.jpg";
import vien from "@/assets/images/team/vien.jpeg";
import tracy from "@/assets/images/team/tracy.jpeg";
// import wildey from "@/assets/images/team/wildey.jpeg";
import tiev from "@/assets/images/team/tiev.avif";
import lynn from "@/assets/images/team/lyn.jpeg";
// import rose from "@/assets/images/team/rose.jpg";
import liam from "@/assets/images/team/liam.jpg";
import jason from "@/assets/images/team/jason.jpg";
// import adKaiser from "@/assets/images/team/ad_kaiser.jpeg";
import adNicolai from "@/assets/images/team/ad_nicolai.jpeg";
import adJulien from "@/assets/images/team/ad_julien.jpeg";
import vincent from "@/assets/images/team/ad_vincent.jpeg";
import invest1 from "@/assets/imgs/invest_01.png";
import invest2 from "@/assets/imgs/invest_02.png";
import invest3 from "@/assets/imgs/invest_03.png";

import golbeIcon from "@/assets/icons/globe.svg";
import trackingIcon from "@/assets/icons/tracking.svg";
import layerIcon from "@/assets/icons/layer.svg";

import liquid01 from "@/assets/imgs/liquid_01.png";
import liquid02 from "@/assets/imgs/liquid_02.png";
import liquid03 from "@/assets/imgs/liquid_03.png";

import why1 from "@/assets/imgs/why_eldora_01.png";
import why2 from "@/assets/imgs/why_eldora_02.png";
import why3 from "@/assets/imgs/why_eldora_03.png";
import why4 from "@/assets/imgs/why_eldora_04.png";
import why5 from "@/assets/imgs/why_eldora_05.png";

export const FAQs = [
  {
    title: "1. What is Eldora?",
    content:
      "Eldora is an onchain investment platform combining global market access, market intelligence, and personalized portfolio management, from allocation to execution.",
  },
  {
    title: "2. What is The Estate?",
    content:
      "The Estate is our upcoming onchain personalized portfolio management solution, built around tailored asset allocation, diversification, and simplified execution.",
  },
  {
    title: "3. How does personalized allocation work?",
    content:
      "The Estate uses your budget, goals, investment timeline, and risk tolerance to suggest a diversified portfolio. You stay in control and can adjust your allocation before investing.",
  },
  {
    title: "4. What can I invest in?",
    content:
      "Access tokenized U.S. stocks, ETFs, T-Bill products, crypto, and supported DeFi opportunities, all in one place. Availability varies by asset and location.",
  },
  {
    title: "5. How do I start investing?",
    content:
      "Sign up, complete the required verification, and connect a supported wallet or trading account. Explore global assets and start investing in a few steps.",
  },
  {
    title: "6. Can I automate my investments?",
    content:
      "Yes. Auto-Invest lets you choose an asset, set an amount and schedule, and authorize recurring purchases with a single setup. No need to place every order manually.",
  },
  {
    title: "7. Who can use Eldora?",
    content:
      "Eldora is available to eligible investors across 85+ supported countries. Access to specific assets and features depends on your location and verification status.",
  },
  {
    title: "8. Who holds my assets?",
    content:
      "Eldora does not directly custody your funds. Depending on the product, assets are held in your connected wallet or with supported custody and exchange partners.",
  },
  {
    title: "9. Can I sell or withdraw my investments?",
    content:
      "Yes, subject to asset liquidity, trading hours, provider conditions, and processing times. You remain in control of your investment decisions.",
  },
  {
    title: "10. How much does it cost to invest on Eldora?",
    content:
      "We've significantly reduced trading fees. Free users save up to 50%, while paid subscribers save up to 75% on eligible fees. Network and third-party costs may still apply. Review estimated costs before confirming an order.",
  },
];

export const team = [
  {
    name: "Theophane Rame",
    position: "CEO & Founder",
    image: theo,
    url: "https://www.linkedin.com/in/theo-rame/",
  },
  {
    name: "Vincent Dupy",
    position: `Strategic Advisor & \nBoard Member`,
    image: vincent,
    url: "https://www.linkedin.com/in/vincent-dupy-1385ab35/",
  },
  {
    name: "Julien P.",
    position: "Advisor",
    image: adJulien,
    url: "https://www.linkedin.com/in/julien-passa/",
  },
  {
    name: "Nicolai Reinbold",
    position: "Advisor",
    image: adNicolai,
    url: "https://www.linkedin.com/in/nicolai-reinbold-30aa1995/",
  },
  {
    name: "Le Do",
    position: "CMO",
    image: ledo,
    url: "https://www.linkedin.com/in/lledo111/",
  },
  {
    name: "0xMike",
    position: "Head of Engineer",
    image: vien,
    url: undefined,
  },
  {
    name: "Tracy",
    position: "Product Owner",
    image: tracy,
    url: "https://www.linkedin.com/in/tracy-pham-222485264/",
  },
  {
    name: "Teiv",
    position: "Technical Lead",
    image: tiev,
    url: undefined,
  },
  {
    name: "Liam",
    position: "Development & \nOperation Developer",
    image: liam,
    url: undefined,
  },
  {
    name: "Jason Hoang",
    position: "Frontend Developer",
    image: jason,
    url: undefined,
  },
  {
    name: "Lynn",
    position: "Content Specialist",
    image: lynn,
    url: "http://linkedin.com/in/nguyễn-linh",
  },
];

export const faqs = FAQs;

export const investCards = [
  {
    index: "01.",
    title: "Discover Opportunities",
    desc: "724 tokenized US stocks and ETFs, including the full S&P 500. Plus crypto spot and perpetuals.",
    img: invest1,
    icon: golbeIcon,
  },
  {
    index: "02.",
    title: "Track Performance",
    desc: `Monitor your portfolio in real time. \nClear insights. No spreadsheets. No guesswork.`,
    img: invest2,
    icon: trackingIcon,
  },
  {
    index: "03.",
    title: "The Estate",
    desc: "Onchain personalized portfolio management with tailored asset allocation for better diversification and seamless execution.",
    img: invest3,
    icon: layerIcon,
  },
];

export const liquidityAccessList = [
  {
    title: "No geography",
    desc: "Buy $NVDA from Vietnam, Indonesia, or anywhere across 85+ countries with same access, same price.",
    icon: liquid01,
  },
  {
    title: "3-second settlement",
    desc: "Trades settle on-chain in seconds, not business days.",
    icon: liquid02,
  },
  {
    title: "$1 minimum",
    desc: "Start from $1. Add more anytime. No lock-up. No minimum hold period. Available on Ethereum, Base, Arbitrum, Polygon, BNB Chain, and Avalanche.",
    icon: liquid03,
  },
];

export const whyEldora = [
  {
    img: why3,
  },
  {
    img: why1,
  },
  {
    img: why2,
  },
  {
    img: why4,
  },
  {
    img: why5,
  },
];
