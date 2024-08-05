import React from "react";
import heroImg from "../../assets/home/heroImg.png";

import { Container } from "./ui/Container";

const Hero = () => {
  return (
    <div className="text-center  pt-10 md:pt-20  ">
      <Container>
        <h1 className="text-[2.5rem] md:text-[3.5rem] leading-[3rem] md:leading-[4rem] font-bold text-dark">
          Matrixly AI: Chat with Docs, <br /> Share with QR
        </h1>
        <p className="text-textlightgrey  text-center text-[1.10rem]   md:mx-auto mt-7 md:text-[1.25rem] leading-7 md:leading-8 md:w-[80%]">
          Unleashing the Power of Chat GPT 4 and 3.5, Document Analysis with
          Preview Screens, and Seamless Chatbot Creation and Sharing through QR
          Codes – Introducing the Future of AI Interaction and Collaboration.
        </p>
        <button className="bg-dark my-6 text-white  text-center rounded-md  inline-block font-semibold py-3 px-10">
          Try for free
        </button>
        <span className="text-textlightgrey block text-sm mt-3 font-normal">
          7-day trial. No credit card required.
        </span>
      </Container>

      <div className="hero p-10 ">
        <img src={heroImg} className="md:max-w-1/2  mx-auto  mt-8" />
      </div>
      {/* <img className="relative bottom-[400px]" src={blured} /> */}
      {/* </Container> */}
    </div>
  );
};

export default Hero;
