import { ReactElement } from "react";
import Polygon from "./Polygon";

import Filecoin from "../Filecoin/Filecoin";
import Replit from "../Replit/Replit";
export default function Home(): ReactElement {
  return (
    <div>
      <Polygon />
      <Filecoin />
      <Replit />
    </div>
  );
}
