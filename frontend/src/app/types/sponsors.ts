import { StaticImageData } from "next/image";

type Sponsor = {
    id?: number;
    name: string;
    url: string;
    image: StaticImageData;
  };
  
  export default Sponsor;