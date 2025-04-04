"use client"

import React, { useState, useEffect, useRef } from "react";
import Papa from "papaparse";
import { fetchMovieImagesBatch } from "@/app/services/movieService";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Card5, Card2 } from "@/components/Cards";

export default function Top10 () {

  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    // Load CSV data
    fetch('/FAMOVIE/top10.csv')
        .then((response) => response.text())
        .then((csvText) => {
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: async (result) => {
                  const movieData = result.data;
                  const moviesWithImages = await fetchMovieImagesBatch(movieData); // Use the service
                  setData(moviesWithImages);
                },
            });
        });
    }, []);

    const scroll = (direction: string) => {
        const wrapper = scrollWrapperRef.current;
        if (!wrapper) return;
    
        const itemWidth = (wrapper.firstChild as HTMLElement)?.offsetWidth || 0;
        const scrollAmount = itemWidth * 4;
    
        if (direction === "left") {
            wrapper.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            });
        } else if (direction === "right") {
            wrapper.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };
    

    console.log(data[0])

    return (
        <>
            {/** TOP 10 */}
            <div className="w-full h-auto pb-5 rounded-b-xl drop-shadow-xl border-b border-black bg-white">
            <div className="w-10/12 m-auto flex flex-col items-start gap-5">
                <div className="w-full flex justify-between">
                    <button className="flex gap-2 b3-button">Top 10 Recomendation</button>
                    <div className="w-fit flex gap-2 justify-between">
                        <button className='b3-button cursor-pointer' onClick={() => scroll("left")}><FiChevronLeft /></button>
                        <button className='b3-button dcursor-pointer' onClick={() => scroll("right")}><FiChevronRight /> </button>
                    </div>
                </div>
                <div className="w-full flex gap-8 overflow-x-scroll snap-x" ref={scrollWrapperRef}>
                {data.map((item: any, index: number) => (
                            <Card2 
                                key={index}
                                title={item["Title"]}
                                desc={item["Plot"]}
                                poster={item["Poster"]}
                                url={item["URL"]}
                            />
                    ))}
                </div>
            </div>
            </div>
            {/** 
            <div className="w-11/12 m-auto flex flex-col items-start gap-5">
                <div className="w-full px-10 flex justify-between">
                <button className="px-6 py-2 flex gap-2 b2-button">Movies series that i've watched <FaExternalLinkAlt /> </button>
                <div className="flex gap-2">
                    <FaChevronLeft className='px-2 py-2 b2-button size-10 cursor-pointer' onClick={() => scroll("left")} />
                    <FaChevronRight className='px-2 py-2 b2-button size-10 cursor-pointer' onClick={() => scroll("right")} /> 
                </div>
                </div>                            
                <div className="w-full pb-5 flex gap-8 overflow-x-scroll" ref={scrollWrapperRef}>            
                    {data.map((item, index) => (
                        <Card5  key={index}
                                title={item.data["Title"]}
                                desc={item.data["Plot"]}
                                img={item.data["Poster"]}
                        />
                    ))}            
                </div>
            </div>    
            */}
        </>
    )
}