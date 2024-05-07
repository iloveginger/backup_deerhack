import SponsorType from "@/app/types/sponsorType";
import DeerholdLogo from "@/app/assets/images/sponsors/deerhold.png";
import MountStradaLogo from "@/app/assets/images/sponsors/mount_strada.png";
import SegwayLogo from "@/app/assets/images/sponsors/segway.png";
import DevfolioLogo from "@/app/assets/images/sponsors/Devfolio_Logo-White.svg";
import ETHIndiaLogo from "@/app/assets/images/sponsors/ethindia-light.svg";
import PolygonLogo from "@/app/assets/images/sponsors/Polygon_Logo-White.svg";
import HamroCSITLogo from "@/app/assets/images/sponsors/hamro_csit_logo_black.png";
import HamroPatroLogo from "@/app/assets/images/sponsors/HamroPatro.svg";
import Programiz from "@/app/assets/images/sponsors/Programiz.svg";
import trainingcenter from "@/app/assets/images/sponsors/trainingcenter.png";
import Jyotilogo from "@/app/assets/images/sponsors/Jyotilogo.png";
import NepalBank from "@/app/assets/images/sponsors/NepalBank.png";
import Oliz from "@/app/assets/images/sponsors/Oliz.png";
import github from "@/app/assets/images/sponsors/Github.png";
import Luminr from "@/app/assets/images/sponsors/Luminr.svg";
import leapfrog from "@/app/assets/images/sponsors/leapfrog.svg";
import VT from "@/app/assets/images/sponsors/VT.png";
import SifalSchool from "@/app/assets/images/sponsors/SifalSchool.png";
import codefornepal from "@/app/assets/images/sponsors/codeForNepal.png";
import microsoft from "@/app/assets/images/sponsors/Microsoft.png";
import aws from "@/app/assets/images/sponsors/cloudClub.png";
import makkuse from "@/app/assets/images/sponsors/makkuse.png";
import everestlist from "@/app/assets/images/sponsors/everestlist.png";
import csit from "@/app/assets/images/sponsors/CSITAN-logo.png";
import cedargate from "@/app/assets/images/sponsors/cedargate.svg";
import naamche from "@/app/assets/images/sponsors/naamche.svg";
import astrek from "@/app/assets/images/sponsors/astrek.jpg";
import codeforhcange from "@/app/assets/images/sponsors/code-for-change.png";
import adex from "@/app/assets/images/sponsors/adex.png";
import livebakery from "@/app/assets/images/sponsors/livebakery.png";
import metlife from "@/app/assets/images/sponsors/metlife.png";

