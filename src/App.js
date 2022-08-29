import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Toast from "./utils/toast/toast";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
import Home from "./views/home";
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
      <Header />

      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route
              path="/login"
              name="login page"
              element={checkAuth() ? <Navigate to={{ pathname: "/" }} /> : ""}
            />
            <Route path="/" name="home page" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
