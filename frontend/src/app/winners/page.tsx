import React from "react";
import Announced from "../components/Announced/Announced";
import Navbar from "../components/Navbar/Navbar";

const winners = () => {
  return (
    <>
      <Navbar />
      <Announced description="Winners Will Be Announced Soon!" />
    </>
  );
};

export default winners;
