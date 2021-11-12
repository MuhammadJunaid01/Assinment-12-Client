import React, { useState } from "react";
import "./admin.css";
const MakeAnAdmin = () => {
  const [email, setEmail] = useState("");
  const handleMakeAdmin = (e) => {
    const user = { email };
    console.log("user", user);
    // e.preventDefault();
    fetch("http://localhost:5000/admin", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  //   console.log("email", email);
  return (
    <div className="adminContainer">
      <h1>make an admin</h1>
      <form>
        <input
          onBlur={handleEmail}
          type="email"
          placeholder="Enter Your Email:"
        />
        <input onClick={handleMakeAdmin} type="button" value="Submit" />
      </form>
    </div>
  );
};

export default MakeAnAdmin;
