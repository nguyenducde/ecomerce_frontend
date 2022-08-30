import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ToastObjects } from "../../../utils/toast/toastObject";
import homeServices from "../../../services/homeServices";
import { UPLOAD_URL } from "../../../config";

function BannerSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();

  const sliders = useSelector((state) => state.home.sliders);

  useEffect(() => {
    const getSliders = async () => {
      try {
        await homeServices.getSliders(dispatch);
      } catch (e) {
        toast.error(e.message, ToastObjects);
      }
    };
    getSliders();
  }, []);
  return (
    <div>
      <Slider {...settings}>
        {sliders &&
          sliders.length > 0 &&
          sliders.map((slider) => (
            <>
              <div className="owl-item">
                <a href={slider.link}>
                  <img src={UPLOAD_URL + slider.image} alt="supermarket" />
                </a>
              </div>
            </>
          ))}
      </Slider>
    </div>
  );
}

export default BannerSlider;
