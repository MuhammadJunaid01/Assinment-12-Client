import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import "./login.css";
import useFirebase from "./../../firebase/useFirebase/useFirebase";
import { Link } from "react-router-dom";
const Login = () => {
  const { loginWithGoogle, user, loginWithEmailAndPass } = useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    loginWithEmailAndPass(data.email, data.password);
    console.log(data);
    reset();
  };
  console.log("login user", user);
  return (
    <Container>
      <Box className="loginContainer-box">
        <Typography variant="h4">Please! Login.</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="inputForm"
            type="email"
            {...register("email")}
            placeholder="Enter Your Email:"
          />
          <input
            className="inputForm"
            type="password"
            {...register("password")}
            placeholder="Enter Your PassWord:"
          />

          <input className="login-btn" type="submit" />
        </form>
        <Link to="/regester">
          <Typography variant="p">Are You New User?</Typography>
        </Link>
        <Typography style={{ marginTop: "20px" }} variant="h5">
          Login Google <br />
          <GoogleIcon
            onClick={loginWithGoogle}
            style={{ cursor: "pointer", color: "#EC5C91", fontSize: "50px" }}
          ></GoogleIcon>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
