import React from "react";
import featureItem from "../../assets/home/feature1.gif";
import circlecheckicon from "../../assets/home/circlecheckicon.svg";
export const Features = () => {
  return (
    <div className="text-center mt-10 ">
      <h5 className="text-xl font-semibold text-purple">Features</h5>
      <div>
        <div>
          <h2 className="text-3xl text-dark font-bold my-3 md:text-4xl">
            Chat, Analyze, Share
          </h2>
          <p className="text-[16px] md:text-[18px] leading-6 md:leading-8">
            Welcome to Matrixly, your all-in-one AI webapp revolutionizing the
            way you handle <br className="hidden md:block" /> documents and
            streamline communication. Matrixly offers:
          </p>
        </div>
      </div>
      {/* md:w-[90%] */}
      {/* Features desc */}
      {/* lg:w-[90%] */}
      <div className="lg:mt-20">
        {/* grid item */}
        <div className="md:grid md:grid-cols-2  mt-10  md:gap-8 lg:gap-20">
          <div className="">
            <img
              className=" md:mx-1 rounded-lg md:w-full"
              src={featureItem}
              alt="feature image 1"
            />
          </div>
          <div className="text-left self-center">
            <h3 className="text-[1.25rem] mt-10 md:text-[1.6rem] font-semibold my-6 text-dark">
              Chat with GPT 4 or 3.5
            </h3>
            <p className="text-sm mb-6 md:text-[1.1rem] leading-6 mt-4 md:w-[90%]">
              Engage with advanced chatbot for insightful, context-aware
              conversations powered by GPT 4 or 3.5
            </p>
            <ul>
              <li className="flex items-center gap-3">
                <img src={circlecheckicon} />
                <span className="text-sm font-medium text-dark md:text-base">
                  Engage in meaningful conversations
                </span>
              </li>
              <li className="flex my-4 items-center gap-3">
                <img src={circlecheckicon} />
                <span className="text-sm text-dark md:text-base">
                  Explore limitless possibilities
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img src={circlecheckicon} />
                <span className="text-sm text-dark md:text-base">
                  Enjoy a more natural and human-like interaction{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        {/* grid item */}
        <div className="md:grid md:grid-cols-2  md:gap-8  mt-10  lg:gap-20">
          <div className="md:col-start-2  md:row-start-1  md:row-end-1 ">
            <img
              className=" rounded-md   md:mx-1  mb-10 md:w-full "
              src={featureItem}
              alt="feature image 1"
            />
          </div>
          {/* self-end */}
          <div className="text-left self-center   ">
            <h3 className="text-[1.4rem] md:text-[1.6rem] font-semibold my-6 text-dark">
              Document Analysis
            </h3>
            <p className="text-sm mb-6 md:text-[1.1rem] leading-6 mt-4 w-[90%]">
              Upload lengthy documents and let Matrixly provide you with quick
              and accurate summaries, enhancing your efficiency.
            </p>
            <ul>
              <li className="flex items-center gap-3">
                <img src={circlecheckicon} />
                <span className="text-sm text-dark md:text-base">
                  Extract key insights, save time with the summaries.
                </span>
              </li>
              <li className="flex my-4 items-center gap-3">
                <img src={circlecheckicon} />
                <span className="text-sm text-dark md:text-base">
                  Navigate and search for efficient retrieval of information.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img src={circlecheckicon} />
                <span className="text-sm text-dark md:text-base">
                  Visualize critical information with preview screen.
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        {/* grid item */}
        <div className="md:grid md:grid-cols-2  md:gap-8 mt-10  lg:gap-12">
          <div className=" ">
            <img
              className=" md:mx-1 rounded-md md:w-full  "
              // md:m
              src={featureItem}
              alt="feature image 1"
            />
          </div>
          <div className="text-left  self-center">
            <h3 className="text-[1.4rem] mt-10 md:text-[1.6rem] font-semibold text-dark">
              Create and Share bots
            </h3>
            <p className="text-sm mb-6 md:text-[1.1rem] leading-6 mt-4  md:w-[90%]">
              Easily turn documents into interactive chatbots for dynamic
              communication. Share your chatbots seamlessly using QR codes,
              enabling others to access and engage with the content instantly.
            </p>
            <ul>
              <li className="flex items-center gap-3">
                <img src={circlecheckicon} />
                <span className="text-sm text-dark md:text-base ">
                  Share a Thousand Words of information in a single screen.
                </span>
              </li>
              <li className="flex my-4 items-center gap-3">
                <img src={circlecheckicon} />
                <span className="text-sm text-dark md:text-base ">
                  Make documents interactive and engaging.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img src={circlecheckicon} />
                <span className="text-sm text-dark md:text-base ">
                  Make documents interactive and engaging.
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
