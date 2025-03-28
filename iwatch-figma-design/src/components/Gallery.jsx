"use client";

import { TbLineDotted } from "react-icons/tb";
import Image from "next/image";
import navyWatch from "@/img/navy.png"
import mintWatch from "@/img/mint.png"
import oceanWatch from "@/img/ocean.png"
import { useState } from "react";

const Gallery = () => {
    const [activeImg, setActiveImg] = useState(navyWatch);
    return (
    <div className="gallery-container">
<div className="active-img">
    <Image src={activeImg} alt="Watch"/>
</div>
<div className="color-selector">
    <div
    className={activeImg === navyWatch ? "active" : ""}
    onClick={() => setActiveImg(navyWatch)}
    style={{backgroundColor: "#434558"}}></div>
    <TbLineDotted style={{ transform: "rotate(90deg)" }} />
    <div
    className={activeImg === mintWatch ? "active" : ""}
    onClick={() => setActiveImg(mintWatch)}
     style={{backgroundColor: "#6ADDCC"}}></div>
    <TbLineDotted style={{ transform: "rotate(90deg)" }} />
    <div
    className={activeImg === oceanWatch ? "active" : ""}
    onClick={() => setActiveImg(oceanWatch)}
    style={{backgroundColor: "#def3f6"}}></div>
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