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
const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logOut, user } = useFirebase();
  return (
    <Box>
      <MuiNavbar logo={logo}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/services">Services</NavItem>
        <NavItem to="/Blog">Blog</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <NavItem to="/login">Login</NavItem>
        <Box sx={{ display: "inline" }}>
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small" sx={{}}>
              <Avatar sx={{ padding: "5px" }}>
                <img
                  style={{
                    borderRadius: "50%",
                    height: "70px",
                    width: "70px",
                    marginTop: "15px",
                  }}
                  src={user?.photoURL}
                ></img>
                {/* {user?.photoURL} */}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
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
                width: 32,

                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: " inline",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={logOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </MuiNavbar>
    </Box>
  );
};

export default Navigation;
