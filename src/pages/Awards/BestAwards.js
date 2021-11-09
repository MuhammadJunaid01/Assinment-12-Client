import React from "react";
import "./Award.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const awards = [
  {
    name: "Pro Team",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnzdkmjIQ12S3cG8O4CHo2RTIo53Mp4FXDIw&usqp=CAU",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita minima odit cupiditate libero minus sequi voluptate dolores aperiam nobis.",
  },
  {
    name: "Best Awards",
    image:
      "https://png.pngitem.com/pimgs/s/23-233880_gold-award-ribbon-png-transparent-png.png",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita minima odit cupiditate libero minus sequi voluptate dolores aperiam nobis.",
  },
  {
    name: "Best Design",
    image:
      "https://image.shutterstock.com/image-vector/brush-on-computer-icon-vector-260nw-1692671215.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita minima odit cupiditate libero minus sequi voluptate dolores aperiam nobis.",
  },
];
const BestAwards = () => {
  return (
    <Box className="award-container">
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {awards.map((award, index) => (
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
                  <Card className="award-Box">
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
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
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
