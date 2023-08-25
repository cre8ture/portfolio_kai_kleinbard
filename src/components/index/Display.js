// "use client";
// import React, { useState, useLayoutEffect, useEffect } from "react";
// import AnimatedText from "../animations/Animated_text_final";
// // import Text2 from "../animations/Animated_text";
// import Typing from "../typing/Typing";
// import { mission } from "../writing/mission";
// import Bio from "../../components/cards/Bio.js";
// import Footer from "../footer/Footer";
// // import Text from "../animations/Test_Animated";
// import MobileDisplay from "./Display_mobile";
// import Table from "../tables/Table_scroll";

// const textToType =
//   "Hello, I'm Kai Kleinbard, a software developer, AI specialist, and educator.";

// const workingOn = "Projects and Current Research";

// const AnimatedComponent = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMobileOrTablet, setIsMobileOrTablet] = useState(
//     typeof window !== "undefined" && window.innerWidth <= 768
//   );

//   useLayoutEffect(() => {
//     const handleResize = () => {
//       setIsMobileOrTablet(
//         typeof window !== "undefined" && window.innerWidth <= 768
//       );
//     };

//     if (typeof window !== "undefined") {
//       window.addEventListener("resize", handleResize);

//       return () => {
//         if (typeof window !== "undefined") {
//           window.removeEventListener("resize", handleResize);
//         }
//       };
//     }
//   }, []);

//   const mission_array = mission.split("\n");

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);
//   // Determine if the screen width corresponds to a mobile or tablet size
//   // const isMobileOrTablet = window.innerWidth <= 768; // Adjust the width threshold as needed
//   // console.log("isMobileOrTablet", window.innerWidth, isMobileOrTablet);

//   return (
//     <div>
//       {isMobileOrTablet ? (
//         <MobileDisplay />
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {/* <Typing textToType={textToType} /> */}
//           <div
//             style={{
//               position: "relative",

//               left: "0",
//               margin: "auto", // Corrected 'margins' to 'margin'
//               width: "100vw",
//               marginLeft: "10px",
//               background: "black",
//               fontFamily: "monospace", // Add monospace font
//               fontSize: "30px", // Set font size to 20
//               lineHeight: "1.5", // Add space beneath each line
//               padding: "10px", // Add padding for additional space between text and border
//             }}
//           >
//             <AnimatedText text={textToType} />
//           </div>
//           <br />
//           <Bio />
//           <br />
//           <div
//             style={{
//               position: "relative",

//               left: "0",
//               margin: "auto", // Corrected 'margins' to 'margin'
//               width: "100vw",
//               marginLeft: "10px",
//               background: "black",
//               fontFamily: "monospace", // Add monospace font
//               fontSize: "30px", // Set font size to 20
//               lineHeight: "1.5", // Add space beneath each line
//               padding: "10px", // Add padding for additional space between text and border
//             }}
//           >
//             <AnimatedText text={workingOn} />
//           </div>
//           <div
//             style={{
//               position: "relative",
//               // top: i sVisible ? "0" : "-100vh", // Starts offscreen
//               left: "0",
//               marginLeft: "100px",
//               // margin: "auto", // Corrected 'margins' to 'margin'
//               width: "100vw",
//               // height: isVisible ? "100vh" : "0", // Expands to full height
//               background: "black",
//               // transition: "top 1s, height 1s",
//               fontFamily: "monospace", // Add monospace font
//               fontSize: "25px", // Set font size to 20
//               lineHeight: "1.5", // Add space beneath each line
//               padding: "10px", // Add padding for additional space between text and border
//             }}
//           >
//             {mission_array.map((paragraph, index) => (
//               <React.Fragment key={index}>
//                 <AnimatedText text={paragraph} />
//               </React.Fragment>
//             ))}
//             <br />
//             <Table />
//             <br />
//             <Footer />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AnimatedComponent;

"use client";
import React, { useState, useLayoutEffect, useEffect } from "react";
import AnimatedText from "../animations/Animated_text_final";
// import Text2 from "../animations/Animated_text";
import Typing from "../typing/Typing";
import { mission } from "../writing/mission";
import Bio from "../../components/cards/Bio.js";
import Footer from "../footer/Footer";
// import Text from "../animations/Test_Animated";
import MobileDisplay from "./Display_mobile";
import Table from "../tables/Table_scroll";

const textToType =
  "Hello, I'm Kai Kleinbard, a software developer, AI specialist, and educator.";

const workingOn = "Projects and Current Research";

const AnimatedComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(
        typeof window !== "undefined" && window.innerWidth <= 768
      );
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("resize", handleResize);
        }
      };
    }
  }, []);

  const mission_array = mission.split("\n");

  useEffect(() => {
    setIsVisible(true);
  }, []);
  // Determine if the screen width corresponds to a mobile or tablet size
  // const isMobileOrTablet = window.innerWidth <= 768; // Adjust the width threshold as needed
  // console.log("isMobileOrTablet", window.innerWidth, isMobileOrTablet);

  return (
    <div>
      {/* Display on small screens */}
      <div className={`hidden lg:block`}>
        {" "}
        {/* Display on medium and large screens */}{" "}
        {/* Display on medium and large screens */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Typing textToType={textToType} /> */}
          <div
            style={{
              position: "relative",

              left: "0",
              margin: "auto", // Corrected 'margins' to 'margin'
              width: "100vw",
              marginLeft: "10px",
              background: "black",
              fontFamily: "monospace", // Add monospace font
              fontSize: "30px", // Set font size to 20
              lineHeight: "1.5", // Add space beneath each line
              padding: "10px", // Add padding for additional space between text and border
            }}
          >
            <AnimatedText text={textToType} />
          </div>
          <br />
          <Bio />
          <br />
          <div
            style={{
              position: "relative",

              left: "0",
              margin: "auto", // Corrected 'margins' to 'margin'
              width: "100vw",
              marginLeft: "10px",
              background: "black",
              fontFamily: "monospace", // Add monospace font
              fontSize: "30px", // Set font size to 20
              lineHeight: "1.5", // Add space beneath each line
              padding: "10px", // Add padding for additional space between text and border
            }}
          >
            <AnimatedText text={workingOn} />
          </div>
          <div
            style={{
              position: "relative",
              // top: i sVisible ? "0" : "-100vh", // Starts offscreen
              left: "0",
              marginLeft: "100px",
              // margin: "auto", // Corrected 'margins' to 'margin'
              width: "100vw",
              // height: isVisible ? "100vh" : "0", // Expands to full height
              background: "black",
              // transition: "top 1s, height 1s",
              fontFamily: "monospace", // Add monospace font
              fontSize: "25px", // Set font size to 20
              lineHeight: "1.5", // Add space beneath each line
              padding: "10px", // Add padding for additional space between text and border
            }}
          >
            {mission_array.map((paragraph, index) => (
              <React.Fragment key={index}>
                <AnimatedText text={paragraph} />
              </React.Fragment>
            ))}
            <br />
            <Table />
            <br />
            <Footer />
          </div>
        </div>
      </div>
      {isMobileOrTablet&&<MobileDisplay className={`sm:block md:block lg:hidden`} />}
    </div>
  );
};

export default AnimatedComponent;
