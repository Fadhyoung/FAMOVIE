
// Landing page button, button that contain image
export const Button1 = ({area, img}) => {
    return (
        <button className="w-full h-full relative overflow-hidden " style={{gridArea: area}}>
            <p className="absolute z-30 bottom-1 right-3 text-[12px] font-thin italic">{area}</p>
            <div className="w-full h-full absolute top-0 hover:scale-125 transition-all duration-300"><img className="w-full h-full object-cover" src={`/FAMOVIE/images/${img}`}/></div>
        </button>
    )
}

export default Button1