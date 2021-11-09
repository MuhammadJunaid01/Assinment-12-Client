import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Container } from "@mui/material";
import "./products.css";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return loading ? (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : (
    <Box className="product-box">
      <Container>
        <Typography className="product-info" variant="h4">
          OUR BEST BIKES
        </Typography>
        <hr />
        <Grid container spacing={2}>
          {products?.map((product, index) => (
            <Grid key={index} item xs={12} md={4} sm={12}>
              <Card className="products-card" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                    <Typography className="searche-btn" variant="button">
                      Add To Cart
                      <ShoppingCartIcon className="searche-icon"></ShoppingCartIcon>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button>
          View More
          <ArrowRightAltIcon></ArrowRightAltIcon>
        </Button>
      </Container>
    </Box>
  );
};

export default Products;
