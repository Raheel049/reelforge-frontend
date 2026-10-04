import api from "../../api/client";
import React, { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const inputValue = (e) => {
    const activeField = e.target.name;
    const value = e.target.value;

    setUser((preUser) => ({
      ...preUser,
      [activeField]: value,
    }));
  };

  const signUpHandler = async () => {
    await api.post("/auth/signup", user)
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={inputValue}
        value={user.name}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Enter your Phone No "
        onChange={inputValue}
        value={user.phoneNumber}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={inputValue}
        value={user.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your Password"
        onChange={inputValue}
        value={user.password}
      />

      <button onClick={signUpHandler}>SignUp</button>
    </div>
  );
};

export default SignUp;
