import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import "./allproducts.css";
const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://infinite-waters-60535.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => () => {
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
    <Container>
      <Box style={{ padding: "50px 0px" }}>
        <Typography
          style={{ textAlign: "center", margin: "20px 0px" }}
          variant="h3"
        >
          available products in our shop
        </Typography>
        <Box className="allproducts-boxCont" sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {allProducts?.map((available) => (
              <Grid key={available?._id} item xs={12} sm={12} md={3}>
                <Card style={{ height: "440px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={available?.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {available?.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {available?.info}
                      </Typography>
                      <Box className="allproductsrating-box">
                        <Typography variant="p" color="text.secondary">
                          Price: ${available?.price}
                        </Typography>
                        <Typography variant="p">
                          <Stack spacing={1}>
                            <Rating
                              name="half-rating-read"
                              defaultValue={available?.rate}
                              precision={0.5}
                              readOnly
                            />
                          </Stack>
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AllProducts;
