import { LiaCookieBiteSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

const CookiePopUp = () => {
    return ( 
        <div className="cookie-popup">
            <div className="icons">
                <LiaCookieBiteSolid style={{ fontSize: "32px" }}/>
                <RxCross2 style={{ fontSize: "15px", cursor: "pointer" }}/>
            </div>
            <div className="cookie-info">
            <p>We use cookies to improve your user experience.</p>
            <button>I like Cookies</button>
            </div>
         
        </div>
     );
}
 
export default CookiePopUp;