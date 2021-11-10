import React from "react";
import useAuth from "./../hooks/useAuth/useAuth";
import { Route, Redirect } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loader } = useAuth();
  console.log("private", loader);
  return loader ? (
    <Typography style={{ textAlign: "center" }} variant="h1">
      <CircularProgress />
    </Typography>
  ) : (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
