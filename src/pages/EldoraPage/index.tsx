import { useEffect, useState } from "react";
import x from "@/assets/icons/x.png";
import discord from "@/assets/icons/discord.png";
import telegram from "@/assets/icons/telegram.png";
import medium from "@/assets/icons/medium.jpg";
import eldora from "@/assets/images/logo.svg";
import { map } from "lodash";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface NavItem {
  id: keyof typeof contents;
  title: string;
}

const navItems: NavItem[] = [
  { id: "terms", title: "1. Terms of use" },
  { id: "policy", title: "2. Privacy policy" },
  { id: "legal", title: "3. Legal disclaimer" },
];

const contents = {
  terms: {
    title: "TERMS OF USE",
    content: {
      [`1. Acceptance of Terms`]: [
        `These Terms of Use (“Terms”) govern your access to and use of the Eldora website, dashboard, and
        any products, tools, or services provided through Eldora (collectively, the “Platform”).`,
        `By accessing or using the Platform, you confirm that you have read, understood, and agree to these
        Terms.`,
        `If you do not agree, do not use the Platform.`,
      ],
      [`2. About Eldora`]: [
        `Eldora is a neutral aggregator hub that enables discovery, analysis, and connection between users
        and Real-World Asset (RWA) projects. As defined in Eldora’s documentation, the Platform
        includes:`,
        [
          "Funding Engine",
          "Learning Engine",
          "Networking Engine & Dashboard",
          "Aggregated market data",
          "Project listings and analytics",
        ],
        `Eldora does not:`,
        [
          "provide investment, legal, or tax advice;",
          "issue, manage, or guarantee assets;",
          "provide brokerage, custody, or asset management services;",
          "execute transactions on behalf of users.",
        ],
      ],
      [`3. Eligibility`]: [
        `You may use the Platform only if:`,
        [
          "you are at least 18 years old;",
          "you have legal capacity;",
          "your jurisdiction permits participation in blockchain, RWA, and investment-related activities; you are not under sanctioned jurisdictions.",
          "you meet any regulatory classification requirements (e.g., professional, accredited, institutional investor) when applicable.",
        ],
        `Eldora reserves the right to restrict access based on geographic or regulatory considerations.`,
      ],

      [`4. No Investment Advice`]: [
        `All content, data, analytics, listings, and commentary on the Platform are provided for informational purposes only.`,
        `Nothing shall constitute:`,
        [
          "investment advice,",
          "a recommendation,",
          "a solicitation,",
          "an endorsement of any project or asset.",
        ],
        `Users bear full responsibility for their own decisions.`,
      ],

      [`5. No Offer of Securities`]: [
        `The Platform does not offer, sell, or solicit securities.`,
        `Project listings and tokenized assets are provided by independent third parties, and Eldora does not validate or guarantee their regulatory classification.`,
        `Users must ensure their compliance with applicable securities laws.`,
      ],

      [`6. Third-Party Integrations`]: [
        `The Platform relies on external providers, including (but not limited to):`,
        [
          "tokenization protocols,",
          "KYC/AML partners,",
          "custodians,",
          "data/API vendors,",
          "liquidity sources.",
        ],
        `Eldora is not responsible for the content, availability, or performance of third-party services and makes no warranties regarding their accuracy or reliability.`,
      ],

      [`7. User Responsibilities`]: [
        `Users agree to:`,
        [
          "comply with all laws applicable to their activities;",
          "complete KYC/AML procedures when required;",
          "provide accurate information;",
          "use the Platform only for lawful purposes;",
          "refrain from exploiting vulnerabilities, scraping data, or reverse-engineering the Platform.",
        ],
        `Eldora may suspend or terminate accounts violating these Terms.`,
      ],

      [`8. Platform Availability`]: [
        `The Platform is provided “as is” and “as available”, without guarantees of uptime, uninterrupted access, or error-free performance.`,
        `Availability may be affected by third-party API rate limits, outages, or integrations.`,
      ],

      [`9. Intellectual Property`]: [
        `All content, trademarks, branding, features, and tools are the exclusive property of Eldora or its licensors.`,
        `Users may not copy, modify, distribute, or create derivative works without written permission.`,
      ],

      [`10. Token Disclaimer ($ELD)`]: [
        `The $ELD token provides utility within the Eldora ecosystem:`,
        ["staking,", "governance,", "fee discounts."],
        `$ELD does not represent:`,
        [
          "equity,",
          "ownership,",
          "profit rights,",
          "claims on revenue,",
          "investment returns.",
        ],
        `Holding $ELD does not guarantee access to future features.`,
      ],

      [`11. Limitation of Liability`]: [
        `To the fullest extent permitted by law:`,
        [
          "Eldora shall not be liable for any loss of capital, profits, revenue, or data;",
          "Eldora shall not be responsible for third-party project failures, misleading statements, or regulatory breaches;",
          "Eldora shall not be responsible for risks associated with blockchain technology, smart contracts, or market volatility.",
        ],
        `Users use the Platform at their own risk.`,
      ],

      [`12. Indemnification`]: [
        `You agree to indemnify and hold harmless Eldora, its affiliates, directors, and employees from any claims arising from:`,
        [
          "your use of the Platform;",
          "your interactions with third-party projects;",
          "violations of these Terms;",
          "disputes between you and external service providers.",
        ],
      ],

      [`13. Changes to the Terms`]: [
        `Eldora may update these Terms at any time. Continued use of the Platform indicates acceptance of the revised Terms.`,
      ],

      [`14. Governing Law`]: [
        `These Terms are governed by the laws of Switzerland, under the jurisdiction of the courts of Zurich, unless otherwise required by mandatory law.`,
      ],

      [`15. Contact`]: [`hello@eldora.do`, `eldora.do`],
    },
  },
  policy: {
    title: "PRIVACY POLICY (GDPR + SWISS FADP)",
    content: {
      "1. Data Controller": [
        `Eldora (“we”, “us”, “our”) operates the website eldora.do and associated services.`,
        `We comply with:`,
        [
          "Swiss Federal Act on Data Protection (FADP)",
          "EU General Data Protection Regulation (GDPR)",
        ],
      ],

      "2. Personal Data We Collect": [
        `We may collect:`,

        // A. Information you provide
        [
          "A. Information you provide",
          [
            "Name, email, contact details",
            "Submitted forms",
            "Project or investor profile information",
            "KYC/AML data (handled by regulated partners)",
          ],
        ],

        // B. Automatically collected data
        [
          "B. Automatically collected data",
          [
            "IP address",
            "Device identifiers",
            "Cookies and analytics",
            "Log files and usage metrics",
          ],
        ],

        // C. Third-party data sources
        [
          "C. Third-party data sources",
          [
            "Compliance partners",
            "Blockchain analytics tools",
            "Public blockchain data",
            "Project listings and APIs",
          ],
        ],
      ],

      "3. Purpose of Processing": [
        `We process data to:`,
        [
          "Provide Platform services",
          "Facilitate matchmaking between investors and projects",
          "Conduct KYC/AML identity verification (via partners)",
          "Improve security, analytics, and performance",
          "Comply with legal obligations",
          "Communicate updates, announcements, and technical notifications",
        ],
        `We do not sell personal data.`,
      ],

      "4. Legal Basis for Processing (GDPR)": [
        [
          "Contract performance",
          "Legitimate interest",
          "Compliance with legal obligations",
          "Explicit consent",
        ],
      ],

      "5. KYC/AML & Compliance Partners": [
        `KYC/AML verification is performed by regulated partners. Eldora never stores full KYC data on its own servers.`,
        `Data retention and security are governed by the partner’s regulatory obligations.`,
      ],

      "6. Cookies": [
        `The Platform may use:`,
        ["essential cookies", "analytics cookies", "preference cookies"],
        `Users in the EU/EEA may opt out except for essential cookies.`,
      ],

      "7. Data Retention": [
        `We retain data only as long as:`,
        [
          "required to deliver services",
          "required by law",
          "required for legitimate interests such as fraud prevention",
        ],
      ],

      "8. Your Rights": [
        `Under GDPR and FADP, you may request:`,
        [
          "Access",
          "Correction",
          "Deletion",
          "Restriction of processing",
          "Data portability",
          "Withdrawal of consent",
          "Objection to certain processing",
        ],
        `Contact: hello@eldora.do`,
      ],

      "9. International Transfers": [
        `Data may be processed in jurisdictions outside Switzerland or the EEA, subject to:`,
        ["adequacy decisions", "standard contractual clauses"],
      ],

      "10. Security Measures": [
        `We implement:`,
        [
          "encryption",
          "access controls",
          "secure servers",
          "limited internal access",
          "regular audits",
        ],
        `No system is fully secure; users acknowledge inherent risks.`,
      ],

      "11. Children’s Privacy": [
        `Eldora does not knowingly collect data from individuals under 18.`,
      ],

      "12. Changes to the Policy": [
        `We may modify this Policy at any time. Updates will be posted on the website.`,
      ],

      "13. Contact": ["Hello@eldora.do", "eldora.do"],
    },
  },
  legal: {
    title: "RISK DISCLOSURE STATEMENT",
    content: {
      "1. Market Risk": [
        `RWAs, digital assets, and tokens can fluctuate significantly in value.`,
        `There is no guarantee of profitability or liquidity.`,
      ],

      "2. Regulatory Risk": [
        `Changes to laws and regulations — especially securities, AML, KYC, or digital asset policies — may:`,
        [
          "restrict access to certain products",
          "require delisting of assets",
          "impose additional compliance obligations",
          "affect your ability to transact",
        ],
      ],

      "3. Technology & Smart Contract Risk": [
        `Blockchain systems can experience:`,
        [
          "bugs",
          "exploits",
          "chain reorganizations",
          "network congestion",
          "irreversible losses",
        ],
        `Smart contract vulnerabilities can lead to partial or total asset loss.`,
      ],

      "4. Third-Party Dependency Risk": [
        `Eldora relies on external providers for:`,
        [
          "tokenization",
          "custody",
          "data aggregation",
          "compliance",
          "liquidity routing",
        ],
        `Failures or outages in these systems may affect Platform performance.`,
      ],

      "5. Project-Specific Risk": [
        `Each RWA project has its own risks, such as:`,
        [
          "default risk",
          "operational risk",
          "fraud or misrepresentation",
          "poor execution",
          "milestone failure",
          "asset illiquidity or depreciation",
        ],
        `Eldora does not verify or guarantee project outcomes.`,
      ],

      "6. Token Risk": [
        `Holding $ELD or other project tokens may involve:`,
        [
          "price volatility",
          "utility changes",
          "lack of secondary markets",
          "smart contract risks",
        ],
        `Tokens do not represent equity or ownership.`,
      ],

      "7. No Guarantees": [
        `Eldora does not guarantee:`,
        [
          "returns",
          "liquidity",
          "project completion",
          "regulatory approval",
          "uninterrupted availability of services",
        ],
        `Users must accept the possibility of total loss.`,
      ],

      "8. Personal Responsibility": [
        `You are solely responsible for:`,
        [
          "your investment decisions",
          "reviewing project documentation",
          "complying with laws in your jurisdiction",
          "assessing your risk tolerance",
        ],
      ],

      "9. Contact": ["hello@eldora.do", "eldora.do"],
    },
  },
} as const;

