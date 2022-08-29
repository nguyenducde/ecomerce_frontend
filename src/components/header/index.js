import React from "react";
import CartSideBar from "../../views/cart-sidebar";
import Login from "../../views/auth/login";
const Navigation = () => {
  return (
    <div>
      <header className="header clearfix">
        <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu">
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{ color: "#fff" }}>
              Kosheli Express
            </a>
            <button
              className="navbar-toggler navbar-toggler-white"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse" id="navbarNavDropdown">
              <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                <div
                  className="top-categories-search"
                  //   onSubmit={this.handleClickSearch}
                >
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Search products in Your City"
                      aria-label="Search products in Your City"
                      type="text"
                      name="searchtxt"
                      //   value={searchtxt}
                      //   onChange={(e) => this.handleChange(e)}
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-secondary"
                        type="submit"
                        // onClick={this.handleClickSearch}
                      >
                        <i className="mdi mdi-file-find" /> Search
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-2 my-lg-0">
                <ul className="list-inline main-nav-right">
                  <li className="list-inline-item">
                    <a
                      data-target="#bd-example-modal"
                      data-toggle="modal"
                      className="btn btn-link"
                      //   style={token ? { display: "none" } : { display: "block" }}
                    >
                      <i className="mdi mdi-account-circle" /> Login/Sign Up
                    </a>
                  </li>
                  <li className="list-inline-item cart-btn">
                    <CartSideBar />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* login popup */}

      <Login />
    </div>
  );
};

export default Navigation;
