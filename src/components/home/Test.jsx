import React from "react";
import Slider from "react-slick";
import "../../slick.css";
import "../../slick-theme.css";
import banners from "../../source/banners";
import styled from "styled-components";

function CenterMode() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 2,
        speed: 500,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
      };

    return (
      <MainCont>
        <Slider {...settings}>
            {banners.map((item) =>
              <div>
                <img src={item.image} alt="banners" style={{ width:"100%"}} />
              </div>
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