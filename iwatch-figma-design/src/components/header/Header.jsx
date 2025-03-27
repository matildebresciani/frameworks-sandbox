import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import Navigation from "./subcomponents/Navigation";

const Header = () => {
    return ( 
        <header>
            <FaApple style={{fontSize: "50px"}}/>
            <Navigation/>
            <div className="icons">
            <CiSearch/>
            <FiShoppingBag/>
            </div>
        </header>
     );
}
 
export default Header;