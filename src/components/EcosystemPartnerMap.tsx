import type { CSSProperties } from "react";
import ecoSystemImg from "@/assets/imgs/ecosystem.png";
import ecoSystemImgMobile from "@/assets/imgs/ecosystem_mobile.png";

interface EcosystemCell {
  column: number;
  row: number;
}

interface EcosystemPartner {
  name: string;
  url: string;
  desktopCell: EcosystemCell;
  mobileCell: EcosystemCell;
}

const ecosystemPartners: EcosystemPartner[] = [
  {
    name: "Maple",
    url: "https://maple.finance/",
    desktopCell: { column: 1, row: 1 },
    mobileCell: { column: 1, row: 1 },
  },
  {
    name: "Centrifuge",
    url: "https://centrifuge.io/",
    desktopCell: { column: 3, row: 1 },
    mobileCell: { column: 3, row: 1 },
  },
  {
    name: "Dinari",
    url: "https://dinari.com/",
    desktopCell: { column: 5, row: 1 },
    mobileCell: { column: 2, row: 2 },
  },
  {
    name: "Zerion",
    url: "https://zerion.io/",
    desktopCell: { column: 7, row: 1 },
    mobileCell: { column: 1, row: 3 },
  },
  {
    name: "TradingView",
    url: "https://www.tradingview.com/",
    desktopCell: { column: 9, row: 1 },
    mobileCell: { column: 2, row: 6 },
  },
  {
    name: "Morpho",
    url: "https://morpho.org/",
    desktopCell: { column: 2, row: 2 },
    mobileCell: { column: 3, row: 3 },
  },
  {
    name: "Aave",
    url: "https://aave.com/",
    desktopCell: { column: 4, row: 2 },
    mobileCell: { column: 2, row: 4 },
  },
  {
    name: "Relay",
    url: "https://relay.link/",
    desktopCell: { column: 6, row: 2 },
    mobileCell: { column: 1, row: 5 },
  },
  {
    name: "Uniswap",
    url: "https://app.uniswap.org/",
    desktopCell: { column: 8, row: 2 },
    mobileCell: { column: 3, row: 5 },
  },
];

const ecosystemGrid = {
  desktop: { columns: 9, rows: 2 },
  mobile: { columns: 3, rows: 6 },
} as const;

const getEcosystemLinkStyle = (
  cell: EcosystemCell,
  columns: number,
  rows: number,
): CSSProperties => ({
  left: `${((cell.column - 1) / columns) * 100}%`,
  top: `${((cell.row - 1) / rows) * 100}%`,
  width: `${100 / columns}%`,
  height: `${100 / rows}%`,
});

const EcosystemPartnerLinks = ({
  layout,
}: {
  layout: keyof typeof ecosystemGrid;
}) => {
  const { columns, rows } = ecosystemGrid[layout];

  return (
    <>
      {ecosystemPartners.map((partner) => (
        <a
          key={`${layout}-${partner.name}`}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${partner.name} website`}
          title={partner.name}
          className="absolute cursor-pointer rounded-md transition-colors hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white/80"
          style={getEcosystemLinkStyle(
            layout === "desktop" ? partner.desktopCell : partner.mobileCell,
            columns,
            rows,
          )}
        />
      ))}
    </>
  );
};

const EcosystemPartnerMap = () => {
  return (
    <>
      <div className="relative hidden w-full lg:block">
        <img
          src={ecoSystemImg}
          alt="Eldora partner ecosystem"
          className="block h-auto w-full"
        />
        <EcosystemPartnerLinks layout="desktop" />
      </div>

      <div className="relative w-full lg:hidden">
        <img
          src={ecoSystemImgMobile}
          alt="Eldora partner ecosystem"
          className="block h-auto w-full"
        />
        <EcosystemPartnerLinks layout="mobile" />
      </div>
    </>
  );
};

export default EcosystemPartnerMap;
