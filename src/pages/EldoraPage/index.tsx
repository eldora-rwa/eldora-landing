import { useEffect, useState } from "react";
import { BookOpen, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { DocumentArticle } from "@/pages/DocumentPage";
import {
  legalPartTitle,
  documentSections,
} from "@/pages/DocumentPage/documentSections";
import logo from "@/assets/imgs/logo-app.svg";

export interface NavItem {
  id: keyof typeof contents;
  title: string;
}

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isUrl = (value: string) => /^https?:\/\/\S+$/i.test(value);

const navItems: NavItem[] = [
  { id: "terms", title: "1. Terms of use" },
  { id: "policy", title: "2. Privacy policy" },
  { id: "legal", title: "3. Risk Disclosure Statement" },
];

const contents = {
  terms: {
    title: "TERMS OF USE",
    content: {
      [`1. Acceptance of Terms`]: [
        `Effective Date: May 19, 2026`,
        `These Terms of Use ("Terms") govern your access to and use of the Eldora website, dashboard, and any products, tools, or services provided through Eldora (collectively, the "Platform").`,
        `By accessing or using the Platform, you confirm that you have read, understood, and agree to these Terms.`,
        `If you do not agree, do not use the Platform.`,
      ],
      [`2. About Eldora`]: [
        `Eldora is an on-chain global investing platform designed to simplify access to U.S. stocks, yield opportunities, and decentralized financial infrastructure.`,
        `Through a single dashboard and single KYC, users in 85+ countries can:`,
        [
          "Own tokenized U.S. stocks such as $AAPL, $NVDA, and $TSLA",
          "Earn yield through institutional-grade T-Bill strategies (currently ~5.3% APY)",
          "Access to on-chain lending infrastructure",
          "Manage assets across multiple supported networks",
        ],
        `Eldora aggregates regulated and institutional-grade infrastructure, including Dinari, Maple Finance, and Morpho, into one connected investing experience.`,
        `Tokenized U.S. stocks on Eldora are powered by dShares via Dinari, an SEC-registered Transfer Agent framework, with underlying equities backed 1:1.`,
        `Available across Ethereum, BNB Chain, Polygon, Arbitrum, and Base - accessible 24/7, from as little as $1.`,
        `Eldora does not provide investment, legal, or tax advice, and does not custody or guarantee user assets.`,
      ],
      [`3. Eligibility`]: [
        `You may use the Platform only if:`,
        [
          "You are at least 18 years old;",
          "You have legal capacity;",
          "Your jurisdiction permits participation in blockchain, RWA, and investment-related activities.",
          "You are not located in or subject to sanctions imposed by the UN, EU, U.S. OFAC, or Switzerland;",
          "You meet any applicable regulatory classification requirements (e.g., professional, accredited, or institutional investor status).",
        ],
        `Eldora reserves the right to restrict access based on geographic or regulatory considerations without prior notice.`,
      ],

      [`4. No Investment Advice`]: [
        `All content, data, analytics, listings, and commentary on the Platform are provided for informational purposes only. Nothing on the Platform shall constitute:`,
        [
          "investment advice;",
          "a recommendation or solicitation to buy or sell any asset;",
          "an endorsement of any project, token, or asset.",
        ],
        `Users bear full responsibility for their own investment decisions.`,
      ],

      [`5. No Offer of Securities`]: [
        `The Platform does not offer, sell, or solicit securities.`,
        `Independent third parties provide project listings and tokenized assets, and Eldora does not validate or guarantee their regulatory classification.`,
        `Users must independently ensure compliance with applicable securities laws in their jurisdiction.`,
      ],

      [`6. Regulatory Compliance & Applicable Law`]: [
        `The global regulatory environment for digital assets and real-world assets (RWAs) continues to evolve. Users acknowledge that:`,
        [
          "The U.S. GENIUS Act (signed July 2025) established a federal framework for tokenized payment instruments and stablecoins, which may affect certain Platform features;",
          "Applicable securities, AML, KYC, and digital asset regulations vary by jurisdiction and may change;",
          "Eldora may be required to delist assets, restrict services, or impose additional compliance obligations to remain compliant;",
          "Users are solely responsible for determining whether their use of the Platform complies with local law.",
        ],
      ],

      [`7. Third-Party Integrations`]: [
        `The Platform relies on external providers, including but not limited to:`,
        [
          "Tokenization protocols (e.g., Dinari dShares)",
          "Yield and lending infrastructure (e.g., Maple Finance, Morpho)",
          "KYC/AML partners",
          "Custodians and data/API vendors",
          "Liquidity sources and oracle providers",
        ],
        `Eldora is not responsible for the content, availability, or performance of third-party services and makes no warranties regarding their accuracy, reliability, or continued availability.`,
      ],

      [`8. User Responsibilities`]: [
        `Users agree to:`,
        [
          "comply with all laws applicable to their activities on the Platform;",
          "complete KYC/AML procedures when required;",
          "provide accurate, current, and complete information;",
          "Use the Platform only for lawful purposes;",
          "refrain from exploiting vulnerabilities, scraping data, or reverse-engineering any part of the Platform.",
        ],
        `Eldora may suspend or terminate accounts for violations of these Terms at its sole discretion.`,
      ],

      [`9. Platform Availability`]: [
        `The Platform is provided "as is" and "as available", without guarantees of uptime, uninterrupted access, or error-free performance. Availability may be affected by third-party API rate limits, blockchain network congestion, outages, or maintenance.`,
      ],

      [`10. Intellectual Property`]: [
        `All content, trademarks, branding, features, and tools on the Platform are the exclusive property of Eldora or its licensors. Users may not copy, modify, distribute, or create derivative works without prior written permission from Eldora.`,
      ],

      [`11. Limitation of Liability`]: [
        `To the fullest extent permitted by applicable law:`,
        [
          "Eldora shall not be liable for any loss of capital, profits, revenue, or data arising from use of the Platform;",
          "Eldora shall not be responsible for third-party project failures, misleading statements, or regulatory breaches by third parties;",
          "Eldora shall not be responsible for risks associated with blockchain technology, smart contracts, market volatility, or regulatory changes.",
        ],
        `Users use the Platform entirely at their own risk.`,
      ],

      [`12. Indemnification`]: [
        `You agree to indemnify and hold harmless Eldora, its affiliates, directors, officers, and employees from any claims, damages, losses, or expenses arising from:`,
        [
          "your use of or inability to use the Platform;",
          "your interactions with third-party projects or service providers;",
          "your violation of these Terms;",
          "disputes between you and external service providers.",
        ],
      ],

      [`13. Changes to the Terms`]: [
        `Eldora may update these Terms at any time. Material changes will be communicated via the Platform or email. Continued use of the Platform following publication of updated Terms constitutes acceptance.`,
      ],

      [`14. Governing Law`]: [
        `These Terms are governed by the laws of Switzerland and are under the exclusive jurisdiction of the courts of Zurich, unless otherwise required by mandatory local law.`,
      ],

      [`15. Contact`]: [`hello@eldora.do`, `https://eldora.network/`],
    },
  },
  policy: {
    title: "PRIVACY POLICY",
    content: {
      "1. Data Controller": [
        `GDPR + Swiss FADP Compliant - Effective Date: May 19, 2026`,
        `Eldora ("we", "us", "our") operates the website https://eldora.network/ and associated services. We comply with:`,
        [
          "Swiss Federal Act on Data Protection (FADP, revised version in force since 1 September 2023)",
          "EU General Data Protection Regulation (GDPR, Regulation 2016/679)",
        ],
      ],

      "2. Personal Data We Collect": [
        `A. Information You Provide`,
        [
          "Name, email address, and contact details",
          "Submitted forms and investor profile information",
          "KYC/AML data (collected and processed exclusively by regulated third-party partners)",
        ],
        `B. Automatically Collected Data`,
        [
          "IP addresses and device identifiers",
          "Cookies and analytics data",
          "Log files and usage metrics",
        ],
        `C. Third-Party Data Sources`,
        [
          "Compliance and identity verification partners",
          "Blockchain analytics tools",
          "Public blockchain data",
          "Project listings and APIs",
        ],
      ],

      "3. Purpose of Processing": [
        `We process personal data to:`,
        [
          "Provide and operate Platform services",
          "Facilitate connection between investors and on-chain investment opportunities",
          "Conduct KYC/AML identity verification (via regulated partners)",
          "Improve security, analytics, and Platform performance",
          "Comply with applicable legal obligations",
          "Communicate updates, announcements, and technical notifications",
        ],
        `We do not sell personal data to third parties.`,
      ],

      "4. Legal Basis for Processing (GDPR Art. 6)": [
        [
          "Contract performance (Art. 6(1)(b)) - processing necessary to provide Platform services",
          "Legitimate interests (Art. 6(1)(f)) - fraud prevention, security, analytics",
          "Compliance with legal obligations (Art. 6(1)(c)) - AML/KYC, regulatory reporting",
          "Explicit consent (Art. 6(1)(a)) - for non-essential cookies and marketing communications",
        ],
      ],

      "5. KYC/AML & Compliance Partners": [
        `KYC/AML verification is performed exclusively by regulated third-party partners. Eldora does not store full KYC data on its own servers. Data retention and security standards are governed by our partners' regulatory obligations and their data processing agreements with Eldora.`,
      ],

      "6. Cookies": [
        `The Platform may use:`,
        [
          "Essential cookies - required for Platform functionality",
          "Analytics cookies - to understand usage and improve performance",
          "Preference cookies - to remember user settings",
        ],
        `Users in the EU/EEA may opt out of non-essential cookies at any time through our cookie preference center, accessible via the Platform footer. Essential cookies cannot be disabled.`,
      ],

      "7. Data Retention": [
        `We retain personal data only as long as:`,
        [
          "required to deliver Platform services;",
          "required by applicable law (e.g., AML record-keeping obligations);",
          "required for legitimate interests such as fraud prevention and dispute resolution.",
        ],
        `Upon request or account closure, personal data is deleted or anonymized within 30 days, except where longer retention is legally required.`,
      ],

      "8. Your Rights": [
        `Under the GDPR and Swiss FADP, you have the right to:`,
        [
          "Access your personal data",
          "Request correction of inaccurate data",
          `Request deletion ("right to be forgotten")`,
          "Request restriction of processing",
          "Data portability",
          "Withdraw consent at any time",
          "Object to certain types of processing",
        ],
        `To exercise any of these rights, contact us at hello@eldora.do. We will respond within 30 days (GDPR) or 30 days (FADP) of receipt.`,
      ],

      "9. International Data Transfers": [
        `Data may be processed in jurisdictions outside Switzerland or the EEA. Where such transfers occur, Eldora ensures adequate protection through:`,
        [
          "EU adequacy decisions;",
          "Standard Contractual Clauses (SCCs) approved by the European Commission;",
          "Swiss SCCs or equivalent measures under FADP.",
        ],
      ],

      "10. Security Measures": [
        `We implement appropriate technical and organizational measures, including:`,
        [
          "Encryption of data in transit and at rest",
          "Access controls and the principle of least privilege",
          "Secure server infrastructure",
          "Regular security audits and penetration testing",
        ],
        `No system is fully secure. Users acknowledge the inherent risks of transmitting data over the internet.`,
      ],

      "11. Children's Privacy": [
        `Eldora does not knowingly collect or process personal data from individuals under the age of 18. If we become aware that a minor has provided personal data, we will promptly delete that data.`,
      ],

      "12. Changes to the Policy": [
        `We may modify this Policy at any time. Material updates will be communicated via the Platform or email. The current version is always available at https://eldora.network/`,
      ],

      "13. Contact & Supervisory Authority": [
        `For privacy inquiries: hello@eldora.do`,
        `You also have the right to lodge a complaint with your local supervisory authority (e.g., the Swiss Federal Data Protection and Information Commissioner (FDPIC) or the relevant EU data protection authority in your country of residence).`,
      ],
    },
  },
  legal: {
    title: "RISK DISCLOSURE STATEMENT",
    content: {
      "1. Market Risk": [
        `RWAs, digital assets, and tokens can fluctuate significantly in value.`,
        `There is no guarantee of profitability, yield continuity, or liquidity.`,
        `Past performance of any asset or strategy is not indicative of future results.`,
      ],

      "2. Regulatory Risk": [
        `The regulatory landscape for digital assets and RWAs is evolving rapidly. Changes to laws and regulations - including securities regulation, AML/KYC requirements, digital asset frameworks (such as the U.S. GENIUS Act or equivalent legislation in other jurisdictions), and cross-border financial rules - may:`,
        [
          "restrict or prohibit access to certain products or features;",
          "require delisting of assets;",
          "impose additional compliance obligations on users or Eldora;",
          "affect your ability to transact, withdraw, or access assets.",
        ],
      ],

      "3. Technology & Smart Contract Risk": [
        `Blockchain systems and smart contracts can experience:`,
        [
          "software bugs and exploits",
          "chain reorganizations or forks",
          "network congestion and high gas fees",
          "protocol upgrades that alter functionality",
          "irreversible losses resulting from smart contract vulnerabilities",
        ],
        `Smart contract vulnerabilities may lead to partial or total loss of assets. Eldora does not guarantee the security of any underlying smart contract infrastructure.`,
      ],

      "4. Third-Party Dependency Risk": [
        `Eldora relies on external providers for tokenization (Dinari), yield generation (Maple Finance), lending (Morpho), KYC/AML compliance, data aggregation, and liquidity routing. Failures, outages, insolvency, or regulatory actions affecting these providers may materially impact Platform performance or user assets.`,
      ],

      "5. Project-Specific Risk": [
        `Each RWA project listed on or accessible through the Platform carries its own risks, including:`,
        [
          "default risk and credit risk",
          "operational and execution risk",
          "fraud or misrepresentation by project teams",
          "milestone failure or asset illiquidity",
          "depreciation or total loss of asset value",
        ],
        `Eldora does not verify, underwrite, or guarantee outcomes for any project.`,
      ],

      "6. Liquidity Risk": [
        `Tokenized assets may have limited or no secondary market liquidity. Users may be unable to sell or transfer assets at a desired price or at a desired time. Some assets may only be redeemable through specific redemption windows or processes governed by third-party issuers.`,
      ],

      "7. No Guarantees": [
        `Eldora does not guarantee:`,
        [
          "investment returns or yield rates",
          "liquidity or ability to exit positions",
          "project completion or delivery",
          "regulatory approval of any asset",
          "uninterrupted availability of the Platform or services",
        ],
        `Users must accept the possibility of partial or total loss of funds.`,
      ],

      "8. Personal Responsibility": [
        `You are solely responsible for:`,
        [
          "your investment and financial decisions",
          "reviewing all project documentation and third-party disclosures",
          "complying with all applicable laws and tax obligations in your jurisdiction",
          "assessing your own risk tolerance and financial situation",
        ],
        `Nothing on the Platform constitutes financial, legal, or tax advice. You should seek independent professional advice before making any investment decision.`,
      ],

      "9. Contact": ["hello@eldora.do", "https://eldora.network/"],
    },
  },
} as const;

type LegalNavId = keyof typeof contents;
type ActiveNavId = LegalNavId | "documentation";
type LegalContentItem = string | readonly string[];
type LegalContentEntries = Array<[string, readonly LegalContentItem[]]>;

const documentMenuItems = documentSections.map((section) => ({
  id: section.id,
  title: section.title,
  part: section.part,
}));

type DocumentMenuItem = (typeof documentMenuItems)[number];

const overviewDocumentMenuItem = documentMenuItems.find(
  (item) => item.title === "Overview",
);

const contactSupportDocumentMenuItem = documentMenuItems.find((item) =>
  item.title.includes("Contact & Support"),
);

const documentMenuGroups = documentMenuItems.reduce<
  Array<{ title: string; items: DocumentMenuItem[] }>
>((groups, item) => {
  if (!item.part) {
    return groups;
  }

  const group = groups.find((currentGroup) => currentGroup.title === item.part);

  if (group) {
    group.items.push(item);
    return groups;
  }

  groups.push({ title: item.part, items: [item] });
  return groups;
}, []);

const visibleDocumentMenuGroups = documentMenuGroups
  .filter((group) => group.title !== legalPartTitle)
  .map((group) => ({
    title: group.title,
    items: group.items.filter(
      (item) => item.id !== contactSupportDocumentMenuItem?.id,
    ),
  }))
  .filter((group) => group.items.length > 0);

const getHashId = (hash: string) =>
  hash && hash.startsWith("#") ? hash.slice(1) : "";

const isLegalNavId = (id: string): id is LegalNavId => id in contents;

const isDocumentSectionId = (id: string) =>
  documentMenuItems.some((item) => item.id === id);

const scrollToTop = () => {
  const target = document.getElementById("eldora-content");
  const top = target
    ? target.getBoundingClientRect().top + window.scrollY - 88
    : 0;
  window.scrollTo({ top, behavior: "smooth" });
};

const scrollToDocumentSection = (sectionId: string) => {
  window.setTimeout(() => {
    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top });
  }, 0);
};

