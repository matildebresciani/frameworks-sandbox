import { TbLineDotted } from "react-icons/tb";

const Gallery = () => {
    return (
    <div className="gallery-container">
<div className="active-img">
    <img src="img/navy.png" alt="" />
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
    <img src="img/navy.png" alt="" />
    </figure>
    <figure>
    <img src="img/mint.png" alt="" />
    </figure>
    <figure>
    <img src="img/ocean.png" alt="" />
    </figure>
    
</div>
    </div> );
}
 
export default Gallery;