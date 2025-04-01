import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Navigation from "./subcomponents/Navigation";

const Header = () => {
    return ( 
        <header>
            <FaApple style={{fontSize: "50px"}}/>
            <Navigation/>
            <div className="icons">
            <CiSearch strokeWidth={1}/>
            <TfiLayoutLineSolid style={{ transform: "rotate(90deg)" }}/>
            <FiShoppingBag />
            </div>
        </header>
     );
}
 
export default Header;