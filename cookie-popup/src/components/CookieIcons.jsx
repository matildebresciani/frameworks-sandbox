"use client";

import { LiaCookieBiteSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

const CookieIcons = () => {
    return (
    <div className="icons">
        <LiaCookieBiteSolid style={{ fontSize: "32px" }}/>
        <RxCross2 style={{ fontSize: "15px", cursor: "pointer" }}/>
    </div>
    );
}
 
export default CookieIcons;