"use client"

import { MdOutlineFilterAlt } from 'react-icons/md';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Card4 } from '@/components/Cards';
import useHome from '../hooks';

interface AllDataProps {
    width?: string,

}

export default function AllData({ width }: AllDataProps) {
    
    const {isLoading, data, dropdown, currentPage, totalPages, handlePageChange, handleDropdown} = useHome();
    
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
                    {data.map((item, index) => (
                        <Card4 key={index} title={item["Title"]} desc={item["Plot"]} poster={item["Poster"]} />
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
                                <button  key={`page-${index}`} className={`basis-[20%] p-2 flex-shrink-0 text-[10px] text-black ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:scale-x-125`}
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
