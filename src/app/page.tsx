// "use client";
// import Head from "next/head";
// import Table from "../components/index/Display";
// import Table2 from "../components/index/Display_mobile2";

// export default function Home() {
//   return (
//     <div className="">
//       <Head>
//         <title>Kai Kleinbard</title>
//         <link rel="icon" href="/flower.ico" />
//       </Head>

//       {/* Display Table on screens lg or larger */}
//       <div className="hidden lg:block">
//         <Table />
//       </div>

//       {/* Display Table2 on screens md or below */}
//       <div className="block lg:hidden">
//         <Table2 />
//       </div>
//     </div>
//   );
// }


"use client";
import Head from "next/head";
import Table from "../components/index/Display";  
import Table2 from "../components/index/Display_mobile2";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kai Kleinbard</title>
        <link rel="icon" href="/flower.ico" />
      </Head>

      {/* Display Table2 on screens md and below */}
      <div className="block lg:hidden"> 
        <Table2 />
      </div>

      {/* Display Table on screens lg or larger */}
      <div className="hidden md:block">
        <Table />
      </div>
    </div>
  );
}