export default function CookiePolicyPage() {
  const { hash } = useLocation();
  const [activeNav, setActiveNav] = useState<keyof typeof contents>(() => {
    const id = hash && hash.startsWith("#") ? hash.slice(1) : "";
    return (id && id in contents ? id : "terms") as keyof typeof contents;
  });
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0E1723] relative">
      <aside
        className="w-64 border-r-2 border-accent 
      px-8 py-12 fixed top-0 left-0 bottom-0 hidden lg:block"
      >
        <Button variant={"secondary"} onClick={() => navigate("/")}>
          <ArrowLeft />
          <p>Back</p>
        </Button>

        <nav className="space-y-6 mt-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                setActiveNav(item.id);
              }}
              className={`block text-left transition-colors ${
                activeNav === item.id
                  ? "font-semibold text-accent"
                  : "text-muted-foreground hover:text-white"
              } cursor-pointer`}
            >
              {/* <span className="mr-2">{item.number}.</span> */}
              <span>{item.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 p-4 lg:p-12 lg:pl-76">
        <header className="flex-between items-end">
          <img src={eldora} alt="" />

          <div className="text-right text-white">
            Last updated: December 7th, 2025
          </div>
        </header>

        <div className="mt-10 pt-5 lg:pt-10  border-t-2 border-accent">
          <div className="lg:hidden flex-between mb-10">
            <Button variant={"secondary"} onClick={() => navigate("/")}>
              <ArrowLeft />
              <p>Back</p>
            </Button>

            <Select
              value={activeNav}
              onValueChange={(e: keyof typeof contents) => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                setActiveNav(e);
              }}
            >
              <SelectTrigger className="flex-1 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {navItems.map((item) => (
                  <SelectItem
                    value={item.id}
                    key={item.id}
                    className={`block text-left transition-colors ${
                      activeNav === item.id
                        ? "font-semibold text-accent"
                        : "text-muted-foreground hover:text-white"
                    } cursor-pointer`}
                  >
                    {/* <span className="mr-2">{item.number}.</span> */}
                    <span>{item.title}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-3xl text-accent font-semibold mb-10">
            {contents[activeNav].title}
          </p>

          {activeNav === "legal" && (
            <p className="text-white">
              Use of Eldora and participation in RWA projects or tokenized asset
              ecosystems involve significant risks. By using the Platform, you
              acknowledge and accept the following risks:
            </p>
          )}
          {map(contents[activeNav].content, (value, key) => {
            return (
              <div className="text-white">
                <p className="mb-2 mt-10 font-semibold text-accent">{key}</p>
                <ul>
                  {map(value, (itemLst, index) => {
                    if (typeof itemLst === "string") {
                      return (
                        <li className="my-2" key={index}>
                          {itemLst}
                        </li>
                      );
                    }

                    if (Array.isArray(itemLst)) {
                      return (
                        <ul key={index} className="list-disc ml-6">
                          {map(itemLst, (sub, subIndex) => (
                            <li key={subIndex}>{sub}</li>
                          ))}
                        </ul>
                      );
                    }

                    return null;
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="flex-center mt-4">
          <div
            onClick={() => window.open("https://x.com/eldora_rwa", "_blank")}
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
            <img className="w-4 h-4 object-contain" src={discord} alt="x" />
          </div>
          <div
            onClick={() =>
              window.open("https://t.me/Eldoracommunity", "_blank")
            }
            className="rounded-full border border-accent lg:p-2 xl:p-3 
                  p-3 hover:bg-accent active:bg-accent duration-200 cursor-pointer"
          >
            <img className="w-4 h-4 object-contain" src={telegram} alt="x" />
          </div>

          <div
            onClick={() =>
              window.open("https://medium.com/@eldora_do", "_blank")
            }
            className="rounded-full border border-accent lg:p-2 xl:p-3 
                  p-3 hover:bg-accent active:bg-accent duration-200 cursor-pointer"
          >
            <img
              className="w-4 h-4 object-contain rounded-full"
              src={medium}
              alt="x"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
