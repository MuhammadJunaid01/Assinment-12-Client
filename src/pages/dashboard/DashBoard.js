import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import "./dashboard.css";
import useAuth from "./../../hooks/useAuth/useAuth";
import Box from "@mui/material/Box";
const DashBoard = () => {
  const { admin } = useAuth();
  return (
    <div className="dashBoardContainer" style={{ marginTop: "20px" }}>
      <MuiNavbar style={{ display: "flex", alignItems: "center" }}>
        <>
          <NavItem to="/Reviews">Review</NavItem>
          <NavItem to="/Blog">Blog</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/myorder">My Order</NavItem>
        </>
        {admin && (
          <>
            <NavItem to="/makeAdmin">Make An Admin</NavItem>
            <NavItem to="/manageOrder">Manage All Products</NavItem>
            <NavItem to="/addProduct">Add A Product</NavItem>
          </>
        )}
      </MuiNavbar>
    </div>
  );
};

export default DashBoard;
