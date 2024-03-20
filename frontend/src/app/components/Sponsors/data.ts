import SponsorType from "@/app/types/sponsorType";
import DeerholdLogo from "@/app/assets/images/sponsors/deerhold.png";
import MountStradaLogo from "@/app/assets/images/sponsors/mount_strada.png";
import SegwayLogo from "@/app/assets/images/sponsors/segway.png";
import DevfolioLogo from "@/app/assets/images/sponsors/Devfolio_Logo-White.svg";
import ETHIndiaLogo from "@/app/assets/images/sponsors/ethindia-light.svg";
import PolygonLogo from "@/app/assets/images/sponsors/Polygon_Logo-White.svg";

const sponsors: SponsorType[] = [
  {
    name: "Gold Sponsors",
    sponsors: [
      {
        name: "Devfolio",
        url: "https://devfolio.co",
        image: DevfolioLogo,
        imageAlt: "DEVFOLIO LOGO",
      },
    ],
  },
  {
    name: "Silver Sponsors",
    sponsors: [
      {
        name: "deerhold",
        url: "https://deerhold.com",
        image: DeerholdLogo,
        imageAlt: "DeerHold Logo",
      },
      {
        name: "Polygon",
        url: "https://polygon.technology/",
        image: PolygonLogo,
        imageAlt: "POLYGON LOGO",
      },
      {
        name: "ETH India",
        url: "https://ethindia.co ",
        image: ETHIndiaLogo,
        imageAlt: "ETHINDIA LOGO",
      },
    ],
  },
  {
    name: "Coffee Sponsors",
    sponsors: [
      {
        name: "Mount Strada",
        url: "https://mountstradacoffee.com",
        image: MountStradaLogo,
        imageAlt: "Mount Strada Logo",
      },
    ],
  },
  {
    name: "Mobility Sponsors",
    sponsors: [
      {
        name: "Segway",
        url: "https://www.segway.com",
        image: SegwayLogo,
        imageAlt: "Subway Logo",
      },
    ],
  },
];

export { sponsors };
