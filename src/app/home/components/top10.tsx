"use client"

import React, { useState, useEffect, useRef } from "react";
import Papa from "papaparse";
import { fetchMovieImagesBatch } from "@/app/services/movieService";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Card5, Card2 } from "@/components/Cards";
import useHome from "../hooks";

export default function Top10 () {

    const { top10: data, scrollWrapperRef, scroll } = useHome();

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
        </>
    )
}