"use client";

const CookieFooter = ({cookiesAccepted, setCookiesAccepted}) => {
    return ( 
        <div className="cookie-info">
        <p>We use cookies to improve your user experience.</p>
        <button
        onClick={() => setCookiesAccepted(!cookiesAccepted)}>
            I like Cookies
        </button>
    </div>
     );
}
 
export default CookieFooter;