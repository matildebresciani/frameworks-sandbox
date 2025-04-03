const Button = (props) => {
    return ( 
        <a className="text-white border-3 rounded-full py-2 px-16 text-xl font-bold duration-300 ease-in hover:text-[var(--primary-color)] hover:bg-white hover:border-3 hover:border-white" href="#">{props.label}</a>
     );
}
 
export default Button;