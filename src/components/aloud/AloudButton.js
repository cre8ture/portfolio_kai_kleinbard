"use client";
// import React from "react";
// import styles from "./aloud.module.css";

// const ReadAloudButton = () => {
//   const handleClick = () => {
//     // Get all the text on the current page
//     const text = document.body.innerText;

//     // Create a new SpeechSynthesisUtterance instance
//     const utterance = new SpeechSynthesisUtterance(text);

//     // Speak the text using the SpeechSynthesis API
//     speechSynthesis.speak(utterance);
//   };

//   return (
//     <button className={styles.button} onClick={handleClick}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         {" "}
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
//         />{" "}
//       </svg>
//     </button>
//   );
// };

// export default ReadAloudButton;
// import React, { useState } from "react";
// import styles from "./aloud.module.css";

// const ReadAloudButton = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handleClick = () => {
//     if (isPlaying) {
//       // Pause the speech synthesis
//       speechSynthesis.cancel();
//     } else {
//       // Get all the text on the current page
//       const text = document.body.innerText;

//       // Create a new SpeechSynthesisUtterance instance
//       const utterance = new SpeechSynthesisUtterance(text);

//       // Speak the text using the SpeechSynthesis API
//       speechSynthesis.speak(utterance);
//     }

//     // Toggle the playing state
//     setIsPlaying(!isPlaying);
//   };

//   // Listen for the end of speech event to reset the button state
//   speechSynthesis.onend = () => {
//     setIsPlaying(false);
//   };

//   return (
//     <button
//       className={`text-blue-500 ${styles.button} ${
//         isPlaying ? styles.playing : ""
//       } ${styles.fixedButton} ${
//         isPlaying ? styles.clicked : "styles.notClicked"
//       }`}
//       onClick={handleClick}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         {" "}
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
//         />{" "}
//       </svg>
//     </button>
//   );
// };

// export default ReadAloudButton;

import React, { useState, useEffect } from "react";
import styles from "./aloud.module.css";

const ReadAloudButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleEnd = () => {
      setIsPlaying(false);
    };

    if (typeof window !== "undefined") {
      speechSynthesis.onend = handleEnd;
    }

    return () => {
      if (typeof window !== "undefined") {
        speechSynthesis.onend = null;
      }
    };
  }, []);

  const handleClick = () => {
    if (isPlaying) {
      speechSynthesis.cancel();
    } else {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <button
      className={`text-blue-500 ${styles.button} ${
        isPlaying ? styles.playing : ""
      } ${styles.fixedButton} ${isPlaying ? styles.clicked : ""}`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </button>
  );
};

export default ReadAloudButton;
