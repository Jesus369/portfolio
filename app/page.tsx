import {
  Navbar,
  About,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Works,
  Contact,
  StarsCanvas,
} from "./components";

import React, { Suspense } from "react";

import graywave from "./assets/green-wave.png";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div
        style={{
          backgroundImage: `url(${graywave.src})`,
        }}
        className="h-full w-full bg-cover bg-no-repeat bg-center"
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
