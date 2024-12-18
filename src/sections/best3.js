import React, { useState, useEffect } from "react";
import Papa from "papaparse";

import { fetchMovieImagesBatch } from "@/services/movieService";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Card1 from "@/components/Cards";

export default function Best3 () {

    const [data, setData] = useState([]); // Data for the current page
    const [category, setCategory] = useState("Western")
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 3;

    const [isLoading, setIsLoading] = useState(false);

    // Function to fetch specific page data
    const fetchPageData = async (page) => {
        try {
            const response = await fetch('/Best3.csv');
            const csvText = await response.text();

            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: async (result) => {
                    const allData = result.data.filter(item => item.Category === category);

                    // Calculate total pages
                    const totalPagesCount = Math.ceil(allData.length / itemsPerPage);
                    setTotalPages(totalPagesCount);

                    // Slice data for the requested page
                    const startIndex = (page - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    const pageData = allData.slice(startIndex, endIndex);

                    const moviesWithImages = await fetchMovieImagesBatch(pageData); // Use the service
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
        fetchPageData(currentPage);
        setIsLoading(false);
    }, [currentPage]);

    // Handle page change
    const handlePageChange = (page) => {
        if (page <= 0) {
            setCurrentPage(1);
        } else if (page >= (totalPages.length + 1)) {
            setCurrentPage((totalPages.length + 1));
        } else {setCurrentPage(page);}        
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
                    <button className="b3-button">Famovie imdb list <FaExternalLinkAlt /></button>
                    <button className="b3-button">Letterbox <FaExternalLinkAlt /></button>
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
                    <button className="b3-button">#Western</button>
                </div>
            </div>
            {/** MIDDLE SECTION */}
            <div className="w-full flex mt-10 gap-10 justify-between items-end">
                {/** CARD */}
                <Card1 width={"w-1/3"} height={"h-56"} data={data[0]}/>                    
                <Card1 width={"w-1/3"} height={"h-80"} data={data[1]}/>
                <Card1 width={"w-1/3"} height={"h-56"} data={data[2]}/>
            </div>
            {/** BOTTOM SECTION */}
            <div className="flex gap-5">
                <button className="b3-button" onClick={() => setCategory("Western")}> Western</button>
                <button className="b3-button" onClick={() => setCategory("Asian")}> Asian</button>
                <button className="b3-button" onClick={() => setCategory("Movies")}> Movies</button>
                <button className="b3-button" onClick={() => setCategory("Indonesia")}> Indonesia</button>
            </div>
        </div>
        </div>
        </>
    )
}