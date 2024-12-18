import { HiExternalLink } from "react-icons/hi";
import { RiScrollToBottomLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import Button1 from "@/components/Buttons";

export default function LandingPage() {
    return (
        <>
        <div className="w-full h-full p-2 relative grid grid-cols-2 gap-2 justify-center items-center bg-white">
            
            {/** FLOAT ORNAMENT */}                
            <div className="m-auto absolute bottom-0 left-1/2 p-2 z-20 text-black transform -translate-x-1/2 -translate-y-24"><RiScrollToBottomLine size={40} className="animate-bounce" /></div>
            <div className="w-52 pb-3 absolute bottom-0 left-1/2 p-2 z-30 text-black transform -translate-x-1/2"><img className="w-full object-cover" src={`/images/FullLogo.png`}/></div>

            {/** LEFT SIDE (DAENERYS) */}
            <div className="w-full h-full flex flex-col justify-between relative overflow-hidden custom-shape1">
                {/** BG IMAGE */}
                <img className="w-full h-full absolute -z-20 object-cover scale-150 translate-x-40 translate-y-24" src={`/images/daenerys.jpg`} />
                {/** DECORATION */}
                <div className="w-96 h-96 absolute -z-10 -left-16 -bottom-32 flex justify-center items-center rounded-full border border-white">
                    <div className="w-72 h-72 rounded-full border border-dashed border-white"></div>
                </div>
                <div className="w-fit absolute bottom-5 right-32 flex b3-button bg-white">Visit my website <FaExternalLinkAlt /></div>
                
                {/** BLUR SECTION */}
                <div className="h-full w-2/3 px-5 -z-20 bg-blur-1">
                    <div className="blur-1"></div>
                    <div className="blur-2"></div>
                    <div className="blur-3"></div>
                    <div className="blur-4"></div>
                    <div className="blur-5"></div>
                    <div className="blur-6"></div>
                </div>
                {/** DESC 1 */}
                <div className="w-full p-10 flex flex-col gap-3 justify-start">
                    <h1 className="w-1/2 text-[40px] font-extralight italic leading-[48px]">Welcome to <span className="text-[54px] font-medium">FAMOVIE</span>, Pure subjective here</h1>
                    <p className="w-1/3 text-[12px] font-thin text-justify">Famovie will give you recomendation of all the best series that owener ever watched. this recomendation is for those of you that adore quite much with a few genre below</p>
                    <div className="w-2/5 border-b border-dashed border-white"></div>
                    <div className="w-1/3 flex flex-wrap gap-2">
                        {[...Array(6)].map((_, index) => (
                            <div className="px-5 py-2 text-[9px] font-thin rounded-[5px] bg-black-2">
                                Genre
                            </div>
                        ))}
                    </div>
                </div>
                {/** DESC 2 */}
                <div className="w-full flex flex-col gap-0 p-10">
                    <h1 className="text-[20px] font-thin italic">Game of Thrones</h1>
                    <div className="flex gap-2 items-end">
                        <h1 className="text-[40px] font-thin italic">9.1</h1>
                        <p className="mb-3 font-thin italic">imdb rate</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <p className="font-thin">My review here</p>
                        <HiExternalLink size={30} />
                    </div>
                </div>
            </div>

            {/** RIGHT SIDE (IMAGE GALLERY) */}
            <div className="w-full h-full relative custom-shape flex flex-col gap-1 bg-green-500">
                
                {/** LIGHT REDUCER */}
                <div className="w-full h-full absolute z-10 reduce_light pointer-events-none"></div>

                {/** TOP SIDE */}
                <div className="w-full h-1/2 gap-1 overflow-hidden LP_TOP_GRID foreground2">
                    <Button1 area={"sansa"} img={"sansa.jpg"} />
                    <Button1 area={"hundredeyes"} img={"hundredeyes.jpg"} />
                    <Button1 area={"bb"} img={"bb.jpg"} />
                </div>
                {/** BOTTOM SIDE */}
                <div className="w-full h-1/2 gap-1 overflow-hidden LP_BOTTOM_GRID foreground2">
                    <Button1 area={"vikings"} img={"vikings.jpg"} />
                    <Button1 area={"elliot"} img={"elliot.jpg"} />
                    <Button1 area={"rhaeneyra"} img={"rhaenyra .jpg"} />
                    <Button1 area={"narcos"} img={"narcos.jpeg"} />
                    <Button1 area={"great"} img={"great.jpg"} />
                </div>
            </div>

        </div>
        </>
        
    )
}