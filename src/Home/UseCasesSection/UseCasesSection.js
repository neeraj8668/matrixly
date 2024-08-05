import React from "react";
import { UseCaseCard } from "./UseCaseCard";
import { useCasesItems } from "./UseCasesItems";

export const UseCasesSection = () => {
  return (
    <div className="mt-20  lg:py-20">
      <h5 className="text-xl text-center font-semibold text-purple">
        USE CASES
      </h5>
      <div className="text-center px-4 md:px-6">
        <div>
          <h2 className="text-3xl text-dark font-bold my-3 md:text-4xl">
            Unleash the Power of Matrixly
          </h2>
          <p className="text-[16px] md:text-[18px] leading-6 md:leading-8">
            Elevate Your Capabilities and Streamline Operations with Matrixly –
            The Intersection of <br className="hidden md:block" /> Infinite
            Possibilities and Optimal Efficiency
          </p>
        </div>
      </div>
      <div className="hero p-4 md:mt-10 ">
        <div className="max-w-[1300px] mx-auto sm:grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:gap-8 ">
          {useCasesItems.map(({ id, src, title, text }) => {
            return <UseCaseCard key={id} title={title} text={text} src={src} />;
          })}
        </div>
      </div>
    </div>
  );
};
