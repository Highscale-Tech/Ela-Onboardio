import React, { Fragment } from "react";

import Hero from "./Hero";
import Intro from "./Intro";
import Services from "./Services";

const Home = () => {
  return (
    <div
      style={{
        background: "rgb(102,175,255)",
        background:
          "linear-gradient(149deg, rgba(102,175,255,1) 0%, rgba(245,245,245,1) 36%, rgba(245,245,245,1) 61%, rgba(102,175,255,1) 100%)",
      }}
      className="home"
    >
      <Hero />
      <Intro />
      <Services />
    </div>
  );
};

export default Home;
