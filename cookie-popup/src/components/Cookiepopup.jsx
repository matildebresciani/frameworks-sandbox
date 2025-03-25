import { MdOutlineCookie } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const CookiePopUp = () => {
    return ( 
        <div className="cookie-popup">
            <div>
                <MdOutlineCookie style={{ fontSize: "32px" }}/>
                <RxCross2 style={{ fontSize: "15px", cursor: "pointer" }}/>
            </div>
            <div>
            <p>We use cookies to improve your user experience.</p>
            <button>I like Cookies</button>
            </div>
         
        </div>
     );
}
 
export default CookiePopUp;