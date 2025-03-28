"use client";

const ColorDot = ({activeImg, setActiveImg, watchColor, colorVariable}) => {
       
    return ( 
        <div
        className={activeImg === watchColor ? "active" : ""}
        onClick={() => setActiveImg(watchColor)}
        style={{backgroundColor: colorVariable}}
        ></div>
     );
}
 
export default ColorDot;