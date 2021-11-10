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
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import useFirebase from "./../../firebase/useFirebase/useFirebase";

const style = {
  position: "absolute",
  top: "59%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const BuyNow = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { id } = useParams();
  const { user } = useFirebase();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const info = {
    name: name,
    address: address,
    phone: phoneNumber,
    email: user?.email,
  };
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`https://infinite-waters-60535.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.status = info;
        setProduct(data);
        console.log("buy data", data);
      })
      .catch((err) => () => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  // console.log("products", product);

  const email = user?.email;
  const placeOrder = () => {
    fetch(`http://localhost:5000/placeOrder`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("added successfully!");
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                  <Button onClick={handleOpen} size="small" color="primary">
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <form action="">
                      <input
                        type="text"
                        onBlur={handleName}
                        style={{
                          width: "100%",
                          color: "black",
                          marginBottom: "11px",
                          padding: "8px 3px",
                        }}
                        id="standard-basic"
                        variant="standard"
                        placeholder="Enter Your Name:"
                      />

                      <input
                        style={{
                          width: "100%",
                          color: "black",
                          marginBottom: "11px",
                          padding: "8px 3px",
                        }}
                        id="standard-basic"
                        value={user?.email}
                        variant="standard"
                      />

                      <input
                        onBlur={handleAddress}
                        style={{
                          width: "100%",
                          color: "black",
                          marginBottom: "11px",
                          padding: "8px 3px",
                        }}
                        id="standard-basic"
                        type="text"
                        variant="standard"
                        placeholder="Enter Your address:"
                      />

                      <input
                        onBlur={handlePhoneNumber}
                        style={{
                          width: "100%",
                          color: "black",
                          marginBottom: "11px",
                          padding: "8px 3px",
                        }}
                        id="standard-basic"
                        type="number"
                        variant="standard"
                        placeholder="Enter Your Phone Number:"
                      />
                    </form>
                    <Typography variant="button">
                      <Button
                        onClick={placeOrder}
                        style={{
                          backgroundColor: "orange",
                          color: "white",
                          padding: "4px 20px",
                        }}
                        size="small"
                        color="primary"
                      >
                        Place Order
                      </Button>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BuyNow;
