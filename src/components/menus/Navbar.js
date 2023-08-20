"use client";
// import Link from "next/link";
// import { useState } from "react";
// import Index from "../index/Reg2";
// import Tootltip from "../tooltips/Tooltips";
// // import Screenshot from "../utils/Screenshot";
// // import New from "../utils/New";
// import New_Screenshot_Button from "../utils/NewAndScreenshot";

// export default function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isGraph, setIsGraph] = useState(true);

//   function toggleMenu() {
//     setShowMenu(!showMenu);
//     setIsGraph(!isGraph);
//   }

//   return (
//     <nav className="flex items-center justify-between px-4 py-6">
//       <Tootltip>
//         {" "}
//         <New_Screenshot_Button />{" "}
//       </Tootltip>
//       <Link href={isGraph ? "/table" : "/main"}>
//         <div
//           // className="flex justify-end text-3xl font-mono cursor-pointer transform transition duration-500 hover:rotate-90"
//           className="flex justify-end text-3xl font-mono cursor-pointer transform transition duration-500 hover:scale-110"
//           onClick={toggleMenu}
//         >
//           <div className="pt-2">
//             {isGraph ? <span>[index]</span> : <span>[graph]</span>}
//           </div>
//           {/* <Link href="/table"> */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-12 h-12"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 9h16.5m-16.5 6.75h16.5"
//             />
//           </svg>
//           {/* </Link> */}
//         </div>
//       </Link>

//       {/* {showMenu && (
//         // <div className="fixed right-0 top-0 h-full w-2/3 bg-gray-900"></div>
//         <div><Index />

//         </div>
//       )} */}
//     </nav>
//   );
// }

import Link from "next/link";
import { useState, Suspense, useEffect } from "react";
// import { useRouter } from "next/navigation"; // "next/router";

// https://nextjs.org/docs/app/api-reference/functions/use-router
import { NavigationEvents } from "./navigation-events";

// import Index from "../index/Reg2";
import Tootltip from "../tooltips/Tooltips";
// import Screenshot from "../utils/Screenshot";
// import New from "../utils/New";
import New_Screenshot_Button from "../utils/NewAndScreenshot";
import { Familjen_Grotesk } from "next/font/google";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isGraph, setIsGraph] = useState(true);
  const [url, setUrl] = useState("");
  const [linkText, setLinkText] = useState("graph");
  // const router = useRouter();

  useEffect(() => {
    // function handleRouteChange(url) {
    //   setIsGraph(url === "/main");
    // }
    // router.events.on("routeChangeComplete", handleRouteChange);
    // return () => {
    //   router.events.off("routeChangeComplete", handleRouteChange);
    // };
    if (url.includes("graph")) {
      setIsGraph(true);
      setLinkText("table");
    } else {
      setIsGraph(false);
      setLinkText("graph");
    }
  }, [url]);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="flex items-center justify-between px-4 py-6">
      <Tootltip>
        {" "}
        <New_Screenshot_Button />{" "}
      </Tootltip>
      {/* <Link href={"/" + linkText}> */}
      <Link href={isGraph ? "/" : "/graph"}>
        <div
          // className="flex justify-end text-3xl font-mono cursor-pointer transform transition duration-500 hover:rotate-90"
          className="flex justify-end text-3xl font-mono cursor-pointer transform transition duration-500 hover:scale-110"
          onClick={toggleMenu}
        >
          <div className="pt-2">
            {/* {isGraph ? <span>[graph]</span> : <span>[index]</span>} */}
            {<span>[{linkText}]</span>}
          </div>
          {/* <Link href="/table"> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          {/* </Link> */}
          <Suspense fallback={null}>
            <NavigationEvents setUrl={setUrl} />
          </Suspense>
        </div>
      </Link>

      {/* {showMenu && (
        // <div className="fixed right-0 top-0 h-full w-2/3 bg-gray-900"></div>
        <div><Index />
        
        </div>
      )} */}
    </nav>
  );
}
