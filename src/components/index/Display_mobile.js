import React, { useState, useEffect } from "react";
import AnimatedText from "../animations/Animated_text_final";
// import Typing from "../typing/Typing";
import { mission } from "../writing/mission";
// import Bio from "../../components/cards/Bio.js";
import Footer from "../footer/Footer";
import Table from "../tables/Table_scroll";
import { bio } from "../writing/bio";
import Load_imgs from "../image/load_imgs_into_pixels_mobile";
import Image from "next/image";

const textToType =
  "Hello, I'm Kai Kleinbard, a software developer, AI specialist, and educator.";

const workingOn = "Projects and Current Research";

const AnimatedComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mission_array = mission.split("\n");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  console.log("we in the mobile!!!");

  return (
    <div
      className="MobileDisplay"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          margin: "auto",
          width: "100vw",
          background: "black",
          fontFamily: "monospace",
          fontSize: "30px",
          lineHeight: "1.5",
          padding: "10px",
        }}
      >
        {/* <br /> */}
        <AnimatedText text={textToType} />
      </div>
      <div
        style={{
          position: "relative",
          margin: "auto",
          width: "100vw",
          background: "black",
          fontFamily: "monospace",
          fontSize: "20px",
          lineHeight: "1.5",
          padding: "10px",
        }}
      >
        <AnimatedText text={bio} />
      </div>
      <div
        style={{
          margin: "20px auto", // Adjust margin for spacing
          background: "black",
          fontFamily: "monospace",
          fontSize: "30px",
          lineHeight: "1.5",
          padding: "10px",
        }}
      >
        {/* <Load_imgs /> */}
        <Image
          src="/kk2.png"
          alt="Image of Kai Kleinbard"
          width={800}
          height={800}
        ></Image>
        <br />
        <AnimatedText text={workingOn} />
      </div>
      <div
        style={{
          margin: "20px auto", // Adjust margin for spacing
          marginTop: "0px",
          background: "black",
          fontFamily: "monospace",
          fontSize: "25px",
          lineHeight: "1.5",
        }}
      >
        {mission_array.map((paragraph, index) => (
          <React.Fragment key={index}>
            <AnimatedText text={paragraph} />
          </React.Fragment>
        ))}
        <Table />
      </div>
      {/* <Bio /> */}
      <Footer />
    </div>
  );
};

export default AnimatedComponent;