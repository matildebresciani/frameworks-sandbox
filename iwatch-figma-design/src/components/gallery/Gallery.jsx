"use client";

import { TbLineDotted } from "react-icons/tb";
import Image from "next/image";
import navyWatch from "@/img/navy.png"
import mintWatch from "@/img/mint.png"
import oceanWatch from "@/img/ocean.png"
import ColorDot from "./ColorDot";
import { useState } from "react";

const Gallery = () => {
    const [activeImg, setActiveImg] = useState(navyWatch);
    return (
    <div className="gallery-container">
<div className="active-img">
    <Image src={activeImg} alt="Watch"/>
</div>
<div className="color-selector">
    <ColorDot
    watchColor={navyWatch}
    colorVariable={"var(--watch-color1)"}
    activeImg={activeImg}
    setActiveImg={setActiveImg}
    />
    <TbLineDotted style={{ transform: "rotate(90deg)" }} />
    <ColorDot
    watchColor={mintWatch}
    colorVariable={"var(--watch-color2)"}
    activeImg={activeImg}
    setActiveImg={setActiveImg}/>
    <TbLineDotted style={{ transform: "rotate(90deg)" }} />
    <ColorDot
    watchColor={oceanWatch}
    colorVariable={"var(--watch-color3)"}
    activeImg={activeImg}
    setActiveImg={setActiveImg}/>
</div>
<div className="watch-gallery">
    <figure
    onClick={() => setActiveImg(navyWatch)}>
        <Image
        src={navyWatch}
        alt="Navy Watch"
        />
    </figure>
    <figure
    onClick={() => setActiveImg(mintWatch)}>
        <Image
        src={mintWatch}
        alt="Mint Watch"
        />
    </figure>
    <figure
    onClick={() => setActiveImg(oceanWatch)}>
        <Image
        src={oceanWatch}
        alt="Ocean Watch"
        />
    </figure>
    
</div>
    </div> );
}
 
export default Gallery;