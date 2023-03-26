import React from "react";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import banners from "../source/banners";
import styled from "styled-components";

function CenterMode() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: banners.length > 3,
        centerPadding: "50px",
        slidesToShow: 2,
        speed: 500,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    return (
      <MainCont>
        <Slider {...settings}>
            {banners.map((item) =>
                <img src={item.image} alt="" style={{ width:"100px" }}/>
                ) 
            }
        </Slider>
    </MainCont>
    );
}

export default CenterMode;

const MainCont = styled.div`
  margin: auto;
  max-width: 48.5rem;
  background-color: white;
`