const sponsors: SponsorType[] = [
  {
    name: "ISP Partner",
    sponsors: [
      {
        name: "Vianet",
        url: "https://www.vianet.com.np",
        image: VT,
        imageAlt: "Vianet Logo",
      },
    ],
  },
  {
    name: "Gold Sponsors",
    sponsors: [
      {
        name: "Hamro CSIT",
        url: "https://hamrocsit.com",
        image: HamroCSITLogo,
        imageAlt: "HamroCSIT Logo",
      },
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
        name: "naamche",
        url: "www.naamche.com",
        image: naamche,
        imageAlt: "naamche Logo",
      },
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
      {
        name: "Deerwalk Sifal School",
        url: "https://deerwalk.edu.np/sifalschool ",
        image: SifalSchool,
        imageAlt: "Sifal School LOGO",
      },
    ],
  },
  {
    name: "Bronze Sponsors",
    sponsors: [
      {
        name: "Adex",
        url: "https://adex.ltd",
        image: adex,
        imageAlt: "adex Logo",
      },
      {
        name: "Metlife Nepal",
        url: "https://www.metlife.com.np/en/",
        image: metlife,
        imageAlt: "metlief Logo",
      },
    ],
  },
  {
    name: "Machine Learning and AI Track Partner",
    sponsors: [
      {
        name: "Leapfrog Technologies",
        url: "https://www.lftechnology.com",
        image: leapfrog,
        imageAlt: "Leapfrog Logo",
      },
    ],
  },
  {
    name: "Open Innovation Track Partner",
    sponsors: [
      {
        name: "Cedar Gate Technologies",
        url: "https://www.cedargate.com",
        image: cedargate,
        imageAlt: "Cedar Gate Logo",
      },
    ],
  },
  {
    name: "Banking Partners",
    sponsors: [
      {
        name: "Jyoti Bikas Bank Ltd.",
        url: "https://jbbl.com.np",
        image: Jyotilogo,
        imageAlt: "Jyoti Bikas Bank logo",
      },
    ],
  },
  {
    name: "App Partner",
    sponsors: [
      {
        name: "Hamro Patro",
        url: "https://www.hamropatro.com",
        image: HamroPatroLogo,
        imageAlt: "HamroPatro Logo",
      },
    ],
  },

  {
    name: "Coffee Partner",
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
    name: "Gifting Partner",
    sponsors: [
      {
        name: "Makkuse",
        url: "https://makkuse.com",
        image: makkuse,
        imageAlt: "Makkuse logo",
      },
    ],
  },
  {
    name: "Confectionery Partner",
    sponsors: [
      {
        name: "Live Bakery",
        url: "https://www.facebook.com/Livebakery766/",
        image: livebakery,
        imageAlt: "Live bakery Logo",
      },
    ],
  },
  {
    name: "Mobility Partner",
    sponsors: [
      {
        name: "Segway",
        url: "https://www.segway.com",
        image: SegwayLogo,
        imageAlt: "Subway Logo",
      },
      {
        name: "Oliz Store",
        url: "https://www.olizstore.com",
        image: Oliz,
        imageAlt: "Oliz store Logo",
      },
    ],
  },
  {
    name: "Community Partners",
    sponsors: [
      {
        name: "Code For Nepal",
        url: "https://codefornepal.org",
        image: codefornepal,
        imageAlt: "Code For Nepal Logo",
      },
      {
        name: "Microsoft Learn Student Ambassador",
        url: "https://mvp.microsoft.com/studentambassadors",
        image: microsoft,
        imageAlt: "Microsoft Student Learn ambassador Logo",
      },
      {
        name: "AWS Cloud Club",
        url: "https://aws.amazon.com/developer/community/students/cloudclubs/",
        image: aws,
        imageAlt: "AWS cloud club Logo",
      },
      {
        name: "CSIT Association Nepal",
        url: "https://csitan.org.np",
        image: csit,
        imageAlt: "AWS cloud club Logo",
      },
      {
        name: "Code For Change Nepal",
        url: "https://codeforchangenepal.com",
        image: codeforhcange,
        imageAlt: "Code For Change Nepal logo",
      },
    ],
  },
  {
    name: "Ranking Partner",
    sponsors: [
      {
        name: "Everest List",
        url: "https://theeverestlist.org",
        image: everestlist,
        imageAlt: "everest list logo",
      },
    ],
  },

  {
    name: "Training Partner",
    sponsors: [
      {
        name: "Deerwalk Training Center",
        url: "https://deerwalktrainingcenter.com",
        image: trainingcenter,
        imageAlt: "Deerwalk training center logo",
      },
    ],
  },
  {
    name: "Supported By",
    sponsors: [
      {
        name: "Github Education",
        url: "https://education.github.com",
        image: github,
        imageAlt: "Github logo",
      },
      {
        name: "Luminr.co",
        url: "https://luminr.co",
        image: Luminr,
        imageAlt: "Luminr logo",
      },
      {
        name: "Programiz",
        url: "https://www.programiz.com",
        image: Programiz,
        imageAlt: "Programiz Logo",
      },
      {
        name: "Astrek Wall Climbing",
        url: "https://www.instagram.com/climbastrek/?hl=en",
        image: astrek,
        imageAlt: "Astrek Wall Climbing logo",
      },
      {
        name: "Nepal Bank Ltd.",
        url: "https://nepalbank.com.np",
        image: NepalBank,
        imageAlt: "Nepal Bank logo",
      },

    ],
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
