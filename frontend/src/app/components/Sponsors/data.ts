import SponsorType from "@/app/types/sponsorType"
import DeerholdLogo from "@/app/assets/images/sponsors/deerhold.png";
import MountStradaLogo from "@/app/assets/images/sponsors/mount_strada.png";
import SegwayLogo from "@/app/assets/images/sponsors/segway.png";

const sponsors:SponsorType[] = [
  {
    name:"Silver Sponsors",
    sponsors:[
        {
            name:"deerhold",
            url:"https://deerhold.com",
            image:DeerholdLogo,
        },
    ]
  },
  {
    name:"Coffee Sponsors",
    sponsors:[
        {
            name:"Mount Strada",
            url:"https://mountstradacoffee.com",
            image:MountStradaLogo,
        },
    ]
  },{
    name:"Mobility Sponsors",
    sponsors:[
        {
            name:"Segway",
            url:"https://www.segway.com",
            image:SegwayLogo,
        },
    ]
  },
];

export {sponsors}; 