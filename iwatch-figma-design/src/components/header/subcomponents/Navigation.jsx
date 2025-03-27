import NavButton from "./NavButton";

const Navigation = () => {
    return (  
        <nav>
            <ul>
                <NavButton label="Mac"/>
                <NavButton label="iPhone"/>
                <NavButton label="iPad"/>
                <NavButton label="iWatch"/>
                <NavButton label="Support"/>
            </ul>
        </nav>
    );
}
 
export default Navigation;