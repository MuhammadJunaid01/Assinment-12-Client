import React from "react";
import "./TopBanner.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const TopBanner = () => {
  return (
    <div className="topbanner-container">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12}>
            <Box>
              <Typography
                style={{
                  color: "#EBA83A",
                  marginTop: "80px",
                  fontWeight: "700",
                }}
                variant="h4"
              >
                We Are E-Bikers
              </Typography>
              <Typography className="banner-info" variant="h4">
                ALWAYS BE <br /> ORIGINIAL
              </Typography>
              <Typography style={{ color: "white" }} variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae sequi atque fuga inventore rem cum eum distinctio id
                magnam culpa?
              </Typography>
              <Box className="bannerBtn-gr">
                <Typography variant="button">
                  <Button className="contuct-btn">Contact Us</Button>
                </Typography>
                <Typography variant="button">
                  <Button className="learn-btn">
                    Learn More <ArrowRightAltIcon></ArrowRightAltIcon>
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TopBanner;