const renderInlineContent = (value: string) => {
  if (isEmail(value)) {
    return (
      <a
        href={`mailto:${value}`}
        className="font-medium underline underline-offset-4"
      >
        {value}
      </a>
    );
  }

  if (isUrl(value)) {
    return (
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 font-medium underline underline-offset-4"
      >
        {value}
        <ExternalLink size={14} />
      </a>
    );
  }

  return value;
};

interface EldoraSidebarProps {
  activeNav: ActiveNavId;
  activeDocumentSection: string | null;
  onSelectLegal: (id: LegalNavId) => void;
  onSelectDocumentSection: (id: string) => void;
}

function EldoraSidebar({
  activeNav,
  activeDocumentSection,
  onSelectLegal,
  onSelectDocumentSection,
}: EldoraSidebarProps) {
  const { setOpenMobile } = useSidebar();

  const handleLegalSelect = (id: LegalNavId) => {
    onSelectLegal(id);
    setOpenMobile(false);
  };

  const handleDocumentSectionSelect = (id: string) => {
    onSelectDocumentSection(id);
    setOpenMobile(false);
  };

  return (
    <Sidebar collapsible="offcanvas" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Home"
              onClick={() => {
                setOpenMobile(false);
                window.open("/", "_self");
              }}
              className="h-14 justify-center"
            >
              <img src={logo} alt="Eldora" className="h-6 w-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="overflow-x-hidden">
        <SidebarGroup>
          <SidebarGroupLabel>Legal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={activeNav === item.id}
                    onClick={() => handleLegalSelect(item.id)}
                    className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                  >
                    {item.id === "legal" ? <ShieldCheck /> : <FileText />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Documentation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {overviewDocumentMenuItem ? (
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={overviewDocumentMenuItem.title}
                    isActive={
                      activeNav === "documentation" &&
                      activeDocumentSection === overviewDocumentMenuItem.id
                    }
                    onClick={() =>
                      handleDocumentSectionSelect(overviewDocumentMenuItem.id)
                    }
                    className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                  >
                    <BookOpen />
                    <span>{overviewDocumentMenuItem.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : null}
            </SidebarMenu>

            {visibleDocumentMenuGroups.map((group) => (
              <SidebarMenu key={group.title}>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip={group.title}>
                    <FileText />
                    <span>{group.title}</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {group.items.map((item) => (
                      <SidebarMenuSubItem key={item.id}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={
                            activeNav === "documentation" &&
                            activeDocumentSection === item.id
                          }
                          className="w-full data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                        >
                          <button
                            type="button"
                            onClick={() => handleDocumentSectionSelect(item.id)}
                          >
                            <span>{item.title}</span>
                          </button>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            ))}

            <SidebarMenu>
              {contactSupportDocumentMenuItem ? (
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={contactSupportDocumentMenuItem.title}
                    isActive={
                      activeNav === "documentation" &&
                      activeDocumentSection === contactSupportDocumentMenuItem.id
                    }
                    onClick={() =>
                      handleDocumentSectionSelect(
                        contactSupportDocumentMenuItem.id,
                      )
                    }
                    className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                  >
                    <FileText />
                    <span>{contactSupportDocumentMenuItem.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : null}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Launch App"
              onClick={() => window.open("https://app.eldora.do", "_self")}
            >
              <ExternalLink />
              <span>Launch App</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

interface LegalArticleProps {
  activeNav: LegalNavId;
}

function LegalArticle({ activeNav }: LegalArticleProps) {
  const activeContent = contents[activeNav];

  return (
    <article className="mx-auto max-w-4xl">
      <div className="mb-8 flex flex-col gap-2 border-b pb-6">
        <p className="text-sm text-muted-foreground">Eldora Legal</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          {activeContent.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: May 19, 2026
        </p>
      </div>

      {activeNav === "legal" ? (
        <p className="mb-8 leading-7 text-muted-foreground">
          Use of Eldora and participation in RWA projects or tokenized asset
          ecosystems involve significant risks. By using the Platform, you
          acknowledge and accept the following risks:
        </p>
      ) : null}

      <div className="flex flex-col gap-10">
        {(Object.entries(activeContent.content) as LegalContentEntries).map(
          ([sectionTitle, value]) => (
            <section key={sectionTitle} className="scroll-mt-28">
              <h2 className="text-xl font-semibold">{sectionTitle}</h2>

              <div className="mt-4 flex flex-col gap-3 leading-7 text-muted-foreground">
                {value.map((item, index) => {
                  if (typeof item === "string") {
                    return (
                      <p key={`${sectionTitle}-${index}`}>
                        {renderInlineContent(item)}
                      </p>
                    );
                  }

                  return (
                    <ul
                      key={`${sectionTitle}-${index}`}
                      className="ml-6 flex list-disc flex-col gap-2"
                    >
                      {item.map((subItem) => (
                        <li key={subItem}>{renderInlineContent(subItem)}</li>
                      ))}
                    </ul>
                  );
                })}
              </div>
            </section>
          ),
        )}
      </div>
    </article>
  );
}

export default function EldoraPage() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState<ActiveNavId>(() => {
    const id = getHashId(hash);

    if (isLegalNavId(id)) {
      return id;
    }

    return isDocumentSectionId(id) ? "documentation" : "terms";
  });
  const [activeDocumentSection, setActiveDocumentSection] = useState<
    string | null
  >(() => {
    const id = getHashId(hash);

    return isDocumentSectionId(id) ? id : (documentMenuItems[0]?.id ?? null);
  });

  useEffect(() => {
    const id = getHashId(hash);

    if (isLegalNavId(id)) {
      setActiveNav(id);
      setActiveDocumentSection(null);
      scrollToTop();
      return;
    }

    if (isDocumentSectionId(id)) {
      setActiveNav("documentation");
      setActiveDocumentSection(id);
      scrollToDocumentSection(id);
      return;
    }

    scrollToTop();
  }, [hash]);

  const handleSelectLegal = (id: LegalNavId) => {
    setActiveNav(id);
    setActiveDocumentSection(null);
    navigate(`/eldora#${id}`, { replace: true });
    scrollToTop();
  };

  const handleSelectDocumentSection = (sectionId: string) => {
    setActiveNav("documentation");
    setActiveDocumentSection(sectionId);
    navigate(`/eldora#${sectionId}`, { replace: true });
    scrollToDocumentSection(sectionId);
  };

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <EldoraSidebar
        activeNav={activeNav}
        activeDocumentSection={activeDocumentSection}
        onSelectLegal={handleSelectLegal}
        onSelectDocumentSection={handleSelectDocumentSection}
      />

      <SidebarInset>
        <header className="sticky top-0 z-30 border-b bg-background lg:hidden">
          <div className="flex items-center justify-between gap-4 p-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex items-center"
            >
              <img src={logo} alt="Eldora" className="h-6 w-auto" />
            </button>
            <SidebarTrigger />
          </div>
        </header>

        <main id="eldora-content" className="px-4 py-10 lg:px-10 lg:py-14">
          {activeNav === "documentation" ? (
            <div className="mx-auto max-w-5xl">
              <DocumentArticle embedded />
            </div>
          ) : (
            <LegalArticle activeNav={activeNav} />
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
