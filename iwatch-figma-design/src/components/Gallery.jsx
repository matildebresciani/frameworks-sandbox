import { TbLineDotted } from "react-icons/tb";
import Image from "next/image";
import navyWatch from "@/img/navy.png"
import mintWatch from "@/img/mint.png"
import oceanWatch from "@/img/ocean.png"

const Gallery = () => {
    return (
    <div className="gallery-container">
<div className="active-img">
    <Image src={navyWatch} alt="Navy Watch"/>
</div>
<div className="color-selector">
    <div className="active" style={{backgroundColor: "#434558"}}></div>
    <TbLineDotted style={{ transform: "rotate(90deg)" }} />
    <div style={{backgroundColor: "#6ADDCC"}}></div>
    <TbLineDotted style={{ transform: "rotate(90deg)" }} />
    <div style={{backgroundColor: "#def3f6"}}></div>
</div>
<div className="watch-gallery">
    <figure>
    <Image src={navyWatch} alt="Navy Watch"/>
    </figure>
    <figure>
    <Image src={mintWatch} alt="Mint Watch"/>
    </figure>
    <figure>
    <Image src={oceanWatch} alt="Ocean Watch"/>
    </figure>
    
</div>
    </div> );
}
 
export default Gallery;