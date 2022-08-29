import React from "react";

function CartSideBar() {
  return (
    <div>
      <span data-toggle="offcanvas" className="btn btn-link border-none">
        <i className="mdi mdi-cart" /> My Cart{" "}
        <small className="cart-value">12</small>
      </span>
      <div className="cart-sidebar">
        <div className="bs-canvas-header side-cart-header p-3 ">
          <div className="d-inline-block  main-cart-title">
            My Cart <span>(12 Items)</span>
          </div>
          <button
            type="button"
            className="bs-canvas-close close"
            data-toggle="offcanvas"
          >
            <i className="mdi mdi-close"></i>
          </button>
        </div>
        <div className="cart-sidebar-body">
          <div className="cart-item">
            <div className="cart-product-img">
              <img className="img-fluid" src="" alt="cart" />
              <div className="offer-badge">4% OFF</div>
            </div>
            <div className="cart-text">
              <h4>Test APP</h4>
              <div className="cart-radio">
                <ul className="kggrm-now">
                  <li>
                    <input type="radio" id="a1" name="cart1" />
                    <label>2</label>
                  </li>
                </ul>
              </div>
              <div className="qty-group">
                <div className="quantity buttons_added">
                  <input
                    type="button"
                    defaultValue="-"
                    className="minus minus-btn"
                    // onClick={() => this.props.decreaseToCart(row)}
                  />
                  <input
                    type="number"
                    value="3"
                    className="input-text qty text"
                    disabled
                  />
                  <input
                    type="button"
                    defaultValue="+"
                    className="plus plus-btn"
                    // onClick={() => this.props.incrementToCart(row)}
                  />
                  <button
                    type="button"
                    className="cart-close-btn"
                    // onClick={() => this.props.removeFromCart(row)}
                  >
                    <i className="mdi mdi-close" />
                  </button>
                </div>
                <div className="cart-item-price">
                  &#x20B9;100
                  <span>&#x20B9;200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-sidebar-footer">
          <div className="cart-store-details">
            <p>
              Sub Total{" "}
              <strong className="float-right">
                &#x20B9;
                {/* {cartItems.reduce((sum, i) => (sum += i.qty * i.netPrice), 0)} */}
              </strong>
            </p>
            <p>
              Delivery Charges{" "}
              <strong className="float-right text-danger">
                + &#x20B9;29.69
              </strong>
            </p>
            <h6>
              Your total savings{" "}
              <strong className="float-right text-danger">
                &#x20B9;55 (42.31%)
              </strong>
            </h6>
          </div>
          <a href="/checkout">
            <button
              className="btn btn-secondary btn-lg btn-block text-left"
              type="button"
            >
              <span className="float-left">
                <i className="mdi mdi-cart-outline" /> Proceed to Checkout{" "}
              </span>
              <span className="float-right">
                <strong>
                  &#x20B9;
                  {/* {cartItems.reduce((sum, i) => (sum += i.qty * i.netPrice), 0)} */}
                </strong>{" "}
                <span className="mdi mdi-chevron-right" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CartSideBar;
