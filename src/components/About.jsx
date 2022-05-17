import React from "react";
import Carousel from 'react-elastic-carousel';
import '../style/CarouselStyle.css';
import CardsCarousel from "./Cards";
import g1 from "../assets/images/g1.gif";
import g2 from "../assets/images/g2.gif";
import g3 from "../assets/images/g3.gif";
import g4 from "../assets/images/g4.gif";

const AboutUs = () => {

    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 760, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
    ];

    return(
        <div className="pt-9 bg-[#1d1f23] py-9">
            <div className="carousel mb-8">
                <h1 className="text-white text-center mt-5 mb-9 pb-8 text-3xl font-sans font-bold">Our Gallery</h1>
                <Carousel breakPoints={breakPoints}>
                    <CardsCarousel insider={g4}/>
                    <CardsCarousel insider={g1}/>
                    <CardsCarousel insider={g2}/>
                    <CardsCarousel insider={g3}/>
                </Carousel>
            </div>
        </div>
    )
}


export default AboutUs;