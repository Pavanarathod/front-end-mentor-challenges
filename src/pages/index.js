import React from "react";
import Slider from "../components/Carousel/Slider";
import LandingV1 from "../components/LandingV1/LandingV1";
import Medium from "../components/Medium/Medium";
import Motion from "../components/Motion/motion";
import ProjectThree from "../components/ProjectThree/ProjectThree";
import TaskOne from "../components/TaskOne/TaskOne";
import TaskTwo from "../components/TaskTwo/TaskTwo";

const Home = () => {
  return (
    <main className="bg-black">
      {/* <TaskOne /> */}
      {/* <TaskTwo /> */}
      {/* <ProjectThree /> */}
      {/* <Medium /> */}
      {/* <LandingV1 /> */}
      {/* <Motion /> */}
      <Slider />
    </main>
  );
};

export default Home;
