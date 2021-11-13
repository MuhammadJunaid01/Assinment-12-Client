import React from "react";
import { useForm } from "react-hook-form";
import "./addAProduct.css";
const AddAProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://infinite-waters-60535.herokuapp.com/ourCollection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          alert("successfully Added");
          reset();
        }
      });
    console.log(data);
  };

  return (
    <div className="addProductContainer">
      <h1>hello add a product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="addProductInput"
          type="text"
          required
          {...register("name")}
          placeholder="Enter Product Name"
        />
        <input
          className="addProductInput"
          type="text"
          required
          {...register("info")}
          placeholder="Enter Product info"
        />
        <input
          className="addProductInput"
          type="number"
          required
          {...register("rate")}
          placeholder="Enter Rating: 0-5"
        />
        <input
          className="addProductInput"
          type="number"
          {...register("price")}
          placeholder="Enter Product Price"
        />
        <input
          className="addProductInput"
          type="text"
          {...register("image")}
          placeholder="Enter Your image Url"
        />
        <input className="addProductInputButton" type="submit" />
      </form>
    </div>
  );
};

export default AddAProduct;
