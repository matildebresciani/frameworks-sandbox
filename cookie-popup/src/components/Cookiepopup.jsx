"use client";
import { useState } from "react";
import CookieIcons from "./CookieIcons";
import CookieFooter from "./CookieFooter";

const CookiePopUp = () => {
    const [cookiesAccepted, setCookiesAccepted] = useState(false);
    return ( 
        !cookiesAccepted && (
        <div className="cookie-popup">
        <CookieIcons/>
        <CookieFooter
        cookiesAccepted={cookiesAccepted}
        setCookiesAccepted={setCookiesAccepted}
        />
        </div>
        )
 
     );
};
 
export default CookiePopUp; 