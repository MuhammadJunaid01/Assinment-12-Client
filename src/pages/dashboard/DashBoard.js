import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import "./dashboard.css";
import useAuth from "./../../hooks/useAuth/useAuth";
import Box from "@mui/material/Box";
const DashBoard = () => {
  const { admin } = useAuth();
  return (
    <div className="dashBoardContainer" style={{ marginTop: "20px" }}>
      <MuiNavbar>
        <NavItem to="/Reviews">Review</NavItem>
        {admin && (
          <Box style={{ display: "flex" }}>
            <NavItem to="/makeAdmin">Make An Admin</NavItem>
            <NavItem to="/manageOrder">Manage All Order</NavItem>
            <NavItem to="/addProduct">Add A Product</NavItem>
          </Box>
        )}
        <NavItem to="/Blog">Blog</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </MuiNavbar>
    </div>
  );
};

export default DashBoard;
