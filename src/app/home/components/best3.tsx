"use client"

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card1 from "@/components/Cards";
import useHome from "@/app/home/hooks";

export default function Best3 () {

    const { best3: data, currentBestPage: currentPage, category, isLoading, setCurrentBestPage: setCurrentPage, handleBest3PageChange: handlePageChange } = useHome();

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