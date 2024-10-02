import Image from "next/image";
import { FilterPage } from "./pages/filterPage";
import {BrowserRouter} from 'react'

export default function Home() {
  return (
      <div className="flex h-screen justify-center items-center">
        
        
          <FilterPage/>
      
      </div>

  );
}
