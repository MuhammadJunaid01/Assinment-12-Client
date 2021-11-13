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
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Rotate from "react-reveal/Rotate";

const Products = () => {
  // modal
  const [value, setValue] = React.useState(2);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://infinite-waters-60535.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const handlepuchaseNow = (id) => {
    console.log(id);
  };
  return loading ? (
    <Typography style={{ textAlign: "center" }} variant="h1">
      <CircularProgress />
    </Typography>
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
              <Rotate top left>
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
                        {product?.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product?.info}
                      </Typography>
                      <Box className="rating-box">
                        <Typography variant="h6" color="text.secondary">
                          Price: ${product?.price}
                        </Typography>
                        <Typography variant="p">
                          <Stack spacing={1}>
                            <Rating
                              name="half-rating-read"
                              defaultValue={product?.rate}
                              precision={0.5}
                              readOnly
                            />
                          </Stack>
                        </Typography>
                      </Box>

                      <Link to={`/buynow/${product._id}`}>
                        <Typography className="searche-btn" variant="button">
                          Buy Now
                          <ShoppingCartIcon className="searche-icon"></ShoppingCartIcon>
                        </Typography>
                      </Link>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Rotate>
            </Grid>
          ))}
        </Grid>

        <Link style={{ textDecoration: "none" }} to="/allproducts">
          <Button>
            All Products
            <ArrowRightAltIcon></ArrowRightAltIcon>
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Products;
