import React from "react";
import "../App.css";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import medium from "../assets/medium.svg";
import logo from "../assets/logo.svg";
import righticon from "../assets/righticon.svg";

export default function Navbar() {
  return (
    <div className="flex flex-row mx-10 md:mx-[110px] my-[80px]  justify-between">
      <div className="flex flex-row gap-1 md:gap-6 items-center">
        <img src={facebook} alt="facebook" className="h-5 w-5" />
        <img src={twitter} alt="twitter" className="h-5 w-5" />
        <img src={medium} alt="medium" className="h-5 w-5" />
      </div>
      <div className="flex flex-row items-center">
        <img src={logo} alt="logo" className="h-5 w-5" />
        <p id="logo" className="text-[#1D1D1D] font-bold text-[18px] ml-2">i-Finance</p>
      </div>
      <div>
       <img src={righticon} alt="righticon" className="h-8 w-8" />
      </div>
      
    </div>
  );
}
