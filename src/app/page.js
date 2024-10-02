import Image from "next/image";
import { FilterPage } from "./pages/filterPage";

export default function Home() {
  return (
      <div className="flex h-screen justify-center items-center">
        <FilterPage/>
      </div>

  );
}
