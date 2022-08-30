import React,{useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useSelector,useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import { ToastObjects } from '../../../utils/toast/toastObject';
import homeServices from '../../../services/homeServices';

function BannerSlider() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    const dispatch=useDispatch();
    
    const sliders=useSelector(state=>state.home.sliders);
    
    useEffect(()=>{
      const getSliders=async()=>{
        try{
            let res=await homeServices.getSliders(dispatch);
            if(res && res.status){
                toast.success(res.message,ToastObjects)
            }
          }  
          catch(e){
            toast.error(e.message,ToastObjects)
          }
      }
     getSliders();
      
    },[])
    return  <div>
    <Slider {...settings}>
        <div className="owl-item">
            <img src="img/banners/offer-1.jpg" alt="supermarket" />
        </div >
        <div className="owl-item">
            <img src="img/banners/offer-2.jpg" alt="supermarket" />
        </div>
        <div className="owl-item">
            <img src="img/banners/offer-3.jpg" alt="supermarket" />
        </div>
    </Slider>
</div>
}

export default BannerSlider