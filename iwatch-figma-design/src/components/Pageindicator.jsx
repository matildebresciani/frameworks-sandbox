import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const PageIndicator = () => {
    return ( <div className="flex flex-row items-center gap-4 text-white">
<IoIosArrowRoundBack size={24}/>
<p>1</p>
<IoIosArrowRoundForward size={24}/>
    </div> );
}
 
export default PageIndicator;