import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import "./login.css";
import { Link } from "react-router-dom";
import useAuth from "./../../hooks/useAuth/useAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const {
    loginWithGoogle,
    setUser,
    setLoader,
    user,
    setError,
    loginWithEmailAndPass,
    saveUser,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/";
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    loginWithEmailAndPass(data.email, data.password);
    // console.log(data);
    history.push(redirect);
    reset();
  };

  console.log("login user", user);
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        const email = user.email;
        const displayName = user.displayName;
        saveUser(user.email, user.displayName, "PUT");

        console.log("user,display name", user, displayName);
        setUser(user);

        history.push(redirect);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setLoader(false);
      });
  };
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
            onClick={handleGoogleLogin}
            style={{ cursor: "pointer", color: "#EC5C91", fontSize: "50px" }}
          ></GoogleIcon>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
