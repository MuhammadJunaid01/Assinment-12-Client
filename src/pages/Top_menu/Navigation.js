import Box from "@mui/material/Box";
import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import Logout from "@mui/icons-material/Logout";
import logo from "../../images/logo.png";
import { Divider } from "@mui/material";
import useFirebase from "./../../firebase/useFirebase/useFirebase";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Link } from "react-router-dom";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const Navigation = () => {
  const { logOut, user } = useFirebase();
  console.log(user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // dashboard darwer

  // end drawer
  return (
    <Box>
      <MuiNavbar style={{ color: "red" }} logo={logo}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/services">Services</NavItem>
        <NavItem to="/Blog">Blog</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <NavItem to="/login">Login</NavItem>

        {user?.email && (
          <Box style={{ display: "inline" }}>
            <Tooltip title="My Account">
              <IconButton onClick={handleClick} size="small" sx={{}}>
                <Avatar sx={{}}>
                  <img
                    style={{
                      marginTop: "10px",
                      height: "60px",
                      width: "60x",
                      borderRadius: "50%",
                    }}
                    src={user?.photoURL}
                    alt="userPhoto"
                  ></img>
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        )}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",

              "& .MuiAvatar-root": {
                // width: 32,
                // height: 32,
              },
              "&:before": {
                content: '""',
                display: "inline",
                position: "absolute",
                // top: 0,
                // right: 14,
                // width: 10,
                // height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          {/* <MenuItem>
          <Avatar /> My account
        </MenuItem> */}
          <Divider />
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/dashboard"
          >
            <MenuItem>
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              DashBoard
            </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="pament">
            <MenuItem>
              <ListItemIcon>
                <PaymentIcon fontSize="small" />
              </ListItemIcon>
              Payment
            </MenuItem>
          </Link>
          <MenuItem>
            <ListItemIcon>
              <ShoppingBasketIcon fontSize="small" />
            </ListItemIcon>
            My Order
          </MenuItem>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Reviews"
          >
            <MenuItem>
              <ListItemIcon>
                <ReviewsIcon fontSize="small" />
              </ListItemIcon>
              Reviews
            </MenuItem>
          </Link>
          <MenuItem onClick={logOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </MuiNavbar>
      {/* start dashBoard */}
    </Box>
  );
};

export default Navigation;
