import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const SharedComponent = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedComponent;
