import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFirebase from "./../../../firebase/useFirebase/useFirebase";

const MyOrder = () => {
  const { user, loader } = useFirebase();
  const [myorder, setMyorder] = useState([]);
  // const [loader, setLoader] = useState(true);
  //   const email = user?.email;
  console.log(user.email);
  useEffect(() => {
    if (user.email) {
      fetch(`http://localhost:5000/myOrder/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyorder(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    }
  }, [user]);
  return (
    <div>
      <Container>
        <h1>hello order page {myorder?.length}</h1>
      </Container>
    </div>
  );
};

export default MyOrder;
