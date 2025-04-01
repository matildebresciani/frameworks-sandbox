const NavButton = (props) => {
    return ( 
        <li>
            <a className={props.label === "iWatch" ? "active" : ""}
             href="">{props.label}</a>
        </li>
     );
}
 
export default NavButton;