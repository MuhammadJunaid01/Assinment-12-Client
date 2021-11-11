import { Container } from "@mui/material";
import React from "react";
import "./review.css";
import { useForm } from "react-hook-form";
import useAuth from "./../../hooks/useAuth/useAuth";

const CoustomerReview = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://infinite-waters-60535.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added");
          reset();
        }
        console.log(data);
      });
  };

  return (
    <div className="review-container">
      <Container>
        <div className="review-info">
          <h1>Add a Review</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            value={user ? user?.displayName : ""}
            className="inputField"
            {...register("name")}
            required
          />
          <input
            className="inputField"
            {...register("image")}
            placeholder="Your image"
            required
          />
          <input
            className="inputField"
            type="number"
            {...register("star")}
            placeholder="star between 0-5"
            required
          />
          <textarea
            required
            {...register("descri")}
            className="inputField"
          ></textarea>
          <input className="sub-btn" type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default CoustomerReview;
