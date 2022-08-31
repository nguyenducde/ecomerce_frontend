import http from "../../services/api";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../constants/cartConstants";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await http.get(`/api/v1/home/product/${id}`);
  const product = {
    id: data._id,
    name: data.name,
    price: data.price,
    priceAfterDiscount: data.priceAfterDiscount,
    discount: data.discount,
    image: data.thumbnailImage,
  };
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((item) => {
    if (item.id === id) {
      alreadyExists = true;
    }
  });

  if (!alreadyExists) {
    cartItems.push({ ...product, quantity });
  }

  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const incrementCart = (id) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  const selectProduct = cartItems.find((item) => item.id === id);
  const index = cartItems.indexOf(selectProduct);
  const value = cartItems[index];
  value.quantity = value.quantity + 1;

  dispatch({
    type: INCREASE_QUANTITY,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const decrementCart = (id) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  const selectProduct = cartItems.find((item) => item.id === id);
  const index = cartItems.indexOf(selectProduct);
  const value = cartItems[index];
  if (value.quantity > 1) {
    value.quantity = value.quantity - 1;
  }

  dispatch({
    type: DECREASE_QUANTITY,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((item) => item.id !== id);

  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });

  localStorage.removeItem("cartItems", JSON.stringify(cartItems));
};