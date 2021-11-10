import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import "./buyNow.css";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
const BuyNow = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`https://infinite-waters-60535.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => () => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  console.log("loader", loader);
  return loader ? (
    <Typography style={{ textAlign: "center" }} variant="h3">
      <CircularProgress />
    </Typography>
  ) : (
    <Box className="buynowBox">
      <Container>
        <Typography
          style={{ textAlign: "center", marginBottom: "26px" }}
          variant="h4"
        >
          Add the motorcycle of your choice to the shopping cart
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sm={12}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product?.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product?.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
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
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input className="inputfield" {...register("name")} />
                <input className="inputfield" {...register("address")} />
                <input
                  className="inputfield"
                  type="number"
                  {...register("number")}
                />
                <input type="submit" />
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BuyNow;
