import React from "react";
import hero from "../assets/hero.svg";
import arrow from "../assets/arrow.svg";
import "../App.css";

export default function MainSection() {
  return (
    <div className="flex md:flex-row flex-col  mx-10 md:mx-[110px] my-10 justify-center items-center ">
      <div className="flex flex-col w-1/2 gap-7 relative">
        <h1 id="hone" className="text-[#263238] font-medium text-[48px] md:w-[420px]">
          Mutual Investment
        </h1>
        <p id="para" className="text-[#767676] font-normal">
          At i-Finance we care about your future. We help you invest the way you
          want. So you can relax, have fun and let your fund grow.
        </p>
        <div>
          <button className="bg-[#27AE60] text-[#FFFFFF] font-medium text-[18px] py-3 px-10 rounded-full my-11">
            Get Started
          </button>
        </div>
        <img src={arrow } alt="arrow" className="h-5 w-5 mt-5 absolute bottom-0 right-0 " />

      </div>
      <div className="flex">
       <img src={hero} alt="hero" className="h-[400px] w-[400px] md:ml-[100px]"/>

      </div>
    </div>
  );
}
