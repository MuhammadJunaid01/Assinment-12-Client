import React, { useState } from "react";
import "./admin.css";
const MakeAnAdmin = () => {
  const [email, setEmail] = useState("");
  const handleMakeAdmin = (e) => {
    const user = { email };
    console.log("user", user);
    // e.preventDefault();
    fetch("https://infinite-waters-60535.herokuapp.com/admin", {
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
          style={{ padding: "8px", width: "30%", borderRadius: "15px" }}
          onBlur={handleEmail}
          required
          type="email"
          placeholder="Enter Your Email:"
        />
        <input
          style={{ padding: "8px" }}
          onClick={handleMakeAdmin}
          type="button"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default MakeAnAdmin;
