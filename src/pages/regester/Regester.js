import React, { useState } from "react";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import "./regester.css";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import useFirebase from "./../../firebase/useFirebase/useFirebase";
import { Link } from "react-router-dom";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

const Regester = () => {
  const { regesterWithEmail, error } = useFirebase();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    regesterWithEmail(data.email, data.password);
    reset();
  };
  // console.log("data regester", regesterData);

  return (
    <Container>
      <Box className="regesterdBox-Cont">
        <Typography variant="h4">Please! Regester.</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="regesterFeild"
            type="text"
            {...register("name")}
            placeholder="Enter Your Name:"
          />
          <input
            className="regesterFeild"
            type="text"
            {...register("address")}
            placeholder="Enter Your Address:"
          />
          <input
            className="regesterFeild"
            type="email"
            {...register("email")}
            placeholder="Enter Your Email:"
          />
          <input
            className="regesterFeild"
            type="password"
            {...register("password")}
            placeholder="Type Your Strong Password:"
          />
          <input type="submit" />
        </form>
        <Link to="/login">
          <Typography variant="p">Are You Already Regesterd?</Typography>
        </Link>
        {error && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">
              <AlertTitle>{error}</AlertTitle>
              This is an error alert — <strong>check it out!</strong>
            </Alert>
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default Regester;
