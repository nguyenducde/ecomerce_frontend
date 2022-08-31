import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Toast from "./utils/toast/toast";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./views/home";
import Checkout from "./views/checkout";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
// Check the auth
function checkAuth() {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    return true;
  }
  return false;
}
function App() {
  return (
    <>
      <Toast />

      <BrowserRouter>
        <Header />

        <Suspense fallback={loading}>
          <Routes>
            <Route
              exact
              path="/login"
              name="login page"
              element={checkAuth() ? <Navigate to={{ pathname: "/" }} /> : ""}
            />
            <Route exact path="/" name="home page" element={<Home />} />
            <Route
              exact
              path="/checkout"
              name="checkout page"
              element={<Checkout />}
            />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
