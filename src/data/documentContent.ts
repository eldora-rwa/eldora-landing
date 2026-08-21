export type DocumentBlock =
  | { type: "paragraph"; style: string; text: string }
  | { type: "table"; rows: string[][] }
  | { type: "image"; src: string; alt: string; note: null }
  | { type: "imagePlaceholder"; alt: string; note: string };

export interface DocumentContent {
  meta: { title: string; subtitle: string; imageCount: number; source: string };
  blocks: DocumentBlock[];
}

export const documentContent: DocumentContent = {
  meta: {
    title: "Eldora",
    subtitle: "Platform Documentation & User Guide",
    imageCount: 9,
    source: "/Users/hoangkhoi/Downloads/ Documentation Eldora.docx",
  },
  blocks: [
    {
      type: "paragraph",
      style: "Title",
      text: "Eldora",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Platform Documentation & User Guide",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "On-Chain Investing · Tokenized Equities · DeFi Yield · DEX",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "277+ Assets · 85+ Countries · 10,000+ Users · 5.3% T-Bill APY",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Version 1.0 · June 2026 · app.eldora.do",
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "Overview",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Platform Guide",
    },
    {
      type: "table",
      rows: [
        [
          "1",
          "Introduction to Eldora",
          "What Eldora is · Vision · How it works · Industry context",
        ],
        [
          "2",
          "Getting Started",
          "Prerequisites · Account setup · KYC · Wallets",
        ],
        [
          "3",
          "Ghost Portfolio",
          "Simulate before investing · No account needed",
        ],
        ["4", "Observatory", "Market intelligence · Live data · AI insights"],
        [
          "5",
          "Discover Assets",
          "277+ equities · ETFs · Tokenized credit · How to buy",
        ],
        [
          "6",
          "Portfolio Management",
          "Cross-chain view · Performance tracking",
        ],
        [
          "7",
          "Lending & Yield",
          "T-Bills 5.3% · AAVE · Maple Finance · Morpho",
        ],
        ["8", "DEX — Swap & Bridge", "Token swaps · Cross-chain bridging"],
        ["9", "Leaderboard", "Leaderboard & $20K Campaign"],
        ["10", "Security & Compliance", "Custody · KYC/AML · Wallet safety"],
        [
          "11",
          "Supported Networks",
          "Ethereum · Base · Polygon · Arbitrum · BNB Chain",
        ],
        ["12", "FAQs", "Common questions answered"],
      ],
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Legal & Compliance",
    },
    {
      type: "table",
      rows: [
        ["T1", "Terms of Use", "Eligibility · Liability · Governing law"],
        ["T2", "Privacy Policy", "GDPR · Swiss FADP · Your data rights"],
        [
          "T3",
          "Risk Disclosure Statement",
          "Market · Smart contract · Regulatory · Liquidity risks",
        ],
        ["4", "Contact & Support", "All support channels · Community links"],
      ],
    },
    {
      type: "table",
      rows: [["Platform Guide"]],
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "1. Introduction to Eldora",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "What is Eldora?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora is an on-chain investment platform that gives investors around the world direct access to real US equity ownership, Treasury-bill yield, and institutional-grade DeFi lending — through a single dashboard and a single identity verification.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "For investors across Asia-Pacific, Southeast Asia, Latin America, Africa, and beyond, accessing US equities has historically meant navigating foreign brokerage registration, dollar-denominated wire transfers, high conversion fees, and markets that close over weekends. Eldora replaces that friction with blockchain-native infrastructure available 24 hours a day, 7 days a week, from $1.",
    },
    {
      type: "image",
      src: "/document-assets/document-image-1.jpg",
      alt: "Document image 1",
      note: null,
    },
    {
      type: "table",
      rows: [
        [
          "Real Ownership — Not Synthetic Every tokenized equity on Eldora is backed 1:1 by a real US-listed security held in regulated custody by Dinari, an SEC-registered transfer agent. This is not a derivative, not a synthetic price contract, and not a tracker certificate. You hold a direct legal claim on the underlying share — the same real security that trades on the NYSE or Nasdaq.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "How Tokenized Equities Work",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Tokenized equities are on-chain tokens that represent real ownership of publicly traded US stocks and ETFs. Unlike synthetic alternatives — which track prices through derivatives and carry counterparty risk — Eldora's tokenized equities are fully collateralized 1:1 by the underlying shares held in custody.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "This structure, pioneered at scale by platforms including Dinari and adopted as the industry standard, delivers three things synthetic alternatives cannot: regulated custody, legal ownership, and bankruptcy-remote asset protection.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "“Eldora is building the access layer for that transition — particularly for investors across APAC who remain underserved by traditional brokerage infrastructure.”",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "— Theophane Rame, Founder & CEO, Eldora",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Industry Context: The Tokenized Equity Market",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The tokenized equity market has matured significantly since 2025. Ondo Global Markets, now the largest tokenized stock platform by TVL, crossed $1 billion in total value locked and $18 billion in cumulative trading volume by mid-2026 — validating institutional-grade demand for on-chain equity access. Platforms, including xStocks (Backed Finance / Kraken) have further established that 1:1 collateralized, compliance-first tokenization is the market standard.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora builds on this infrastructure to deliver a complete investing platform — equities, yield, lending, and trading — in one unified interface for retail investors globally.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Core Product Pillars",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Tokenized US Equities & ETFs — Real 1:1 share ownership on-chain via Dinari (SEC-registered). 277+ assets. From $1.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Treasury-Bill Yield — ~5.3% APY on idle USDC/USDT. No minimum deposit. No lock-up. Available 24/7.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "DeFi Lending — Institutional credit markets via AAVE (127+ reserves), Maple Finance, and Morpho.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora DEX — Instant token swaps and cross-chain bridging across five networks.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Observatory — Free market intelligence dashboard: live news, on-chain analytics, AI-generated commentary.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Ghost Portfolio — Simulate any investment strategy with real market data. No capital. No KYC required.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Leaderboard — Earn points for trading and referring; compete for the $20,000 reward pool.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Platform Stats",
    },
    {
      type: "image",
      src: "/document-assets/document-image-2.jpg",
      alt: "Document image 2",
      note: null,
    },
    {
      type: "table",
      rows: [
        ["Metric", "Value"],
        ["Tokenized Assets", "277+ US equities and ETFs"],
        ["Countries Supported", "85+"],
        ["Active Users", "10,000+"],
        ["Community Members", "20,000+ across X, Discord, Telegram"],
        ["T-Bill APY", "~5.3% on idle capital (variable, tracks Fed rates)"],
        ["Active Reward Pool", "$20,000 — 12-week trading campaign"],
        ["Supported Networks", "Ethereum, Base, Polygon, Arbitrum, BNB Chain"],
        ["Minimum Investment", "From $1 — fractional positions supported"],
        ["KYC", "One-time verification unlocks all chains and products"],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "2. Getting Started",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "What You'll Need",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Before creating your account, make sure you have the following ready:",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "An EVM-compatible crypto wallet — MetaMask, Coinbase Wallet, Rabby, Trust Wallet, or any WalletConnect-compatible wallet",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "A valid government-issued photo ID — passport recommended for fastest KYC approval",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Proof of residential address — utility bill or bank statement issued within the past 3 months",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "A smartphone for the selfie/liveness identity check",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "An email address",
    },
    {
      type: "table",
      rows: [
        [
          "Geographic Restrictions Eldora is available in 85+ countries. The platform is not available to US residents due to securities regulations. Check app.eldora.do for the current supported country list before registering.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Creating Your Account — Step by Step",
    },
    {
      type: "table",
      rows: [
        ["1", "Go to app.eldora.do in your browser or open the mobile app."],
        [
          "2",
          "Click 'Connect Wallet' in the top right corner. Select your wallet provider: MetaMask, Coinbase Wallet, WalletConnect, Rabby, or Trust Wallet.",
        ],
        ["3", "Approve the wallet connection request inside your wallet app."],
        [
          "4",
          "Sign the verification message when prompted. This cryptographically confirms you own the wallet address. No gas fee is charged — signing is not an on-chain transaction.",
        ],
        [
          "5",
          "Enter your email address and click the confirmation link sent to your inbox.",
        ],
        [
          "6",
          "Complete KYC identity verification (see below) to unlock full access to trading, lending, and the DEX.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "KYC Identity Verification",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "KYC is a one-time process required to unlock access to trading, lending, and DEXs. Once approved, all platform features are permanently unlocked across all five supported networks — no re-verification is ever needed.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "KYC video",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "How to Complete KYC",
    },
    {
      type: "table",
      rows: [
        ["1", "Navigate to Account → Identity Verification in the dashboard."],
        ["2", "Select your country of residence from the dropdown."],
        [
          "3",
          "Upload a clear photo of your government-issued ID (front and back if applicable).",
        ],
        [
          "4",
          "Complete the on-screen liveness check by following the selfie instructions.",
        ],
        [
          "5",
          "Submit. Verification typically completes in under 2 minutes (up to 24 hours in rare cases).",
        ],
        [
          "6",
          "You will receive both an email confirmation and an in-app notification once approved.",
        ],
      ],
    },
    {
      type: "table",
      rows: [
        [
          "Your Data is Protected KYC is handled exclusively by a certified third-party identity verification provider. Documents are processed securely and are never stored on the blockchain. Eldora collects only the minimum data required by law. All processing complies with the GDPR and the Swiss Federal Act on Data Protection (FADP). Eldora does not sell personal data to any third party.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Supported Wallets",
    },
    {
      type: "table",
      rows: [
        ["Wallet", "Notes"],
        [
          "MetaMask",
          "The most widely used EVM wallet. Available as a browser extension and mobile app. metamask.io",
        ],
        [
          "Coinbase Wallet",
          "Self-custody mobile wallet by Coinbase. Easiest onboarding for new users.",
        ],
        [
          "WalletConnect",
          "Scan a QR code to connect any WalletConnect-compatible wallet.",
        ],
        [
          "Rabby Wallet",
          "Multi-chain browser extension with transaction simulation and smart security features. rabby.io",
        ],
        [
          "Trust Wallet",
          "Mobile wallet supporting all EVM networks. Widely used across the Asia-Pacific.",
        ],
      ],
    },
    {
      type: "table",
      rows: [
        [
          "Hardware Wallet Tip For holdings above $1,000, consider connecting a Ledger or Trezor hardware wallet via MetaMask. Your private keys never leave the device, making it significantly harder for attackers to access your assets even if your computer is compromised.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Funding Your Account",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora is crypto-native. To begin investing, you need USDC, USDT, ETH, or other supported digital assets in your wallet.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "If you already hold crypto, connect your wallet and begin investing directly.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "If you need to convert fiat to crypto, use MoonPay, integrated directly in the Eldora app, to purchase USDC or USDT with a debit/credit card or bank transfer.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Minimum investment: from $1 for tokenized equities. No minimum for the T-Bill yield product.",
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "3. Ghost Portfolio",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Ghost Portfolio is Eldora's risk-free simulation mode. It lets any visitor — with no wallet, no account, and no KYC — build a complete simulated investment portfolio using real-time market prices.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "It is the fastest way to understand Eldora's full capabilities, test allocation strategies across stocks, yield, and lending, and build conviction before committing real capital. When you are ready to go live, Ghost Portfolio positions convert directly into a real portfolio template.",
    },
    {
      type: "table",
      rows: [
        [
          "No Account Required Ghost Portfolio requires nothing — no wallet connection, no email, no KYC. Go to app.eldora.do and click 'Try Ghost Portfolio' to start in seconds.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "What You Can Do in Ghost Mode",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Browse all 277+ tokenized equities and ETFs and simulate buying or selling at real-time prices",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Allocate simulated capital to the T-Bill yield product and observe daily accruals",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Test DeFi lending strategies with simulated collateral positions across AAVE, Maple, and Morpho",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Monitor portfolio P&L in real time as live market prices move",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Build and compare multiple allocation strategies before committing capital",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Earn campaign points toward the $20K Leaderboard (verify current rules at https://app.eldora.do/referral)",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "How to Start",
    },
    {
      type: "table",
      rows: [
        ["1", "Visit app.eldora.do — no login required."],
        ["2", "Click 'Try Ghost Portfolio' on the home screen."],
        ["3", "You receive a simulated starting balance to allocate."],
        [
          "4",
          "Browse the Discover page and add assets to your Ghost Portfolio.",
        ],
        ["5", "Track performance in real time from the Portfolio page."],
        [
          "6",
          "When ready to invest with real capital, click 'Activate Account'. Your Ghost allocations are saved as a template for live deployment.",
        ],
      ],
    },
    {
      type: "table",
      rows: [
        [
          "Simulation Disclaimer Ghost Portfolio uses real-time market prices. Actual live results will differ due to transaction fees, slippage, and real-time liquidity conditions. Simulated past performance is not indicative of future live investment results.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "4. Eldora Observatory",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The Observatory is Eldora's free, login-optional market intelligence dashboard. It aggregates live data across equities, crypto, commodities, forex, and macroeconomics in a single interface — accessible before any onboarding commitment.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Access it at app.eldora.do/monitor. No account, wallet, or KYC required. It is permanently free.",
    },
    {
      type: "image",
      src: "/document-assets/document-image-3.jpg",
      alt: "Document image 3",
      note: null,
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Available Data & Features",
    },
    {
      type: "table",
      rows: [
        ["Feature", "Description"],
        [
          "Live News Feeds",
          "Real-time streams from Bloomberg, CNBC, Sky News, DW News, Al Jazeera, France 24, Yahoo Finance, Reuters, and Seeking Alpha",
        ],
        [
          "Live Market Prices",
          "Equities (SPY, QQQ), Crypto (BTC, ETH), Commodities (Gold, WTI Oil), Forex (DXY) — all live",
        ],
        [
          "Fear & Greed Index",
          "CNN Market Sentiment Index, updated continuously in real time",
        ],
        [
          "On-Chain Analytics",
          "Wallet activity, DEX volumes, protocol TVL, and on-chain flow metrics",
        ],
        [
          "Economic Calendar",
          "Central bank rate decisions, earnings releases, NFP, CPI, and macro data events",
        ],
        [
          "Watchlist",
          "Create and manage a personalized watchlist of assets to monitor",
        ],
        [
          "AI Market Commentary",
          "AI-generated summaries of current market conditions and key events, updated throughout the day",
        ],
        [
          "Crypto Overview",
          "Top movers by 24h performance, volume leaders, and market sentiment snapshot",
        ],
      ],
    },
    {
      type: "table",
      rows: [
        [
          "Free, Always The Observatory is free and will always remain free. No subscription. No paywall. Open to anyone.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "5. Discover Assets",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The Discover page is Eldora's asset marketplace: 277+ tokenized US equities and ETFs, tradable 24/7 across five blockchain networks, starting from $1.",
    },
    {
      type: "image",
      src: "/document-assets/document-image-4.png",
      alt: "Document image 4",
      note: null,
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Understanding Tokenized Equities",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora's tokenized equities are issued through Dinari, an SEC-registered transfer agent, using a 1:1 fully collateralized structure. This means each on-chain token is directly backed by the corresponding real US-listed security held in regulated custody at a licensed broker-dealer.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "This model — now the industry standard following the success of platforms like Ondo Global Markets and xStocks (Backed Finance) — differs fundamentally from earlier synthetic stock products:",
    },
    {
      type: "table",
      rows: [
        ["", "Eldora Tokenized Equities", "Synthetic / Derivative Products"],
        [
          "Backing",
          "1:1 real share in regulated custody",
          "Price-tracking contract or derivative",
        ],
        [
          "Ownership",
          "Direct legal claim on the underlying security",
          "Exposure only — no legal ownership",
        ],
        [
          "Counterparty Risk",
          "Minimal — regulated custody",
          "High — dependent on counterparty solvency",
        ],
        [
          "Dividends",
          "Distributed per Dinari policy",
          "May or may not be reflected",
        ],
        ["Custody", "SEC-regulated transfer agent", "Platform-dependent"],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Corporate Actions: Dividends & Stock Splits",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora tokenized equities handle corporate actions transparently:",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Dividends: credited to your account per Dinari's distribution policy. Check the asset detail page for specific terms.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Stock splits: reflected automatically — your token balance adjusts to maintain 1:1 exposure to the underlying security. No action required from holders.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Reverse splits: handled through the same automatic adjustment mechanism.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Trading Hours",
    },
    {
      type: "table",
      rows: [
        [
          "When Can You Trade? On-chain tokens can be bought and sold 24 hours a day, 7 days a week. However, orders that require real share creation or redemption with Dinari — including new purchases and redemptions to fiat — are executed during US market hours: Monday to Friday, 9:30 AM – 4:00 PM ET. Token-to-token transfers and on-chain swaps are always available.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Available Asset Categories",
    },
    {
      type: "table",
      rows: [
        ["Category", "Examples & Notes"],
        [
          "Technology",
          "NVDA, AAPL, MSFT, TSLA, AMZN, GOOGL, META — the most actively traded sector on Eldora",
        ],
        ["Financial", "IBKR, JPM, GS, BAC — banking and financial services"],
        ["Healthcare", "JNJ, PFE, ABBV — pharmaceutical and medical"],
        ["Energy", "XOM, CVX — major oil & gas majors"],
        [
          "Broad Market ETFs",
          "SPY (S&P 500), QQQ (Nasdaq 100), IWM (Russell 2000), GLD (Gold), TLT (Long-Term Treasuries)",
        ],
        [
          "Bitcoin-Related ETFs",
          "BITB — Bitwise Bitcoin ETF; BITX — 2x Bitcoin Strategy ETF",
        ],
        [
          "Tokenized Credit",
          "JHA — Janus Henderson AAA CLO ETF, 4.26% APY via Centrifuge. Offers yield-generating credit exposure on-chain.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "How to Buy an Asset",
    },
    {
      type: "table",
      rows: [
        ["1", "Navigate to Discover in the left sidebar."],
        [
          "2",
          "Search by company name or ticker symbol, or browse by sector category.",
        ],
        [
          "3",
          "Click an asset card to view full details: live price, custody provider, available networks, and trading status.",
        ],
        [
          "4",
          "Click 'Buy'. Enter your purchase amount in USD or token units. Fractional amounts are supported from $1.",
        ],
        [
          "5",
          "Review the full transaction summary: asset price, platform fee, and estimated network gas cost.",
        ],
        [
          "6",
          "Confirm in your wallet. The tokenized asset appears in your Portfolio once the transaction is confirmed on-chain.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "6. Portfolio Management",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The Portfolio page provides a unified view of all your holdings across every supported blockchain network. Track performance, monitor P&L, and manage positions from one dashboard — regardless of which chain your assets live on.",
    },
    {
      type: "image",
      src: "/document-assets/document-image-5.png",
      alt: "Document image 5",
      note: null,
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Portfolio Views",
    },
    {
      type: "table",
      rows: [
        ["Tab", "What You'll See"],
        [
          "Overview",
          "Total portfolio value in USD with a performance chart (1D / 1W / 1M / 1Y timeframes), plus an asset allocation breakdown by type and network",
        ],
        [
          "Stocks",
          "All tokenized equity positions — entry price, current price, unrealized P&L, quantity held, and network",
        ],
        [
          "Lending",
          "All active yield and lending positions — current balances, live APY, and accrued interest to date",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Switching Networks",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Use the network selector in the top navigation bar to switch between Ethereum, Base, Polygon, Arbitrum, and BNB Chain. The Overview tab automatically aggregates all chain balances into a single USD total.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Researching Other Wallets",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The Portfolio page includes a public wallet lookup. Type any wallet address into the search bar to view that wallet's publicly visible holdings — useful for researching investor strategies or verifying your own positions across multiple addresses.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Performance Tracking",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The performance chart tracks the total USD value of your portfolio over selectable timeframes. You can toggle between 1 Day, 1 Week, 1 Month, and 1 Year views. Gains and losses are displayed both in absolute USD terms and as percentages.",
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "7. Lending & Yield",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The Lending module combines four yield and credit opportunities in a single dashboard: a native T-Bill yield product and three integrated institutional DeFi protocols. You can deploy capital across multiple sources simultaneously, balancing return expectations against risk tolerance.",
    },
    {
      type: "image",
      src: "/document-assets/document-image-6.png",
      alt: "Document image 6",
      note: null,
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "T-Bill Yield — ~5.3% APY",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The T-Bill product is the simplest, lowest-risk way to put idle stablecoins to work. It is backed by short-duration US Treasury bills, requires no broker intermediary, and has no lock-up.",
    },
    {
      type: "table",
      rows: [
        ["Feature", "Details"],
        ["APY", "~5.3% variable (tracks US Federal Reserve benchmark rates)"],
        ["Supported Assets", "USDC and USDT"],
        ["Minimum Deposit", "None — start with any amount"],
        ["Lock-up Period", "None — withdraw at any time"],
        ["Yield Accrual", "Daily, compounding automatically"],
        ["Availability", "All five supported networks, 24/7"],
        [
          "Risk Level",
          "Minimal principal risk (backed by US government obligations)",
        ],
      ],
    },
    {
      type: "table",
      rows: [
        [
          "Put Idle Capital to Work Stablecoins sitting in your wallet earn 0%. The T-Bill product earns yield from the moment you deposit, with no lock-up and no minimum. You can withdraw at any time with no penalty.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "AAVE",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "AAVE is the largest DeFi lending protocol by total value locked, with 127+ supported asset reserves. On Eldora, you can supply assets to earn variable interest or borrow against your collateral. Tokenized equity positions held on Eldora can be used as collateral for stablecoin loans.",
    },
    {
      type: "table",
      rows: [
        ["Asset", "Variable APY — Total Borrowed"],
        ["USDT", "3.49% APY — $1.97B total borrowed"],
        ["USDC", "4.02% APY — $1.87B total borrowed"],
        ["RLUSD", "2.85% APY — $133.4M total borrowed"],
        ["USDe", "2.96% APY — $226.4M total borrowed"],
        ["USDtb", "3.11% APY — $146.1M total borrowed"],
      ],
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Rates are variable and update continuously at https://app.eldora.do/lending. All figures are indicative and reflect live market conditions at the time of publication.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Maple Finance",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Maple Finance provides institutional-grade credit pools that lend to professionally credit-screened borrowers, rather than anonymous on-chain counterparties. This structure delivers meaningfully lower counterparty risk compared to standard DeFi lending.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Syrup USDC — 4.45% APY",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "$1.4B+ in total assets under management",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "All borrowers are vetted and credit-assessed by Maple's institutional credit team",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Designed for capital that needs a reliable, institutional-grade yield without the volatility of open DeFi",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Morpho",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Morpho provides capital-efficient, curated lending vaults that route capital to maximize rates across AAVE and Compound. Each vault is curated and trusted by top DeFi protocols.",
    },
    {
      type: "table",
      rows: [
        ["Collateral / Loan", "LLTV — Rate — Market Size"],
        ["cbBTC / USDC", "86% LLTV — 4.52% — $1.4B"],
        ["WETH / USDC", "86% LLTV — 4.62% — $216M"],
        ["cbETH / USDC", "77% LLTV — 4.53% — $149M"],
        ["wstETH / USDC", "86% LLTV — 4.84% — $105M"],
      ],
    },
    {
      type: "paragraph",
      style: "normal",
      text: "LLTV = Liquidation Loan-to-Value. Rates are variable.",
    },
    {
      type: "table",
      rows: [
        [
          "Lending Risk Disclosure DeFi lending carries smart contract, liquidation, and market risks. APY rates are variable and can decrease. Only supply capital you can afford to lose entirely. Review each protocol’s own documentation before depositing. The T-Bill product carries minimal principal risk, but its yield rate is not guaranteed and will change with Federal Reserve policy.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "8. DEX — Swap & Bridge",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora DEX enables instant token swaps and cross-chain asset bridging. It aggregates rates from available on-chain liquidity sources and always shows you the estimated rate, fees, and price impact before you confirm.",
    },
    {
      type: "image",
      src: "/document-assets/document-image-7.png",
      alt: "Document image 7",
      note: null,
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Swapping Tokens",
    },
    {
      type: "table",
      rows: [
        ["1", "Navigate to Dex in the left sidebar."],
        ["2", "Select the token you want to sell from the SELL dropdown."],
        ["3", "Select the token you want to receive from the BUY dropdown."],
        ["4", "Enter the amount."],
        ["5", "Review the quoted rate, estimated price impact, and gas fee."],
        ["6", "Click 'Review Swap', then confirm in your wallet."],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Cross-Chain Bridging",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Bridge assets between any of the five supported networks: Ethereum, Base, Polygon, Arbitrum, and BNB Chain. Bridging lets you move tokenized equities or stablecoins to networks with lower gas costs or better lending rates.",
    },
    {
      type: "table",
      rows: [
        [
          "Bridging Times Most bridge transactions are completed in under 1 minute. Some bridge routes may take 2–10 minutes, depending on destination chain confirmation times. Always ensure you have sufficient gas tokens on the destination chain before initiating the transaction. The DEX displays an estimated completion time before you confirm.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Transaction History",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "All swap and bridge activity is permanently logged at the bottom of the DEX page. Each entry shows: date and time, transaction type, tokens involved, amounts, gas fees paid, and the on-chain transaction hash for independent verification via a block explorer.",
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "9. Leaderboard & $20K Trading Campaign",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora's public Leaderboard is a real-time ranking of all users on the platform. The $20,000 Trading Campaign rewards genuine platform engagement — trading equities, deploying to lending, and referring new investors — over a 12-week period starting early June 2026.",
    },
    {
      type: "image",
      src: "/document-assets/document-image-8.jpg",
      alt: "Document image 8",
      note: null,
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Campaign Overview",
    },
    {
      type: "table",
      rows: [
        ["Detail", "Value"],
        ["Total Reward Pool", "$20,000"],
        ["Campaign Duration", "12 weeks starting early June 2026"],
        ["Leaderboard", "Live and public at https://app.eldora.do/referral"],
        [
          "Reward Allocation",
          "Based on total points accumulated during the campaign window",
        ],
        ["Eligibility", "All KYC-verified users in supported countries"],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "How to Earn Points",
    },
    {
      type: "table",
      rows: [
        ["Activity", "How Points Work"],
        [
          "Trade & Earn",
          "1 point per $1 of trading volume. Applies to equity purchases and sales, DEX swaps, and lending deposits.",
        ],
        [
          "Refer a Friend",
          "Points are awarded when a referred user completes KYC and begins trading. Both referrer and referee earn points.",
        ],
        [
          "Ghost Portfolio",
          "Simulated portfolio activity may contribute campaign points — verify current rules at https://app.eldora.do/referral",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Leaderboard Views",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Transaction — Overall ranking by total points accumulated",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Referral — Ranking by number of verified referrals generated",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Volume — Ranking by total trading and lending volume",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Your Referral Link",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Your unique referral link is displayed on the Leaderboard page under 'Your Referral Link'. Share it on Twitter/X, Telegram, Discord, or directly with friends. Format:",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "https://app.eldora.do/r/[your-code]",
    },
    {
      type: "table",
      rows: [
        [
          "Leaderboard is Public All rankings are publicly visible in real time. This creates a transparent, competitive environment where anyone can verify standings and track the campaign’s progress.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "10. Security & Compliance",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Regulatory & Custody Framework",
    },
    {
      type: "table",
      rows: [
        ["Area", "Details"],
        [
          "Equity Custody",
          "Dinari — SEC-registered transfer agent. All underlying securities held with US-registered custodial broker-dealers under US regulatory oversight.",
        ],
        [
          "KYC / AML",
          "Certified third-party identity verification provider. Fully FATF-compliant procedures. Complies with Swiss and EU AML requirements.",
        ],
        [
          "Smart Contracts",
          "Independently audited across all five supported networks. Audit reports available on request.",
        ],
        [
          "Data Privacy",
          "GDPR and Swiss FADP compliant. Minimum data collection policy. Personal data is never sold to third parties.",
        ],
        [
          "Corporate Structure",
          "Incorporated in Zurich, Switzerland. Operating in 85+ countries.",
        ],
        [
          "Attestations",
          "Asset custody and collateralization are subject to independent third-party verification.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Non-Custodial Architecture",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora is entirely non-custodial. You always hold your own private keys. Eldora has no ability to access, move, freeze, or recover your assets. This means:",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "You are the sole custodian of your assets — Eldora cannot touch them",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Recovery of a lost private key or seed phrase is impossible for Eldora or any other party",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Every transaction requires your explicit wallet confirmation",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Wallet Security Best Practices",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Never share your seed phrase or private key with anyone — including Eldora support staff",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Use a hardware wallet (Ledger or Trezor) for holdings above $1,000",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Enable two-factor authentication (2FA) on any exchange or custodial service that holds your assets",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Always review full transaction details before confirming in your wallet",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Bookmark app.eldora.do and verify the URL every session before connecting",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Be skeptical of any unsolicited message claiming to be from Eldora",
    },
    {
      type: "table",
      rows: [
        [
          "Phishing Warning — Important Eldora will NEVER ask for your seed phrase, private key, or wallet password via email, Telegram, Discord, or any other channel. Any communication requesting these is a scam. Report suspicious activity immediately to hello@eldora.do.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "11. Supported Networks",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "All Eldora products — tokenized equities, T-Bill yield, DeFi lending, and the DEX — are available across all five supported networks. A single KYC verification permanently unlocks all chains.",
    },
    {
      type: "image",
      src: "/document-assets/document-image-9.jpg",
      alt: "Document image 9",
      note: null,
    },
    {
      type: "table",
      rows: [
        ["Network", "Type — Characteristics — Best Use"],
        [
          "Ethereum",
          "Layer 1 — Highest security and decentralization. Higher gas costs. Best for large, infrequent positions.",
        ],
        [
          "Base",
          "Coinbase Layer 2 — Very low gas fees, high throughput. Best choice for frequent trading and smaller positions.",
        ],
        [
          "Polygon",
          "EVM Layer 2 — Fast and low-cost. Widely used across Asia-Pacific retail investors.",
        ],
        [
          "Arbitrum",
          "Ethereum Layer 2 (Optimistic Rollup) — Low cost, excellent Ethereum ecosystem compatibility.",
        ],
        [
          "BNB Chain",
          "Binance Smart Chain — High liquidity, low fees. Most popular chain among active traders in APAC.",
        ],
      ],
    },
    {
      type: "table",
      rows: [
        [
          "One KYC, All Chains Complete KYC once, and all five networks are permanently unlocked. You never need to re-verify to access a new network or product. Assets on any network are all visible together in the Portfolio Overview.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Gas Fees by Network",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Gas fees are paid to the blockchain network (not to Eldora) to process on-chain transactions. Approximate typical ranges:",
    },
    {
      type: "table",
      rows: [
        ["Network", "Typical Gas Range"],
        ["Ethereum", "$2 – $20+ per transaction (highest, highly variable)"],
        ["Arbitrum", "$0.10 – $1.00 per transaction"],
        [
          "Base",
          "$0.01 – $0.50 per transaction (recommended for frequent use)",
        ],
        ["Polygon", "$0.01 – $0.20 per transaction"],
        ["BNB Chain", "$0.05 – $0.50 per transaction"],
      ],
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Gas estimates are approximate and subject to fluctuations due to network congestion. Actual cost is always shown before you confirm any transaction.",
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "12. Frequently Asked Questions",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Getting Started",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "Is Eldora available in my country?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora is available in 85+ countries. It is not available to US residents. Go to app.eldora.do to check current availability in your jurisdiction.",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "Do I need KYC before I can use anything?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "No. Ghost Portfolio mode is fully accessible without any account, wallet, or KYC — you can simulate investments and explore all features immediately. KYC is only required when you are ready to trade, lend, or use the DEX with real capital.",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "What currencies can I use?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora is crypto-native. You fund your wallet with USDC, USDT, ETH, or other supported digital assets. MoonPay is integrated in the app to convert fiat currencies (USD, EUR, VND, and others) to crypto if needed.",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "What is the minimum investment?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Tokenized equities are available starting at $1, with fractional-share support. The T-Bill yield product has no minimum deposit. Gas fees (paid to the network, not Eldora) apply to all on-chain transactions and vary by network.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Tokenized Equities",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "Are these real stocks or synthetic instruments?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Real stocks. Every tokenized equity is backed 1:1 by a real US-listed security held in regulated custody by Dinari (SEC-registered transfer agent). You are not buying a derivative, a price-tracking contract, or a synthetic instrument — you hold a direct claim on the underlying share.",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "How are dividends handled?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The dividend value is credited to your account in accordance with Dinari's distribution policy. The timing and method depend on the specific security. Check the asset detail page or Dinari's documentation for details on each stock.",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "What happens during a stock split?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Stock splits are handled automatically. Your token balance is adjusted to maintain 1:1 exposure to the underlying security — no action is required on your part.",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "Can I trade on weekends?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Yes. On-chain tokens can be traded 24/7. Orders requiring Dinari to create or redeem real shares are queued for US market hours: 9:30 AM – 4:00 PM ET, Monday to Friday. Token transfers and DEX swaps are always available.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Lending & Yield",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "Is the ~5.3% T-Bill yield fixed or guaranteed?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "It is variable, not guaranteed. It tracks US Federal Reserve benchmark rates and short-term Treasury bill auction results. The rate updates in real time on the platform.",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "Can I lose money in the lending products?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The T-Bill product carries minimal principal risk since it is backed by US government obligations. DeFi protocols (AAVE, Maple, Morpho) carry smart contract risk and, if you are borrowing, liquidation risk. Only supply capital you can afford to lose, and always review each protocol's own documentation.",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "Can I use my tokenized stocks as collateral?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Yes. Tokenized equity positions held on Eldora can be used as collateral for stablecoin loans on AAVE. This allows you to access liquidity without selling your equity positions.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Technical",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "Which wallet is best for new users?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "MetaMask and Coinbase Wallet are the most thoroughly tested with Eldora. Any EVM-compatible wallet with WalletConnect support will work. Hardware wallets such as Ledger and Trezor connect via MetaMask.",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "What are gas fees, and who receives them?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Gas fees are paid to the blockchain network (not to Eldora) to process on-chain transactions. They vary by network: Base and Polygon are the cheapest; Ethereum Mainnet is the highest. The estimated gas cost is always shown before you confirm any transaction.",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "Can I hold assets on multiple networks at once?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Yes. You can hold tokenized equities and yield positions on multiple networks simultaneously. The Portfolio Overview tab aggregates all chain balances into a single USD total.",
    },
    {
      type: "paragraph",
      style: "Heading 3",
      text: "What happens if I lose access to my wallet?",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora is non-custodial and cannot recover your wallet. If you lose your private key or seed phrase, your assets cannot be recovered by anyone. Always store your seed phrase in a secure, offline location.",
    },
    {
      type: "table",
      rows: [["Legal & Compliance"]],
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "Terms of Use",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Effective Date: May 19, 2026 · Last updated: May 19, 2026",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "1. Acceptance of Terms",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "These Terms of Use (“Terms”) govern your access to and use of the Eldora website, dashboard, and all products, tools, or services provided through the platform (collectively, the “Platform”). By accessing or using the Platform, you confirm that you have read, understood, and agree to these Terms in full. If you do not agree, do not use the Platform.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "2. About Eldora",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora is an on-chain global investing platform designed to simplify access to US stocks, yield opportunities, and decentralized financial infrastructure. Through a single dashboard and single KYC, users in 85+ countries can own tokenized US stocks backed 1:1 by real securities, earn yield through institutional-grade T-Bill strategies, access on-chain lending infrastructure, and manage assets across multiple blockchain networks.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Tokenized US stocks on Eldora are powered by Dinari dShares, issued through an SEC-registered transfer agent framework with underlying equities backed 1:1. Available across Ethereum, BNB Chain, Polygon, Arbitrum, and Base — accessible 24/7 from as little as $1.",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora does not provide investment, legal, or tax advice, and does not custody or guarantee user assets.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "3. Eligibility",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "You may use the Platform only if all of the following conditions are met:",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "You are at least 18 years of age",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "You have the legal capacity to enter into a binding agreement",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Your jurisdiction permits participation in blockchain, RWA, and investment-related activities",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "You are not located in, or subject to sanctions imposed by, the UN, EU, US OFAC, or Switzerland",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "You meet any applicable regulatory classification requirements in your jurisdiction (e.g., professional, accredited, or institutional investor status where required)",
    },
    {
      type: "table",
      rows: [
        [
          "Access Restrictions Eldora reserves the right to restrict access based on geographic or regulatory considerations without prior notice. The platform is not available to US residents.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "4. No Investment Advice",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "All content, data, analytics, listings, and commentary on the Platform are provided for informational purposes only. Nothing on the Platform constitutes investment advice, a recommendation or solicitation to buy or sell any asset, or an endorsement of any project, token, or asset. Users bear full and sole responsibility for their own investment decisions.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "5. No Offer of Securities",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The Platform does not offer, sell, or solicit securities. Project listings and tokenized assets are provided by independent third parties. Eldora does not validate or guarantee their regulatory classification. Users must independently ensure their use of the Platform complies with applicable securities laws in their own jurisdiction.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "6. Regulatory Compliance & Applicable Law",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The global regulatory environment for digital assets and real-world assets continues to evolve rapidly. Users acknowledge that:",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The US GENIUS Act (signed July 2025) established a federal framework for tokenized payment instruments and stablecoins, which may affect certain Platform features",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Applicable securities, AML/KYC, and digital asset regulations vary significantly by jurisdiction and may change at any time",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora may be required to delist assets, restrict services, or impose additional compliance obligations to remain legally compliant",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Users are solely responsible for determining whether their use of the Platform complies with local law",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "7. Third-Party Integrations",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The Platform relies on third-party providers, including tokenization protocols (Dinari dShares), yield and lending infrastructure (Maple Finance, Morpho, AAVE), KYC/AML partners, custodians, data and API vendors, and liquidity sources and oracle providers. Eldora is not responsible for the availability, accuracy, reliability, or performance of third-party services.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "8. User Responsibilities",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "By using the Platform, you agree to: comply with all applicable laws; complete KYC/AML procedures when required; provide accurate, current, and complete information; use the Platform only for lawful purposes; and refrain from exploiting vulnerabilities, scraping data, or reverse-engineering any part of the Platform. Eldora may suspend or terminate accounts for violations at its sole discretion.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "9. Platform Availability",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The Platform is provided “as is” and “as available” without guarantees of uptime, continuous access, or error-free performance. Availability may be affected by third-party API rate limits, blockchain network congestion, outages, or scheduled maintenance.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "10. Intellectual Property",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "All content, trademarks, branding, features, and tools on the Platform are the exclusive property of Eldora or its licensors. Users may not copy, modify, distribute, or create derivative works without prior written permission from Eldora.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "11. Limitation of Liability",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "To the fullest extent permitted by applicable law, Eldora shall not be liable for any loss of capital, profits, revenue, or data arising from use of the Platform; third-party project failures, misleading statements, or regulatory breaches by third parties; or risks associated with blockchain technology, smart contracts, market volatility, or regulatory changes. Users use the Platform entirely at their own risk.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "12. Indemnification",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "You agree to indemnify and hold harmless Eldora, its affiliates, directors, officers, and employees from any claims, damages, losses, or expenses arising from your use of or inability to use the Platform, your interactions with third-party projects or service providers, your violation of these Terms, or disputes between you and external service providers.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "13. Changes to These Terms",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora may update these Terms at any time. Material changes will be communicated via the Platform or by email. Continued use of the Platform after updated Terms are published constitutes your acceptance.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "14. Governing Law",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "These Terms are governed by the laws of Switzerland and are subject to the exclusive jurisdiction of the courts of Zurich, unless otherwise required by mandatory local law.",
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "Privacy Policy",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "GDPR + Swiss FADP Compliant · Effective Date: May 19, 2026",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "1. Data Controller",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora operates https://eldora.network/ and associated services. We comply with the Swiss Federal Act on Data Protection (FADP, in force since 1 September 2023) and the EU General Data Protection Regulation (GDPR, Regulation 2016/679).",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "2. Personal Data We Collect",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Information You Provide",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Name, email address, and contact details",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Submitted forms and investor profile information",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "KYC/AML data (collected and processed exclusively by regulated third-party partners)",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Automatically Collected Data",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "IP addresses and device identifiers",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Cookies and analytics data",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Log files and usage metrics",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Third-Party Data Sources",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Compliance and identity verification partners",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Blockchain analytics tools and public blockchain data",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "3. How We Use Your Data",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "We process personal data to: operate the Platform and deliver services; facilitate access to on-chain investment opportunities; conduct KYC/AML verification via regulated partners; improve security and Platform performance; comply with applicable legal obligations; and communicate updates and technical notifications. We do not sell personal data to any third party.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "4. Legal Basis for Processing (GDPR Art. 6)",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Contract performance (Art. 6(1)(b)) — required to provide Platform services",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Legitimate interests (Art. 6(1)(f)) — fraud prevention, security, analytics",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Legal obligations (Art. 6(1)(c)) — AML/KYC compliance and regulatory reporting",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Explicit consent (Art. 6(1)(a)) — non-essential cookies and marketing communications",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "5. KYC/AML Partners",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "KYC/AML verification is performed exclusively by regulated third-party partners. Eldora does not store full KYC documents on its own servers. Data retention and security are governed by our partners' regulatory obligations and their data processing agreements with Eldora.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "6. Cookies",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The Platform uses essential cookies (required for functionality), analytics cookies (for usage improvement), and preference cookies (for user settings). Users in the EU/EEA may opt out of non-essential cookies via the cookie preference center in the Platform footer. Essential cookies cannot be disabled.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "7. Data Retention",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Personal data is retained only as long as necessary to deliver Platform services, as required by applicable law (e.g., AML record-keeping), or for legitimate interests such as fraud prevention. On request or account closure, data is deleted or anonymized within 30 days, except where longer retention is legally required.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "8. Your Rights",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Under the GDPR and Swiss FADP, you have the right to: access your personal data; request correction of inaccurate data; request deletion ('right to be forgotten'); request restriction of processing; data portability; withdraw consent at any time; and object to certain types of processing. Contact hello@eldora.do to exercise any right. We respond within 30 days.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "9. International Data Transfers",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Data may be processed outside Switzerland or the EEA. Where transfers occur, Eldora ensures protection through EU adequacy decisions, European Commission-approved Standard Contractual Clauses (SCCs), or Swiss SCCs and equivalent FADP measures.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "10. Security",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "We implement: encryption in transit and at rest; access controls with least-privilege principles; secure server infrastructure; and regular security audits and penetration testing. No system is fully secure. Users acknowledge the inherent risks of internet data transmission.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "11. Children's Privacy",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora does not knowingly collect data from individuals under 18. If we become aware a minor has provided data, we will promptly delete it.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "12. Changes & Contact",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "This Policy may be updated at any time. Material changes will be communicated via the Platform or email. Current version always available at https://eldora.network/. Privacy inquiries: hello@eldora.do. You may also lodge a complaint with the Swiss FDPIC or the relevant EU data protection authority in your country of residence.",
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "Risk Disclosure Statement",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Please read this statement carefully before using the Platform. By using Eldora and participating in tokenized asset ecosystems, you acknowledge and accept the following significant risks:",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "1. Market Risk",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "RWAs, digital assets, and tokens can fluctuate significantly in value",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "There is no guarantee of profitability, yield continuity, or liquidity",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Past performance of any asset or strategy is not indicative of future results",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "2. Regulatory Risk",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The regulatory landscape for digital assets and RWAs is evolving rapidly. Changes to securities regulation, AML/KYC requirements, digital asset frameworks, and cross-border financial rules may: restrict or prohibit access to certain products; require asset delisting; impose additional compliance obligations; or affect your ability to transact, withdraw, or access assets.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "3. Technology & Smart Contract Risk",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Blockchain systems and smart contracts can experience software bugs and exploits, chain reorganizations or hard forks, network congestion and unpredictable gas fees, protocol upgrades that alter functionality, and irreversible losses from vulnerabilities.",
    },
    {
      type: "table",
      rows: [
        [
          "Smart Contract Risk Vulnerabilities in smart contracts may cause partial or total loss of deposited assets. Eldora does not guarantee the security of any underlying smart contract infrastructure, including third-party protocols integrated on the Platform.",
        ],
      ],
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "4. Third-Party Dependency Risk",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora relies on Dinari (tokenization), Maple Finance (yield), Morpho (lending), AAVE (lending), and other providers for KYC/AML, data, and liquidity. Failures, outages, insolvency, or regulatory actions affecting any provider may materially impact Platform performance or user assets.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "5. Project-Specific Risk",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Each tokenized asset carries its own risks: default risk, credit risk, operational risk, fraud, milestone failure, and potential total loss of value. Eldora does not verify, underwrite, or guarantee outcomes for any asset or project.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "6. Liquidity Risk",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Tokenized assets may have limited secondary market liquidity. You may be unable to sell at your desired price or at your desired time. Some assets may only be redeemable during specific windows governed by third-party issuers.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "7. No Guarantees",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora does not guarantee: investment returns or yield rates; liquidity or ability to exit positions; project completion or delivery; regulatory approval of any asset; or uninterrupted Platform availability. Users must accept the possibility of partial or total loss of funds.",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "8. Personal Responsibility",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "You are solely responsible for your investment decisions, reviewing all documentation, complying with applicable laws and tax obligations, and assessing your own risk tolerance. Nothing on the Platform constitutes financial, legal, or tax advice. Seek independent professional advice before making investment decisions.",
    },
    {
      type: "paragraph",
      style: "Heading 1",
      text: "Contact & Support",
    },
    {
      type: "paragraph",
      style: "Heading 2",
      text: "Support Channels",
    },
    {
      type: "table",
      rows: [
        ["Channel", "Details"],
        ["In-App Chat", "Live support chat at app.eldora.do (coming soon)"],
        ["Email", "hello@eldora.do"],
        ["Website", "https://eldora.network/"],
        ["App", "app.eldora.do"],
        ["Twitter / X", "https://x.com/eldoraglobal"],
        ["Telegram", "Official community: t.me/Eldoracommunity"],
        ["Discord", "https://discord.com/invite/M8eYkEDN76"],
      ],
    },
    // {
    //   "type": "paragraph",
    //   "style": "Heading 2",
    //   "text": "Community — 20,000+ Members"
    // },
    {
      type: "paragraph",
      style: "normal",
      text: "Join Eldora's global community across X, Discord, and Telegram:",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Platform tips, feature guides, and investment strategy discussions",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Real-time announcements on new asset listings, feature launches, and protocol updates",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "$20K Campaign updates, Leaderboard standings, and referral coordination",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Direct feedback channel to the Eldora product team",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "Eldora",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "The On-Chain Investment Platform for the World",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "app.eldora.do · https://eldora.network/ · hello@eldora.do",
    },
    {
      type: "paragraph",
      style: "normal",
      text: "© 2026 Eldora. All rights reserved. Zurich, Switzerland.",
    },
  ],
} as const;
