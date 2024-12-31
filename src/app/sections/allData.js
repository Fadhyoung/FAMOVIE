import { useState, useEffect } from 'react';
import Papa from "papaparse";
import { fetchMovieImagesBatch } from "@/app/services/movieService";

import { MdOutlineFilterAlt } from 'react-icons/md';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Card4 } from '@/app/components/Cards';

export default function AllData({ width }) {
    
    const [data, setData] = useState([]); // Data for the current page
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 8;

    const [dropdown, setDropdown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Function to fetch specific page data
    const fetchPageData = async (page) => {
        try {
            const response = await fetch('/FAMOVIE/famovie_list.csv');
            const csvText = await response.text();

            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: async (result) => {
                    const allData = result.data;

                    // Calculate total pages
                    const totalPagesCount = Math.ceil(allData.length / itemsPerPage);
                    setTotalPages(totalPagesCount);

                    // Slice data for the requested page
                    const startIndex = (page - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    const pageData = allData.slice(startIndex, endIndex);

                    const movieData = result.data;
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
        } else if (page >= (totalPages)) {
            setCurrentPage((totalPages));
        } else {setCurrentPage(page);}        
    };

    const handleDropdown = () => {
        setDropdown((prevState) => !prevState);
    }

    if (isLoading) {
        <div>Loading..</div>
    }

    return (
        <>
            <div className={`${width} m-auto flex flex-col items-center justify-center gap-5`}>
                {/* Header Section */}
                <div className="w-full flex justify-between">
                    <button className="flex gap-2 b3-button">
                        Movies series that I've watched
                    </button>
                    <button className="b3-button">
                        <MdOutlineFilterAlt /> Filter
                    </button>
                </div>

                {/* Cards Section */}
                <div className={`w-full flex items-center flex-wrap ${data.length < 4 ? "justify-start" : "justify-between"}`}>
                    {data.map((item) => (
                        <Card4 key={item.id} title={item["Title"]} desc={item["Plot"]} poster={item["Poster"]} />
                    ))}
                </div>

                {/* Pagination Section */}
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <div className="w-full flex justify-center gap-2 mt-4">
                        <button className='b3-button cursor-pointer' onClick={() => handlePageChange(currentPage - 1)}><FiChevronLeft /></button>                                            
                        <button
                            key={currentPage}
                            onClick={handleDropdown}
                            className={`b3-button dcursor-pointer`}>
                            {currentPage}
                        </button>
                        <button className='b3-button dcursor-pointer' onClick={() => handlePageChange(currentPage + 1)}><FiChevronRight /> </button>                    
                    </div>

                    {/** DROPDOWN */}
                    {
                        dropdown
                        ? <div className='pagination flex overflow-x-scroll border rounded-lg border-black'>
                            {Array.from({length: totalPages}, (_, index) => (
                                <button className={`basis-[20%] p-2 flex-shrink-0 text-[10px] text-black ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:scale-x-125`}
                                onClick={() => handlePageChange(index + 1)}
                                >{index + 1}</button>
                            ))}
                          </div>
                        : <div></div>
                    }
                </div>

            </div>
        </>
    );
}
