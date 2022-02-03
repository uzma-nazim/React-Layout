import { react } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FiAlignRight} from "react-icons/fi";
import Logo from "../images/mag_logo.png"
import './header.css'

let Header = ()=>{


    return(

        <div className="header">
            <section className="min-header">
            <div className="logo">
            <img src={Logo} width={"90px"} alt="" />

            </div>
            <ul>
                <li id="home" ><a href="#" >Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>

                <li><a href="#">Blog</a></li>
                <li><a href="#" id="shop" ><BiShoppingBag/></a></li>
                <li id="toggle" ><a href="#"  ><FiAlignRight/></a></li>
            </ul>
            </section>

        </div>
    )

}
export default Header