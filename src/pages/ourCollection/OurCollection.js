import React, { useEffect, useState } from "react";

const OurCollection = () => {
  const [collecton, setCollection] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://infinite-waters-60535.herokuapp.com/ourCollection")
      .then((res) => res.json())
      .then((data) => {
        setCollection(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return (
    <div>
      <h1>hello collectio</h1>
    </div>
  );
};

export default OurCollection;
