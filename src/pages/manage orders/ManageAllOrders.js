import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const ManageAllOrders = () => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    fetch("https://infinite-waters-60535.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log("products lentgth", data);
      });
  }, []);
  // console.log("products len", products);

  const handleProductDelete = (id) => {
    const confirm = window.confirm("are you sure?");
    if (confirm) {
      fetch(`https://infinite-waters-60535.herokuapp.com/allproducts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(data);
            alert("successfully delete");
          }
        });
    }
    console.log("delete id", id);
  };
  // our collectio Products delete operation start
  useEffect(() => {
    fetch("https://infinite-waters-60535.herokuapp.com/ourCollection")
      .then((res) => res.json())
      .then((data) => {
        setCollection(data.result);
        // setCollection(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  const handlecollectionDelete = (id) => {
    const confirm = window.confirm("are you sure?");
    if (confirm) {
      fetch(`https://infinite-waters-60535.herokuapp.com/ourCollection/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(data);
            alert("successfully delete");
          }
        });
    }
    console.log("delete id", id);
    console.log("collection id", id);
  };
  console.log("collection", collection);

  return (
    <div>
      <Container>
        <h1>Best Bikes</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {products?.map((product, index) => (
              <Grid key={index} item xs={12} md={3} sm={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={product.image}
                  />
                  <CardContent>{product.name}</CardContent>
                  <CardActions>
                    <Button
                      onClick={() => handleProductDelete(product._id)}
                      size="small"
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <h1>Our Collectio Product Manage</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {collection?.map((collect, index) => (
              <Grid key={index} item xs={12} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={collect.image}
                  />
                  <CardContent>{collect.name}</CardContent>
                  <CardActions>
                    <Button
                      onClick={() => handlecollectionDelete(collect._id)}
                      size="small"
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ManageAllOrders;
