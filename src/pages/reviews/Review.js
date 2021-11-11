import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Box from "@mui/material/Box";
import "./reviewShow.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://infinite-waters-60535.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  console.log("revie", reviews);
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
  return loader ? (
    <Typography style={{ textAlign: "center", fontSize: "80px" }} variant="h1">
      <CircularProgress />
    </Typography>
  ) : (
    <div>
      <div className="review-info">
        <h4
          className="review-title"
          style={{ fontSize: "20px", marginTop: "0px", marginBottom: "0px" }}
        >
          TESTIMONIALS
        </h4>
        <h1 className="whatsay">What Users Say About Us</h1>
      </div>
      <Box>
        <Carousel>
          {reviews?.map((review, index) => (
            <div key={index} className="review-box">
              <img className="review-img" src={review?.image}></img>
              <h2>{review?.name}</h2>
              <div className="star">
                <Stack className="star-rat" spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={review?.star}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </div>
              <p>{review?.descri}</p>
            </div>
          ))}
        </Carousel>
      </Box>
    </div>
  );
};

export default Review;
