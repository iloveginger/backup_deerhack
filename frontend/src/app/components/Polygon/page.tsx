import { ReactElement } from "react";
import Polygon from "./Polygon";

import Filecoin from "../Filecoin/Filecoin";
import Replit from "../Replit/Replit";
import Solana from "../Solana/Solana";
export default function Home(): ReactElement {
  return (
    <div>
      <Polygon />
      <Filecoin />
      <div className="mt-4 ml-10">
        <Replit />
      </div>
      <Solana
        title="Master Glasseater"
        description="best advanced project that is almost ready for full-time"
        price="500"
      />
    </div>
  );
}
