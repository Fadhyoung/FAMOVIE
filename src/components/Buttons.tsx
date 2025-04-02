"use client"

interface OpenLinkButtonProps1 {
    area: string;
    img?: string;
}

// Landing page button, button that contain image
export const Button1 = ({area, img}: OpenLinkButtonProps1) => {
    return (
        <button className="w-full h-full relative overflow-hidden " style={{gridArea: area}}>
            <p className="absolute z-30 bottom-1 right-3 text-[12px] font-thin italic">{area}</p>
            <div className="w-full h-full absolute top-0 hover:scale-125 transition-all duration-300"><img className="w-full h-full object-cover" src={`/FAMOVIE/images/${img}`}/></div>
        </button>
    )
}

interface OpenLinkButtonProps {
    url?: string;
    className?: string;
    text: string;
}

export function OpenLinkButton({ url, className, text }: OpenLinkButtonProps) {
    return (
        <button 
            className={className} 
            onClick={() => window.open("https://fadhyoung.github.io/Portofolio1/", "_blank")}
        >
            {text}
        </button>
    );
}

export default Button1