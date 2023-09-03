
"use client";
import Head from "next/head";
import WordSpace from "../../components/animations/anim_8_1/Load_fadeOnScroll";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kai Kleinbard</title>
        <link rel="icon" href="/flower.ico" />
      </Head>

      <div className=""></div>
      {/* <div className="w-3/5 mx-auto md:w-7/10 sm:w-full"> */}
        <WordSpace />
      </div>
    // </div>
  );
}
