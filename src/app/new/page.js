import Table from "../../components/Table";
import Table2 from "../../components/Table2";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kai Kleinbard</title>
        <link rel="icon" href="/flower.ico" />
      </Head>

      <div className="hidden md:block">
        <Table />
      </div>
      <div className="block md:hidden">
        <Table2 />
      </div>
      <div className="w-3/5 mx-auto md:w-7/10 sm:w-full">
        <Graph />
      </div>
    </div>
  );
}
