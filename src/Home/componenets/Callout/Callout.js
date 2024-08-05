import checkmarkicon from "../../../assets/home/checkmarkicon.svg";
export const Callout = () => {
  return (
    <div className="bg-[#E9E7FF]  p-4 text-center rounded-[1.6rem] md:mt-10 md:py-10">
      <div>
        <h2 className="text-3xl text-dark font-bold my-3 md:text-4xl ">
          Unlock Efficiency Across Industries and Professions
        </h2>
        <p className="ext-[16px] md:text-[18px] leading-6 md:leading-8">
          Start your free trial now: No credit card required, just pure
          document-powered magic.
        </p>
      </div>

      <button className="bg-purple my-6 text-white w-full sm:w-auto text-center rounded-md  inline-block font-medium py-3 px-10 md:px-16">
        Try for free
      </button>
      <ul className="grid grid-cols-2 justify-items-center gap-y-4 sm:grid-cols-3 md:w-[60%] lg:w-[50%] md:mt-6 md:mx-auto">
        <li className="flex items-center">
          <img
            className="inline-block h-5 self-center"
            src={checkmarkicon}
            alt="check mark icon"
          />
          <span className="text-textlightgrey text-nowrap h-fit ml-1">
            No credit card required
          </span>
        </li>
        <li className="flex items-center">
          <img
            className="inline-block h-5 self-center"
            src={checkmarkicon}
            alt="check mark icon"
          />
          <span className="text-textlightgrey  ml-1">7-day trial</span>
        </li>
        <li className="flex items-center col-span-2 sm:col-span-1 ">
          <img
            className="inline-block h-5 self-center"
            src={checkmarkicon}
            alt="check mark icon"
          />
          <span className="text-textlightgrey  text-nowrap ml-1">
            Cancel anytime
          </span>
        </li>
      </ul>
    </div>
  );
};
