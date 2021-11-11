import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFirebase from "./../../../firebase/useFirebase/useFirebase";

const MyOrder = () => {
  const { user, loader } = useFirebase();
  const [myorder, setMyorder] = useState([]);
  // const [loader, setLoader] = useState(true);
  //   const email = user?.email;
  // console.log("my order", myorder?.product);

  useEffect(() => {
    if (user.email) {
      fetch(`https://infinite-waters-60535.herokuapp.com/myOrder/${user.email}`)
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
        {myorder?.map((uu) => console.log("hello", uu.product))}
      </Container>
    </div>
  );
};

export default MyOrder;
