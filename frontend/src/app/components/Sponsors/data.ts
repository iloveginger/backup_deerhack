import SponsorType from "@/app/types/sponsorType";
import DeerholdLogo from "@/app/assets/images/sponsors/deerhold.png";
import MountStradaLogo from "@/app/assets/images/sponsors/mount_strada.png";
import SegwayLogo from "@/app/assets/images/sponsors/segway.png";
import DevfolioLogo from "@/app/assets/images/sponsors/Devfolio_Logo-White.svg"
import ETHIndiaLogo from "@/app/assets/images/sponsors/ethindia-light.svg"
import PolygonLogo from "@/app/assets/images/sponsors/Polygon_Logo-White.svg"
import HamroCSITLogo from "@/app/assets/images/sponsors/hamro_csit_logo_black.png"
import HamroPatroLogo from "@/app/assets/images/sponsors/HamroPatro.svg"
import trainingcenter from "@/app/assets/images/sponsors/trainingcenter.png"

const sponsors: SponsorType[] = [
  {
    name: "Gold Sponsors",
    sponsors: [
      {
        name:"Hamro CSIT",
        url:"https://hamrocsit.com",
        image:HamroCSITLogo,
        imageAlt:"HamroCSIT Logo"
      },
      {
        name:"Devfolio",
        url:"https://devfolio.co",
        image:DevfolioLogo,
        imageAlt:"DEVFOLIO LOGO"
      }
    ]
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
    name:"Coffee Partner",
    sponsors:[
        {
            name:"Mount Strada",
            url:"https://mountstradacoffee.com",
            image:MountStradaLogo,
            imageAlt:"Mount Strada Logo"
        },
    ]
  },{
    name:"App Partner",
    sponsors:[
        {
            name:"Hamro Patro",
            url:"https://www.hamropatro.com",
            image:HamroPatroLogo,
            imageAlt:"HamroPatro Logo"
        },
    ]
  },
  {
    name:"Mobility Partner",
    sponsors:[
        {
            name:"Segway",
            url:"https://www.segway.com",
            image:SegwayLogo,
            imageAlt:"Subway Logo"
        },
    ]
  },
  {
    name:"Training Partner",
    sponsors:[
        {
            name:"Deerwalk Training Center",
            url:"https://deerwalktrainingcenter.com",
            image:trainingcenter,
            imageAlt:"Deerwalk training center logo"
        },
    ]
  },
  // {
  //   name:"Media Partner",
  //   sponsors:[
  //       {
  //           name:"Digital Media Team(DMT)",
  //           url:"",
  //           image:"",
  //           imageAlt:"Digital Media Team logo"
  //       },
  //   ]
  // },
];

export { sponsors };
