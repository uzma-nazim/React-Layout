import { react } from "react";
import Vanila from "../images/vanila.jpg"
import classic from "../images/classic.jpg"
import stawbery from "../images/stawbery.jpg"
import chocolate from "../images/chocolate.jpg"

import './header.css'

const Banner2 = () => {

    return (

        <div className="flavour">

            <h3>Lift your spirit, order an ice cream!</h3>
            <p>CHOOSE FROM A NUMBER OF FLAVORS</p>

            <div className="all-Flavour">


                <div className="flavour-img col-lg-3 col-md-4 col-xm-12  col-sm-6 ">
                    <img src={classic} alt="" />
                    <h5>Classic</h5>
                    <p>Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus mus

                    </p>
                </div>


                <div className="flavour-img col-lg-3 col-md-4 col-xm-12  col-sm-6">
                    <img src={Vanila} alt="" />
                    <h5>Vanilla</h5>
                    <p>Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus mus.

                    </p>
                </div>

                <div className="flavour-img col-lg-3 col-md-4 col-xm-12  col-sm-6">
                    <img src={stawbery} alt="" />
                    <h5>Berry Strawberry</h5>
                    <p>Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus mus.

                    </p>
                </div>

                <div className="flavour-img col-lg-3 col-md-4 col-xm-12  col-sm-6">
                    <img src={chocolate} alt="" />
                    <h5>Chocolate</h5>
                    <p>Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus mus.

                    </p>
                </div>

            </div>
        </div>

    )
}

export default Banner2