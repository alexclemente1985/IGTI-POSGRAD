import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {attilaJson,teamJson, dogJson, deliveryJson, girlWorkingJson, hehehehJson, olympicsJson, pearlsJson} from '../../assets/lotties';
import LottieCard from '../LottieCard';
import './style.scss';

const LottieCarousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0
    }

    const jsonArray = [attilaJson,teamJson, dogJson, deliveryJson, girlWorkingJson, hehehehJson, olympicsJson, pearlsJson];

  return (
    <div className="container">
        <Slider {...settings} className="lottie-carousel">
            {jsonArray.map((json)=>{
                return <LottieCard animationData={json}/>
            })}
        </Slider>
    </div>
  );
}

export default LottieCarousel;