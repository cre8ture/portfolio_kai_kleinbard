// // import "./globals.css";
// // import type { Metadata } from "next";
// // import { Inter } from "next/font/google";
// // import Navbar from "../components/menus/Navbar";

// // const inter = Inter({ subsets: ["latin"] });

// // export const metadata: Metadata = {
// //   title: "Create Next App",
// //   description: "Generated by create next app",
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en">
// //       <body className={inter.className}>
// //         <Navbar />
// //         {children}
// //       </body>
// //     </html>
// //   );
// // }
// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Navbar from "../components/menus/Navbar";
// import ReadAloudButton from "../components/aloud/AloudButton";
// import GoogleAnalytics from "../components/google/GoogleAnalytics"

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar />
//         {children}
//         <ReadAloudButton />
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/menus/Navbar";
import ReadAloudButton from "../components/aloud/AloudButton";
import GoogleAnalytics from "../components/google/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// console.log("process.env.GA_TRACKING_ID", process.env.GA_TRACKING_ID)


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <body className={inter.className}>
        <Navbar />
        {children}
        <ReadAloudButton />
      </body>
    </html>
  );
}

