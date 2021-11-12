import {
  Button,
  Card,
  CardActions,
  CircularProgress,
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./collection.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const OurCollection = () => {
  const [collection, setCollection] = useState([]);
  const [loader, setLoader] = useState(true);
  const [collectionCount, setCollectionCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 4;
  console.log("collection data", collection);
  useEffect(() => {
    fetch(
      `https://infinite-waters-60535.herokuapp.com/ourCollection?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCollection(data.result);
        console.log("collection data", data.result);
        const count = data.count;
        const pageCount = Math.ceil(count / size);
        setCollectionCount(pageCount);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [page]);
  return loader ? (
    <Typography style={{ textAlign: "center", fontSize: "80px" }} variant="h1">
      <CircularProgress />
    </Typography>
  ) : (
    <div className="paginationContainer">
      <Container>
        <div className="collectionInfo">
          <h1>Our new collection</h1>
        </div>
        <Box className="allproducts-boxCont" sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {collection?.map((available) => (
              <Grid key={available?._id} item xs={12} sm={12} md={3} lg={3}>
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
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/purchse/${available?._id}`}
                    >
                      <Button size="small" color="primary">
                        View Details <MoreHorizIcon></MoreHorizIcon>
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <div className="paginationButton">
          {[...Array(collectionCount).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={number === page ? "selected" : "pagiBtn"}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurCollection;
