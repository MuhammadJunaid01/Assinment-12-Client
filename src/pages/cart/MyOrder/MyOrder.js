import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useAuth from "./../../../hooks/useAuth/useAuth";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
const MyOrder = () => {
  const { user } = useAuth();
  const [myorder, setMyorder] = useState([]);
  const [loader, setLoader] = useState(true);
  console.log("myorder", myorder);
  useEffect(() => {
    if (user.email) {
      fetch(`https://infinite-waters-60535.herokuapp.com/myOrder/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("my order products", data.product);
          setMyorder(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  }, [user]);
  const orderCancel = (id) => {
    const confirm = window.confirm("are you sure?");
    console.log("order canceld", id);
    if (confirm) {
      fetch(`https://infinite-waters-60535.herokuapp.com/myOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("successfully deleted");
          }
          console.log("delete order ", data);
        });
    }
  };
  return loader ? (
    <Typography style={{ textAlign: "center", fontSize: "80px" }} variant="h1">
      <CircularProgress />
    </Typography>
  ) : (
    <div>
      <Container>
        <h1>My Order :{myorder?.length}</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {myorder?.map((order, index) => (
              <Grid key={index} item xs={12} sm={12} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={order?.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => orderCancel(order._id)}
                      >
                        Order Cancel
                      </Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default MyOrder;
