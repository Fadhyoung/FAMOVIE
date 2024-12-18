import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import Top10 from "@/sections/top10";
import AllData from "@/sections/allData";
import LandingPage from "@/sections/landingPage";
import Best3 from "@/sections/best3";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  return (
   <>
     <div className="lg:w-full xs:w-fit max-w-[1824px] m-auto grid grid-cols-1 gap-10 justify-center items-center bg-white">      

      <LandingPage />

      <Best3 />

      <Top10 />

      <AllData width={"w-3/4"}  />

      {/** FOOTER */}
      <div className="w-full p-10 flex gap-20 justify-center items-center foreground2">
          <h1>FAMOVIE HERE</h1>
        <Link className="p-5 rounded-md bg-blue-500" href="/test">TEST</Link>
      </div>
      
    </div>
   </>

)}
