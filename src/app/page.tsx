"use client";

import Head from "next/head";
import Table from "../components/index/Display";  
import Table2 from "../components/index/Display_mobile2";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Kai Kleinbard</title>
        <link rel="icon" href="/flower.ico" />
      </Head>

      {/* Show Table on lg and larger screens */}
      <div className="hidden md:block lg:block"> 
        <Table />
      </div>

      {/* Show Table2 only on md and smaller screens */}
      <div className="block md:block lg:hidden">
        <Table2 />  
      </div>

    </div>
  );
}
