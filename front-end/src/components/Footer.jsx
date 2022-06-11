import React from "react";
import {Link} from 'react-router-dom'
import '../assets/styling/components/footer.css'
const Footer=()=>{
return(
    <div>
    <div className="footer-container">
        <ul className="footer-list">
                <Link to="/"><li>send Info</li></Link>
                <Link to="/shop"><li>items related</li></Link>
                <Link to=""><li>About Us</li></Link>
                <Link to=""><li>Contact Us</li></Link>
        </ul>
    </div></div>
)
}
export default Footer;