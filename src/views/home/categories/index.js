import React, { useEffect } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ToastObjects } from "../../../utils/toast/toastObject";
import homeServices from "../../../services/homeServices";
import { UPLOAD_URL } from "../../../config";
function CategorySlider() {
  const dispatch = useDispatch();
  let categories = useSelector((state) => state.home.categories);
  categories = categories.slice(0, 4);
  useEffect(() => {
    const getCategories = async () => {
      try {
        await homeServices.getHomeCategories(dispatch);
      } catch (e) {
        toast.error(e.message, ToastObjects);
      }
    };
    getCategories();
  }, [dispatch]);
  return (
    <div style={{ background: "#fff" }}>
      <div className="container" id="header-category-bk">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title-tt">
              <div className="main-title-left">
                <h2>Top Categories</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row ">
          {categories &&
            categories.length > 0 &&
            categories.map((category) => (
              <>
                <div class="col-12 col-md-3 ">
                  <div class="single_catagory mt-50">
                    <a href="javascript:;" class="best-offer-item">
                      <img src={UPLOAD_URL + category.image} alt="Laptop" />
                    </a>
                    <h5>
                      <a href="#">{category.name}</a>
                    </h5>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySlider;
