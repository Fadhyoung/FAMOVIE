import axios from "axios"
import { useState } from "react";
import Link from "next/link";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Card2 } from "@/app/components/Cards";
import Top10 from "@/app/sections/top10";
import AllData from "@/app/sections/allData";
import LandingPage from "@/app/sections/landingPage";
import Best3 from "@/app/sections/best3";

export default function test () {

    const [data, setData] = useState([

    ]);

    const getData = async () => {
        console.log("getData")
        const options = {
            method: 'GET',
            url: 'https://imdb-com.p.rapidapi.com/search',
            params: {
              searchTerm: 'Titanic',
              limit: '5',
              language: 'en-US'
            },
            headers: {
              'x-rapidapi-key': '8e85c673cemsh045f5ff13a464fap10136cjsn99506692af2f',
              'x-rapidapi-host': 'imdb-com.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setData(response.data.data.mainSearch.edges)
              console.log("response massage is: ", response.data.message);
              console.log("response is: ", response.data);
          } catch (error) {
              console.error(error);
          }        ;
    }

    return (
    <>
        <div className="lg:w-full xs:w-fit max-w-[1824px] m-auto grid grid-cols-1 gap-10 justify-center items-center bg-white">
            
            {/** LANDING PAGE */}
            <LandingPage />

            {/** TOP 3 BEST */}
            <Best3 />

            {/** TOP 10 */}
            <div className="w-full h-auto pb-5 rounded-b-xl drop-shadow-xl border-b border-black bg-white">
            <div className="w-10/12 m-auto flex flex-col items-start gap-5">
                <div className="w-full flex justify-between">
                    <button className="flex gap-2 b3-button">Top 10 Recomendation</button>
                    <div className="w-fit flex gap-2 justify-between">
                        <button className='b3-button cursor-pointer'><FiChevronLeft /></button>
                        <button className='b3-button dcursor-pointer'><FiChevronRight /> </button>
                    </div>
                </div>
                <div className="w-full flex gap-8 overflow-x-scroll">
                    <Card2 title={"Title"}plot={"one of the greates series that you will ever see, trust me, it works"}img={"/images/hotd.jpg"}url={"URL"}/>
                    <Card2 title={"Title"}plot={"one of the greates series that you will ever see, trust me, it works"}img={"/images/hotd.jpg"}url={"URL"}/>
                    <Card2 title={"Title"}plot={"one of the greates series that you will ever see, trust me, it works"}img={"/images/hotd.jpg"}url={"URL"}/>
                    <Card2 title={"Title"}plot={"one of the greates series that you will ever see, trust me, it works"}img={"/images/hotd.jpg"}url={"URL"}/>
                    <Card2 title={"Title"}plot={"one of the greates series that you will ever see, trust me, it works"}img={"/images/hotd.jpg"}url={"URL"}/>
                </div>
            </div>
            </div>

            {/** ALL THAT I'VE WATCHED */}
            <AllData width={"w-3/4"} />

            {/** FOOTER */}
            <div className="w-full p-10 flex gap-20 justify-center items-center foreground2">
                TEST HERE
                <button className="p-5 rounded-md bg-red-500" onClick={getData}>GET DATA</button>
                <Link className="p-5 rounded-md bg-blue-500" href={"/"} >Home</Link>
                <div>
                    {data.map((item, index) => (
                        <div key={index}>
                            {item.node.entity.originalTitleText.text}
                            <img className="w-40 p-5 bg-sky-500" src={item.node.entity.primaryImage.url} />
                        </div>
                    ))}
                </div>
            </div>
        
        </div>
    </>
    )
}