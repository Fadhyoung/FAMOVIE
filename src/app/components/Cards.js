import { FaExternalLinkAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";

const truncateDesc = (text, wordLimit) => {
    if (text === undefined ) { text = "Undetected"} 
    const words = text.split(' ');
    return words.length > wordLimit 
        ? words.slice(0, wordLimit).join(' ') + '...' 
        : text;
};

// Used at the best 3 section
export const Card1 = ({width, height, data = {}}) => {

    return (
        <>
            <div className={`${width} ${height} p-1 flex flex-row justify-between overflow-hidden border rounded-[20px] border-black bg-white`}>
            <img className="basis-[30%] h-full object-cover rounded-[20px]" src={data["Poster"]}/>
            <div className="basis-[60%] p-5 flex flex-col items-start justify-between">
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-2 items-start text-[20px] text-amber-300">
                        <h2>{data["imdbRating"]}</h2>
                        <FaStar size={25} />
                    </div>
                    <button onClick={() => window.open(data["URL"], "_blank")}><FaExternalLinkAlt size={25} /></button>
                </div>
                
                <div className="w-full flex flex-col">
                    <h1 className="w-full text-[16px] font-semibold">{data["Title"]}</h1>
                    <p className="w-full text-[14px] font-normal text-justify">{truncateDesc(data["Plot"], 15)}</p> 
                </div>

                <div className="w-full flex flex-nowrap overflow-hidden text-[12px] text-gray-400">
                    {data["Genre"]}
                </div>
            </div>                               
            </div>
        </>
    )
}

// Used at the top 10 recomendation
export const Card2 = ({title, plot, img, url}) => {

    return (
        <div className="basis-[18%] flex flex-col flex-shrink-0 text-black">
            <div className="h-96 relative overflow-hidden border border-black">

                <img className="w-full h-full absolute z-20 object-cover" src={img} />
                <button className="absolute z-40 bottom-4 right-4 text-white"> <FaExternalLinkAlt size={20} /> </button>
            </div>
            <div className="p-2 flex flex-col gap-2">
                <h1 className="text-[18px] font-semibold">{truncateDesc(title, 4)}</h1>
                <p className="text-[12px]">{truncateDesc(plot, 10)}</p>
                <div className="flex gap-2">
                    <button className="px-3 py-1 text-[12px] font-semibold b2-button" 
                    onClick={() => window.open("/review", "_blank", "noopener,noreferrer")}>Review here</button>
                    <button className="px-3 py-1 text-[12px] font-semibold b2-button" 
                            onClick={() => window.open(url, "_blank", "noopener,noreferrer")}>imdb</button>
                    
                </div>
            </div>
        </div>
    )
}

// Used at actor and ph
export const Card3 = ({}) => {
    return (
        <div className="w-40 flex flex-col gap-2">
            <div className="h-40 rounded-[10px] bg-gray-400"></div>
            <h2 className="text-[16px] font-semibold">Nama</h2>
        </div>
    )
}

//used at all ive watched
export const Card4 = ({title, desc, poster}) => {

    return (
        <div className="basis-[23.5%] h-[400px] m-2 flex-shrink-0 relative flex flex-col items-end rounded-[10px] overflow-hidden bg-red-500">
            <img className="w-full h-full absolute z-10 object-cover" src={poster} />
            <div className="w-full h-3/4 absolute bottom-0 z-20 bg-gradient-to-t from-black to-transparent"></div>
            <div className="w-full p-3 absolute bottom-0 z-30 flex flex-col gap-1">
                <h2 className="text-[16px] font-semibold text-white">{title}</h2>   
                <p className="text-[12px] font-normal text-white">{truncateDesc(desc, 10)}</p> 
                <button className="b4-button">My review here <FaExternalLinkAlt /> </button>                     
            </div>
        </div>
    )
}

// TEST CARD
export const Card5 = ({title, desc, img}) => {

    const truncateDesc = (text, wordLimit) => {
        const words = text.split(' ');
        return words.length > wordLimit 
            ? words.slice(0, wordLimit).join(' ') + '...' 
            : text;
    };

    return (
        <div className="basis-[23%] h-[550px] flex-shrink-0 relative flex flex-col items-end rounded-[10px] overflow-hidden">
            <img className="w-full h-full absolute z-10 object-cover" src={img} />
            <div className="w-full h-full absolute bottom-0 z-20 bg-gradient-to-t from-black to-transparent"></div>
            <div className="w-full p-5 absolute bottom-0 z-30 flex flex-col justify-between gap-2">
                <h2 className="flex flex-nowrap text-[20px] font-semibold text-white">{title}</h2>   
                <p className="text-[12px] font-normal text-justify text-white">{truncateDesc(desc, 15)}</p> 
                <button className="py-2 px-6 flex justify-between gap-2 items-center text-[12px] font-semibold text-black border rounded-[20px] border-white bg-white">My review here <FaExternalLinkAlt /> </button>                     
            </div>
        </div>
    )
}

export default Card1