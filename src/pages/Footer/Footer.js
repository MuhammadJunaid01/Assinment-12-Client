import React from "react";
import "./footer.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div className="footerContainer">
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} sm={12}>
              <Box>
                <h1>Get In Touch</h1>
                <h3>Address:</h3>
                <p>(144) Bahaddar Hat, Chittagon(SC).</p>
                <h1>Email:</h1>
                <p>m.junaidbkh2020@gmail.com</p>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <Box>
                <h1>Our Services</h1>
                <p>
                  <BorderColorIcon></BorderColorIcon>
                  Delivery information
                </p>
                <p>
                  <BorderColorIcon></BorderColorIcon>
                  Contact Us
                </p>
                <p>
                  <BorderColorIcon></BorderColorIcon>
                  Terms & Condition
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <Box>
                <h1>SubsCribe</h1>
                <p>
                  here are many variations of passages of Lorem Ipsum available
                </p>
                <form className="subsCribeForm">
                  <input
                    className="subscribeEmailFeild"
                    type="email"
                    placeholder="Your Email Address:"
                  />
                  <button className="subscibeBtn">Subscribe</button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
