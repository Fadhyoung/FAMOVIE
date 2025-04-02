"use client"

import React, { useState, useEffect } from "react";
import Papa from "papaparse";

import { fetchMovieImagesBatch } from "@/app/services/movieService";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card1 from "@/components/Cards";

export default function Best3 () {

    const [data, setData] = useState<any>([]); // Data for the current page
    const [category, setCategory] = useState(["Western", "Asian", "Movies", "Indonesia"])
    const [currentPage, setCurrentPage] = useState(0)

    const [isLoading, setIsLoading] = useState(false);

    // Function to fetch specific page data
    const fetchPageData = async (currentCategory: string) => {

        try {
            const response = await fetch('/FAMOVIE/Best3.csv');
            const csvText = await response.text();

            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: async (result: { data: { Category: string }[] }) => {
                    const allData = result.data.filter(item => item.Category === currentCategory);

                    console.log(allData)

                    const moviesWithImages = await fetchMovieImagesBatch(allData); // Use the service
                    setData(moviesWithImages);
                },
            });
        } catch (error) {
            console.error('Error fetching page data:', error);
        }
    };

    console.log("data length: ", data.length)

    // Fetch initial page data
    useEffect(() => {
        setIsLoading(true);
        fetchPageData(category[currentPage]);
        setIsLoading(false);
    }, [currentPage]);

    // Handle page change
    const handlePageChange = (page: any) => {
        setIsLoading(true);
        if (page <= 0) {
            setCurrentPage(0);
        } else if (page >= (category.length - 1)) {
            setCurrentPage(category.length - 1);
        } else {setCurrentPage(page);}   
        setIsLoading(false);     
    };

    if (isLoading) {
        <div>Loading..</div>
    }

    return (
        <>
        <div className="w-11/12 m-auto rounded-b-[40px] drop-shadow-xl bg-gradient-to-t from-black to-transparent" style={{padding:"1px"}}>
        <div className="w-full px-16 py-10 relative flex flex-col gap-5 justify-center items-center overflow-hidden rounded-b-[38px] text-black ">
            
            {/** DECORATION */}
            <div className="w-full h-full absolute -z-30 bg-white"></div>
            <div className="w-[1644px] h-[1644px] absolute -z-10 -bottom-[1000] rounded-full border border-white-2"></div>
            <div className="w-[1100px] h-[1100px] absolute -z-20 -bottom-[625] rounded-full bg-white-2"></div>
            
            {/** TOP SECTION */}
            <div className="w-full flex gap-20 justify-between">
                {/** 1ST */}
                <div className="w-1/3 flex flex-col items-start gap-2">
                    <button className="b3-button" onClick={() => window.open("https://www.imdb.com/list/ls547498540/?ref_=ext_shr_lnk", "_blank")}>Famovie imdb list <FaExternalLinkAlt /></button>
                    <button className="b3-button" onClick={() => window.open("https://www.imdb.com/list/ls547498540/?ref_=ext_shr_lnk", "_blank")}>Letterbox <FaExternalLinkAlt /></button>
                </div>
                {/** 2ND */}
                <div className="w-1/3 text-center text-black">
                    <p className="text-[14px] font-medium">1st Recomendation</p>
                    <h1 className="text-[32px] font-semibold">GETTING TO KNOW WITH MY BEST 3</h1>
                </div>
                {/** 3RD */}
                <div className="w-1/3 flex flex-col items-end gap-2">
                    <div className="w-fit flex gap-2 justify-between">
                        <button className="b3-button" onClick={() => handlePageChange(currentPage - 1)}><FiChevronLeft /></button>
                        <button className="b3-button" onClick={() => handlePageChange(currentPage + 1)}><FiChevronRight /> </button>
                    </div>
                    <button className="b3-button">#{category[currentPage]}</button>
                </div>
            </div>
            {/** MIDDLE SECTION */}
            <div className="w-full flex mt-10 gap-10 justify-between items-end">
                {/** CARD */}
                {!isLoading ? (
                    <>
                    <Card1 width={"w-1/3"} height={"h-56"} data={data[0]} />
                    <Card1 width={"w-1/3"} height={"h-56"} data={data[1]} />
                    <Card1 width={"w-1/3"} height={"h-56"} data={data[2]} />
                    </>
                ) : (
                    <p>Loading...</p> // or a skeleton loader component
                )}

            </div>
            {/** BOTTOM SECTION */}
            <div className="flex gap-5">
                <button className={`b3-button ${currentPage === 0 ? "bg-black text-white" : "bg-white"}`} onClick={() => setCurrentPage(0)}> Western</button>
                <button className={`b3-button ${currentPage === 1 ? "bg-black text-white" : "bg-white"}`} onClick={() => setCurrentPage(1)}> Asian</button>
                <button className={`b3-button ${currentPage === 2 ? "bg-black text-white" : "bg-white"}`} onClick={() => setCurrentPage(2)}> Movies</button>
                <button className={`b3-button ${currentPage === 3 ? "bg-black text-white" : "bg-white"}`} onClick={() => setCurrentPage(3)}> Indonesia</button>
            </div>
        </div>
        </div>
        </>
    )
}