import React from "react";
import img from "../../images/Onboarding33.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right" src={img} />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl  text-gray-800 font-bold">
              Welcome to Onboardio - Simplifying Your Onboarding Process!
            </h3>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                At Onboardio, we've created a seamless platform to streamline
                your onboarding process. Our intuitive tools empower managers to
                efficiently manage tasks, communicate effectively with new
                hires, and track progress effortlessly.
              </p>
            </div>

            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                Say goodbye to the complexities of onboarding and hello to a
                smoother process with Onboardio.
              </p>
            </div>
            <Link
              to="/login"
              className="text-black bg-blue-400 hover:bg-blue-300 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-1 group-hover: translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
