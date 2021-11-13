import React, { useEffect, useState } from "react";
import "./Award.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CircularProgress } from "@mui/material";
import Fade from "react-reveal/Fade";

const BestAwards = () => {
  const [award, setAward] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://infinite-waters-60535.herokuapp.com/award")
      .then((res) => res.json())
      .then((data) => {
        setAward(data);
        // setCollection(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return loader ? (
    <Typography style={{ textAlign: "center", fontSize: "80px" }} variant="h1">
      <CircularProgress />
    </Typography>
  ) : (
    <Box className="award-container">
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {award.map((award, index) => (
              <Grid item key={index} xs={12} md={4} sm={12} lg={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                    },
                  }}
                >
                  <Fade left>
                    <Card
                      style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                      className="award-Box"
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={award.image}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {award.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Fade>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BestAwards;
