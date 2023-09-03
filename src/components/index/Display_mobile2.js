// import React, { useState, useEffect } from "react";
// import AnimatedText from "../animations/anim_8_1/Load_fadeOnScroll2";
// // import AnimatedText from "../animations/Animated_text_final";

// // import Typing from "../typing/Typing";
// import { mission } from "../writing/mission";
// // import Bio from "../../components/cards/Bio.js";
// import Footer from "../footer/Footer";
// import Table from "../tables/Table_scroll";
// import { bio } from "../writing/bio";
// import Load_imgs from "../image/load_imgs_into_pixels_mobile";
// import Image from "next/image";

// const textToType =
//   "Hello, I'm Kai Kleinbard, a software developer, AI specialist, and educator.";

// const workingOn = "Projects and Current Research";

// const AnimatedComponent = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const mission_array = mission.split("\n");

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   console.log("we in the mobile!!!");

//   return (
//     <div
//       className="MobileDisplay w-3/4"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           position: "relative",
//           margin: "auto",
//           width: "100vw",
//           background: "black",
//           fontFamily: "monospace",
//           fontSize: "30px",
//           lineHeight: "1.5",
//           padding: "10px",
//         }}
//       >
//         {/* <br /> */}
//         <AnimatedText>
// <p> {textToType} </p>
//           </AnimatedText>
//       </div>
//       <div
//         style={{
//           position: "relative",
//           margin: "auto",
//           width: "100vw",
//           background: "black",
//           fontFamily: "monospace",
//           fontSize: "15x",
//           lineHeight: "1.5",
//           padding: "10px",
//         }}
//       >
//         <AnimatedText>
//           <p>{bio}</p>
//         </AnimatedText>
//       </div>
//       <div
//         style={{
//           margin: "20px auto", // Adjust margin for spacing
//           background: "black",
//           fontFamily: "monospace",
//           fontSize: "30px",
//           lineHeight: "1.5",
//           padding: "10px",
//         }}
//       >
//         {/* <Load_imgs /> */}
//         <Image
//           src="/kk2.png"
//           alt="Image of Kai Kleinbard"
//           width={800}
//           height={800}
//         ></Image>
//         <br />
//         <AnimatedText >
//           <p>{workingOn} </p>
//           </AnimatedText>
//       </div>
//       <div
//   style={{
//     width: "100%", // Set a maximum width for the div
//     margin: "0 auto", // Center the div horizontally
//     background: "black",
//     fontFamily: "monospace",
//     fontSize: "15px",
//     lineHeight: "1.5",
//   }}
// >
//   {mission_array.map((paragraph, index) => ( 
//      <React.Fragment key={index}>
//       <AnimatedText>
//         <p>{mission}</p>
//       </AnimatedText>
//      </React.Fragment> 
//   ))} 
//   <Table />
// </div>

//       {/* <Bio /> */}
//       <Footer />
//     </div>
//   );
// };

// export default AnimatedComponent;

import React, { useState, useEffect } from "react";
// import AnimatedText from "../animations/anim_8_1/Load_fadeOnScroll2";
import AnimatedText2 from "../animations/anim_8_1/FadeOnScroll";

import { mission } from "../writing/mission";
import Footer from "../footer/Footer";
import Table from "../tables/Table_scroll";
import { bio } from "../writing/bio";
import Load_imgs from "../image/load_imgs_into_pixels_mobile";
import Image from "next/image";

const textToType =
  "Hello, I'm Kai Kleinbard - software developer, AI specialist, educator.";

const workingOn = "Projects and Current Research";

const AnimatedComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mission_array = mission.split("\n");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  console.log("MOBILE IS HERE TO STAY!")
  return (
    <div className="MobileDisplay w-full px-3" style={{ background: "black", fontFamily: "monospace", fontSize: "15px", lineHeight: "1.5", padding: "10px" }}>
      <div className="w-full text-5xl mx-auto">
        <AnimatedText2 id_from_parent='textToType'>
          <p>{textToType}</p>
        </AnimatedText2>
      </div>
      <br />
      <div className="w-full max-w-4xl mx-auto">
        <AnimatedText2 id_from_parent='bio'>
          <p>{bio}</p>
        </AnimatedText2>
      </div>
      <div className="w-full text-5xl  mx-auto my-10">
        <Image src="/kk2.png" alt="Image of Kai Kleinbard" width={400} height={400} />
        <br />
        <AnimatedText2 id_from_parent='workingOn'>
          <p>{workingOn}</p>
        </AnimatedText2>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        {/* {mission_array.map((paragraph, index) => (
          <AnimatedText key={index}>
            <p>{mission}</p>
          </AnimatedText>
           
         ))} */}

          <AnimatedText2 id_from_parent='mission' >
            <p key='moo' id='moochild'>{mission}</p>
          </AnimatedText2>
          <br/>
        <Table />
      </div>
      <Footer />
    </div>
  );
};

export default AnimatedComponent;
